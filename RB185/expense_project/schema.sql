CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  amount numeric(6, 2) NOT NULL CHECK (amount >= 0.01),
  memo text NOT NULL CHECK (LENGTH(memo) > 0),
  created_on date NOT NULL DEFAULT NOW()
);


INSERT INTO expenses (amount, memo, created_on)
VALUES
(14.56, 'Pencils', NOW()),
(3.29, 'Coffee', NOW()),
(49.99, 'Text Editor', NOW());
