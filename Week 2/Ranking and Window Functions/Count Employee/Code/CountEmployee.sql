CREATE PROCEDURE sp_CountEmployeesByDepartment (@department_ID INT)
AS
BEGIN
	SELECT COUNT(*) AS TotalEmployees
	FROM Employees
	WHERE DepartmentID = @department_ID;
END;
GO

IF OBJECT_ID('sp_CountEmployeesByDepartment', 'P') IS NOT NULL
    SELECT 'Procedure created successfully' AS message;
ELSE
    SELECT 'Procedure does not exist' AS message;
	

EXEC sp_CountEmployeesByDepartment 2;
