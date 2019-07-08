require 'test_helper'

class TriviaControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trivium = trivia(:one)
  end

  test "should get index" do
    get trivia_url, as: :json
    assert_response :success
  end

  test "should create trivium" do
    assert_difference('Trivium.count') do
      post trivia_url, params: { trivium: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show trivium" do
    get trivium_url(@trivium), as: :json
    assert_response :success
  end

  test "should update trivium" do
    patch trivium_url(@trivium), params: { trivium: {  } }, as: :json
    assert_response 200
  end

  test "should destroy trivium" do
    assert_difference('Trivium.count', -1) do
      delete trivium_url(@trivium), as: :json
    end

    assert_response 204
  end
end
