# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_03_003953) do

  create_table "queens", force: :cascade do |t|
    t.string "drag_name"
    t.string "real_name"
    t.string "season"
    t.string "ethnicity"
    t.date "date_of_birth"
    t.string "hometown"
    t.string "current_city"
    t.string "placement"
    t.string "sent_home_by"
    t.string "challenge_wins"
    t.string "entrance_quotes"
    t.string "memorable_quotes"
    t.string "farewell_messages"
    t.string "trivia"
    t.string "image"
    t.string "video"
    t.string "social_media"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
