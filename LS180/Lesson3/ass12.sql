-- ALTER TABLE books_categories DROP CONSTRAINT books_categories_book_id_fkey;
-- ALTER TABLE books_categories DROP CONSTRAINT books_categories_category_id_fkey;

-- ALTER TABLE books_categories
    -- ADD FOREIGN KEY (book_id)
    -- REFERENCES books (id)
    --   ON DELETE CASCADE;

-- ALTER TABLE books_categories
  -- ADD FOREIGN KEY (category_id)
  --   REFERENCES categories (id)
  --     ON DELETE CASCADE;

-- ALTER TABLE books_categories
--   ADD FOREIGN KEY (book_id)
--     REFERENCES books (id)
--       ON DELETE CASCADE,
--   ADD FOREIGN KEY (book_id)
--     REFERENCES books (id)
--       ON DELETE CASCADE,
--   ALTER COLUMN book_id DROP NOT NULL,
--   ALTER COLUMN category_id DROP NOT NULL;

-- SELECT books.id, books.author, STRING_AGG(categories.name, ', ') AS categories
--   FROM books
--     JOIN books_categories ON books.id = books_categories.book_id
--     JOIN categories ON books_categories.category_id = categories.id
--   GROUP BY books.id, books.author ORDER BY books.id;

-- ALTER TABLE books ALTER COLUMN title TYPE varchar(100);
-- ALTER TABLE books ALTER COLUMN title TYPE varchar(100);

-- INSERT INTO books
--   (title, author)
--   VALUES
--   ('Sally Ride: America''s First Woman in Space', 'Lynn Sherr'),
--   ('Jane Eyre', 'Charlotte Brontë'),
--   ('Vij''s: Elegant and Inspired Indian Cuisine', 'Meeru Dhalwala and Vikram Vij');

-- INSERT INTO categories (name)
-- VALUES
-- ('Space Exploration'),
-- ('South Asia'),
-- ('Cookbook');

-- INSERT INTO books_categories
-- (book_id, category_id)
-- VALUES
-- (4,5), (4, 1), (4, 7),
-- (5, 2), (5, 4),
-- (6, 9), (6, 1), (6, 8);

-- ALTER TABLE books_categories ADD UNIQUE(book_id, category_id);

SELECT c.name, count(b.id) AS book_count, string_agg(b.title, ', ') AS book_titles
  FROM books AS b
    JOIN books_categories ON b.id = books_categories.book_id
    JOIN categories AS c ON books_categories.category_id = c.id
  GROUP BY c.name ORDER BY c.name;
