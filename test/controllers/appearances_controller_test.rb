require 'test_helper'

class AppearancesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @appearance = appearances(:one)
  end

  test "should get index" do
    get appearances_url, as: :json
    assert_response :success
  end

  test "should create appearance" do
    assert_difference('Appearance.count') do
      post appearances_url, params: { appearance: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show appearance" do
    get appearance_url(@appearance), as: :json
    assert_response :success
  end

  test "should update appearance" do
    patch appearance_url(@appearance), params: { appearance: {  } }, as: :json
    assert_response 200
  end

  test "should destroy appearance" do
    assert_difference('Appearance.count', -1) do
      delete appearance_url(@appearance), as: :json
    end

    assert_response 204
  end
end
