# Microservices Hands-On – Question 4

## ✅ Q4: Token Expiry Test

### ⏱️ Token Expiration Set:
- JWT expires after 20 seconds using:
```csharp
expires: DateTime.Now.AddSeconds(20)
```

### ▶️ Steps to Test:
1. Run: `dotnet run`
2. Open: `http://localhost:5139/swagger`
3. Use `/api/auth/login` to login (username: `admin`, password: `password`)
4. Copy the token and 🔐 Authorize
5. Wait for **25 seconds**
6. Try accessing `/api/auth/secure-data` or `/api/admin/dashboard`

### 🧾 Expected Output:
- You will get: `401 Unauthorized`
- Console shows token expired due to validation

This simulates real-world token timeout behavior. Re-login required after expiry.
