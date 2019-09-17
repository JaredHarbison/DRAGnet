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
    
    seasons_list.each {|season| Season.create!(season_name: season)}
#### define an array of urls for each season, distinguishing between the original series and All Stars
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
#### iterate through the season urls to open each one with Nokogiri
    seasons_urls.map.with_index do |season, index|
      season_doc = Nokogiri::HTML(open(season))
      season_id = index + 1 
#### scrape the seasons's episode header row and reject any empty cells
      table_headers = season_doc.xpath('//*[@class="wikitable"]//following-sibling::th').map {|episode| episode.text}
      
      find_contestants_column = table_headers.map.with_index do |header, index| 
        header.starts_with?(" Contest" || "Contest")
      end 

      contestants_column_index = find_contestants_column.find_index(true)
      two_contestants_column_index = contestants_column_index + 1
      three_contestants_column_index = two_contestants_column_index.to_s

      

      contestants_column_xpath = '//*[@id="mw-content-text"]//td['+ three_contestants_column_index +']/b/a'

      episode_number_headers = table_headers.map do |episode| 
        if episode.starts_with?("Ep. ", " Ep.")
          episode.gsub(/[^0-9]/, '')
        else 
          episode = ""
        end 
      end 
      
      episode_numbers = episode_number_headers.reject {|episode| episode.blank?} #.gsub(/[^0-9]/, '')
#### create a unique episode identiefier (i.e. S4E10) to avoid future collisions
#### !!!! would like to add leading 0s when necessary 
      season_episodes_codes = episode_numbers.map {|episode| "S" + season_id.to_s + "E" + episode.to_s}
#### scrape the contestants list to store in the episode object for easier appearance creation
#### !!!! find the column with a header word that starts with "contest", return the index, and use the index to find the contestants
      season_contestants = season_doc.xpath(contestants_column_xpath).map {|header| header.text.downcase}
      
      #season_contestants = season_doc.xpath('//*[@id="mw-content-text"]/div/table[3]/tbody/tr/td[1]/b').map {|contestant| contestant.text.downcase}
#### iterate through the episodes array to create each Episode
      episode_numbers.map.with_index do |episode, index|
        Episode.create(
          season_id: season_id, 
          episode_name: episode,
          episode_code: season_episodes_codes[index],
          contestants: season_contestants 
        )
      end 
    end 
  end
end
