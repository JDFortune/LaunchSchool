-- CREATE TABLE devices (
--   id serial PRIMARY KEY,
--   name text NOT NULL,
--   created_at timestamp DEFAULT NOW()
-- );

-- CREATE SEQUENCE parts_id_seq;

-- CREATE TABLE parts (
--   id int PRIMARY KEY DEFAULT nextval('parts_id_seq'),
--   part_number int NOT NULL UNIQUE,
--   device_id int REFERENCES devices (id)
-- );

-- INSERT INTO devices (name) VALUES ('Accelerometer'), ('Gyroscope');

-- INSERT INTO parts (device_id, part_number)
-- VALUES
-- (1, 25), (1, 26), (1, 34),
-- (2, 137), (2, 618), (2, 426), (2, 230), (2, 132),
-- (NULL, 487), (NULL, 5453), (NULL, 1260);

-- SELECT part_number FROM parts WHERE part_number::text LIKE '3%';

-- SELECT name, count(parts.id) FROM devices
-- LEFT OUTER JOIN parts ON parts.device_id = devices.id
-- GROUP BY name;

-- SELECT name, COUNT(device_id)
-- FROM devices
-- JOIN parts ON devices.id = parts.device_id
-- GROUP BY name
-- ORDER BY name DESC;

-- SELECT part_number, device_id FROM parts WHERE device_id IS NOT NULL;
-- SELECT part_number, device_id FROM parts WHERE device_id IS NULL;

-- INSERT INTO devices (name) VALUES ('Magnetometer');
-- INSERT INTO parts (part_number, device_id) VALUES (39, 3);

-- SELECT * FROM devices;
-- SELECT * FROM parts;

-- SELECT name, part_number FROM devices
-- INNER JOIN parts ON parts.device_id = devices.id;

-- SELECT name AS oldest_device
--   FROM devices
-- ORDER BY created_at
-- LIMIT 1;

-- SELECT id FROM parts
--     WHERE device_id = 2 
--     ORDER BY id DESC
--     LIMIT 2;

-- UPDATE parts SET device_id = 1
--   WHERE id IN (SELECT id FROM parts
--                 WHERE device_id = 2 
--                 ORDER BY id DESC
--                 LIMIT 2);

-- UPDATE parts SET device_id = 2
-- WHERE part_number = (SELECT min(part_number) FROM parts);

-- DELETE FROM parts WHERE device_id = 1;
-- DELETE FROM devices WHERE id = 1;