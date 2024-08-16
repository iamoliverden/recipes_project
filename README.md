# Recipes Project

## Description
The Recipes Project is a full-stack web application designed to manage and share recipes. It leverages modern web technologies to provide a seamless user experience for browsing, viewing, and managing recipes.

## Technologies Used
- **Frontend**: React, React Router
- **Backend**: Django, Django Rest Framework
- **API Documentation**: Swagger (OpenAPI)
- **Styling**: CSS

## Features
1. **Recipe Management**:
   - Browse a variety of recipes categorized by different cuisines or meal types.
   - View detailed information for each recipe, including ingredients, cooking methods, and an image of the dish.

2. **API Integration**:
   - Backend API is built using Django Rest Framework, providing endpoints for managing recipes.
   - API is documented using Swagger, allowing developers to easily understand and interact with the API.

3. **Responsive Design**:
   - The application is designed to be fully responsive, ensuring a smooth experience across both desktop and mobile devices.

## Setup Instructions

1. **Clone the Repository** and navigate to the project directory:
   ```bash
   git clone https://github.com/iamoliverden/recipes_project.git
   cd recipes_project

2. **Create a virtual environment and install backend dependencies using the attached requirements.txt file**
      ```bash
   pip install -r requirements.txt
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. **Start the Django development server**

   ```bash
   python manage.py runserver

4. **Navigate to the frontend directory (recipes-frontend) and install frontend dependencies**

   ```bash
   npm install

5. **Start the React development server**

   ```bash
   npm start
   
## Usage

* Access the frontend: 
  * Navigate to http://localhost:3000 to view the application.

* Explore the API:
   * Use the Swagger documentation at http://localhost:8000/swagger/ to explore the API endpoints.
