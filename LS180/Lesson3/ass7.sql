-- SELECT quantity, name
--   FROM orders
--   JOIN products
--     ON orders.product_id = products.id;

-- INSERT INTO orders (product_id, quantity)
-- VALUES (100, 10);

-- CREATE TABLE reviews (
  -- id serial PRIMARY KEY,
  -- product_id integer REFERENCES products (id),
  -- review text NOT NULL
-- );

INSERT INTO reviews
(product_id, review)
VALUES
(1, 'a little small'),
(1, 'very round!'),
(2, 'could have been smaller');