-- billing database
-- customer can have many services
-- every service can have many customers (M:M)
-- Data Tables
--  customers, services, customers_services

-- CREATE TABLE customers (
--   id serial PRIMARY KEY,
--   name text NOT NULL,
--   payment_token char(8) CHECK (payment_token = upper(payment_token) AND payment_token BETWEEN 'A' AND 'Z')
-- )

-- CREATE TABLE services (
--   id serial PRIMARY KEY,
--   description text NOT NULL,
--   price numeric(10,2) CHECK (price > 0.00)
-- )

-- INSERT INTO customers
-- (name, payment_token)
-- VALUES
-- ('Pat Johnson', 'XHGOAHEQ'),
-- ('Nancy Monreal', 'JKWQPJKL'),
-- ('Lynn Blake', 'KLZXWEEE'),
-- ('Chen Ke-Hua', 'KWETYCVX'),
-- ('Scot Lakso', 'UUEAPQPS'),
-- ('Jim Pornot', 'XKJEYAZA');

-- INSERT INTO services
-- (description, price)
-- VALUES
-- ('Unix Hosting', 5.95),
-- ('DNS', 4.95),
-- ('Whois Registration', 1.95),
-- ('High Bandwidth', 15.00),
-- ('Business Support', 250.00),
-- ('Dedicated Hosting', 50.00),
-- ('Bulk Email', 250.00),
-- ('One-to-one Training', 999.00);

-- CREATE TABLE customers_services (
--   id serial PRIMARY KEY,
--   customer_id integer NOT NULL REFERENCES customers (id) ON DELETE CASCADE,
--   service_id integer NOT NULL REFERENCES services (id),
--   service_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   UNIQUE(customer_id, service_id)
-- );

-- INSERT INTO customers_services
-- (customer_id, service_id)
-- VALUES
-- (1, 1), (1, 2), (1, 3),
-- (3, 1), (3, 2), (3, 3), (3, 4), (3,5),
-- (4, 1), (4, 4),
-- (5, 1), (5, 2), (5, 6),
-- (6, 1), (6, 6), (6, 7);

-- Used to get all the name, all services, and billing total for each customer
-- SELECT customers.name, string_agg(services.description, ', ') AS services, sum(services.price) AS billing
--   FROM customers
--     JOIN customers_services ON customers.id = customers_services.customer_id
--     JOIN services ON services.id = customers_services.service_id
--   GROUP BY customers.name
--   ORDER BY billing DESC;

-- SELECT DISTINCT(customers.*) FROM customers
-- JOIN customers_services ON customers_services.id = customers_services.customer_id;

-- SELECT  c.* FROM customers AS c
--   LEFT OUTER JOIN customers_services AS cs
--                ON c.id = cs.customer_id
--   WHERE cs.service_id IS NULL;

-- SELECT c.*, s.* FROM customers AS c
--   FULL JOIN customers_services AS cs
--          ON cs.customer_id = c.id
--   FULL JOIN services AS s
--          ON cs.service_id = s.id
--   WHERE c.name IS NOT NULL AND s.id IS NULL
--         OR
--         c.name IS NULL AND s.id IS NOT NULL;

-- SELECT c.*, s.* FROM customers AS c
--   FULL JOIN customers_services AS cs
--          ON cs.customer_id = c.id
--   FULL JOIN services AS s
--          ON cs.service_id = s.id
--   WHERE s.id IS NULL OR c.name IS NULL;

-- SELECT * FROM customers
-- WHERE id NOT IN (SELECT customer_id FROM customers_services);

-- SELECT description FROM services
-- WHERE id NOT IN (SELECT service_id FROM customers_services);

-- SELECT s.description FROM customers_services AS cs
--   RIGHT OUTER JOIN services AS s
--                 ON s.id = cs.service_id
--   WHERE cs.service_id IS NULL;

-- SELECT name, string_agg(description, ', ') AS services FROM customers c
--   LEFT JOIN customers_services
--     ON customer_id = c.id
--   LEFT JOIN services s
--     ON service_id = s.id
--   GROUP BY name
--   ORDER BY count(description) DESC, name ASC;

-- SELECT customers.name,
--        lag(customers.name, count(customers.id))
--          OVER (ORDER BY customers.name)
--          AS previous,
--        services.description
-- FROM customers
-- LEFT OUTER JOIN customers_services
--              ON customer_id = customers.id
-- LEFT OUTER JOIN services
--              ON services.id = service_id;

-- SELECT
--       CASE WHEN lag(name)
--                 OVER (ORDER BY name) = name THEN NULL
--             ELSE name
--       END AS name,
--       description
--   FROM customers
--   LEFT OUTER JOIN customers_services
--                ON customer_id = customers.id
--   LEFT OUTER JOIN services
--                ON services.id = service_id;

-- SELECT description, COUNT(cs.id) FROM services s
--   JOIN customers_services cs
--     ON service_id = s.id
--   GROUP BY description
--   HAVING COUNT(cs.id) > 2
--   ORDER BY description;

-- SELECT SUM(price) AS gross
--   FROM services
--   JOIN customers_services
--     ON service_id = services.id;

-- INSERT INTO customers (name, payment_token)
--   VALUES ('John Doe', 'EYODHLCN');

-- INSERT INTO customers_services (customer_id, service_id)
--   VALUES (7, 1), (7, 2), (7, 3);

-- -- Actual revinue
-- SELECT sum(price) 
--   FROM services s
--   JOIN customers_services cs ON s.id = cs.service_id
--   WHERE price > 100.00;

-- -- Hypothetical Max
-- SELECT sum(price)
--   FROM customers, services
--   WHERE price > 100.00;

-- DELETE FROM customers_services WHERE service_id = 7;
-- DELETE FROM customers WHERE name LIKE 'Chen%';
-- DELETE FROM services WHERE description LIKE 'Bulk%';