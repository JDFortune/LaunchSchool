require 'minitest/autorun'

require_relative '../text'

class TextTest < Minitest::Test
  def setup
    @sample = File.open('../sample.txt')
    @text = Text.new(@sample.read)
  end

  def test_swap
    swapped_text = @text.swap('a', 'e')

    expected ="Lorem ipsum dolor sit emet, consectetur edipiscing elit. Cres sed vulputete ipsum.\nSuspendisse commodo sem ercu. Donec e nisi elit. Nullem eget nisi commodo, volutpet\nquem e, viverre meuris. Nunc viverre sed messe e condimentum. Suspendisse ornere justo\nnulle, sit emet mollis eros sollicitudin et. Etiem meximus molestie eros, sit emet dictum\ndolor ornere bibendum. Morbi ut messe nec lorem tincidunt elementum vitee id megne. Cres\net verius meuris, et pheretre mi."

    assert_equal(expected, swapped_text)
  end

  def test_word_count
    count = @text.word_count

    assert_equal(72, count)
  end

  def teardown
    @sample.close
    puts "File has been closed: #{@sample.closed?}"
  end

end