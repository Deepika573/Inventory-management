CREATE DATABASE InventoryManagement

USE InventoryManagement

DROP TABLE Supplier

CREATE TABLE Supplier(
SupplierId INT IDENTITY(1,1),
SupplierName VARCHAR (50))

INSERT INTO Supplier VALUES ('Deepika Rawat')
INSERT INTO Supplier VALUES ('Gaurav Valecha')
INSERT INTO Supplier VALUES ('Saksham Rawat')
INSERT INTO Supplier VALUES ('Sakshi Sharma')

SELECT * fROM Supplier

DROP TABLE Customer

CREATE TABLE Customer(
CustomerId INT IDENTITY(1,1),
CustomerName VARCHAR(50))

INSERT INTO Customer VALUES ('Deepika Rawat')
INSERT INTO Customer VALUES ('Yogesh Sagar')
INSERT INTO Customer VALUES ('Kalash Yadav')

SELECT * fROM Customer

DROP TABLE Inventory

CREATE TABLE Inventory(
InventoryId INT IDENTITY(1,1),
InventoryName VARCHAR(50),
StockQuantity INT NOT NULL,
)

INSERT INTO Inventory VALUES ('Samsung A7 2018', 5000)
INSERT INTO Inventory VALUES ('Apple IPhone 13 256GB', 2900)
INSERT INTO Inventory VALUES ('Vivo v23 5G', 4000)
INSERT INTO Inventory VALUES ('Samsung Galaxy M52 8GB ', 2700)

UPDATE Inventory SET StockQuantity= StockQuantity + 100
WHERE InventoryName = 'Apple IPhone 13 256GB'

SELECT * fROM Inventory

SELECT InventoryName, StockQuantity FROM 
                dbo.Inventory
                WHERE StockQuantity > 0 


DROP TABLE Orders

CREATE TABLE Orders(
OrderId INT IDENTITY(1,1),
InventoryName VARCHAR(50),
QuantityOfOrder INT NOT NULL,
CustomerName VARCHAR(50)
)
INSERT INTO Orders VALUES ('Samsung A7 2018', 350,'Yogesh Sagar')
INSERT INTO Orders VALUES ('Apple IPhone 13 256GB', 500,'Kalash Yadav')
SELECT * FROM Orders


DROP TABLE ReOrder

CREATE TABLE ReOrder(
ReOrderId INT IDENTITY(1,1),
InventoryName VARCHAR(50),
QuantityOfReorder INT NOT NULL,
SupplierName VARCHAR(50)
)

INSERT INTO ReOrder VALUES ('Apple IPhone 13 256GB', 50,'Gaurav Valecha')
SELECT * FROM ReOrder


DROP TABLE Users
CREATE TABLE Users(
EmailAddress VARCHAR(100),
Password VARCHAR(50))

INSERT INTO Users VALUES ('rawatdeepika633@gmail.com', 'Deepika@123')
INSERT INTO Users VALUES ('Test.User@gmail.com', 'user@123')
SELECT * FROM Users