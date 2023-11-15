-- SELECT ROUND( COUNT(DISTINCT t.customer_id)
--              / COUNT(DISTINCT c.id)::decimal * 100,
--              2)
--              AS percent
--   FROM customers AS c
--   LEFT JOIN tickets as t
--   ON c.id = t.customer_id;

-- SELECT e.name, COUNT(t.id) as popularity
--   FROM events AS e
--   LEFT OUTER JOIN tickets AS t
--     ON e.id = t.event_id
--   GROUP BY e.id
--   ORDER BY popularity DESC;

-- SELECT c.id, c.email, count(DISTINCT t.event_id)
--   FROM customers AS c
--   JOIN tickets AS t
--     ON c.id = t.customer_id
--   GROUP BY c.id
--   HAVING count(DISTINCT t.event_id) = 3;

SELECT e.name AS event,
       e.starts_at,
       sec.name AS section,
       s.row,
       s.number AS seat
  FROM events AS e
  JOIN tickets AS t
    ON e.id = t.event_id
  JOIN customers AS c
    ON t.customer_id = c.id
  JOIN seats AS s
    ON t.seat_id = s.id
  JOIN sections AS sec
    ON sec.id = s.section_id
  WHERE c.email = 'gennaro.rath@mcdermott.co';