// Larisa Pyykölä, student number 1702357
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// added configuration fot the database
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBkjnEL-E74PXsWWwLWJ2tGxAUbFUnE2mo",
    authDomain: "findnearme-2ca73.firebaseapp.com",
    databaseURL: "https://findnearme-2ca73.firebaseio.com",
    projectId: "findnearme-2ca73",
    storageBucket: "findnearme-2ca73.appspot.com",
    messagingSenderId: "525089147585"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
