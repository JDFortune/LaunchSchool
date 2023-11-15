-- CREATE TABLE directors_films (
--   id serial PRIMARY KEY,
--   director_id int NOT NULL REFERENCES directors (id) ON DELETE CASCADE,
--   film_id int NOT NULL REFERENCES films (id) ON DELETE CASCADE,
--   UNIQUE(director_id, film_id)
-- );

-- INSERT INTO directors_films (film_id, director_id)
-- VALUES
--  (1, 1),
--  (2, 2),
--  (3, 3),
--  (4, 4),
--  (5, 5),
--  (6, 6),
--  (7, 3),
--  (8, 7),
--  (9, 8),
--  (10, 4);

-- ALTER TABLE films DROP COLUMN director_id;

-- SELECT f.id as f_id, d.id as d_id, title, name FROM films f
--   JOIN directors_films df ON f.id = df.film_id
--   JOIN directors d ON d.id = df.director_id
--   ORDER BY title;

-- UPDATE directors_films SET director_id = 5 WHERE film_id = 10;

-- INSERT INTO films (title, "year", genre, duration)
-- VALUES
-- ('Fargo', 1996, 'comedy', 98),
-- ('No Country for Old Men', 2007, 'western', 122),
-- ('Sin City', 2005, 'crime', 124),
-- ('Spy Kids', 2001, 'scifi', 88);

-- INSERT INTO directors (name)
-- VALUES
-- ('Joel Coen'), ('Ethan Coen'),
-- ('Frank Miller'), ('Robert Rodriguez');

-- SELECT id, title FROM films;
-- SELECT id, name FROM directors;

-- INSERT INTO directors_films (film_id, director_id)
-- VALUES
-- (11, 9), (12, 9), (12, 10), (13, 11), (13, 12), (14, 12);

-- SELECT title, string_agg(name, ', ') as directors
-- FROM films f
-- JOIN directors_films df ON df.film_id = f.id
-- JOIN directors d ON d.id = df.director_id
-- GROUP BY title
-- ORDER BY title;

-- SELECT name AS director, count(df.film_id) AS films
--   FROM directors d
--     JOIN directors_films df ON d.id = df.director_id
--   GROUP BY d.id
--   ORDER BY films DESC, name ASC;