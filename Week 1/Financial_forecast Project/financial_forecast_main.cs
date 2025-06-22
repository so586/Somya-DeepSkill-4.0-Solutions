
using System;

class MainClass {
public static void Main() {

Console.Write("Enter current value: ");
double value = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter annual growth rate (e.g., 0.05 for 5%): ");
double rate = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter number of years: ");
int years = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("\nUsing Recursive Approach:");
double recursiveResult = FinancialForecastRecursive.Calculate(value, rate, years);
Console.WriteLine($"Forecasted value: {recursiveResult:F2}");

Console.WriteLine("\nUsing Optimized Iterative Approach:");
double optimizedResult = FinancialForecastOptimized.Calculate(value, rate, years);
Console.WriteLine($"Forecasted value: {optimizedResult:F2}");
}
}
