# my_api_jwt_db_project
project of API with jwt(json web token) and database(mongodb)

# database name:bank-data
# collection name:customers

# Customer API
This project provides a RESTful API for managing customer data. It allows for creating, reading, and fetching customer information using various endpoints.


Endpoints
1. Create Customer
//can post single or multiple data at once using post method
POST /customers: Creates a new customer with the provided data. If no customerId is provided, a unique ID will be generated.
POST /customers: Creates multiple customers at once.
2. Read Customer
GET /customers: Fetches customer data by customerId or email.
GET /customers/:id: Fetches customer data by the MongoDB-generated ID.

# Authentication
All endpoints require authentication using a JSON Web Token (JWT). The token must be provided in the Authorization header. can use bearer token in authorization.

# Error Handling
The API returns standard HTTP error codes and messages for invalid requests, authentication errors, and server errors.

# Key Features
Unique customerId generation using UUID
Bulk creation of customers(multiple data save at once)
Fetching customer data by customerId, email, or MongoDB-generated ID
Authentication using JWT

# Requirements
Node.js
Express.js
MongoDB
JWT
other node libraries

# Project Structure
The project consists of the following files:

route.js: Defines the API endpoints and logic
models/customers.js: Defines the customer model
db/mongoose.js: Configures the MongoDB connection

# Future Development
This project provides a basic structure for managing customer data. Future development can focus on adding additional features, such as:

Updating and deleting customer data
