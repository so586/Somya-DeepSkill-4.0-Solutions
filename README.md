# Somya-DeepSkill-4.0-Solutions
A collection of hands-on solutions and practice exercises for the Deepskill series.

# Week 1 - Singleton Pattern

This is a simple C# project to show how the Singleton Pattern works.

## What is Singleton Pattern?

Singleton pattern means only one object of a class can be made.  
This is useful when we want to use the same object everywhere, like for logging.

## What this project does

- There is a class called `Logger`.
- We can’t create many objects of Logger.
- We use `GetInstance()` method to get the same Logger object.
- It prints messages using the `Log()` method.

## Files in this project

- `Program.cs` - This is the main file where we run the code.
- `Logger.cs` - This file has the Logger class with singleton logic.

## Output when we run
Logger created
Log: This is the first log.
Log: This is the second log.
Same instance used.

##  How to Run
1. Open the folder in a C# environment (like Visual Studio or use the .NET CLI).
2. Build and run the project using:
   ```bash
  dotnet run


# Week 1 – Factory Method Pattern

This is a simple C# console application that demonstrates the Factory Method Design Pattern. The program shows how to create different types of documents like Word, PDF, and Excel using separate factory classes.

## Project Files

- `FactoryMethodProgram.cs` – Contains the `Main()` method that runs the program.
- `FactoryMethodClasses.cs` – Includes all the document classes, interfaces, and factory logic.
- `FactoryMethodPatternExample.csproj` – Project file used by .NET to build and run the application.

## What the Program Does

- Defines a common `Document` interface with an `open()` method.
- Creates three document types: `WordDocument`, `PdfDocument`, and `ExcelDocument`.
- Uses separate factory classes to create each type of document.
- The `Main()` method uses these factories to open the documents.

## Example Output
Opening a Word Document...
Opening a Pdf Document...
Opening an Excel Document...


## Requirements
- .NET 9.0 SDK or newer
- Command Prompt or terminal with access to `dotnet` CLI

## How to Run
1. Open Command Prompt and go to the project folder:
2. Build and run the project:

  # WEEK 1 - E-commerce Platform

This is a beginner-friendly C# console application that allows users to search for products by name using linear and binary search algorithms.

---

## Q1: What is Big O Notation?

Big O notation is used to describe how fast or slow an algorithm is as the input size increases.  
It helps us understand the efficiency of algorithms.

For example:
- O(1): Constant time (very fast, does not depend on input size)
- O(n): Linear time (slower as input grows)
- O(log n): Logarithmic time (fast even for large inputs)

---

## Q2: Best, Average, and Worst-Case Scenarios

| Search Type     | Best Case | Average Case | Worst Case |
|-----------------|-----------|--------------|------------|
| Linear Search   | O(1)      | O(n/2)       | O(n)       |
| Binary Search   | O(1)      | O(log n)     | O(log n)   |

- **Best Case**: When the target is found immediately  
- **Average Case**: When the target is somewhere in the middle  
- **Worst Case**: When the target is not found or is at the end

---

## Q3: Time Complexity Comparison

| Algorithm       | Time Complexity | Requires Sorted Data |
|-----------------|------------------|------------------------|
| Linear Search   | O(n)             | No                     |
| Binary Search   | O(log n)         | Yes                    |

- Linear Search is slower but works on unsorted data  
- Binary Search is faster but needs the list to be sorted

---

## Q4: Which Algorithm is Suitable?

- **Use Linear Search** for small or unsorted product lists  
- **Use Binary Search** when the product list is large and sorted

---

## How to Run This Program (All in One Console)

1. Open Command Prompt

2. Create a new project  
   dotnet new console -n e_commerce_search

3. Move into the folder  
   cd e_commerce_search

4. Rename default file  
   ren Program.cs e_commerce_main.cs

5. Create product file  
   notepad e_commerce_product.cs  
   (Paste the Product class and save)

6. Create search logic file  
   notepad e_commerce_searchlogic.cs  
   (Paste the linear and binary search methods and save)

7. Edit main file  
   notepad e_commerce_main.cs  
   (Paste the main method with product list and save)

8. Build the program  
   dotnet build

9. Run the program  
   dotnet run

---

## Sample Input and Output

Input:  
Mango

Output:  
Using Linear Search:  
Found: ID: 107, Name: Mango, Category: Groceries

Using Binary Search:  
Found: ID: 107, Name: Mango, Category: Groceries

---
# WEEK 1 - Financial Forecasting Tool

This is a beginner-friendly C# console application that predicts future financial values using two approaches:

- Recursive Approach
- Optimized Iterative Approach

It takes an initial value, a yearly growth rate, and the number of years to forecast, then calculates the expected value in the future.

---

## 1. What is Recursion?

Recursion is a concept where a function calls itself.  
It is useful for solving problems that can be broken down into smaller subproblems.

In this case, forecasting a value year-by-year can be done recursively:  
Each year's value is built on the previous year's growth.

---

## 2. Recursive Method to Calculate Future Value

We use a recursive function where:

- Base case: If years = 0, return current value.  
- Recursive step: Multiply value by (1 + rate), and call the function for (years - 1).

This mimics how a value grows year by year.

---

## 3. Recursive Forecast Implementation

A simple recursive method calculates the future value by repeating the same formula over years.

### Formula used:
FutureValue(years) = FutureValue(years - 1) * (1 + growthRate)

---

## 4. Time Complexity and Optimization

### Time Complexity of Recursive Approach:
- Time: O(n) (one call per year)
- Space: O(n) (due to function call stack)

### Optimization:
The same result can be calculated using a loop (iterative method).  
This avoids deep recursion and is better for large year values.

### Time Complexity of Iterative Approach:
- Time: O(n)
- Space: O(1)

---

## 5. When to Use Recursive vs Iterative?

| Use Case                      | Preferred Method       |
|-------------------------------|------------------------|
| Small number of years         | Recursive or Iterative |
| Large number of years         | Iterative (more efficient) |
| Educational / learning purpose| Recursive              |

---

## 6. How to Run (Step-by-step in Console)

1. Create a new project  
   `dotnet new console -n financial_forecast_project`

2. Navigate into the project folder  
   `cd financial_forecast_project`

3. Rename the default main file  
   `ren Program.cs financial_forecast_main.cs`

4. Create the recursive logic file  
   `notepad financial_forecast_recursive.cs`  
   (Paste the recursive code and save)

5. Create the optimized logic file  
   `notepad financial_forecast_optimized.cs`  
   (Paste the optimized code and save)

6. Edit the main file  
   `notepad financial_forecast_main.cs`  
   (Paste the main method code and save)

7. Build the project  
   `dotnet build`

8. Run the program  
   `dotnet run`

---
## 7. Sample Input & Output

**Input:**
Enter current value: 1528
Enter annual growth rate: 0.07
Enter number of years: 5
**Output:**
Using Recursive Approach:
Forecasted value: 2147.80

Using Optimized Iterative Approach:
Forecasted value: 2147.80
---

# Week 2 – Advanced SQL | NUnit | Moq

This week covers practical applications of Advanced SQL concepts through two exercises: Window Functions and Multi-level Aggregation. These exercises simulate real-world scenarios often used in analytics and reporting.

---

## Exercise 1: Ranking and Window Functions

### Concepts Covered
- ROW_NUMBER()
- RANK()
- DENSE_RANK()
- PARTITION BY
- ORDER BY with OVER()

### Objective
To identify the top 3 most expensive products within each category using different ranking functions. This helps in understanding how SQL handles ranking, ordering, and ties in grouped data.

### Requirements
- SQL Server Express (2022 or later)
- SQL Server Management Studio (SSMS)

### How to Run
1. Install SQL Server Express from the official Microsoft website.
2. Install SQL Server Management Studio (SSMS).
3. Launch SSMS and connect using your local server name (e.g., `.\SQLEXPRESS`).
4. Create a database (e.g., `RetailStore`) and execute the SQL queries in a new query tab.

---

## Exercise 2: Aggregation with GROUPING SETS, CUBE, and ROLLUP

### Concepts Covered
- GROUPING SETS
- ROLLUP
- CUBE
- GROUPING() function
- GROUP BY extensions

### Objective
To perform advanced aggregation that allows multiple levels of summary in a single query. These techniques are useful for generating reports with subtotals and grand totals.

### Requirements
- SQL Server Express (2022 or later)
- SQL Server Management Studio (SSMS)

### How to Run
1. Use the same SQL Server and SSMS setup from Exercise 1.
2. Use the existing `RetailStore` database.
3. Open a new query window and run aggregation queries using ROLLUP, CUBE, and GROUPING SETS.

---

## Tools Used
- SQL Server 2022 Express
- SQL Server Management Studio (SSMS)
- Windows Authentication for local development

---












