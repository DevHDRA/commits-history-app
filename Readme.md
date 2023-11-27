# **Github commits history app**

This apps gather the commits history for his own repo by default, but has the posibility to use it for any public repo on github or private if you have a token

Token generation doc: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

# Settings:

[Needs to install Node js (v.18.18.2)](https://nodejs.org/en/about/previous-releases), and [Nestjs (v10.2.1)](https://www.npmjs.com/package/@nestjs/cli)

Frontend (commits-history-app-frontend folder) and backend (commits-history-app-backend folder) are in the same repo, in the root path there is a package json that have three npm commands:
* **install-app:** Go throw the folders and install all the dependecies
* **start-backend:** intialize the Nestjs backend
* **start-frontend:** intialize the React js frontend

The backend will run in port 3000 by default and the frontend on 5173. 

If you want to change the backend port change the value directly in code on file ```main.ts``` in root directory, line 9

```
await app.listen(3000);
```

If you change the backend port, change the variable VITE_BACKEND-PORT on commits-history-app-fronted/.env to maintain a connection witout any issue


This project was develop and tested with the next framework versions:

Nestjs CLI: v10.2.1
Node: v18.18.2

To ensure a well perform please use this version as well

# GitHub Quota:

The github api have somes quota for his non-authenticate request and authenticate requests as well, take a look at his documentation https://docs.github.com/es/rest/overview/rate-limits-for-the-rest-api?apiVersion=2022-11-28