-- CREATE DATABASE extrasolar;

-- \c extrasolar
-- DROP SEQUENCE IF EXISTS star_id_seq;

-- CREATE SEQUENCE star_id_seq;

-- CREATE TABLE start (
--   id int PRIMARY KEY DEFAULT nextval('star_id_seq'),
--   name varchar(25) UNIQUE NOT NULL,
--   distance int NOT NULL CHECK (distance > 0),
--   spectral_type char(1) CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K', 'M')),
--   companions int NOT NULL CHECK (companions >= 0)
-- );

-- CREATE TABLE planets (
--   id serial PRIMARY KEY,
--   designation char(1) UNIQUE CHECK (designation BETWEEN 'a' AND 'z'),
--   mass int NOT NULL CHECK (mass > 0)
-- );

-- ALTER TABLE planets ADD COLUMN star_id int NOT NULL REFERENCES stars (id);

-- ALTER TABLE stars ALTER COLUMN "name" TYPE varchar(50);

-- ALTER TABLE stars ALTER COLUMN distance TYPE numeric;

-- ALTER TABLE stars ALTER COLUMN spectral_type SET NOT NULL;

-- ALTER TABLE stars DROP CONSTRAINT start_spectral_type_check;

-- CREATE TYPE spectral_type_enum  AS ENUM('O', 'B', 'A', 'F', 'G', 'K', 'M');

-- ALTER TABLE stars
--   ALTER COLUMN spectral_type TYPE spectral_type_enum
--                              USING spectral_type::spectral_type_enum;

-- ALTER TABLE stars
--   RENAME CONSTRAINT start_companions_check
--     TO stars_companions_check;

-- ALTER TABLE stars
--   RENAME CONSTRAINT start_distance_check
--     TO stars_distance_check;

-- ALTER TABLE planets ALTER COLUMN mass TYPE numeric;

-- ALTER TABLE planets ADD COLUMN semi_major_axis numeric NOT NULL;

-- CREATE TABLE moons (
--   id serial PRIMARY KEY,
--   designation int NOT NULL CHECK (designation > 0),
--   semi_major_axis numeric CHECK (semi_major_axis > 0.0),
--   mass numeric CHECK (mass > 0.0),
--   planet_id int NOT NULL REFERENCES planets (id)
-- );