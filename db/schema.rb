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

ActiveRecord::Schema.define(version: 2019_09_11_225233) do

  create_table "appearances", force: :cascade do |t|
    t.integer "queen_id"
    t.integer "episode_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["episode_id"], name: "index_appearances_on_episode_id"
    t.index ["queen_id"], name: "index_appearances_on_queen_id"
  end

  create_table "episodes", force: :cascade do |t|
    t.string "episode_name"
    t.integer "season_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["season_id"], name: "index_episodes_on_season_id"
  end

  create_table "queens", force: :cascade do |t|
    t.string "drag_name"
    t.string "real_name"
    t.string "primary_image"
    t.string "ethnicity"
    t.string "hometown"
    t.string "current_city"
    t.string "instagram"
    t.string "twitter"
    t.string "facebook"
    t.string "youtube"
    t.string "website"
    t.string "imdb"
    t.string "wikipedia"
    t.date "date_of_birth"
    t.integer "age"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "quotes", force: :cascade do |t|
    t.integer "queen_id"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "seasons", force: :cascade do |t|
    t.string "season_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trivia", force: :cascade do |t|
    t.integer "queen_id"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
