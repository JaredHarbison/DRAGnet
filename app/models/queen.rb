class Queen < ApplicationRecord
    has_many :trivia, dependent: :destroy
    accepts_nested_attributes_for :trivia

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
        queen_drag_name ||= queen_doc.css("#mw-content-text > aside > section:nth-child(3) > div:nth-child(2) > div").text.gsub(/[^0-9a-z%&!\n\/(). ]/i, '')
        queen_real_name ||= queen_doc.css("#mw-content-text > aside > section:nth-child(3) > div:nth-child(3) > div").text.split(' ').join(' ')
        queen_primary_image = queen_doc.css('#mw-content-text > aside > figure > a').attribute('href') || queen_doc.css('#pi-tab-0 > figure > a > img').attribute('src')
        queen_instagram = queen_doc.xpath('//a[text()="Instagram"]').attribute('href')
        queen_twitter = queen_doc.xpath('//a[text()="Twitter"]').attribute('href')
        queen_facebook = queen_doc.xpath('//a[text()="Facebook"]').attribute('href')
        queen_youtube = queen_doc.xpath('//a[text()="YouTube"]').attribute('href')
        queen_site = queen_doc.xpath('//a[text()="Site"]').attribute('href')
        queen_imdb = queen_doc.xpath('//a[text()="IMDB Page"]').attribute('href')
        Queen.create!(drag_name: queen_drag_name,
                    real_name: queen_real_name,
                    primary_image: queen_primary_image,
                    instagram: queen_instagram,
                    twitter: queen_twitter,
                    facebook: queen_facebook,
                    youtube: queen_youtube,
                    site: queen_site,
                    imdb: queen_imdb)
                  end
                end
    end
