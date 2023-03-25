
# Local Leaders

This website allows you to see who the local government officials are for a given address. 


## Demo

https://user-images.githubusercontent.com/31599945/226142149-bb2ca3e5-6564-4581-8476-3f1ffeece79a.mp4



## Run Locally

Clone the project

```bash
  git clone https://github.com/Marcellous11/capstone2-Local-Leaders.git
```

You'll need to open threww terminal windows and cd into both backend, frontend, and server. Make sure you have a database server ( I used postresSQL) running on port 5432. You will also need to run the file "leaders.sql" in a psql PostgreSQL interactive console. Run this in your termial

```bash
  pqsl
```
 Then run this to create database and fill it with starter code. 
```bash
  \i leaders.sql
```


Backend

```bash
  cd local-leaders-back-end
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
Next you have to create a free google account at [Google developer](https://developers.google.com/) and create a API TOKEN, also free. 
In the apis folder, you will need to create a secret folder with a secret.js file in it.  Save your API TOKEN in the secret.js file and export it.

Frontend

```bash
  cd local-leaders-front-end
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Tech Stack

**Client:** JavaScript, React,React Router, MaterialUI

**Server:** Node, Express, Puppeteer

**Database:** PostgresSQL


## Documentation

[Puppeteer](https://pptr.dev/)
[MaterialUI](https://mui.com/material-ui/getting-started/overview/)
[React-Router](https://reactrouter.com/en/main)
[React](https://react.dev/reference/react)
[node-PostgresSQL](https://node-postgres.com/)
[Express](https://expressjs.com/)


## 🚀 About Me
I'm a full stack developer currently living in Frisco TX. I love making websites that are useful and make life easier for people. That feeds into my love of making effective software that helps people in real life!


## 🛠 Skills
JavaScript, DOM Manipulation, Git, Ajax, jQuery, Python, Flask, SQL, PostgreSQL, Node, Express, React, Object Oriented Programming, and Redux.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://marcellous.tech/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/m-curtis-jr/)


