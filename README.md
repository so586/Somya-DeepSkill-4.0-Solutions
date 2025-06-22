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

You can modify the product list to include different names and categories as needed.










