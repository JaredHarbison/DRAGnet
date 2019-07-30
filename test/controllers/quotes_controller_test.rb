require 'test_helper'

class QuotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @quote = quotes(:one)
  end

  test "should get index" do
    get quotes_url, as: :json
    assert_response :success
  end

  test "should create quote" do
    assert_difference('Quote.count') do
      post quotes_url, params: { quote: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show quote" do
    get quote_url(@quote), as: :json
    assert_response :success
  end

  test "should update quote" do
    patch quote_url(@quote), params: { quote: {  } }, as: :json
    assert_response 200
  end

  test "should destroy quote" do
    assert_difference('Quote.count', -1) do
      delete quote_url(@quote), as: :json
    end

    assert_response 204
  end
end
