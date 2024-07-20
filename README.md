# Inventory Management System

## Project Overview
The Inventory Management System (IMS) is a comprehensive tool designed to manage and track various types of inventory including raw materials, finished goods, and work-in-progress items. It provides a robust solution for maintaining stock levels, tracking sales and purchases, and generating detailed reports.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: GitHub for version control

## Features
- **Login Page**: Admin authentication using username and password.
- **Warehouse Management**: Create and manage multiple warehouses with specific dates.
- **Sales Details**: View details of sales transactions and remaining stock.
- **Purchase Details**: Track purchases, including price and dates.
- **Report Generation**: Generate various reports based on category.

## Project Requirements
1. **Modular Code**: Write code in a modular fashion.
2. **Safety**: Ensure the application is safe to use.
3. **Testability**: The code should be testable.
4. **Maintainability**: Maintainable code as the codebase grows.
5. **Portability**: The application should work similarly across different environments.
6. **GitHub Repository**: Maintain a public GitHub repository for the project.
7. **Coding Standards**: Follow standard coding practices.

## Project Setup
1. **Clone the Repository**
    ```sh
    git clone https://github.com/Vervebridge/Inventory-Management-System.git
    ```
2. **Install Dependencies**
    ```sh
    cd Inventory-Management-System
    npm install
    ```
3. **Start the Application**
    ```sh
    npm start
    ```

## API Endpoints
- **/api/login**: POST request for user authentication.
- **/api/warehouse**: CRUD operations for managing warehouses.
- **/api/sales**: CRUD operations for sales data.
- **/api/purchase**: CRUD operations for purchase data.
- **/api/reports**: Generate various reports.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
