-- CREATE TABLE employees (
--     first_name character varying(100),
--     last_name character varying(100),
--     department character varying(100),
--     vacation_remaining integer NOT NULL
-- );

-- INSERT INTO employees VALUES ('Leonardo', 'Ferreira', 'finance', 14);
-- INSERT INTO employees VALUES ('Sara', 'Mikaelsen', 'operations', 14);
-- INSERT INTO employees VALUES ('Lian', 'Ma', 'marketing', 13);
-- INSERT INTO employees (first_name, last_name) VALUES ('Haiden', 'Smith');

-- CREATE TABLE temperatures (
--   "date" date NOT NULL,
--   low integer NOT NULL,
--   high integer NOT NULL
-- );

-- INSERT INTO temperatures
--   ("date", low, high)
--   VALUES
--   ('2016-03-01', 34, 43),
--   ('2016-03-02', 32, 44),
--   ('2016-03-03', 31, 47),
--   ('2016-03-04', 33, 43),
--   ('2016-03-05', 39, 46),
--   ('2016-03-06', 32, 43),
--   ('2016-03-07', 29, 32),
--   ('2016-03-08', 23, 31),
--   ('2016-03-09', 17, 28);

ALTER TABLE temperatures
  ADD COLUMN rainfall integer NOT NULL DEFAULT 0;