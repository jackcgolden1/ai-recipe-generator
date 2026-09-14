# 🍳 AI Recipe Generator

An AI-powered recipe generator that turns the ingredients you already have into recipe ideas using **Amazon Bedrock and Anthropic Claude**.

I built this project to explore how generative AI can be integrated into a full-stack, serverless web application using AWS Amplify.

## 📸 Project Overview

The application allows users to enter a list of ingredients and generate a recipe using AI.

For example:

> **Ingredients:** chicken, white rice, yellow squash, onion

The application sends those ingredients to the backend, where Anthropic Claude generates a recipe based on the available ingredients.

## 🧠 How It Works

```text
User
  ↓
React Frontend
  ↓
AWS Amplify Auth
  ↓
AppSync / Amplify Data
  ↓
Amazon Bedrock
  ↓
Anthropic Claude
  ↓
Generated Recipe
```

The frontend is built with React and TypeScript. User authentication is handled through Amazon Cognito, while AWS AppSync and Amplify Data provide the connection between the frontend and the serverless backend.

The backend sends the ingredient list to **Anthropic Claude Sonnet 4.6 through Amazon Bedrock**, then returns the generated recipe to the application.

## 🛠️ Technologies Used

| Technology            | Purpose                                |
| --------------------- | -------------------------------------- |
| **React**             | Frontend user interface                |
| **TypeScript**        | Type-safe application development      |
| **Vite**              | Frontend development and build tooling |
| **AWS Amplify Gen 2** | Serverless application infrastructure  |
| **Amazon Cognito**    | User authentication                    |
| **AWS AppSync**       | GraphQL API                            |
| **Amplify Data**      | Backend data/API integration           |
| **Amazon Bedrock**    | Generative AI infrastructure           |
| **Anthropic Claude**  | Recipe generation                      |
| **AWS CDK**           | AWS infrastructure configuration       |
| **GitHub**            | Source control                         |

## ✨ Features

* User authentication
* Ingredient-based recipe generation
* AI-generated recipe suggestions
* Serverless AWS backend
* Authenticated API requests
* Responsive web interface
* Real-time communication between the frontend and backend

## 🏗️ Architecture

The application uses a serverless architecture so there is no traditional backend server that I have to maintain.

The main flow is:

1. A user signs into the application.
2. They enter ingredients into the recipe generator.
3. The React frontend sends the ingredients through Amplify Data.
4. AWS AppSync handles the API request and authentication.
5. The backend sends a prompt to Amazon Bedrock.
6. Anthropic Claude generates the recipe.
7. The response is returned to the frontend and displayed to the user.

## 🔐 Security & Authentication

Authentication is handled through **Amazon Cognito** and AWS Amplify.

The recipe-generation API requires an authenticated user, preventing unauthenticated requests from accessing the backend functionality.

The Bedrock API call is also handled server-side rather than exposing AWS credentials or Bedrock access directly in the browser.

## 🤖 AI Implementation

The application uses **Anthropic Claude Sonnet 4.6** through Amazon Bedrock.

The user's ingredients are incorporated into a prompt similar to:

```text
Suggest a recipe idea using these ingredients:
chicken, white rice, yellow squash, onion.
```

Claude then generates the recipe response, which is passed back through the AppSync API to the React frontend.

## 🎯 Why I Built This

I built this project to gain hands-on experience with:

* Generative AI APIs
* Amazon Bedrock
* AWS Amplify Gen 2
* Serverless application architecture
* GraphQL APIs
* AWS authentication
* Connecting a React frontend to cloud-based AI services
* Managing AWS infrastructure through code

One of the main goals was to understand what it takes to connect an AI model to a real application rather than simply interacting with an AI model through a standalone interface.

## 🧩 Challenges & Lessons Learned

One of the biggest parts of the project was getting the different AWS services to work together correctly.

I worked through several issues involving:

* Amplify Gen 2 backend configuration
* AppSync authorization
* Amazon Bedrock model access
* IAM permissions
* Bedrock inference profiles
* Anthropic model agreements
* Connecting the frontend to the generated Amplify API

This project gave me a much better understanding of how authentication, API authorization, IAM permissions, and AI model access fit together in a real AWS application.

## 🚀 Future Improvements

Some features I would like to add in the future:

* Save and view previously generated recipes
* Dietary restrictions and preferences
* Recipe difficulty and cooking time
* Ingredient substitutions
* Nutrition information
* Recipe ratings and favorites
* AI-generated food images
* Improved recipe formatting
* Deployment for public use

## 👨‍💻 Author

**Jack Golden**

This project was built as a hands-on exploration of **React, AWS, serverless architecture, and generative AI**.
