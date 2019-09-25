class Season < ApplicationRecord
  has_many :episodes
  accepts_nested_attributes_for :episodes


  def get_seasons 
    I18n.enforce_available_locales = false 
#### define the location of the season index and open it with Nokogiri
    seasons_index_url = "https://rupaulsdragrace.fandom.com/wiki/Category:Seasons"
    seasons_index_doc = Nokogiri::HTML(open(seasons_index_url))
#### define an array of season names and instantiate an object for each name
    seasons_list = seasons_index_doc.xpath('//td[1]/a[1]').map {|season| season.text}
#### define an array of urls for each season, distinguishing between the two series
    seasons_urls = seasons_list.map do |season| 
      if season.starts_with?("All Stars")
#### remove the numbers from the end of the season name to concatenate them into the url
        all_stars_season = season[-1, 1]
        season_url = "https://rupaulsdragrace.fandom.com/wiki/RuPaul%27s_Drag_Race_All_Stars_(Season_#{all_stars_season})"
      else 
        if season.length > 8
          rpdr_season = season[-2, 2]
        else 
          rpdr_season = season[-1, 1]
        end 
        season_url = "https://rupaulsdragrace.fandom.com/wiki/RuPaul%27s_Drag_Race_(Season_#{rpdr_season})"
      end 
    end 
    
    seasons_list.each.with_index do |season, index| 
      Season.create!(
        season_name: season, 
        fandom_season_url: seasons_urls[index]
      )
    end 
#### iterate through the season urls to open each one with Nokogiri and predict the season ids
    seasons_urls.map.with_index do |season, index|
      season_doc = Nokogiri::HTML(open(season))
      season_id = index + 1 
      season_premiere = season_doc.xpath('//*[@data-source="premiere"]/div[@class="pi-data-value pi-font"]/text()').text
      season_finale = season_doc.xpath('//*[@data-source="finale"]/div[@class="pi-data-value pi-font"]/text()').text
      season_judges = season_doc.xpath('//*[@data-source="judges"]/div[@class="pi-data-value pi-font"]/a/text()').map {|judge| judge.text}
      
#### scrape the seasons's episode header row from the progress table and reject any empty cells
      table_headers = season_doc.xpath('//*[@class="wikitable"]//following-sibling::th').map {|episode| episode.text}
#### find the contestants column, identify the index integer, then add 1 and turn it into a string to prepare for xPath
      find_contestants_column = table_headers.map.with_index do |header, index| 
        header.starts_with?(" Contest" || "Contest")
      end 
      contestants_column_index = find_contestants_column.find_index(true)
      contestants_column_number = contestants_column_index + 1
      contestants_column_number_string = contestants_column_number.to_s
#### concatenate the column index into the xPath string and pull the contestants from the column
      contestants_column_xpath = '//*[@id="mw-content-text"]//td[' + contestants_column_number_string + ']/b/a'
#### !!!! need to def contestants_ranks and add them to each contestant in the season_contestants array
      season_contestants = season_doc.xpath(contestants_column_xpath).map {|header| header.text.gsub(/[^0-9a-z%&!\n\/(). ]/i, '').strip}
      #### find the episode title column, identify the index integer, then add 1 and turn it into a string to prepare for xPath
      episodes_table_headers = season_doc.xpath('//center/table[@class="wikitable"]//th').map {|episode| episode.text}
      find_episode_title_column = episodes_table_headers.map.with_index do |header, index| 
        header.starts_with?("Title", " Episode Title")# || header.starts_with?("Episode Title")
      end 
      
      title_column_index = find_episode_title_column.find_index(true)
      title_column_number = title_column_index.to_i + 1
      title_column_number_string = title_column_number.to_s 
      
      title_column_xpath = '//center/table[@class="wikitable"]//td[' + title_column_number_string + ']'
#### pull the episode titles row into an array and reject the blanks
      episode_titles_row = season_doc.xpath(title_column_xpath).map {|header| header.text}
      episode_titles = episode_titles_row.reject {|episode| episode.blank?}
      
#### iterate through the headers to find the episode columns, pull the episode number, then reject any blanks
      episode_number_headers = table_headers.map do |episode| 
        if episode.starts_with?("Ep. ", " Ep.")
          episode.gsub(/[^0-9]/, '')
        else 
          episode = ""
        end 
      end 

      #'//*[preceding::*[@id="mw-content-text"]/div[4]/div[1]/table/tbody/tr[2] and following::*[@id="mw-content-text"]/div[4]/div[1]/table/tbody/tr[2]]//following-sibling::td'
      #//*[@id="mw-content-text"]/div[4]/div[1]/table/tbody/tr[3]/td[3]

      episode_indices = episode_number_headers.map.with_index {|header, index| header.to_i >= 1 ? index : ""}
      episode_indices.reject! {|x| x.blank?}
      episode_indices_range = episode_indices.first..episode_indices.last #will need .to_s
      row_numbers = season_contestants.map.with_index {|cont, index| index + 2}
      row_lookups = row_numbers.map do |row| 
        '//*[@class="wikitable"]//following-sibling::tr['+row.to_s+']/td'
      end 
      deez_lookups = row_lookups.map do |lookup| 
        season_doc.xpath(lookup).map {|el| el.text.squish}
      end 
      deez_ranks = deez_lookups.map do |lookup| 
        lookup[episode_indices_range]
      end 

      final_ranks = deez_ranks.map do |ranks|
        ranks.map do |rank|
          if rank.include?("WINNER") 
            final_ranks = 10
          elsif rank.include?("RUNUP" || "LOST") 
            final_ranks = 9
          elsif rank.include?("MISSCON") 
            final_ranks = 8
          elsif rank.include?("WIN") 
            final_ranks = 7
          elsif rank.include?("HIGH") 
            final_ranks = 6
          elsif rank.include?("TOP") 
            final_ranks = 5
          elsif rank.include?("SAFE"|| "RUNNING") 
            final_ranks = 4
          elsif rank.include?("LOW") 
            final_ranks = 3
          elsif rank.include?("BTM") 
            final_ranks = 2
          elsif rank.include?("ELIM" || "OUT" || "JUROR" || "RTRN") 
            final_ranks = 1
          else 
            final_ranks = 0
          end 
        end 
      end 
      season_contestants = season_contestants.zip(final_ranks)

      episode_numbers = episode_number_headers.reject {|episode| episode.blank?} #.gsub(/[^0-9]/, '')
#### create unique episode keys of the same length (i.e. S04E10) to avoid future collisions
      season_episodes_codes = episode_numbers.map do |episode| 
        if season_id.to_s.length < 2 && episode.to_s.length < 2
          "S0" + season_id.to_s + "E0" + episode.to_s 
        elsif season_id.to_s.length < 2 && episode.to_s.length == 2
          "S0" + season_id.to_s + "E" + episode.to_s 
        elsif season_id.to_s.length == 2 && episode.to_s.length < 2
          "S" + season_id.to_s + "E0" + episode.to_s.to_s 
        else 
          "S" + season_id.to_s + "E" + episode.to_s 
        end
      end 
      #episode_air_date = 
      #maxi_challenge = 
      #maxi_challenge_winner = 
      #mini_challenge = 
      #mini_challenge_winner = 
      #guest_judges = 
      #lip_sync_song = 
#### iterate through the episodes array to create each Episode
      episode_numbers.map.with_index do |episode, index|
        Episode.create(
          season_id: season_id, 
          episode_name: episode_titles[index],
          episode_code: season_episodes_codes[index],
          contestants: season_contestants 
        )
      end 
    end 
  end
end
