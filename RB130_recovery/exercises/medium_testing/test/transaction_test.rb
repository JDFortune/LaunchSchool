require 'minitest/autorun'

require_relative '../transaction'

class TransactionTest < Minitest::Test

  def setup
    @transaction = Transaction.new(30)
  end

  def test_prompt_for_payment
    input = StringIO.new("30\n")
    output = StringIO.new
    @transaction.prompt_for_payment(input: input, output: output)

    assert_equal(30.0, @transaction.amount_paid)
  end
end