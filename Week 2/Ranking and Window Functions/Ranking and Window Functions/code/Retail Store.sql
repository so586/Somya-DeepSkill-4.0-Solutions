USE RetailStore;
GO

DROP TABLE IF EXISTS Products;
GO

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price INT
);
GO

INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Graphite Sketchbook', 'Stationery', 679),
(2, 'Mechanical Pencil', 'Stationery', 429),
(3, 'Luxury Notebook', 'Stationery', 679),
(4, 'Canvas Tote Bag', 'Accessories', 679),
(5, 'Leather Wallet', 'Accessories', 1129),
(6, 'Sunglasses', 'Accessories', 679),
(7, 'LED Desk Lamp', 'Home Decor', 1229),
(8, 'Aroma Candle Set', 'Home Decor', 679),
(9, 'Wall Clock', 'Home Decor', 679),
(10, 'Fountain Pen', 'Stationery', 879),
(11, 'Keychain Combo', 'Accessories', 679),
(12, 'Glass Vase', 'Home Decor', 979);
GO

SELECT *
FROM (
    SELECT *, ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
    FROM Products
) AS Ranked
WHERE RowNum <= 3;
GO

SELECT *
FROM (
    SELECT *, RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum
    FROM Products
) AS Ranked
WHERE RankNum <= 3;
GO

SELECT *
FROM (
    SELECT *, DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
    FROM Products
) AS Ranked
WHERE DenseRankNum <= 3;
GO

