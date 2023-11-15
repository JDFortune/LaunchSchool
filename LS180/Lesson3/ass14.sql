-- CREATE TABLE directors_films (
--   id serial PRIMARY KEY,
--   director_id integer REFERENCES directors (id) ON DELETE CASCADE,
--   film_id integer REFERENCES films (id) ON DELETE CASCADE,
--   UNIQUE(film_id, director_id)
-- );

-- INSERT INTO directors_films
-- (director_id, film_id)
-- VALUES
-- (1, 1),
-- (2, 2),
-- (3, 3),
-- (4, 4),
-- (5, 5),
-- (6, 6),
-- (3, 7),
-- (7, 8),
-- (8, 9),
-- (4, 10);

-- ALTER TABLE films DROP COLUMN director_id;

-- SELECT title, name
--   FROM films
--     JOIN directors_films ON directors_films.film_id = films.id
--     JOIN directors ON directors_films.director_id = directors.id
--   ORDER BY title;

-- INSERT INTO directors (name)
-- VALUES
-- ('Joel Coen'),
-- ('Ethan Coen'),
-- ('Frank Miller'),
-- ('Robert Rodriguez');

-- INSERT INTO filmS
-- (title, "year", genre, duration)
-- VALUES
-- ('Fargo', 1996, 'comedy', 98),
-- ('No Country For Old Men', 2007, 'western', 122),
-- ('Sin City', 2005, 'crime', 124),
-- ('Spy Kids', 2001, 'scifi', 88);

-- INSERT INTO directors_films
-- (director_id, film_id)
-- VALUES
-- (9, 11),
-- (9, 12),
-- (10, 12),
-- (11, 13),
-- (12, 13),
-- (12, 14);

-- SELECT title, string_agg(name, ', ')
--   FROM films
--     JOIN directors_films ON directors_films.film_id = films.id
--     JOIN directors ON directors_films.director_id = directors.id
--   GROUP BY title
--   ORDER BY title;

SELECT name as director, count(film_id) AS films
  FROM directors
    INNER JOIN directors_films ON directors_films.director_id = directors.id
  GROUP BY directors.id
  ORDER BY films DESC, director ASC;