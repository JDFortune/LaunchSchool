CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
GOAL_VALUE = 21
DEALER_MIN = 17
HIDDEN_CARD = { suit: '?', rank: ' ' }

SUITS = ['♥', '♣', '♦', '♠']

DECK_MAKEUP = { SUITS[0] => CARDS.dup,
                SUITS[1] => CARDS.dup,
                SUITS[2] => CARDS.dup,
                SUITS[3] => CARDS.dup }

def prompt(message)
  puts "=> #{message}"
end

def create_deck
  deck = []
  DECK_MAKEUP.each do |suit, ranks|
    ranks.each do |rank|
      deck << { suit: suit, rank: rank }
    end
  end
  deck
end

# rubocop:disable Metrics/AbcSize
def card_image(card, spacing) # dynamic card spacer
  cards = []
  cards << "+" + ("-" * spacing[1]) + "+"
  cards << "|".ljust(spacing[0]) + card[:rank].to_s.ljust(2) + "|"
  cards << "|" + (" " * spacing[1]) + "|"
  cards << "|".ljust(spacing[2]) + card[:suit] + "|".rjust(spacing[2])
  cards << "|" + (" " * spacing[1]) + "|"
  cards << "|" + card[:rank].to_s.rjust(2) + "|".rjust(spacing[0])
  cards << "+" + ("-" * spacing[1]) + "+"
  cards
end
# rubocop:enable Metrics/AbcSize

def deal_card!(deck)
  deck.pop
end

def player_turn(deck)
  loop do
    prompt "What would you like to do? (hit or stay)"
    move = gets.chomp.downcase
    if move == 'h' || move == 'hit'
      break deal_card!(deck)
    elsif move == 's' || move == 'stay'
      break nil
    end
    prompt "Not a valid move!"
  end
end

def dynamic_spacing(cards, spacing)
  if cards.size > 5
    difference = cards.size - 5
    difference += 1 unless difference.even?
    spacing.map!.with_index do |num, idx|
      if idx != 2
        num - difference
      else
        num - (difference / 2)
      end
    end
  else
    spacing
  end
end

def display_cards(cards)
  default_spacing = [8, 9, 5]
  spacing = dynamic_spacing(cards, default_spacing)

  table = cards.map do |card|
    card_image(card, spacing)
  end
  puts(table.transpose.map { |sections| sections.join(' ') })
end

def display_table(player_hand, dealer_hand, player_score, dealer_score)
  clear
  prompt "Dealer Cards: #{dealer_score}"
  display_cards(dealer_hand)
  prompt "Player Cards: #{player_score}"
  display_cards(player_hand)
end

def clear
  system('clear') || system('cls')
end

def count_aces(cards)
  cards.map do |card|
    card[:rank]
  end.count('A')
end

def count_score(cards)
  score = score_total(cards)
  aces = count_aces(cards)
  loop do
    if score > GOAL_VALUE && aces > 0
      score -= 10
      aces -= 1
    else
      break score
    end
  end
  score
end

def score_total(cards)
  cards.map do |card|
    if card[:rank].class == String
      case card[:rank]
      when 'A' then 11
      when ' ' then 0
      else
        10
      end
    else
      card[:rank]
    end
  end.sum
end

def bust?(score)
  score > GOAL_VALUE
end

def display_busted(player_hand, dealer_hand)
  if bust?(player_hand)
    prompt "YOU BUST!!!"
  elsif bust?(dealer_hand)
    prompt "DEALER BUSTS!!!"
  end
end

def determine_winner(player_score, dealer_score)
  return :player_bust if player_score > GOAL_VALUE
  return :dealer_bust if dealer_score > GOAL_VALUE
  case player_score <=> dealer_score
  when 1  then :player
  when -1 then :dealer
  when 0  then :tie
  end
end

def win_message(winner)
  case winner
  when :player_bust then "Player busts! Dealer Wins..."
  when :dealer_bust then "Dealer busts! Player Wins!"
  when :player then "Player Wins!!!"
  when :dealer then "Dealer Wins... :("
  when :tie then "Nobody Wins"
  end
end

def display_win_message(message)
  prompt message
end

def update_score!(score, winner)
  case winner
  when :player_bust then score[:dealer] += 1
  when :dealer_bust then score[:player] += 1
  when :player      then score[:player] += 1
  when :dealer      then score[:dealer] += 1
  when :tie         then score[:tie] += 1
  end
end

def display_score(score)
  prompt "============="
  score.each do |key, total|
    puts "   #{key.capitalize}: #{total}"
  end
  prompt "============="
end

def play_again?
  again = ''
  loop do
    prompt "Play Again? y/n"
    again = gets.chomp.downcase
    if again.start_with?('y') || again == 'yes'
      return true
    elsif again.start_with?('n') || again == 'no'
      return false
    end
    prompt "Not a valid input."
  end
end

# rubocop:disable Metrics/AbcSize
# rubocop:disable Metrics/CyclomaticComplexity
# rubocop:disable Metrics/MethodLength
# rubocop:disable Metrics/PerceivedComplexity
def main
  score = { player: 0, dealer: 0, tie: 0 }
  loop do
    deck = create_deck.shuffle
    player_hand = []
    dealer_hand = []

    2.times do # deal out cards
      player_hand << deal_card!(deck)
      dealer_hand << deal_card!(deck)
    end

    player_score = count_score(player_hand)
    p "current player score: #{player_score}"
    dealer_score = count_score([dealer_hand[0], HIDDEN_CARD])
    p "current dealer score: #{dealer_score}"
    display_table(player_hand, [dealer_hand[0], HIDDEN_CARD], player_score, dealer_score)

    # player turn
    until player_hand.last.nil?
      player_hand << player_turn(deck)
      unless player_hand.last.nil?
        player_score = count_score(player_hand)
        display_table(player_hand, [dealer_hand[0], HIDDEN_CARD], player_score, dealer_score)
      end
      break if player_hand.last.nil? || bust?(player_score)
    end
    player_hand.pop if player_hand.last.nil?

    dealer_score = count_score(dealer_hand)
    display_table(player_hand, dealer_hand, player_score, dealer_score)

    # Dealer turn
    while dealer_score < DEALER_MIN && !bust?(player_score)
      sleep(1)
      dealer_hand << deal_card!(deck)
      dealer_score = count_score(dealer_hand)
      display_table(player_hand, dealer_hand, player_score, dealer_score)
    end

    display_table(player_hand, dealer_hand, player_score, dealer_score)
    winner = determine_winner(player_score, dealer_score)
    display_win_message(win_message(winner))
    update_score!(score, winner)
    display_score(score)

    break unless play_again?
  end
  clear
  prompt "Thanks for playing"
  display_score(score)
end
# rubocop:enable Metrics/AbcSize
# rubocop:enable Metrics/CyclomaticComplexity
# rubocop:enable Metrics/MethodLength
# rubocop:enable Metrics/PerceivedComplexity

main

# If interested, check out my dynamic card size display for multiple cards (works up to 11)

# deck = create_deck
# display_cards(deck[0...5])
# display_cards(deck[0...11])
