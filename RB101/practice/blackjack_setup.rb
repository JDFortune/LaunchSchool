# # 52 deck 
# # 4 suits
# # 13 cards 

# cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, :jack, :queen, :king, :ace]

# deck = {
#   hearts: cards.dup, 
#   diamonds: cards.dup,
#   spade: cards.dup,
#   clubs: cards.dup
# }


# new_deck = []

# deck.keys.map do |key|
#   until deck[key].empty? 
#    new_deck << "#{key}: #{deck[key].pop}"
#   end
#   new_deck
# end 

# p new_deck
# current_deck = []
# def shuffle!(deck)
#   deck.shuffle!
# end

# def 

# end 

# player = []
# dealer = []

# def grab_card!(deck)
# suit = deck.keys.sample
# card = deck[suit].sample

# deck[suit].delete(card)
# end

# player << grab_card!(deck)
# # dealer << grab_card!(deck)
# deck = ['blah', 'lah', 'smog', 'smaug']
# def shuffle(deck) 
#   new_deck = [] 
#   until deck.empty? 
#     new_deck << deck.delete(deck.sample)
#   end 
#   new_deck 
# end 

# p shuffle(deck) 

# def leap_years(first, last)
#   first.upto(last).with_object([]) do |year, leap_years|
#     if year % 400 == 0
#       leap_years << year
#     elsif year % 100 == 0
#       next
#     elsif year % 4 == 0
#       leap_years << year
#     end
#   end
# end

def leap_years(first, last)
  first.upto(last).with_object([]) do |year, leap_years|
    (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) ?
        leap_years << year : next
  end
end
p leap_years(100, 110) == [104, 108]
p leap_years(400, 410) == [400, 404, 408]
p leap_years(1220, 1992)



