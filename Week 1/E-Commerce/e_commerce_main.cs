using System;

class MainClass {
public static void Main() {

Product[] products = {
new Product(101, "Gucci", "Accessories"),
new Product(102, "iPhone", "Electronics"),
new Product(103, "Banana", "Groceries"),
new Product(104, "Levi's Jeans", "Clothing"),
new Product(105, "Prada", "Accessories"),
new Product(106, "Samsung TV", "Electronics"),
new Product(107, "Mango", "Groceries"),
new Product(108, "Nike Shoes", "Footwear")
};

Console.Write("Enter product name to search: ");
string searchItem = Console.ReadLine();

Console.WriteLine("\nUsing Linear Search:");
Product found1 = SearchLogic.LinearSearch(products, searchItem);
if (found1 != null)
Console.WriteLine("Found: " + found1);
else
Console.WriteLine("Product not found in list.");

Array.Sort(products, (a, b) => a.ProductName.CompareTo(b.ProductName));

Console.WriteLine("\nUsing Binary Search:");
Product found2 = SearchLogic.BinarySearch(products, searchItem);
if (found2 != null)
Console.WriteLine("Found: " + found2);
else
Console.WriteLine("Product not found in sorted list.");
}
}
