-- CREATE DATABASE testing;

-- \c testing

------------------------------------------------------------
--SCHEMA and DATA
------------------------------------------------------------

-- DROP TABLE IF EXISTS movies;
-- DROP TABLE IF EXISTS actors;
-- DROP TABLE IF EXISTS actors_movies;

-- CREATE TABLE movies (
--   id serial PRIMARY KEY,
--   title text NOT NULL,
--   year int NOT NULL CHECK (length(year::text) = 4),
--   run_time int NOT NULL CHECK (run_time >= 0)
-- );

-- INSERT INTO movies (title, "year", run_time)
-- VALUES
--   ('Gravity', 2013, 91),
--   ('M*A*S*H', 1970, 116),
--   ('My Fair Lady', 1964, 170),
--   ('Ocean''s Eleven', 2001, 116),
--   ('The Perfect Storm', 2000, 130),
--   ('While You Were Sleeping', 1995, 103),
--   ('2001: A Space Odyssey', 1968, 149);

-- CREATE TABLE actors (
--   id serial PRIMARY KEY,
--   name text NOT NULL
-- );

-- INSERT INTO actors (name)
-- VALUES
--   ('Abe Vigoda'),
--   ('Audrey Hepburn'),
--   ('Barbara Billingsley'),
--   ('Elliot Gould'),
--   ('George Clooney'),
--   ('Sandra Bullock');

---------------------------------------
-- MOVIES
--  id |          title          | year | run_time 
-- ----+-------------------------+------+----------
--   1 | Gravity                 | 2013 |       91
--   2 | M*A*S*H                 | 1970 |      116
--   3 | My Fair Lady            | 1964 |      170
--   4 | Ocean's Eleven          | 2001 |      116
--   5 | The Perfect Storm       | 2000 |      130
--   6 | While You Were Sleeping | 1995 |      103
--   7 | 2001: A Space Odyssey   | 1968 |      149
-- (7 rows)

-- ACTORS
--  id |        name         
-- ----+---------------------
--   1 | Abe Vigoda
--   2 | Audrey Hepburn
--   3 | Barbara Billingsley
--   4 | Elliot Gould
--   5 | George Clooney
--   6 | Sandra Bullock
-- (6 rows)

-- CREATE TABLE actors_movies (
--   id serial PRIMARY KEY,
--   movie_id int NOT NULL REFERENCES movies (id) ON DELETE CASCADE,
--   actor_id int NOT NULL REFERENCES actors (id) ON DELETE CASCADE,
--   UNIQUE(movie_id, actor_id)
-- );

-- INSERT INTO actors_movies (movie_id, actor_id)
-- VALUES
--   (4, 4),(4, 5),
--   (5, 5),
--   (2, 4),
--   (3, 2),
--   (1, 5), (1, 6),
--   (6, 6);


-- ALTER TABLE movies
--   ADD CHECK (year >= 1878);

------------------------------------------------------------
------------------------------------------------------------

-- SELECT title AS "Movie Title", "year" AS "Released", run_time AS "Run Time"
--   FROM movies
--   WHERE "year" < 2000
--   ORDER BY "Run Time" DESC
--   LIMIT 3;

-- SELECT name
--   FROM actors
--   WHERE id IN (SELECT actor_id
--                  FROM actors_movies
--                  WHERE movie_id = (SELECT id
--                                       FROM movies
--                                       WHERE title LIKE 'Gravity'));

-- SELECT title FROM movies m
--   JOIN actors_movies am ON m.id = am.movie_id
--   JOIN actors a ON a.id = am.actor_id
--   WHERE name = 'George Clooney';

-- SELECT "name" AS "Actor", count(am.id) AS "Number of Movies"
--   FROM actors a
--   JOIN actors_movies am
--     ON a.id = am.actor_id
--   GROUP BY "name"
--   HAVING count(movie_id) >= 2
--   ORDER BY "Number of Movies" DESC;

-- SELECT "name" "Actor",
--         count(movie_id) "Number of Movies",
--         round(avg(run_time)) "Average Run Time"
--     FROM movies m
--     RIGHT JOIN actors_movies am ON m.id = am.movie_id
--     RIGHT JOIN actors a ON a.id = am.actor_id
--     GROUP BY "name"
--     ORDER BY "Number of Movies" DESC, "Average Run Time" DESC;

-- SELECT "name" AS "Actor" FROM actors
--   WHERE id NOT IN (SELECT actor_id FROM actors_movies)
--   ORDER BY "name";

-- SELECT title AS "Movie Title" FROM movies
--   WHERE id NOT IN (SELECT movie_id FROM actors_movies)
--   ORDER BY title;

-- INSERT INTO movies (title, year, run_time)
-- VALUES ('Hello Kitty: The Meowtion Picture', 1672, 300);

-- SELECT CASE WHEN lag(title)
--               OVER(ORDER BY m.id) = title THEN NULL
--             ELSE title
--         END AS movie,
--         name AS actors FROM movies m
--         LEFT JOIN actors_movies am ON am.movie_id = m.id
--         LEFT JOIN actors a ON a.id = am.actor_id
--         ORDER By am.id;

-- SELECT name FROM actors a
--   JOIN actors_movies am
--     ON a.id = am.actor_id
--   JOIN movies m
--     ON am.movie_id = m.id
--   WHERE title = 'Gravity'
--   ORDER BY name DESC;

-- SELECT name
--   FROM actors
--   WHERE id IN (SELECT actor_id
--                  FROM actors_movies
--                  WHERE movie_id = (SELECT id
--                                       FROM movies
--                                       WHERE title LIKE 'Gravity'))
--   ORDER BY name DESC;

-- SELECT title FROM movies m
--   JOIN actors_movies am ON m.id = am.movie_id
--   JOIN actors a ON a.id = am.actor_id
--   WHERE name = 'George Clooney';