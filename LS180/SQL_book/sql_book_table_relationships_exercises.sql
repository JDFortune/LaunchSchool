-- SELECT * FROM orders;

-- CREATE TABLE customers (
--   id serial PRIMARY KEY,
--   customer_name varchar(100)
-- );

-- CREATE TABLE email_addresses (
--   customer_id integer PRIMARY KEY,
--   customer_email varchar(100),
--   FOREIGN KEY (customer_id)
--     REFERENCES customers(id)
--     ON DELETE CASCADE
-- );

-- INSERT INTO customers (customer_name)
-- VALUES
-- ('Natasha O''Shea'),
-- ('James Bergman'),
-- ('Aaron Muller');

-- INSERT INTO email_addresses (customer_id, customer_email)
-- VALUES
-- (1, 'natasha@osheafamily.com'),
-- (2, 'james1998@email.com');

-- CREATE TABLE products (
--   id serial PRIMARY KEY,
--   product_name varchar(50),
--   product_cost numeric(4,2) DEFAULT 0,
--   product_type varchar(20),
--   loyalty_points integer
-- );

-- INSERT INTO products
-- (product_name, product_cost, product_type, loyalty_points)
-- VALUES
-- ('LS Burger', 3.00, 'Burger', 10),
-- ('LS Cheeseburger', 3.50, 'Burger', 15),
-- ('LS Chicken Burger', 4.50, 'Burger', 20),
-- ('LS Double Deluxe Burger', 6.00, 'Burger', 30),
-- ('Fries', 1.20, 'Side', 3),
-- ('Onion Rings', 1.50, 'Side', 5),
-- ('Cola', 1.50, 'Drink', 5),
-- ('Lemonade', 1.50, 'Drink', 5),
-- ('Vanilla Shake', 2.00, 'Drink', 7),
-- ('Chocolate Shake', 2.00, 'Drink', 7),
-- ('Strawberry Shake', 2.00, 'Drink', 7);

-- 1. Alter or replace orders so that we can associate a customer with one or more orders (we also want to record an order status on this table)
-- 2. Create and `order_items` table so that an order can have one or more products associated with it.

DROP TABLE orders;

CREATE TABLE orders (
  id serial PRIMARY KEY,
  customer_id integer,
  order_status varchar(20),
  FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE CASCADE
);

CREATE TABLE order_items (
  id serial PRIMARY KEY,
  order_id integer NOT NULL,
  product_id integer NOT NULL,
  FOREIGN KEY (order_id)
    REFERENCES orders (id)
    ON DELETE CASCADE,
  FOREIGN KEY (product_id)
    REFERENCES products (id)
    ON DELETE CASCADE
);

INSERT INTO orders
(customer_id, order_status)
VALUES
(1, 'Placed'),
(1, 'Completed'),
(2, 'In Progress'),
(3, 'Placed');

INSERT INTO order_items
(order_id, product_id)
VALUES
(1, 2),
(1, 5),
(1, 7),
(2, 4),
(2, 2),
(2, 5),
(2, 5),
(2, 6),
(2, 10),
(2, 9),
(3, 3),
(3, 5),
(3, 6),
(3, 8),
(4, 1),
(4, 5);