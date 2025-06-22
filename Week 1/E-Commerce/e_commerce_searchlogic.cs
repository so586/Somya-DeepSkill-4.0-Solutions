public class SearchLogic {

public static Product LinearSearch(Product[] products, string target) {
foreach (var p in products) {
if (p.ProductName.Equals(target, StringComparison.OrdinalIgnoreCase))
return p;
}
return null;
}

public static Product BinarySearch(Product[] products, string target) {
int left = 0, right = products.Length - 1;
while (left <= right) {
int mid = (left + right) / 2;
int cmp = string.Compare(products[mid].ProductName, target, StringComparison.OrdinalIgnoreCase);
if (cmp == 0)
return products[mid];
else if (cmp < 0)
left = mid + 1;
else
right = mid - 1;
}
return null;
}
}
