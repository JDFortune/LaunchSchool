# class TextAnalyzer

#   def initialize(text)
#     @text = text
#   end

#   def process
#     file = File.open(text)
#     yield(file.read)
#     file.close
#   end

#   private

#   attr_reader :text
# end

# analyzer = TextAnalyzer.new('sample_text.txt')
# analyzer.process { |text| puts "#{text.split("\n\n").size} paragraphs" }
# analyzer.process { |text| puts "#{text.split("\n").size} lines"}
# analyzer.process { |text| puts "#{text.split.size} words" }


# class TextAnalyzer
#   def process
#     stats = {paragraphs: 1, lines: 0, words: 0 }

#     File.readlines(yield).each do |line|
#       stats[:paragraphs] += 1 if line.match?(/^\s$/)
#       stats[:lines] += 1
#       stats[:words] += line.split(/\s/).size
#     end

#     stats.each { |type, count| puts "#{count} #{type}" }
#   end
# end

# analyzer = TextAnalyzer.new
# analyzer.process { "sample_text.txt"}


class TextAnalyzer
  def process
    File.open('sample_text.txt') do |file|
      yield(file.read)
    end
  end
end

analyzer = TextAnalyzer.new
analyzer.process { |file| puts "Paragraphs: #{file.split("\n\n").size}" }
analyzer.process { |file| puts "Lines: #{file.split("\n").size}"}
analyzer.process { |file| puts "Words: #{file.split.size}" }
