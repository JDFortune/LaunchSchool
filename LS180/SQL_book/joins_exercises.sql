-- SELECT u.full_name FROM users u
--     WHERE u.id NOT IN (
--       SELECT c.user_id FROM checkouts c
--     );

-- SELECT c.name AS "country_name", c.capital
--   FROM countries AS c
--   JOIN continents AS con
--   ON c.continent_id = con.id
--   WHERE con.continent_name = 'Europe'
--   ORDER BY c.name;

-- 3, 4, 5
-- SELECT s.first_name, s.last_name, a.album_name, a.released
-- FROM singers AS s JOIN albums AS a
-- ON s.id = a.singer_id
-- WHERE s.deceased = false AND
-- date_part('year', a.released) >= 1980 AND
-- date_part('year', a.released) <= 1989
-- ORDER BY s.date_of_birth DESC;

-- 5
-- SELECT s.first_name, s.last_name
-- FROM singers AS s
-- LEFT JOIN albums AS a
-- ON s.id = a.singer_id
-- WHERE a.singer_id IS NULL;

-- 6
-- SELECT first_name, last_name FROM singers
-- WHERE id NOT IN (SELECT singer_id FROM albums);

-- 7, 8, 9
-- orders = (id, customer_id)

-- order_items = (id, order_id, product_id)
-- products = (product_name)
-- SELECT DISTINCT c.customer_name AS "Customer who likes Fries"
-- FROM customers AS c JOIN orders AS o 
-- ON c.id = o.customer_id
-- JOIN order_items AS oi
-- ON o.id = oi.order_id
-- JOIN products AS p
-- ON oi.product_id = p.id
-- WHERE p.product_name = 'Fries';

-- 10
-- SELECT sum(p.product_cost) AS "Natasha's Total"
-- FROM customers AS c JOIN orders AS o 
-- ON c.id = o.customer_id
-- JOIN order_items AS oi
-- ON o.id = oi.order_id
-- JOIN products AS p
-- ON oi.product_id = p.id
-- WHERE c.customer_name = 'Natasha O''Shea';

-- 11
-- orders = id
-- order_items = order_id, product_id
-- products = 
SELECT p.product_name, count(oi.id)
FROM products AS p JOIN order_items AS oi
ON p.id = oi.product_id
GROUP BY p.product_name
ORDER BY p.product_name ASC;
