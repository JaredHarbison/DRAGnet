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

ActiveRecord::Schema.define(version: 2019_10_12_174304) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "appearances", force: :cascade do |t|
    t.bigint "queen_id"
    t.bigint "episode_id"
    t.integer "rank"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["episode_id"], name: "index_appearances_on_episode_id"
    t.index ["queen_id"], name: "index_appearances_on_queen_id"
  end

  create_table "episodes", force: :cascade do |t|
    t.string "episode_code"
    t.string "episode_name"
    t.string "episode_number"
    t.text "contestants"
    t.date "air_date"
    t.string "maxi_challenge"
    t.string "maxi_challenge_winner"
    t.string "mini_challenge"
    t.string "mini_challenge_winner"
    t.string "guest_judges"
    t.string "lip_sync_song"
    t.bigint "season_id"
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
    t.integer "seasons_ids", array: true
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
    t.date "premeire_date"
    t.date "finale_date"
    t.string "judges"
    t.string "fandom_season_url"
    t.string "wiki_season_url"
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
