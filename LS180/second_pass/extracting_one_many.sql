-- CREATE TABLE directors (
--   id serial PRIMARY KEY,
--   name text NOT NULL
-- );

-- ALTER TABLE films ADD COLUMN director_id int REFERENCES directors (id);

-- INSERT INTO directors ("name")
-- VALUES
-- ('John McTiernan'),
-- ('Michael Curtiz'),
-- ('Francis Ford Coppola'),
-- ('Michael Anderson'),
-- ('Francis Ford Coppola'),
-- ('Tomas Alfredson'),
-- ('Mike Nichols');

-- DELETE FROM directors WHERE id = 5;

-- UPDATE films SET director_id = 2 WHERE director = 'Michael Curtiz';
-- UPDATE films SET director_id = 3 WHERE director = 'Francis Ford Coppola';
-- UPDATE films SET director_id = 4 WHERE director = 'Michael Anderson';
-- UPDATE films SET director_id = 6 WHERE director = 'Tomas Alfredson';
-- UPDATE films SET director_id = 7 WHERE director = 'Mike Nichols';

-- ALTER TABLE films DROP COLUMN director;

-- ALTER TABLE directors ADD CHECK (LENGTH("name") >= 1 AND POSITION(' ' in "name") > 0);