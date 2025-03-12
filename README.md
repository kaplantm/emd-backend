# About

This is a Nest.js app for the EMD takehome.

### Dev Setup

`nvm use` (prereq: [nvm](https://github.com/nvm-sh/nvm))

`npm install`

`npm run start:dev`

This will start both the front end and backend.

### Components

|            | Backend (NestJS)                        | Frontend (ReactJS)                       |
| ---------- | --------------------------------------- | ---------------------------------------- |
| Repository | https://github.com/kaplantm/emd-backend | https://github.com/kaplantm/emd-frontend |
| Deployment | AWS EC2 using docker                    | AWS S3 via AWS CLI                       |
| Local      | http://localhost:3000/                  | http://localhost:5173/                   |
| Live       | http://18.217.74.192/                   | http://scratch.tonarie.com/              |

Note that the [index of the api](http://18.217.74.192/) should return 200 and show Hello World! when the backend is running.
They live deploys are very temporary.

### Curls

You can also import these curls into Postman if you prefer a GUI.

Curl command to manually test the Luhn checksum algorithm credit card validation endpoint:

Valid Card Number:

```
curl --location 'http://localhost:3000/credit-card/validate' \
--header 'Content-Type: application/json' \
--data '{
    "cardNumber": "79927398713"
}'
```

Invalid Card Number:

```
curl --location 'http://localhost:3000/credit-card/validate' \
--data '{
    "cardNumber": "1789372997"
}'
```
