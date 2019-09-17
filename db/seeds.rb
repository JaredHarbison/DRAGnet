#Season.create!(
#    season_name: "Season 1",
#)#1
#Season.create!(
#    season_name: "Season 2",
#)#2
#Season.create!(
#    season_name: "Season 3",
#)#3
#Season.create!(
#    season_name: "Season 4",
#)#4
#Season.create!(
#    season_name: "All Stars 1",
#)#5
#Season.create!(
#    season_name: "Season 5",
#)#6
#Season.create!(
#    season_name: "Season 6",
#)#7
#Season.create!(
#    season_name: "Season 7",
#)#8
#Season.create!(
#    season_name: "Season 8",
#)#9
#Season.create!(
#    season_name: "All Stars 2",
#)#10
#Season.create!(
#    season_name: "Season 9",
#)#11
#Season.create!(
#    season_name: "All Stars 3",
#)#12
#Season.create!(
#    season_name: "Season 10",
#)#13
#Season.create!(
#    season_name: "All Stars 4",
#)#14
#Season.create!(
#    season_name: "Season 11",
#)#15

Season.new.get_seasons 
Queen.new.get_queens
Appearance.new.get_appearances

#duplicate_queens = 
#    [
#        50, 55, 56, 139, 26, 48, 49, 58, 118, 140, 141, 51, 52, 54, 57, 166, 
#        47, 53, 119, 165, 113, 114, 116, 117, 122, 121, 142, 145, 168, 115, 120, 
#        137, 138, 170, 132, 144, 146, 164, 143, 148, 162, 167, 169, 161, 163, 175
#    ]
#
#Queen.destroy(duplicate_queens)
#
#Appearance.create!(queen_id: 20, season_id: 3) # Shangela Season 3
#Appearance.create!(queen_id: 110, season_id: 10) # Cynthia Lee Fontaine Season 9
#Appearance.create!(queen_id: 133, season_id: 13) # Eureka O'Hara Season 10
#Appearance.create!(queen_id: 160, season_id: 15) # Vanessa Vanjie Mateo Season 11
#
#all_stars_one = #5
#    [
#        35, 10, 11, 3, 23, 24, 22, 37, 1, 7, 13, 31
#    ]
#
#all_stars_one.map {|asq| Appearance.create!(queen_id: asq, season_id: 5)}
#
#all_stars_two = #10
#    [
#        60, 91, 62, 61, 64, 36, 12, 88, 74, 63, 
#    ]
#
#all_stars_two.map {|asq| Appearance.create!(queen_id: asq, season_id: 10)}
#
#all_stars_three = #12
#    [
#        92, 90, 20, 16, 77, 104, 131, 81, 106
#    ]
#
#all_stars_three.map {|asq| Appearance.create!(queen_id: asq, season_id: 12)}
#
#all_stars_four = #14
#    [
#        152, 126, 154, 103, 22, 37, 82, 129, 130, 98
#    ]
#
#all_stars_four.map {|asq| Appearance.create!(queen_id: asq, season_id: 14)}
#
#

#Queen.create!(
#    drag_name: "Alyssa Edwards",
#    real_name: "Justin Dewayne Lee Johnson",
#    primary_image: "https://vignette.wikia.nocookie.net/logosrupaulsdragrace/images/e/ef/AlyssaAS2.jpg/revision/latest/scale-to-width-down/350?cb=20160617131459",
#    date_of_birth: "1980/01/16",
#    hometown: "Mesquite, Texas",
#    current_city: "Dallas, Texas",
#    ethnicity: "Caucasion-Venezuelan",
#    instagram: "https://www.photostags.com/user/alyssaedwards_1",
#    twitter: "https://twitter.com/AlyssaEdwards_1",
#    facebook: "https://en-gb.facebook.com/QueenAlyssaEdwards/",
#    youtube: "https://www.youtube.com/channel/UCk2F1g62KkGZhl96gF8mnpw",
#    site: "",
#    imdb: "", 
#    trivia_attributes: [
#        {content: "Johnson owns his own dance studio, Beyond Belief, located in Mesquite, Texas."}, 
#        {content: "Alyssa is not only kown for her quotes, but also for the faces she makes in the mirror."}
#    ], 
#    quotes_attributes: [
#        {content: "BEAST!"}, 
#        {content: "BACKROLLS?!?!"}
#    ], 
#    appearances_attributes: [
#        {season_id: 1}, 
#        {season_id: 10}
#    ]
#)
#Queen.create!(
#    drag_name: "Valentina",
#    real_name: "James Andrew Leyva",
#    primary_image: "https://vignette.wikia.nocookie.net/logosrupaulsdragrace/images/1/1d/Valentina2AS4.jpg/revision/latest?cb=20190207032427",
#    date_of_birth: "1991/05/14",
#    hometown: "Echo Park, California",
#    current_city: "Los Angeles, California",
#    ethnicity: "Mexican-American",
#    instagram: "https://www.instagram.com/allaboutvalentina/?hl=en",
#    twitter: "https://twitter.com/allofvalentina?lang=en",
#    facebook: "https://www.facebook.com/AllAboutValentina/",
#    youtube: "",
#    site: "https://www.allaboutvalentina.com/",
#    imdb: "https://m.imdb.com/name/nm8766505/", 
#    trivia_attributes: [
#        {content: "She was featured on the 24th Cycle of 'America's Next Top Model', as well as on Vogue Magazine, and is on the cast of 'RENT: Live'"}, 
#        {content: "Like Farrah Moan's and Nina Bo'nina Brown's, her elimination was leaked online prior to the episode airing"}
#    ], 
#    quotes_attributes: [
#        {content: "Hello, it's me, Valentina!"}, 
#        {content: "Ladies I'm boiling, my blood is simmering through my veins and I have some things to say, okay? I am DEEPLY and UTTERLY offended, that judge with the bun and the gold, I do not appreciate her non-constructive criticism of my beautiful outfit."}
#    ], 
#    appearances_attributes: [
#        {season_id: 11}, 
#        {season_id: 14}
#    ]
#)
#Queen.create!(
#    drag_name: "Bob The Drag Queen",
#    real_name: "Christopher Caldwell",
#    primary_image: "https://vignette.wikia.nocookie.net/logosrupaulsdragrace/images/0/0d/BobFullS8.jpg/revision/latest?cb=20180622041118",
#    date_of_birth: "1986/06/22",
#    hometown: "Columbus, Georgia",
#    current_city: "New York, New York",
#    ethnicity: "African-American",
#    instagram: "https://www.instagram.com/bobthedragqueen/",
#    twitter: "https://twitter.com/thatonequeen",
#    facebook: "https://www.facebook.com/officialbobthedragqueen/",
#    youtube: "https://m.youtube.com/channel/UCi7cIUhc2tuAf6_3FrKgcfg",
#    site: "https://www.bobthedragqueen.com/",
#    imdb: "", 
#    trivia_attributes: [
#        {content: "Her first time doing drag was at a LGBT pride event, where she and some friends protested. Doing so, Bob was arrested for holding up traffic with his friends."}, 
#        {content: "Bob was a minor character in the Netflix show 'Tales of the City' as a bar owner named 'Ida Best'"}
#    ], 
#    quotes_attributes: [
#        {content: "Is Beyoncé scared of Britney? Then Bob ain't scared of Derrick."}, 
#        {content: "Purse first! Purse first! Walk into the room purse first! Clack!"}
#    ], 
#    appearances_attributes: [
#        {season_id: 9}
#    ]
#)#