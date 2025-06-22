public class Product {
public int ProductId;
public string ProductName;
public string Category;

public Product(int id, string name, string category) {
ProductId = id;
ProductName = name;
Category = category;
}

public override string ToString() {
return $"ID: {ProductId}, Name: {ProductName}, Category: {Category}";
}
}
