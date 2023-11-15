-- CREATE TABLE stars (
--   id serial PRIMARY KEY,
--   name varchar(25) UNIQUE NOT NULL,
--   distance integer NOT NULL CHECK (distance > 0),
--   spectral_type char(1) CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K', 'M')),
--   companions integer NOT NULL CHECK (companions >= 0)
-- );

-- CREATE TABLE planets (
--   id serial PRIMARY KEY,
--   designation char(1) CHECK (designation BETWEEN 'a' AND 'z'),
--   mass integer
-- )

-- ALTER TABLE planets ADD COLUMN star_id integer NOT NULL REFERENCES stars (id) ON DELETE CASCADE;

-- ALTER TABLE planets ADD CONSTRAINT designation_unique UNIQUE (designation);

-- ALTER TABLE stars ALTER COLUMN "name" TYPE varchar(50);

-- ALTER TABLE stars ALTER distance TYPE numeric;

-- ALTER TABLE stars
-- ALTER COLUMN distance TYPE integer;

-- INSERT INTO stars (name, distance, spectral_type, companions)
--            VALUES ('Alpha Orionis', 643, 'M', 9);

-- ALTER TABLE stars
-- ALTER COLUMN distance TYPE numeric ;

-- ALTER TABLE stars
--   ADD CHECK (spectral_type IN ('o', 'B', 'A', 'F', 'G', 'K', 'M')),
--   ALTER COLUMN spectral_type SET NOT NULL;

-- ALTER TABLE stars DROP CONSTRAINT stars_spectral_type_check1;

-- CREATE TYPE spectral_type_enum AS ENUM('O', 'B', 'A', 'F', 'G', 'K', 'M');

-- ALTER TABLE stars
-- ALTER COLUMN spectral_type TYPE spectral_type_enum
--                            USING spectral_type::spectral_type_enum;

-- ALTER TABLE planets
--   ALTER COLUMN mass TYPE numeric,
--   ALTER COLUMN mass SET NOT NULL,
--   ADD CHECK (mass >= 0),
--   ALTER COLUMN designation SET NOT NULL;

-- ALTER TABLE planets
--   ADD COLUMN semi_major_axis numeric NOT NULL;

-- Add a Moons Talble

CREATE TABLE moons (
  id serial PRIMARY KEY,
  designation integer UNIQUE NOT NULL CHECK (designation > 0),
  semi_major_axis numeric CHECK (semi_major_axis > 0.0),
  mass numeric CHECK (mass > 0.0),
  planet_id integer NOT NULL REFERENCES planets (id)
);