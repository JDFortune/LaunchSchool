class TextAnalyzer
  def process
    file = File.open('sample_text.txt')
    yield(file.read)
    file.close
  end
end

analyzer = TextAnalyzer.new
analyzer.process { |text| puts text.split("\n\n").size }
analyzer.process { |text| puts text.split("\n").size  }
analyzer.process { |text| puts text.split(" ").size  }