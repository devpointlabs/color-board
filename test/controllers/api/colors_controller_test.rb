require 'test_helper'

class Api::ColorsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_colors_index_url
    assert_response :success
  end

  test "should get show" do
    get api_colors_show_url
    assert_response :success
  end

  test "should get boardColors" do
    get api_colors_boardColors_url
    assert_response :success
  end

  test "should get create" do
    get api_colors_create_url
    assert_response :success
  end

  test "should get update" do
    get api_colors_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_colors_destroy_url
    assert_response :success
  end

end
