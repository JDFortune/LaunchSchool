=begin
Problem
Rock Paper Scissors
User makes a choice, computer makes a choice. Choices are
compared and the result is either user, computer, or tie.

Data Structures
input: choice as string
output: string, result of game

Algorith

1. Player picks a choice. Computer picks a random choice.
The choices are compared to a hash reference and the returning
result is either a victory for the user or computer, or in the
case that both choices are the same, a tie.

SET hash for victory comparison
PRINT
GET valid_user_choice
SET valid_user_choice to convert_choice for comparison
SET computer choice
SUB-OPERATION Compare results
  IF computer choice is in user choices list of defeat options
    PRINT user_winner
  ELSIF user choice is in computer defeat options
    PRINT computer_winner
  ELSE
    PRINT tie
PRINT winner
GET Play again

=end