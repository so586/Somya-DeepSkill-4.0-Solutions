# Microservices Hands-On (Q1 & Q2) – JWT Authentication

## ✅ Included Questions
- Q1: Setting up JWT Middleware and Swagger
- Q2: Implementing Authentication Controller and Login Endpoint

## 📁 Files Included:
- microprogram.cs – Main program with JWT and Swagger setup
- appsettings.json – Configuration file with JWT values
- AuthController.cs – Controller that returns token and has protected routes
- LoginModel.cs – Model to accept username and password

## ▶️ How to Run:
1. Place files in your .NET Web API project folder
2. Run: `dotnet run`
3. Open Swagger: `http://localhost:5139/swagger`
4. Use `/api/auth/login` to get token
5. Click 🔐 "Authorize", then access protected routes

Token default expiry: 30 minutes.
