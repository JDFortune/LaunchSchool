-- CREATE DATABASE auction;

-- \c auction

-- CREATE TABLE bidders(
--   id serial PRIMARY KEY,
--   name text NOT NULL
-- );

-- CREATE TABLE items(
--   id serial PRIMARY KEY,
--   name text NOT NULL,
--   initial_price numeric(6,2) NOT NULL CHECK(initial_price BETWEEN 0.01 AND 1000.00),
--   sales_price numeric(6,2) CHECK(sales_price BETWEEN 0.01 AND 1000.00)
-- );

-- CREATE SEQUENCE bids_id_seq;

-- CREATE TABLE bids(
--   id integer PRIMARY KEY DEFAULT nextval('bids_id_seq'),
--   bidder_id int NOT NULL REFERENCES bidders (id) ON DELETE CASCADE,
--   item_id int NOT NULL,
--   amount numeric(6,2) NOT NULL CHECK (amount BETWEEN 0.01 AND 1000.00),
--   FOREIGN KEY (item_id)
--     REFERENCES items (id)
--       ON DELETE CASCADE,
--   UNIQUE(bidder_id, item_id)
-- );

-- CREATE INDEX ON bids (bidder_id, item_id);

-- \copy bidders from 'bidders.csv' WITH DELIMITER ',' CSV HEADER

-- \copy items from 'items.csv' WITH DELIMITER ',' CSV HEADER
-- \copy bids from 'bids.csv' WITH DELIMITER ',' CSV HEADER

-- LS Answer for copying from csv --
-- Copy data for bidders from the csv file to the bidders table
-- \copy bidders FROM 'bidders.csv' WITH HEADER CSV

-- Copy data for items from the csv file to the items table
-- \copy items FROM 'items.csv' WITH HEADER CSV

-- Copy data for bids from the csv file to the bids table
-- \copy bids FROM 'bids.csv' WITH HEADER CSV

-- SELECT name AS "Bid on Items" FROM items
-- WHERE id IN (SELECT item_id FROM bids);

-- SELECT name AS "Not Bid On" FROM items
-- WHERE id NOT IN (SELECT item_id FROM bids);

-- SELECT name FROM bidders
--   WHERE EXISTS (SELECT 1 FROM bids WHERE bidders.id = bids.bidder_id);

-- SELECT name FROM bidders
--   INNER JOIN bids ON bids.bidder_id = bidders.id
--   GROUP BY bidders.id
--   ORDER BY bidders.id;

-- SELECT max(bid_counts.count) FROM (SELECT count(bidder_id) FROM bids GROUP BY bidder_id) as bid_counts;

-- SELECT name, 
--         (SELECT count(item_id) FROM bids WHERE items.id = item_id)
--   FROM items;

-- SELECT name, count(item_id) FROM items
--   LEFT OUTER JOIN bids ON item_id = items.id
--   GROUP BY items.id
--   ORDER BY items.id;

-- SELECT id FROM items
-- WHERE ROW(name, initial_price, sales_price) =
--       ROW('Painting', 100.00, 250.00);

EXPLAIN SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);
