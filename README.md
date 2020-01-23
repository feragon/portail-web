# Projet de Portail Web d'Entreprise
[![DeepScan grade](https://deepscan.io/api/teams/6738/projects/8858/branches/113039/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=6738&pid=8858&bid=113039)
[![Travis CI status](https://travis-ci.org/feragon/portail-web.svg?branch=master)](https://travis-ci.org/feragon/portail-web)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Settings user role

```
export GOOGLE_APPLICATION_CREDENTIALS=.../portail-web-entreprise-firebase-adminsdk-....json
npm install -g firebase-admin
node
```

Inside node, run:
```
admin = require("firebase-admin")
admin.initializeApp()
 
let uid = "..."
// Set claims
admin.auth().setCustomUserClaims(uid, {role: "admin"}).then(() => {});

//Get claims
admin.auth().getUser(uid).then((user) => { console.log(user.customClaims); });
```
