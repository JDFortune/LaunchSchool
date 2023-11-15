-- CREATE TABLE colors (id serial, name text);
-- 
-- INSERT INTO colors (name)
-- VALUES
-- ('red'),
-- ('green'),
-- ('blue');

-- CREATE SEQUENCE counter;

-- SELECT nextval('counter');

-- ALTER TABLE films
-- ADD COLUMN id serial PRIMARY KEY;

ALTER TABLE films DROP CONSTRAINT films_pkey;