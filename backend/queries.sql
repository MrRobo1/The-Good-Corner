-- CREATE TABLE ad (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     title TEXT NOT NULL,
--     description TEXT,
--     owner TEXT NOT NULL,
--     price INT,
--     picture TEXT,
--     location TEXT,
--     createdAt TEXT,
--     category TEXT,
--     category_id INT,
--     FOREIGN KEY (category_id) REFERENCES category(id)
-- );


-- DROP TABLE IF EXISTS category;

CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL
);


-- INSERT INTO category (id, name, ad_id)
-- VALUES (0, "Véhicules", 0);


-- INSERT INTO ad (id, title, description, owner, price, picture, location, createdAt, category) 
-- VALUES (0, "anonce1", "blalalalal", "toto", 400, "IMG", "Bordeaux", "2021-09-01", "Véhicules");

-- INSERT INTO ad (id, title, description, owner, price, picture, location, createdAt, category) 
-- VALUES (1, "anonce2", "blalalalal", "tutu", 30, "IMG", "Paris", "2022-09-01", "Véhicules");

-- INSERT INTO ad (id, title, description, owner, price, picture, location, createdAt, category) 
-- VALUES (2, "anonce2", "blalalalal", "tata", 20, "IMG", "Lyon", "2023-09-01", "Véhicules");

-- INSERT INTO ad (id, title, description, owner, price, picture, location, createdAt, category) 
-- VALUES (3, "anonce3", "blalalalal", "titi", 70, "IMG", "Strasbourg", "2024-09-01", "Véhicules");

-- SELECT * FROM ad;

-- SELECT * FROM ad WHERE LOCATION = "Bordeaux";

-- DELETE FROM ad WHERE price > 40;

-- UPDATE ad SET price = 0 WHERE createAt = "2023-09-01";

-- SELECT AVG(price) FROM ad WHERE location = "Paris";

-- SELECT location, AVG(price) FROM ad
-- GROUP BY location;