-- ALTER TABLE orders
--   ADD FOREIGN KEY (product_id)
--     REFERENCES products(id);

-- INSERT INTO products (name)
--   VALUES ('small bold'), ('large bolt');

-- INSERT INTO orders (product_id, quantity)
--   VALUES (1, 10), (1, 25), (2, 15);

-- ALTER TABLE orders
--   ALTER COLUMN product_id
--     SET NOT NULL;

-- CREATE TABLE reviews (
  -- id serial PRIMARY KEY,
  -- review text NOT NULL,
  -- product_id int NOT NULL REFERENCES products (id)
-- ); 

-- INSERT INTO reviews (review, product_id)
-- VALUES
-- ('a little small', 1), ('very round', 1), ('could have been smaller', 2);

-- UPDATE products SET name = 'small bolt' WHERE id = 1;

-- ALTER TABLE reviews
--   RENAME COLUMN review TO body;