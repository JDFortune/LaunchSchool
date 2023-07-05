require 'yaml'

MESSAGES = YAML.load_file('mortgage_messages.yml')

## METHODS

# message prompt
def prompt(message)
  puts "=> #{MESSAGES[message]}"
end

# method for verifying number input is valid
def number?(input)
  input.to_f.to_s == input ||
    input.to_i.to_s == input ||
    input.to_i.to_s + '.' == input ||
    input.to_f.to_s + "0" == input
end

# Ask user to input total loan amount
def get_loan_amount
  loop do
    prompt('loan_amount')
    loan_amount = gets.chomp
    remove_extra_characters(loan_amount)

    if number?(loan_amount) && loan_amount.to_f > 0
      return loan_amount.to_f
    else
      prompt('invalid_entry')
    end
  end
end

# removes any characters that would affect calculation
def remove_extra_characters(entry)
  entry.gsub!(/[,_$%]/, '')
end

# ask user to input APR
def get_apr
  loop do
    prompt('apr')
    apr = gets.chomp
    next if apr.empty?
    remove_extra_characters(apr)

    if number?(apr) && apr.to_f >= 0
      break apr.to_f
    else
      prompt('invalid_entry')
    end
  end
end

# Ask user to input duration of loan
def get_duration
  loop do
    prompt('duration')
    duration = gets.chomp
    next if duration.empty?
    remove_extra_characters(duration)

    if number?(duration) && duration.to_f >= 0
      break duration.to_f
    end
  end
end

# convert apr to monthly interest rate
def apr_to_monthly(apr)
  (apr / 100) / 12
end

# convert years to months
def years_to_months(duration)
  duration * 12
end

# calculate monthly payment
def monthly_payment_amt(loan_amount, monthly_interest_rate, duration_months)
  loan_amount *
    (monthly_interest_rate /
    (1 - (1 + monthly_interest_rate)**(- duration_months)))
end

# Ask user if they'd like to calculate a new loan payment
def again?
  prompt('again')
  gets.chomp
end

## PROGRAM MAIN
prompt('welcome')
loop do
  loan_amount = get_loan_amount
  apr = get_apr
  duration = get_duration
  monthly_int = apr_to_monthly(apr)
  duration = years_to_months(duration)
  monthly_payment = monthly_payment_amt(loan_amount, monthly_int, duration)

  puts "You're monthly payment is #{format('$%.2f', monthly_payment)}"

  break unless again?.upcase.start_with?('Y')
end

# Exit message
prompt('thanks')
prompt("g'day")
