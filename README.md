# Assesment II
###### The objective of this mission is to put into practice what you have learned in the program. The topics that will be covered are: Node.js, express, mongodb, testing.
##### The mission consists of two parts: first you will have to build a RestFul api and then you will have to answer a series of questions. In the mission report you must add the link to the project repository and the answers to the questions.
####ENDPOINTS
|Route|HTTP Verb|Route Middleware|Description|
|---|---|---|---|
|/auth/local/signup|POST|`authMiddleware()`|Register user by email/username/password|
|/auth/local/login|POST|`authMiddleware()`|Login user by email/password|
|/api/favs|GET|`isAthenticated()`|Get all list of favorites|
|/api/favs|POST|`isAthenticated()`|Creates a new list of favorites|
|/api/favs/:id|GET|`isAthenticated()`|Get a single list of favorites|
|/api/favs/:id|POST|`isAthenticated()`|Add new item to list of favorites|
|/api/favs/:id|DELETE|`isAthenticated()`|Deletes a list of favorites|

####DEPENDENCIES
- bcryptjs
- cors
- dotenv
- express
- express-validator
- jsonwebtoken
- mongoose
- morgan

