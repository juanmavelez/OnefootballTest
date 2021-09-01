# Onefootballtest

live on [https://vercel.com/juanmavelez/onefootball-test]

This repositoty is a small Player Archive for a OneFootball Frontend task.
The user  can type the name of a player. If the player is active the application will display a card with the basic information about the player. In case the player is not active, a red card will be displayer with a simple text "Player not found".

As examples it is suggested to use:
  `fabio`: Player card with its data.
  `giorgio`: Not found card.

## Design

This project was designed using Mobile First approach, creating first the styles for mobile (320px) and using the media queries to adapt the main view to all the other devices.

For the project I used Angular Material and CSS for the styles.

The design impletented can be found in the following link from Figma
[figma](https://www.figma.com/file/jjxFasRVp1golw9S3WfTEn/One-Futball?node-id=0%3A1)


## Arquitecture

The application is divided into:
   - core module: this module contains the models, and the services. It is used for the Singleton services that conects to the backend.
   - card module: this module contains the 2 cards that are displayed.
   - material module: this module will have all the material components.
   - app.component: App component is the main component.
   - environments : contain the backends based URL.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
