=begin
Problem
Create a loan calculator

using 3 pieces of information:  loan amount
                                Annual Percentage Rate (APR)
                                loan duration

calculate: the monthly interest rate
           loan duration in months
           and monthly payment


annual percentage rate needs to be converted to monthly (((APR/100)/12) * loan amount)
  = a monthly interest rate is an amount of money not a percentage
use months for loan duration (1 year = 12 months)
convert year to months (year * 12 = duration_months)

loan_calculator(loan_amount, apr, duration_months)


rules

implicit
 loan amount, apr, and loan duration can't be less than zero

E




D
input: float: loan amount, float: apr, integer: years

middle:

output: float: monthly payments


A

get Loan amount
    Annual Percentage Rate
    Loan duration

convert annual percentage rate to monthly interest rate (SP)
  - (APR/100)/12 * loan_amount
convert loan duration from years to months
  - duration_months * 12
calculate montly payment


GET loan amount
  - verify valid
GET Annual Percentage Rate
  - verify valid
GET loan duration in years
  - verify valid

SET monthly interest rate using annual percentage rate
SET loan duration in months from years
SET monthly payment amount

PRINT monthly payment amount (round to 2 decimal points)
=end