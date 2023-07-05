require 'minitest/autorun'

require_relative '../cash_register'
require_relative '../transaction'

class CashRegisterTest < Minitest::Test
  def setup
    @register = CashRegister.new(1000)
    @transaction = Transaction.new(20)
  end

  def test_accept_money
    @transaction.amount_paid = 20

    @register.accept_money(@transaction)

    assert_equal(1020 , @register.total_money)
  end

  def test_change
    @transaction.amount_paid = 25
    change = @register.change(@transaction)

    assert_equal(5, change)
  end

  def test_give_receipt
    assert_output("You've paid $20.\n") do
      @register.give_receipt(@transaction)
    end
  end

end