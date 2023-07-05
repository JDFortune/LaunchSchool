class BeerSong
  BEERS = ['no more'] + ('1'..'99').to_a

  def self.verse(num)
    verses(num)
  end

  def self.verses(start, finish = nil)
    beers = start
    lyrics = []
    finisher = " of beer on the wall"
    
    loop do
      
      part_1 = BEERS[beers].capitalize + (beers == 1 ? " bottle" : " bottles")
      part_2 = ", #{part_1.downcase} of beer.\n"
      noun = beers == 1 ? 'it' : 'one'
      part_3 = beers > 0 ? "Take #{noun} down and pass it around, " : "Go to the store and buy some more, "
      done = true if beers == 0 || beers == finish
      (beers -= 1) < 0 ? 99 : beers
      part_4 = BEERS[beers] + (beers == 1 ? " bottle" : " bottles")
      
      lyrics << (part_1 + finisher + part_2 + part_3 + part_4 + finisher + ".\n")

      break lyrics.join("\n") if finish.nil? || done
    end
  end

  def self.lyrics
    verses(99, 0)
  end
end
