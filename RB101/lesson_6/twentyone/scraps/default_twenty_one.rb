=begin
1. Initialize deck
        create deck of cards
        shuffle the deck
2. Deal cards to player and dealer
        deal out cards to player and computer (removing from the deck)
3. Player turn: hit or stay
        player turn (hit, stay)
4. If player bust, dealer wins
5. Dealer turn: hit or stay
  - repeat until total >= 17
        dealer(computer) decides
6. If dealer bust, player wins.
7. Compare cards and Declare Winner


take turns
  dealer(computer) decides
  player turn (hit, stay)
determing winners - 21 or highest without going over 21
  assign values to cards and add up
      all face cards are 10
      all numbered cards are their value
      ace can be 1 or 11 based on the current score
        1 if 11 would cause player or dealer to bust
        this also includes the case for multiple aces in a hand (an ace by ace basis) baduhn

dealer rules
  + if the cards are less than 17 the dealer must hit (unless the player has already busted)
  +  
=end
CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

SUITS = ['♥', '♣', '♦', '♠']

DECK_MAKEUP = {
                SUITS[0] => CARDS.dup,
                SUITS[1] => CARDS.dup,
                SUITS[2] => CARDS.dup,
                SUITS[3] => CARDS.dup
}

def create_deck
  deck = []
  DECK_MAKEUP.each do |suit, ranks|
    ranks.each do |rank|
      deck << [suit, rank]
    end
  end
  deck
end
 
def card_image(card)
  cards = []
  cards << "+---------+" 
  cards << "|".ljust(8) + "#{card[1]}".ljust(2) + "|"
  cards << "|         |"
  cards << "|".ljust(5)  +  "#{card[0]}" +     "|".rjust(5)
  cards << "|         |"
  cards << "|" + "#{card[1]}".rjust(2)  + "|".rjust(8)
  cards << "+---------+"
  cards
end

def deal_card!(deck)
  deck.pop
end

def player_turn(deck)
  loop do
    puts "What would you like to do? (hit or stay)"
    move = gets.chomp
    if move.downcase == 'h' || move.downcase == 'hit'
      break deal_card!(deck)
    elsif move.downcase == 's' || move.downcase == 'stay'
      break nil
    end
      puts "Not a valid move!"
  end
end

def display_cards(cards)
  table = cards.map do |card|
            card_image(card)
          end
  puts table.transpose.map { |sections| sections.join('  ') }
end

def display_table(player_hand, dealer_hand)
  clear
  puts "Dealer Cards: #{count_score(dealer_hand)}"
  display_cards(dealer_hand)
  puts "Player Cards: #{count_score(player_hand)}"
  display_cards(player_hand)
end

def clear
  system('clear')  || system('cls')
end

def count_aces(cards)
  aces = cards.map do |suit,  rank|
    rank
  end.count('A')
end

def count_score(cards)
  score =  rank_tally(cards)
  aces = count_aces(cards)
  loop do
    if score > 21 && aces > 0
      score -= 10
      aces -= 1
    else
      break score
    end
  end
  score
end

def rank_tally(cards)
  cards.map do |suit, rank|
    if rank.class == String
      case rank
      when 'A' then 11
      when ' ' then 0
      else
        10
      end
    else
      rank
    end
  end.sum
end

def bust?(cards)
  count_score(cards) > 21
end

def display_busted(player_hand, dealer_hand)
  if bust?(player_hand)
    puts "YOU BUST!!!"
  elsif bust?(dealer_hand)
    puts "DEALER BUSTS!!!"
  end
end

def display_winner(player_hand, dealer_hand)
  player = count_score(player_hand)
  dealer = count_score(dealer_hand)
  if player < dealer && dealer
    puts "Dealer Wins..."
  elsif player > dealer && player
    puts "You Winsdeded!!!"
  else
    puts "No Winner"
  end
end

# Main Program
def main
  loop do
    deck = create_deck.shuffle
    player_hand = []
    dealer_hand = []

    2.times do   # deal out cards
      player_hand << deal_card!(deck)
      dealer_hand << deal_card!(deck)
    end

    display_table(player_hand, [dealer_hand[0], ['?', ' ']])

    # player turn
    until player_hand.last == nil
      player_hand << player_turn(deck)
      unless player_hand.last == nil
        display_table(player_hand, [dealer_hand[0], ['?', ' ']])
      end
      break if player_hand.last == nil || bust?(player_hand)
    end
    player_hand.pop if player_hand.last == nil

    display_table(player_hand, dealer_hand)
    # p "Player Score: #{count_score(player_hand)}"

    # Dealer turn
    while count_score(dealer_hand) < 17 && !bust?(player_hand)
      sleep(1)
      dealer_hand << deal_card!(deck)
      display_table(player_hand, dealer_hand)
    end    

    display_table(player_hand, dealer_hand)
    display_busted(player_hand, dealer_hand)

    if bust?(player_hand)
      puts "Dealer Wins..."
    elsif bust?(dealer_hand)
      puts "You Win!!!"
    else
      display_winner(player_hand, dealer_hand)
    end

    puts "Play Again? y/n"
    again = gets.chomp.downcase
    break unless again.start_with?('y')
  end
end

main




# Deal cards to player
# deal to dealer
# loop
#   Player turn
#   check bust
# end
# loop
#   dealer turn
#   check win/bust
# end
# check winner
# play again?


