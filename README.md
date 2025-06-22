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

This is a C# console application that allows users to search for products by name using linear and binary search methods.

---

## How to Run (All Steps in One Console)

1. Open Command Prompt

2. Create a new console project  
   dotnet new console -n e_commerce_search

3. Move into the project folder  
   cd e_commerce_search

4. Rename the default main file  
   ren Program.cs e_commerce_main.cs

5. Create the product class file  
   notepad e_commerce_product.cs  
   (Paste the product class code and save)

6. Create the search logic file  
   notepad e_commerce_searchlogic.cs  
   (Paste the linear and binary search code and save)

7. Edit the main file  
   notepad e_commerce_main.cs  
   (Paste the updated main method with the mixed product list and save)

8. Build the project  
   dotnet build

9. Run the project  
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










