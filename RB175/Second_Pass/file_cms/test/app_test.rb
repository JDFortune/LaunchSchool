ENV["RACK_ENV"]  = "test"

require "minitest/autorun"
require "rack/test"
require "fileutils"

require_relative "../app.rb"

class AppTest < Minitest::Test
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def setup
    FileUtils.mkdir_p(data_path)
  end

  def teardown
    FileUtils.rm_rf(data_path)
  end

  def create_document(name, content="")
    File.open(File.join(data_path, name), "w") do |file|
      file.write(content)
    end
  end

  def session
    last_request.env["rack.session"]
  end

  def admin_session
    {"rack.session" => {username: "admin", password: "secret"} }
  end

  def test_index
    create_document "about.md"
    create_document "changes.txt"
    get "/"

    assert_includes last_response.body, "about.md"
    assert_includes last_response.body, "changes.txt"
  end

  ########### Free Access Tests ###############
  def test_history_file
    create_document "history.txt", "Hello there."

    get "/history.txt"

    
    assert_equal 200, last_response.status
    assert_equal "text/plain", last_response["Content-Type"]
    assert_includes last_response.body, "Hello there"
  end

  def test_nonexistent_file
    get "/none.txt"
    assert_equal 302, last_response.status

    assert_equal "none.txt does not exist.", session[:message]
  end

  def test_text_render
    create_document "history.txt", "hello there"
    create_document "about.md", "# This is markdown"

    get "/history.txt"
    assert_equal "text/plain", last_response["Content-Type"]

    get "/about.md"
    assert_equal "text/html;charset=utf-8", last_response["Content-Type"]
    assert_includes last_response.body, "<h1>This is markdown</h1>"
  end

  ########## Signed in Required Tests ######################
  def test_editing_document
    create_document "history.txt"

    get "/history.txt/edit", {}, admin_session

    assert_equal 200, last_response.status
    assert_includes last_response.body, "<textarea"
    assert_includes last_response.body, %q(<button type="submit")
  end

  def test_editing_document_signed_out
    create_document "changes.txt"

    get "/changes.txt/edit"
    assert_equal 302, last_response.status
    assert_equal "You must be signed in to do that.", session[:message]
  end


  def test_updating_document
    create_document "changes.txt"

    post "/changes.txt", {content: "boop boop"}, admin_session

    assert_equal 302, last_response.status
    assert_equal "changes.txt has been updated.", session[:message]

    get "/changes.txt"
    assert_equal 200, last_response.status
    assert_includes last_response.body, "boop boop"
  end

  def test_updating_document_signed_out
    create_document "changes.txt"

    post "/changes.txt", {content: "boop boop"}
    assert_equal 302, last_response.status
    assert_equal "You must be signed in to do that.", session[:message]
  end

  def test_new_document_form
    get "/new", {}, admin_session

    assert_equal 200, last_response.status
    assert_includes last_response.body, "<input"
    assert_includes last_response.body, %q(<button type="submit")
  end

  def test_new_document_form_signed_out
    get "/new"

    assert_equal 302, last_response.status
    assert_equal "You must be signed in to do that.", session[:message]
  end

  def test_create_new_document
    post "/new", {document_name: "hello.txt"}, admin_session
    assert_equal 302, last_response.status
    assert_equal "hello.txt has been created.", session[:message]

    get last_response["Location"]
    assert_includes last_response.body, "hello.txt"
  end

  def test_create_new_document_signed_out
    post "/new", {document_name: "hello.txt"}

    assert_equal 302, last_response.status
    assert_equal "You must be signed in to do that.", session[:message]
  end

  def test_new_document_with_text
    post "/new", {document_name: "hello.txt", content: "This is a sentence"}, admin_session
    assert_equal 302, last_response.status

    get last_response["Location"]
    assert_includes last_response.body, "hello.txt"

    get "/hello.txt"
    assert_equal 200, last_response.status
    assert_includes last_response.body, "This is a sentence"
  end

  def test_empty_name_new_document
    post "/new", {document_name: "       "}, admin_session
    assert_equal 422, last_response.status

    assert_includes last_response.body, "Document must have a name and extension (ex. .txt or .md)."

    get "/new"
    refute_includes last_response.body, "Document must have a name and extension (ex. .txt or .md)."
  end

  def test_delete_document
    create_document "hello.txt"
    get "/", {}, admin_session
    assert_includes last_response.body, "hello.txt"

    post "/hello.txt/delete"
    assert_equal 302, last_response.status
    assert_equal "hello.txt has been deleted.", session[:message]

    get "/"
    refute_includes last_response.body, %q(href="/hello.txt")
  end

  def test_delete_document_signed_out
    create_document "hello.txt"

    post "/hello.txt/delete"
    assert_equal 302, last_response.status
    assert_equal "You must be signed in to do that.", session[:message]
  end

  def test_sign_in
    post "/users/signin", username: "admin", password: "secret"
    assert_equal 302, last_response.status
    assert_equal "admin", session[:username]
    assert_equal "secret", session[:password]

    get last_response["Location"]
    assert_includes last_response.body, "Signed in as"
  end

  def test_sign_out
    get "/", {}, admin_session
    assert_includes last_response.body, "Signed in as admin"

    post "/users/signout"
    assert_equal "You have been signed out.", session[:message]

    get "/"
    assert_nil session[:message]
    assert_includes last_response.body, "Sign In"
  end

  def test_invalid_credentials
    post "/users/signin", username: "fake", password: "invalid"
    assert_equal 422, last_response.status
    assert_nil session[:username]
    assert_includes last_response.body, "Invalid credentials."
  end

  def test_sign_in_form
    get "/users/signin"
    assert_equal 200, last_response.status
    assert_includes last_response.body, "<form"
    assert_includes last_response.body, %q(<button type="submit")
  end
end

