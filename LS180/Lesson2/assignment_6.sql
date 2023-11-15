-- CREATE TABLE people (
--   name varchar(20) NOT NULL,
--   age integer,
--   occupation varchar(30)
-- );

-- INSERT INTO people
-- (name, age, occupation)
-- VALUES
-- ('Abby', 34, 'biologist'),
-- ('Mu''nisah', 26, NULL),
-- ('Mirabelle', 40, 'contractor');

-- CREATE TABLE birds (
--   name varchar(255) NOT NULL,
--   length decimal(3, 1),
--   wingspan decimal (3, 1),
--   family varchar(255),
--   extinct boolean
-- );

-- INSERT INTO birds
-- (name, length, wingspan, family, extinct)
-- VALUES
-- ('Spotted Towhee', 21.6, 26.7, 'Emberizidae', false),
-- ('American Robin', 25.5, 36.0, 'Turdidae', false),
-- ('Greater Koa Finch', 19.0, 24.0, 'Fringillidae', true),
-- ('Carolina Parakeet', 33.0, 55.8, 'Psittacidae', true),
-- ('Common Kestrel', 35.5, 73.5, 'Falconidae', false);

-- CREATE TABLE menu_items (
--   item text,
--   prep_time integer,
--   ingredient_cost decimal(4,2),
--   sales integer,
--   menu_price decimal(4,2)
-- );

-- INSERT INTO menu_items
-- (item, prep_time, ingredient_cost, sales, menu_price)
-- VALUES
-- ('omelette', 10, 1.50, 182, 7.99),
-- ('tacos', 5, 2, 254, 8.99),
-- ('oatmeal', 1, 0.5, 79, 5.99)
-- ;

-- SELECT item, menu_price, ingredient_cost,
--         round(prep_time/60.0 * 13.0, 2) AS labor,
--         (menu_price - ingredient_cost - round(prep_time/60.0 * 13.0, 2)) AS profit
-- FROM menu_items
-- ORDER BY profit DESC;
