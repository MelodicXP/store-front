# 401 - Lab 36 - REDUX

## Project: Store Front

### Author: Melo

### Problem Domain

**Virtual Store Phase 1:** Start process of creating an e-Commerce storefront using React with Redux, coupled with live API server.

### Feature Tasks & Requirements

In this first phase, goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner.

The following user/developer stories detail the major functionality for this phase of the project.

* As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
* As a user, I want to choose a category and see a list of all available products matching that category.
* As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.

### Technical Requirements/Notes

**Phase 1:**

* Create a visually appealing site using Material UI.
* Use a Redux Store to manage the state of categories and items in the store.
* Display a list of categories from state.
* When the user selects (clicks on) a category:
  * Identify that category as selected (change of class/display).
  * Show a list of products associated with the category.

### Application Architecture

* Create application using create-react-app.
* Install Material UI as a dependency.
* Write an \<App /> component that serves as the container for all sub-components of this application.
  * A \<Header /> component which shows the name of your virtual store.
  * A \<Footer /> component which shows your copyright and contact information.
  * A \<Categories /> component:
    * Shows a list of all categories.
    * Dispatches an action when one is clicked to “activate” it.
* A \<Products /> component:
  * Displays a list of products associated with the selected category.

### Notes on constructing Redux Store

* Categories
  * State should contain a list of categories as well as the active category.
    * Each category should have a normalized name, display name, and a description.
  * Create an action that will trigger the reducer to change the active category.
  * Update the active category in the reducer when this action is dispatched.
* Products
  * State should be a list of all products.
    * Each product should have a category association, name, description, price, inventory count.
  * Create an action that will trigger when the active category is changed.
    * HINT: Multiple reducers can respond to the same actions.
  * Create a reducer that will filter the products list based on the active category.
* Active Category
  * State should store active category.
    * Other components (products, etc) might need to reference this.

## Documentation

![UML](./src/assets/lab36UML.png)

### How to initialize/run application (where applicable)

* npm run dev

### Libraries needed (where applicable)

Install

* "@emotion/react": "^11.13.0",
* "@emotion/styled": "^11.13.0",
* "@fontsource/roboto": "^5.0.13",
* "@mui/material": "^5.16.5",
* "@redux-devtools/extension": "^3.3.0",
* "react": "^18.3.1",
* "react-dom": "^18.3.1",
* "react-redux": "^9.1.2",
* "sass": "^1.77.8"

Dev Dependencies

* "@types/react": "^18.3.3",
* "@types/react-dom": "^18.3.0",
* "@vitejs/plugin-react": "^4.3.1",
* "eslint": "^8.57.0",
* "eslint-plugin-react": "^7.34.3",
* "eslint-plugin-react-hooks": "^4.6.2",
* "eslint-plugin-react-refresh": "^0.4.7",
* "vite": "^5.3.4"

### Testing

* Test category component
* Test product component
* Test action and reducer from store

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
