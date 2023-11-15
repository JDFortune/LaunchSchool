-- DROP TABLE IF EXISTS public.films;
-- CREATE TABLE films (title varchar(255), year integer, genre varchar(100), director varchar(255), duration integer);

-- INSERT INTO films(title, year, genre, director, duration) VALUES ('Die Hard', 1988, 'action', 'John McTiernan', 132);  
-- INSERT INTO films(title, year, genre, director, duration) VALUES ('Casablanca', 1942, 'drama', 'Michael Curtiz', 102);  
-- INSERT INTO films(title, year, genre, director, duration) VALUES ('The Conversation', 1974, 'thriller', 'Francis Ford Coppola', 113);  
-- INSERT INTO films(title, year, genre, director, duration) VALUES ('1984', 1956, 'scifi', 'Michael Anderson', 90);  
-- INSERT INTO films(title, year, genre, director, duration) VALUES ('Tinker Tailor Soldier Spy', 2011, 'espionage', 'Tomas Alfredson', 127);  
-- INSERT INTO films(title, year, genre, director, duration) VALUES ('The Birdcage', 1996, 'comedy', 'Mike Nichols', 118);

-- ALTER TABLE films ALTER COLUMN title SET NOT NULL;
-- ALTER TABLE films ALTER COLUMN year SET NOT NULL;
-- ALTER TABLE films ALTER COLUMN genre SET NOT NULL;
-- ALTER TABLE films ALTER COLUMN director SET NOT NULL;
-- ALTER TABLE films ALTER COLUMN duration SET NOT NULL;

-- ALTER TABLE films DROP CONSTRAINT title_unique;
-- ALTER TABLE films
-- ADD CONSTRAINT check_title_length CHECK (length(title) >= 1);

-- INSERT INTO films
-- (title, year, genre, director, duration)
-- VALUES
-- ('', 1984, 'ghost', 'Malcom', 125);

-- ALTER TABLE films DROP CONSTRAINT check_title_length;

-- ALTER TABLE films ADD CONSTRAINT year_range CHECK (year BETWEEN 1900 AND 2100);

-- ALTER TABLE films ADD CONSTRAINT director_name
--   CHECK (length(director) >= 3 AND position(' ' IN director) > 0);

-- UPDATE films SET director = 'Johnny' WHERE title = 'Die Hard';

-- CREATE TABLE error_check (
--   id serial,
--   name varchar(20) NOT NULL DEFAULT NULL
-- );