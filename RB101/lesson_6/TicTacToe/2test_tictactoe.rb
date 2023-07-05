INITIAL_MARKER = ' '
WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                [[2, 5, 8], [1, 4, 7], [3, 6, 9]] + # columns
                [[1, 5, 9], [3, 5, 7]] # diagonals

def prompt(msg)
  puts "=> #{msg}"
end

# rubocop:disable Style/GlobalVars
# rubocop:disable Metrics/AbcSize
def display_board(brd, score)
  system 'clear'
  puts "#{score.keys[0]}: #{$player1_marker} | #{score.keys[1]}: #{$player2_marker}"
  puts ""
  puts "     |     |"
  puts "  #{brd[1]}  |  #{brd[2]}  |  #{brd[3]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[4]}  |  #{brd[5]}  |  #{brd[6]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[7]}  |  #{brd[8]}  |  #{brd[9]}"
  puts "     |     |"
  puts ""
end
# rubocop:enable Metrics/AbcSize

def display_score(score)
  prompt "============"
  puts "   SCORE"
  puts "   #{score.keys[0]}: #{score[score.keys[0]]}"
  puts "   #{score.keys[1]}: #{score[score.keys[1]]}"
  puts "   Ties: #{score['Tie']}"
  prompt "============"
end

def display_round_winner(brd, score, num_players)
  if someone_won?(brd, num_players)
    prompt "#{detect_winner(brd, num_players)} won!"
    score[detect_winner(brd, num_players)] += 1
  else
    prompt "It's a tie!"
    score['Tie'] += 1
  end
end

def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def empty_squares(brd)
  brd.keys.select { |num| brd[num] == INITIAL_MARKER }
end

def player_places_piece!(brd, current_player)
  square = ''
  loop do
    prompt "Choose a square: #{joinor(empty_squares(brd))}"
    square = gets.chomp.to_i
    break if empty_squares(brd).include?(square)
    puts "Invalid choice"
  end
  brd[square] = current_player
end

def place_piece!(brd, current_player, num_players)
  if current_player == $player1_marker
    player_places_piece!(brd, current_player)
  elsif current_player == $player2_marker
    if num_players == 1
      computer_places_piece!(brd)
    else
      player_places_piece!(brd, current_player)  
    end
  end
end

def computer_offense(brd, line)
  if brd.values_at(*line).count($player2_marker) == 2 
    brd.select { |k, v| line.include?(k) && v == INITIAL_MARKER }.keys.first
  end
end

def computer_defense(brd, line)
  if brd.values_at(*line).count($player1_marker) == 2
    brd.select { |k, v| line.include?(k) && v == INITIAL_MARKER }.keys.first
  end
end

def offense_possible(brd)
  square = nil
  WINNING_LINES.each do |line|
    square = computer_offense(brd, line)
    break if square
  end
  square
end

def defense_possible(brd)
  square = nil
  WINNING_LINES.each do |line|
    square = computer_defense(brd, line)
    break if square
  end
  square
end

def computer_places_piece!(brd)
  square = offense_possible(brd)
  square = defense_possible(brd) if !square
  square = 5 if brd[5] == INITIAL_MARKER
  square = empty_squares(brd).sample if !square
  brd[square] = $player2_marker
end

def board_full?(brd)
  empty_squares(brd).empty?
end

def someone_won?(brd, num_players)
  !!detect_winner(brd, num_players)
end

def detect_winner(brd, num_players)
  WINNING_LINES.each do |line|
    if brd.values_at(*line).all?($player1_marker)
      num_players == 1 ? (return 'Player') : (return 'Player 1')
    elsif brd.values_at(*line).all?($player2_marker)
      num_players == 1 ? (return 'Computer') : (return 'Player 2')
    end
  end
  nil
end

def joinor(brd, symbol = ', ', joiner = 'or')
  case brd.size
  when 0 then ''
  when 1 then brd.first
  when 2 then brd.join(" #{joiner} ")
  else
    brd[-1] = "#{joiner} #{brd.last}"
    brd.join(symbol)
  end
end

def hit_enter(round)
  prompt "Hit enter for Round #{round} or type 'exit' to leave early"
  gets.chomp
end

def alternate_player(current_player)
  current_player == $player1_marker ? $player2_marker : $player1_marker
end

def set_markers(score)
  $player1_marker = ''
  choices = ['X', 'O']
  loop do
    prompt "Pick (#{score.keys.first}) marker: X or O."
    $player1_marker = gets.upcase.chomp
    break if choices.include?($player1_marker)
    prompt "Invalid choice"
  end
  $player1_marker == choices[0] ? choices : choices.reverse
end

def set_play_order(num_players, score)
  answer = ''
  loop do
    prompt "Would (#{score.keys[0]}) like to go first? (y/n)"
    answer = gets.downcase.chomp
    break if answer.start_with?('y') || answer.start_with?('n')
  end
  answer.start_with?('y') ? $player1_marker : $player2_marker
end 

def get_num_players
  players = 0
  loop do
    prompt "How many players are there?
        1: For Computer Opponent
        2: For Human Oppononent"
    players = gets.chomp.to_i
    break if players.between?(1,2)
    prompt "Invalid Input!"
  end
  players
end

def create_score(num_players)
  case num_players
  when 1
    return { 'Player' => 0, 'Computer' => 0, 'Tie' => 0 }  
  when 2
    return {'Player 1' => 0, 'Player 2' => 0, 'Tie' => 0 }
  end
end

# Tic Tac Toe Game Logic
system 'clear'
prompt "Welcome to Tic Tac Toe!"
prompt "First to 5 wins... wins!"
prompt "After selecting who starts, loser starts concurrent rounds."
prompt "Hit [enter] to start!"
gets


loop do # full game reset
  num_players = get_num_players
  score = create_score(num_players)
  round = 1
  early_exit = nil
  # board = nil
  $player1_marker, $player2_marker = set_markers(score)

  current_player = set_play_order(num_players, score)
  loop do # series of games to 5 loop with conditional exit
    board = initialize_board
    loop do # play game loop
      display_board(board, score)
      place_piece!(board, current_player, num_players)
      current_player = alternate_player(current_player)
      break if someone_won?(board, num_players) || board_full?(board)
    end

    display_board(board, score)
    display_round_winner(board, score, num_players)

    round += 1
    display_score(score)
    early_exit = hit_enter(round)

    break if score[score.keys[0]] == 5 ||
             score[score.keys[1]] == 5 ||
             early_exit.downcase.start_with?('e')
  end
  system 'clear'  
  prompt "============"
  prompt "Final Score"
  display_score(score)
  break if early_exit.downcase.start_with?('e')
  prompt "Reset and Play Again? y/n"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt "Thanks for playing Tic Tac Toe! Goodbye!"
# rubocop:enable Style/GlobalVars
