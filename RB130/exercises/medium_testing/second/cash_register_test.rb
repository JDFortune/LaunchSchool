require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  def setup
    @register = CashRegister.new(100)
    @transaction = Transaction.new(30.50)
  end

  def test_accept_money
    @transaction.amount_paid = 30.50
    @register.accept_money(@transaction)
    assert_equal(130.50, @register.total_money)
  end

  def test_change
    @transaction.amount_paid = 31
    change = @register.change(@transaction)
    assert_equal(0.50, change)
  end
end