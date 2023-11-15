-- CREATE DATABASE auction;

-- \c auction

-- CREATE TABLE bidders (
--   id SERIAL PRIMARY KEY,
--   name TEXT NOT NULL
-- );

-- CREATE TABLE items (
--   id SERIAL PRIMARY KEY,
--   name TEXT NOT NULL,
--   initial_price DECIMAL(6,2) NOT NULL CHECK(initial_price BETWEEN 0.01 AND 1000.00), 
--   sales_price DECIMAL(6,2) CHECK(sales_price BETWEEN 0.01 AND  1000.00)
-- );

-- CREATE TABLE bids (
--  id SERIAL PRIMARY KEY,
--  bidder_id integer NOT NULL REFERENCES bidders(id) ON DELETE CASCADE,
--  item_id integer NOT NULL REFERENCES items(id) ON DELETE CASCADE,
--  amount DECIMAL(6, 2) NOT NULL CHECK(amount BETWEEN 0.01 AND 1000.00)
-- );

-- CREATE INDEX ON bids (bidder_id, item_id);

-- \copy bidders from ./bidders.csv WITH CSV HEADER
-- \copy items from ./items.csv WITH CSV HEADER
-- \copy bids from ./bids.csv WITH CSV HEADER

-- Exercise 2 - Conditional Subqueries: IN
-- SELECT name AS "Bid on Items" FROM items 
-- WHERE items.id IN (SELECT DISTINCT item_id FROM bids);

-- Exercise 3 - Conditional Subqueries: NOT IN
-- SELECT name AS "Bid on Items" FROM items 
-- WHERE items.id NOT IN (SELECT DISTINCT item_id FROM bids);

-- 4 - Conditional Subqueries: EXISTS
-- EXPLAIN ANALYZE SELECT name FROM bidders
-- WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

-- SELECT name
--   FROM bidders
--  INNER JOIN bids
--          ON bids.bidder_id = bidders.id
--  GROUP BY bidders.id
--  ORDER BY bidders.id;

-- 5 Query From a Transient Table
-- EXPLAIN ANALYZE SELECT MAX(bid_counts.count) FROM
--   (SELECT COUNT(bidder_id) FROM bids GROUP BY bidder_id) AS bid_counts;

-- EXPLAIN ANALYZE SELECT COUNT(bidder_id) AS max_bid FROM bids
--   GROUP BY bidder_id
--   ORDER BY max_bid DESC
--   LIMIT 1;

EXPLAIN ANALYZE SELECT name,
       (SELECT count(item_id) FROM bids WHERE item_id = items.id)
FROM items;

EXPLAIN ANALYZE SELECT name, COUNT(bids.id) 
  FROM items
  LEFT OUTER JOIN bids
               ON bids.item_id = items.id
  GROUP BY items.id
  ORDER BY items.id;

-- SELECT id FROM items 
--   WHERE ROW('Painting', 100.00, 250.00) =
--         ROW(name, initial_price, sales_price);

