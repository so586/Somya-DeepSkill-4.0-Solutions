CREATE DATABASE EmployeeDB;
GO

USE EmployeeDB;
GO

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY IDENTITY(1,1),
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT FOREIGN KEY REFERENCES Departments(DepartmentID),
    Salary DECIMAL(10,2),
    JoinDate DATE
);

-- Inserting departments
INSERT INTO Departments (DepartmentID, DepartmentName) VALUES 
(1, 'HR'),
(2, 'Finance'),
(3, 'IT'),
(4, 'Marketing');

--create a procedure to get Employee details by department id
CREATE PROCEDURE sp_InsertEmployees
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @DepartmentID INT,
    @Salary DECIMAL(10, 2),
    @JoinDate DATE
AS
BEGIN
    INSERT INTO Employees (FirstName, LastName, DepartmentID, Salary, JoinDate)
    VALUES (@FirstName, @LastName, @DepartmentID, @Salary, @JoinDate);
END;
GO
-- execution of the Procedure
EXEC sp_InsertEmployees 'Somya', 'Singh', 3, 85000.75, '2024-08-29';
EXEC sp_InsertEmployees 'Vandana', 'Singh', 2, 91000.00, '2025-08-29';

EXEC sp_GetEmployeesByDepartments @department_id = 2;




