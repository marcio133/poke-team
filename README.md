# PokemonTeamPlanner

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Explanation

In this example project explore the differences between using the ngrx store and component/store in an Angular application.

The ngrx store is a powerful tool for managing state in Angular applications, providing a centralized location for storing and retrieving data that can be accessed from any component. The ngrx store uses the Redux pattern, which involves creating a single store that holds the entire state of the application, and using actions and reducers to update that state.

However, in some cases, using a centralized store for all state management may be overkill for smaller applications and in bigger applications it may generate a lot of noise, since not everything should or need to be in the centralized state. This is where component/store comes in. 

Here I try to show that those two resouces can be used at the same time, using a centralized store for the most important data of the application that needs to be visible to every component and component/store to the things that don't need to be acessed by the rest of the application.
