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
        #season_url = "https://en.wikipedia.org/wiki/RuPaul%27s_Drag_Race_All_Stars_(season_#{all_stars_season})"
      else 
        if season.length > 8
          rpdr_season = season[-2, 2]
        else 
          rpdr_season = season[-1, 1]
        end 
        season_url = "https://rupaulsdragrace.fandom.com/wiki/RuPaul%27s_Drag_Race_(Season_#{rpdr_season})"
        #season_url = "https://en.wikipedia.org/wiki/RuPaul%27s_Drag_Race_(season_#{rpdr_season})"
      end 
    end 
    
#### iterate through the season urls to open each one with Nokogiri
    seasons_urls.map.with_index do |season, index|
      season_doc = Nokogiri::HTML(open(season))
      season_id = index + 1 
#### scrape the seasons's episode header row and reject any empty cells
      ##mw-content-text > div.table-wrapper.table-is-wide > div.table-scrollable > table > tbody > tr:nth-child(1)
      #//*[@id="mw-content-text"]/div[4]/div[1]/table/tbody/tr[1]   
      #'//*[preceding::*[@class="wikitable"] and following::tr]//following-sibling::th'
      firstdraft_season_episodes = season_doc.xpath('//*[@class="wikitable"]//following-sibling::th').map {|episode| episode.text}
      #season_episodes = season_doc.xpath('//*[@id="mw-content-text"]/div/table[3]/tbody/tr[1]/th/text() | //*[@id="mw-content-text"]/div/table[3]/tbody/tr[1]/th/b/text()').map {|episode| episode.text}
      seconddraft_season_episodes = firstdraft_season_episodes.map do |episode| 
        if episode.starts_with?("Ep. ", " Ep.")
          episode.gsub(/[^0-9]/, '')
        else 
          episode = ""
        end 
      end 
      thirddraft_season_episodes = seconddraft_season_episodes.reject {|episode| episode.blank?} #.gsub(/[^0-9]/, '')
      #### create a unique episode identiefier (i.e. S4E10) to avoid future collisions
#### !!!! would like to add leading 0s when necessary 
      season_episodes_codes = thirddraft_season_episodes.map {|episode| "S" + season_id.to_s + "E" + episode.to_s}
#### scrape the contestants list to store in the episode object for easier appearance creation
#### !!!! find the column with a header word that starts with "contest", return the index, and use the index to find the contestants
      #^^^^'//*[preceding::*[@class="wikitable"] and following::*[@class="wikitable"]]//following-sibling::th'
      #^^^^'//*[@class="wikitable"]//tr[1]/th'
      #XXXX'//*[@class="table-scrollable"]/*[@class="wikitable"]/table/tbody/tr/th'
      #season_contestants_column_index = season_doc.xpath('//*[@id="mw-content-text"]/div[4]/div[1]/table/tbody/tr[1]//th').map {|header| header.text}
      byebug
      #season_contestants = season_doc.xpath('//*[@id="mw-content-text"]/div/table[3]/tbody/tr/td[1]/b').map {|contestant| contestant.text.downcase}
#### iterate through the episodes array to create each Episode
      thirddraft_season_episodes.map.with_index do |episode, index|
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
