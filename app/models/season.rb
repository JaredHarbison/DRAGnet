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
        all_stars_season = season[-1, 1]
        season_url = "https://en.wikipedia.org/wiki/RuPaul%27s_Drag_Race_All_Stars_(season_#{all_stars_season})"
      else 
        if season.length > 8
          rpdr_season = season[-2, 2]
        else 
          rpdr_season = season[-1, 1]
        end 
        season_url = "https://en.wikipedia.org/wiki/RuPaul%27s_Drag_Race_(season_#{rpdr_season})"
      end 
    end 
#### iterate through the urls to update each Season with the appropriate attributes
    seasons_urls.map.with_index do |season, index|
      season_doc = Nokogiri::HTML(open(season))
      season_id = index + 1 
      season_episodes = season_doc.xpath('//*[@id="mw-content-text"]/div/table[3]/tbody/tr[1]/th/text() | //*[@id="mw-content-text"]/div/table[3]/tbody/tr[1]/th/b/text()').map {|episode| episode.text}
      season_episodes = season_episodes.reject {|episode| episode.length > 3 || episode.blank?}
      season_episodes_codes = season_episodes.map {|episode| "S" + season_id.to_s + "E" + episode.to_s}
      season_contestants = season_doc.xpath('//*[@id="mw-content-text"]/div/table[3]/tbody/tr/td[1]/b').map {|contestant| contestant.text.downcase}
      season_episodes.map.with_index do |episode, index|
        Episode.create(
          season_id: season_id, 
          episode_name: episode,
          episode_code: season_episodes_codes[index]
        )
      end 
    end 
  end
end
