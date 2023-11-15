-- -- Create the workshop database
-- CREATE DATABASE workshop;

-- --Connect to workshop
-- \c workshop

-- -- Create a devices Table
-- CREATE TABLE devices (
--   id serial PRIMARY KEY,
--   name text NOT NULL,
--   created_at timestamp DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create a part table with foreign key relating to devices
-- CREATE TABLE parts (
--   id serial PRIMARY KEY,
--   part_number integer UNIQUE NOT NULL,
--   device_id integer NOT NULL REFERENCES devices (id)
-- );

-- ALTER TABLE parts
--  ALTER COLUMN device_id DROP NOT NULL;
-- Set up two different records for devices
-- INSERT INTO devices (name)
-- VALUES
-- ('Accelerometer'),
-- ('Gyroscope');

-- INSERT INTO parts (part_number, device_id)
--   VALUES
--   (12, 1),
--   (23, 1),
--   (37, 1);

-- INSERT INTO parts (part_number, device_id)
--   VALUES
--   (5647, 2),
--   (534, 2),
--   (537, 2),
--   (1433, 2),
--   (8778, 2);

-- INSERT INTO parts (part_number)
--   VALUES (50), (60), (70);


-- INNER JOIN
-- SELECT name, part_number
--   FROM devices
--   JOIN parts
--     ON devices.id = parts.device_id;

-- SELECT part_number
-- SELECT * FROM parts WHERE part_number::text LIKE '3%';

-- SELECT name, count(device_id)
--   FROM devices
--   LEFT OUTER JOIN parts
--     ON parts.device_id = devices.id
--   GROUP BY name
--   ORDER BY name DESC;

-- SELECT part_number, device_id FROM parts WHERE device_id IS NOT NULL; 
-- SELECT part_number, device_id FROM parts WHERE device_id IS NULL;

-- INSERT INTO devices (name) VALUES ('Magnetometer');
-- INSERT INTO parts (part_number, device_id) VALUES (42, 3);

-- SELECT name AS oldest_device
--   FROM devices
--   ORDER BY created_at
--   LIMIT 1;

-- UPDATE parts SET device_id = 1
-- WHERE part_number = 1433 OR part_number = 8778;

-- SELECT * FROM parts;
-- UPDATE parts SET device_id = 2 WHERE part_number = ( SELECT min(part_number) FROM parts);

-- DELETE FROM parts WHERE device_id = 1;
-- DELETE FROM devices WHERE name = 'Accelerometer';

