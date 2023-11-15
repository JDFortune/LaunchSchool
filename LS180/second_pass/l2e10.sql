-- ALTER TABLE films
--   ALTER COLUMN title SET NOT NULL,
--   ALTER COLUMN year SET NOT NULL,
--   ALTER COLUMN genre SET NOT NULL,
--   ALTER COLUMN director SET NOT NULL,
--   ALTER COLUMN duration SET NOT NULL;

-- ALTER TABLE films
--  ADD UNIQUE (title);

-- ALTER TABLE films DROP CONSTRAINT films_title_key;

-- ALTER TABLE films ADD CHECK (length(title) > 0);

-- INSERT INTO films (title, year, genre, director, duration)
-- VALUES ('', 1995, 'comedy', 'Jim Morrison', 152);

-- ALTER TABLE films DROP CONSTRAINT films_title_check;

-- ALTER TABLE films ADD CHECK (year BETWEEN 1900 AND 2100);

-- ALTER TABLE films ADD CHECK (LENGTH(director) >= 3 AND POSITION(' ' in director) > 0);