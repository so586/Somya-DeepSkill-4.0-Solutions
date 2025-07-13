using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        Console.WriteLine("📦 All Products:");
        var products = await context.Products.ToListAsync();
        foreach (var p in products)
        {
            Console.WriteLine($"- {p.Name} - ₹{p.Price}");
        }

        Console.WriteLine("\n🔍 Find Product by ID = 1:");
        var product = await context.Products.FindAsync(1);
        Console.WriteLine(product != null ? $"Found: {product.Name} - ₹{product.Price}" : "Product not found.");

        Console.WriteLine("\n💰 Products with Price > ₹5000:");
        var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 5000);
        Console.WriteLine(expensive != null ? $"Expensive Product: {expensive.Name} - ₹{expensive.Price}" : "No expensive product found.");
    }
}
