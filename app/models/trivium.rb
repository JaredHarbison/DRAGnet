class Trivium < ApplicationRecord
    belongs_to :queen 

    ####    XXXX    scrape lis into an array of queen_trivia content
    ####    ????    scrape more precisely w/o missing inner href text
    ####    ????    find the id of the queen for create!
    ####    ????    create each trivium 
    ####    XXXX    why is this creating two of each ??????????

    def get_trivia 
        index_url = "https://rupaulsdragrace.fandom.com/wiki/Category:Queens"
        index_doc = Nokogiri::HTML(open(index_url))
        queen_list = index_doc.css('.tabber').last.css('.thumbimage')
        queen_index = queen_list.select.with_index {|_, i| i.even?}
        queen_index[1..2].each do |queen, i|
          I18n.enforce_available_locales = false
          queen_text = "https://rupaulsdragrace.fandom.com/wiki/#{queen.attr("title")}"
          queen_url = I18n.transliterate(queen_text).split(' ').join('_').gsub(/\(.+/, '')
          queen_doc = Nokogiri::HTML(open(queen_url))
          queen_trivia = queen_doc.xpath('//*[@id="Trivia"]/following::*/li').map { |e| e.text.gsub(/[^0-9a-z%&!\n\/(). ]/i, '') }
          queen_trivia.each do |content| 
            Trivium.create!(queen_id: "1", 
                         content: content)
          end 
        
        end 
      end

end
