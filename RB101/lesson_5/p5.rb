munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}


# munsters_male = munsters.select do |key, value|
#                   value["gender"] == "male"
#                 end

# p munsters_male

# male_age_total =  munsters_male.map do |key, value|
#                     value["age"]
#                   end.sum

# p male_age_total

total_male_age = 0

munsters.each_value do |hash|
  total_male_age += hash["age"] if hash["gender"] == "male"
end

p total_male_age