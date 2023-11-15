-- CREATE DATABASE auction;

-- \c auction

-- CREATE TABLE bidders (
--   id serial PRIMARY KEY,
--   name text NOT NULL
-- );

-- CREATE TABLE items (
--   id serial PRIMARY KEY,
--   name text NOT NULL,
--   initial_price numeric(6,2) NOT NULL CHECK (initial_price BETWEEN 0.00 AND 1000.00),
--   sales_price numeric(6,2)
-- );

-- CREATE TABLE bids (
--   id serial PRIMARY KEY,
--   bidder_id int NOT NULL REFERENCES bidders (id) ON DELETE CASCADE,
--   item_id int NOT NULL REFERENCES items (id) ON DELETE CASCADE,
--   amount numeric(6, 2) NOT NULL CHECK (amount BETWEEN 0.00 AND 1000.00)
-- );

-- \copy items FROM 'items.csv' DELIMITER ',' CSV HEADER
-- CREATE INDEX ON bids (bidder_id, item_id);
-- \copy bids FROM 'bids.csv' DELIMITER ',' CSV HEADER

-- SELECT ROW_NUMBER() over(order by bids.id) AS id, b.name, amount, i.name, initial_price,
--   CASE WHEN lead(sales_price) over (order by bids.id) = sales_price
--     THEN 0.00
--     ELSE sales_price
--   END as sales_price
--   FROM bidders b LEFT JOIN bids ON bids.bidder_id = b.id
--   LEFT JOIN items i ON i.id = bids.item_id
--   ORDER BY bids.id;