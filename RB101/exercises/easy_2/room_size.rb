=begin
Problem:
  User enters length and width of a room. The program returns the
  sqr feet and sqr meters of the room.

  Implicit Rules:

  Explicit Rules:
  User enters length and width in meters

  Questions:

Examples and Test Cases:

Data Structures
  input: integer or float
  mid:
  output: float (sqr.meters) float(sqr.feet)

Algorithm:
  High-level:
    1. Ask user to enter length and width fo a room in meters.
      Validate the entries. If valid, calculate square meters.
      Calculate Square feet. Print both.
    2.
  Low-level:
  SUB_PROCESS get_meters
    SET meters = ''
    WHILE meters !is_number?()
      GET meters
    END
    meters to float
  END

  SUB_PROCESS is_number?(entry)
    if entry.to_i.to_s == entry ||
       entry.to_f.to_s == entry ||
       entry.to_i.to_s + '.' == entry ||
       entry.to_f.to_s + '0' == entry
      return true
    ELSE
      return false
    END

  SET
  SET room_length_meters = get_meters
  SET room_width_meters = get_meter

  Calculate room_square_meters
  Calculate room_square_feet = (room_square_meters * 10.7639)

  PRINT room_square_meters
  PRINT room_square_feet

CODE

=end

SQMETERS_TO_SQFEET = 10.7639

def get_measurment(dimension, unit)
  measurement = ''
  loop do
    puts "Enter the #{dimension} of the room in #{unit}"
    measurement = gets.chomp
    break unless !number?(measurement)
    puts "invalid entry"
  end
  measurement.to_f
end

def number?(entry)
  if entry.to_i.to_s == entry ||
     entry.to_f.to_s == entry ||
     entry.to_i.to_s + '.' == entry ||
     entry.to_f.to_s + '0' == entry
    true
  else
    false
  end
end

def get_feet_or_meters
  unit = ''
  loop do
    puts "Should we calculate using feet(f) or meters(m)?"
    unit = gets.chomp
    return 'feet' if unit.downcase.start_with?('f')
    return 'meters' if unit.downcase.start_with?('m')
    puts "invalid entry|"
  end
end

def calculate_square(length, width)
  (length * width).round(2)
end

def convert_sq_feet_to_meters(square_feet)
  (square_feet / SQMETERS_TO_SQFEET).round(2)
end

def convert_sq_meters_to_feet(square_meters)
  (square_meters * SQMETERS_TO_SQFEET).round(2)
end

def calculate_sqmeters_sqfeet(length, width, unit)
  square = calculate_square(length, width)

  if unit == 'feet'
    square_feet = square
    square_meters = convert_sq_feet_to_meters(square_feet)
  else
    square_meters = square
    square_feet = convert_sq_meters_to_feet(square_meters)
  end

  return square_meters, square_feet
end

def say_room_dimensions(sq_m, sq_f, unit)
  if unit == 'feet'
    puts "The area of the room is #{sq_f} sq feet (#{sq_m} sq meters)"
  else
    puts "The area of the room is #{sq_m} sq meters (#{sq_f} sq feet)"
  end
end

## Main Program
unit = get_feet_or_meters
length = get_measurment('length', unit)
width = get_measurment('width', unit)

square_meters, square_feet = calculate_sqmeters_sqfeet(length, width, unit)

say_room_dimensions(square_meters, square_feet, unit)
