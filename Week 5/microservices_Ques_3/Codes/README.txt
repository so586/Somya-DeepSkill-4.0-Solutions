# Microservices Hands-On – Question 3

## ✅ Q3: Protecting Routes using [Authorize]

This setup ensures that:
- `/api/auth/secure-data` is accessible only to authenticated users
- `/api/admin/dashboard` is accessible only to authenticated users with the "Admin" role

## 🔐 What was added in Q3:
- `[Authorize]` attribute on `secure-data` method
- `[Authorize(Roles = "Admin")]` on `admin/dashboard`

## ▶️ Steps to Test:
1. Run: `dotnet run`
2. Open: `http://localhost:5139/swagger`
3. Login via `/api/auth/login` using:
   - Username: `admin`
   - Password: `password`
4. Click 🔐 "Authorize" and paste the token
5. Access `/api/auth/secure-data` ✅
6. Access `/api/admin/dashboard` ✅

Unauthorized access gives **401 Unauthorized**
