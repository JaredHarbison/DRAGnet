class Queen < ApplicationRecord
    has_many :trivia, dependent: :destroy
    has_many :quotes, dependent: :destroy
    has_many :appearances
    has_many :seasons, through: :appearances
    accepts_nested_attributes_for :trivia, :quotes, :seasons, :appearances

    def get_queens
      index_url = "https://rupaulsdragrace.fandom.com/wiki/Category:Queens"
      index_doc = Nokogiri::HTML(open(index_url))
      queen_list = index_doc.css('.tabber').last.css('.thumbimage')
      queen_index = queen_list.select.with_index {|_, i| i.even?}
      queen_index[1..185].each do |queen|
        I18n.enforce_available_locales = false
        queen_text = "https://rupaulsdragrace.fandom.com/wiki/#{queen.attr("title")}"
        queen_url = I18n.transliterate(queen_text).split(' ').join('_').gsub(/\(.+/, '')
        queen_doc = Nokogiri::HTML(open(queen_url))
        queen_seasons = queen_doc.xpath('//*[@data-source="Season"]/div[@class="pi-data-value pi-font"]/a').map { |e| e.text.gsub(/[^0-9a-z%&!\n\/(). ]/i, '') } 
        queen_drag_name ||= queen_doc.css("#mw-content-text > aside > section:nth-child(3) > div:nth-child(2) > div").text.gsub(/[^0-9a-z%&!\n\/(). ]/i, '')
        queen_real_name ||= queen_doc.css("#mw-content-text > aside > section:nth-child(3) > div:nth-child(3) > div").text.split(' ').join(' ')
        queen_primary_image = queen_doc.css('#mw-content-text > aside > figure > a').attribute('href') || queen_doc.css('#pi-tab-0 > figure > a > img').attribute('src')
        queen_date_of_birth = queen_doc.xpath('//*[@data-source="birth year"]/div[@class="pi-data-value pi-font"]/text()').text[0..-3]
        queen_ethnicity = queen_doc.xpath('//*[@data-source="Ethnicity"]/div[@class="pi-data-value pi-font"]/text()').map { |e| e.text.split(' ').join(' ').gsub(/[^0-9a-z%&!\n\/(). ]/i, '') }
        variable_queen_birthplace = queen_doc.xpath('//*[@data-source="Birthplace"]/div[@class="pi-data-value pi-font"]/text()').text
        variable_queen_hometown = queen_doc.xpath('//*[@data-source="Hometown"]/div[@class="pi-data-value pi-font"]/text()').text
        queen_hometown = variable_queen_birthplace + variable_queen_hometown
        queen_current_city = queen_doc.xpath('//*[@data-source="Current City"]/div[@class="pi-data-value pi-font"]/text()').text
        queen_instagram = queen_doc.xpath('//a[text()="Instagram"]').attribute('href')
        queen_twitter = queen_doc.xpath('//a[text()="Twitter"]').attribute('href')
        queen_facebook = queen_doc.xpath('//a[text()="Facebook"]').attribute('href')
        queen_youtube = queen_doc.xpath('//a[text()="YouTube"]').attribute('href')
        variable_queen_site = queen_doc.xpath('//a[text()="Site"]').attribute('href')
        variable_queen_official_site = queen_doc.xpath('//a[text()="Official Website"]').attribute('href')
        queen_website = variable_queen_site ? variable_queen_site : variable_queen_official_site
        queen_imdb = queen_doc.xpath('//a[text()="IMDB Page"]').attribute('href')
        queen_wikipedia = queen_doc.xpath('//a[text()="Wikipedia"]').attribute('href')
        queen_trivia = queen_doc.xpath('//*[preceding::*[@id="Trivia"] and following::*[@id="Gallery"]]//following-sibling::li').map { |e| e.text.split(' ').join(' ').gsub(/[^0-9a-z%&!\n\/(). ]/i, '') }
        variable_fandom_quotes = queen_doc.xpath('//*[preceding::*[@id="Quotes"] and following::*[@id="Trivia"]]//following-sibling::li').map { |e| e.text.gsub(/[^0-9a-z%&!\n\/(). ]/i, '') } 
        variable_memorable_quotes = queen_doc.xpath('//*[preceding::*[@id="Memorable_Quotes"] and following::*[@id="Trivia"]]//following-sibling::li').map { |e| e.text.gsub(/[^0-9a-z%&!\n\/(). ]/i, '') } 
        variable_memorable_quotes_C2A0 = queen_doc.xpath('//*[preceding::*[@id="Memorable_Quotes.C2.A0"] and following::*[@id="Trivia"]]//following-sibling::li').map { |e| e.text.gsub(/[^0-9a-z%&!\n\/(). ]/i, '') } 
        queen_quotes = variable_fandom_quotes + variable_memorable_quotes + variable_memorable_quotes_C2A0  
        Queen.create!(drag_name: queen_drag_name,
                    real_name: queen_real_name,
                    primary_image: queen_primary_image,
                    date_of_birth: queen_date_of_birth,
                    hometown: queen_hometown,
                    current_city: queen_current_city,
                    ethnicity: queen_ethnicity,
                    instagram: queen_instagram,
                    twitter: queen_twitter,
                    facebook: queen_facebook,
                    youtube: queen_youtube,
                    website: queen_website,
                    imdb: queen_imdb, 
                    wikipedia: queen_wikipedia,
                    trivia_attributes: queen_trivia.map {|trivium| {content: trivium}},
                    quotes_attributes: queen_quotes.map {|quote| {content: quote}}, 
                    appearances_attributes: [season_id: Season.find_by(season_name: queen_seasons[0]).id],
                    #queen_seasons.map {|season| Appearance.create!(season_id: Season.find_by(season_name: season))}
                  )
        end
    end
end





#queen_seasons.map {|season| Appearance.create season_id: }
#queen_trivia.each do |trivium|
#  Queen.create!(trivia_attributes: [content: trivium])
#end 
#Queen.create!(queen_trivia.each {|trivium| {trivia_attributes: [content: trivium]}}) #### "...you must pass a hash as an argument"
#queen_trivia.each do |trivium| 
#  {trivia_attributes: [content: trivium]}
#end
#queen_trivia.each {|trivium| {trivia_attributes: [content : trivium]}} #### "...you must pass a hash as an argument"
#queen_trivia.first.each do |trivium| 
#  {trivia_attributes: [content: trivium]}
#end  #### "...you must pass a hash as an argument"
#trivia_attributes: [content: queen_trivia.first(10)]
#queen_trivia.each {|trivium| trivia_attributes: [content: trivium]} #### "unexpected : expecting }"
#trivia_attributes: queen_trivia.each {|trivium| [content: trivium]} #### "no implicit conversion of symbol into integer"
#trivia_attributes: [content: queen_trivia.each {|trivium| trivium}] #### just populates into one trivium id
#queen_trivia.each {|content| trivia_attributes: [content: content]}