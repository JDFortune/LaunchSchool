-- SELECT state, count(id) FROM people
--   GROUP BY state
--   ORDER BY count DESC
--   LIMIT 10;


-- SELECT substr(email, strpos(email, '@') + 1) domain,
--         count(id)
--   FROM people
--   GROUP BY domain
--   ORDER BY count DESC;

-- DELETE FROM people WHERE id = 3399;

-- DELETE FROM people WHERE state = 'CA';

-- UPDATE people SET given_name = UPPER(given_name) WHERE email LIKE '%teleworm.us';

-- DELETE FROM people;

-- DROP TABLE people;


-- INSERT INTO temperatures
-- (date, low, high)
-- VALUES
-- ('2016-03-01', 34, 43),
-- ('2016-03-02', 32, 44),
-- ('2016-03-03', 31, 47),
-- ('2016-03-04', 33, 42),
-- ('2016-03-05', 39, 46),
-- ('2016-03-06', 32, 43),
-- ('2016-03-07', 29, 32),
-- ('2016-03-08', 23, 31),
-- ('2016-03-09', 17, 28);

-- SELECT "date", ROUND((high + low) / 2.0 , 1) as average
--   FROM temperatures
--   WHERE extract(day from "date") BETWEEN 2 AND 8
--   ORDER BY "date";

-- UPDATE temperatures SET rainfall = ROUND((high + low) / 2) - 35 WHERE  ROUND((high + low) / 2) > 35;

-- ALTER TABLE temperatures ALTER COLUMN rainfall TYPE numeric(6,3);

-- UPDATE temperatures SET rainfall = ROUND(rainfall * 0.039, 3);

ALTER TABLE temperatures RENAME TO weather;