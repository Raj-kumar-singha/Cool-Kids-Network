# Cool Kids Network

Build an app with a user-management system Our product team has imagined a new game, the “Cool Kids Network” ; and they need you to implement a proof of concept. 

## Technical Stack:

- Node.js
- Express.js
- MongoDB
- React.js

## Setup For Server

1. Go Client durectory using cd Server
2. Install the dependencies by running 
```
npm install
```
1. Set up the environment variables in `.env` file.
2. Start the server using 
```
npm start
```

## .env For Client

```.env

PORT=8080
DB_URL="mongodb+srv://Node_Assessment:Assessment@cluster0.66svo.mongodb.net/KidsNetwork?retryWrites=true&w=majority"

```

## Setup For Client

1. Clone the repository.
2. Go Client durectory using cd Client
3. Install the dependencies by running 
```
npm install
```
3. Set up the environment variables in `.env` file.
4. Start the server using 
```
npm run dev
```

## .env For Client

```.env

VITE_API_URL=http://localhost:8080/api/v0
VITE_BOUNCIFY_KEY=l5bvrzryv2b4pbqhjfvu9wlxkril8869
VITE_BOUNCIFY_ENDPOINT=https://api.bouncify.io/v1/verify

```

## API Endpoints

### For Normal user
- **POST /api/v0/signup**: Register a new user.
- **POST /api/v0/login**: Login an existing user.
- **GET /api/v0/allUsrs**: Getting all users as per role.
- **GET /api/v0/all-users**: Getting all users without validating role.
- **GET /api/v0/update-role**: Update the role.
- 
### For Maintainer user
- **POST /api/v0/maitain-users/login**:Login an existing  maintainer user.



## Explanation:

