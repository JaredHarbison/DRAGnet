require 'test_helper'

class SeasonsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @season = seasons(:one)
  end

  test "should get index" do
    get seasons_url, as: :json
    assert_response :success
  end

  test "should create season" do
    assert_difference('Season.count') do
      post seasons_url, params: { season: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show season" do
    get season_url(@season), as: :json
    assert_response :success
  end

  test "should update season" do
    patch season_url(@season), params: { season: {  } }, as: :json
    assert_response 200
  end

  test "should destroy season" do
    assert_difference('Season.count', -1) do
      delete season_url(@season), as: :json
    end

    assert_response 204
  end
end
