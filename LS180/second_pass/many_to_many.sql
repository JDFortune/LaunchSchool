-- CREATE DATABASE billing;

-- \c billing

-- CREATE TABLE customers (
--   id serial PRIMARY KEY,
--   name text NOT NULL,
--   payment_token char(8) NOT NULL CHECK(payment_token ~ '^[A-Z]{8}$')
-- );

-- CREATE TABLE services (
--   id serial PRIMARY KEY,
--   description text NOT NULL,
--   price numeric(10,2) NOT NULL CHECK (price >= 0.0)
-- );

-- INSERT INTO customers
-- (id, "name", payment_token)
-- VALUES
-- (1, 'Pat Johnson', 'XHGOAHEQ'),
-- (2, 'Nancy Monreal', 'JKWQPJKL'),
-- (3, 'Lynn Blake', 'KLZXWEEE'),
-- (4, 'Chen Ke-Hua', 'KWETYCVX'),
-- (5, 'Scott Lakso', 'UUEAPQPS'),
-- (6, 'Jim Pornot', 'XKJEYAZA');

-- INSERT INTO services
-- (id, description, price)
-- VALUES
-- (1, 'Unix Hosting', 5.95),
-- (2, 'DNS', 4.95),
-- (3, 'Whois Registration', 1.95),
-- (4, 'High Bandwidth', 15.00),
-- (5, 'Business Support', 250.00),
-- (6, 'Dedicated Hosting', 50.00),
-- (7, 'Bulk Email', 250.00),
-- (8, 'One-to-one Training', 999.00);

-- CREATE SEQUENCE accounts_id_seq;

-- CREATE TABLE accounts (
--   id int PRIMARY KEY DEFAULT nextval('accounts_id_seq'),
--   customer_id int NOT NULL REFERENCES customers (id) ON DELETE CASCADE,
--   service_id int NOT NULL REFERENCES services (id) ON DELETE CASCADE,
--   UNIQUE(customer_id, service_id)
-- );

-- INSERT INTO accounts (customer_id, service_id)
-- VALUES
-- (1, 1), (1, 2),(1, 3),
-- (3, 1), (3, 2), (3, 3), (3, 4), (3, 5),
-- (4, 1), (4, 4),
-- (5, 1), (5, 2), (5, 6),
-- (6, 1), (6, 6), (6, 7);

-- SELECT CASE WHEN lag(name) OVER(ORDER BY name) = name THEN NULL
--          ELSE name
--        END AS name,  description
-- FROM customers
-- JOIN accounts ON accounts.customer_id = customers.id
-- JOIN services ON accounts.service_id = services.id;

-- SELECT description, count(service_id)
--   FROM services
--   JOIN accounts ON accounts.service_id = services.id
--   GROUP BY description
--   HAVING count(customer_id) >= 3
--   ORDER BY description;

-- SELECT description, COUNT(service_id)
-- FROM services
-- LEFT OUTER JOIN accounts ON services.id = accounts.service_id
-- GROUP BY description
-- HAVING COUNT(customer_id) >= 3;

-- SELECT sum(price) as gross FROM accounts
-- JOIN services ON services.id = accounts.service_id;

-- INSERT INTO customers ("name", payment_token)
-- VALUES ( 'John Doe', 'EYODHLCN');


-- INSERT INTO accounts (customer_id, service_id)
-- VALUES
-- (7, 1), (7, 2), (7, 3);

-- SELECT sum(price) 
-- FROM services
-- INNER JOIN accounts
          -- ON services.id = accounts.service_id
-- WHERE price > 100.00;

-- SELECT sum(price)
-- FROM customers
-- CROSS JOIN services
-- WHERE price > 100;

-- DELETE FROM services WHERE description = 'Bulk Email';
-- DELETE FROM customers WHERE name = 'Chen Ke-Hua';