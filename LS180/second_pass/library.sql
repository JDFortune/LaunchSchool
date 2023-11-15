-- ALTER TABLE books_categories
--   ALTER COLUMN book_id SET NOT NULL,
--   ALTER COLUMN category_id SET NOT NULL;

-- ALTER TABLE books_categories
--   DROP CONSTRAINT books_categories_book_id_fkey,
--   DROP CONSTRAINT books_categories_category_id_fkey;

-- ALTER TABLE books_categories
--   ADD FOREIGN KEY (book_id) REFERENCES books (id) ON DELETE CASCADE,
--   ADD FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE;

-- SELECT b.id, title, author, string_agg(name, ', ') AS categories
--   FROM books AS b
--   JOIN books_categories AS bc ON bc.book_id = b.id
--   JOIN categories AS c ON c.id = bc.category_id
--   GROUP BY b.id
--   ORDER BY b.id;

-- ALTER TABLE books
--   ALTER COLUMN author TYPE varchar(50),
--   ALTER COLUMN title TYPE varchar(50);

-- INSERT INTO books (title, author)
-- VALUES
-- ('Sally Ride: America''s First Woman in Space', 'Lynn Sherr'),
-- ('Jane Eyre', 'Charlotte Bronte'),
-- ('Vij''s: Elegant and Inspired Indian Cuisine', 'Meeru Dhalwala and Vikram Vij');


-- INSERT INTO categories (name)
-- VALUES ('Space Exploration'), ('Cookbook'), ('South Asia');

-- INSERT INTO books_categories (book_id, category_id)
-- VALUES
-- (4, 5), (4, 1), (4, 7),
-- (5, 2), (5, 4),
-- (6, 8), (6, 1), (6, 9);

-- ALTER TABLE books_categories
  -- ADD UNIQUE(book_id, category_id);

-- SELECT name, count(b.id) AS book_count, string_agg(b.title, ', ') AS book_titles
--   FROM categories
--   JOIN books_categories AS bc ON categories.id = bc.category_id
--   JOIN books AS b ON bc.book_id = b.id
--   GROUP BY name
--   ORDER BY name;