-- SELECT count(id) FROM tickets;

-- SELECT count(DISTINCT(customer_id)) FROM tickets;

-- SELECT ROUND(count(DISTINCT(customer_id))
--             / count(DISTINCT(c.id))::decimal * 100,
--              2) AS percent
--   FROM customers AS c
--   LEFT JOIN tickets
--     ON tickets.customer_id = c.id;

-- SELECT e.name, COUNT(t.id) AS popularity
--   FROM events as e
--   LEFT OUTER JOIN tickets AS t
--     ON t.event_id = e.id
--   GROUP BY e.id
--   ORDER BY popularity DESC;

-- SELECT c.id, c.email, count(DISTINCT (t.event_id))
--   FROM customers AS c
--   JOIN tickets AS t ON c.id = t.customer_id
--   GROUP BY c.id
--   HAVING count(DISTINCT (t.event_id)) = 3;

-- SELECT e.name, starts_at, sections.name AS section, row, s.number AS seat
--   FROM events AS e
--   JOIN tickets AS t ON e.id = t.event_id
--   JOIN seats AS s ON t.seat_id = s.id
--   JOIN sections ON sections.id = s.section_id
--   JOIN customers AS c on t.customer_id = c.id
--   WHERE c.email LIKE 'gennaro.rath%';
-- or with the subquery below
-- WHERE tickets.customer_id = (SELECT id FROM customers WHERE email LIKE 'gennaro.rath%');
