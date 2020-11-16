<p align="center">
  <h2 align="center">User Management</h3>
  <h3 align="center">Manage Users and Loyalty them.</p>
<p align="center">

  
<!-- TABLE OF CONTENTS -->
## :paperclip: Sumário


* [Start](#getting-started)
  * [Tecnologies](#used-tecnologies)
  * [Requisites](#requisites)
  * [Installation](#installation)
* [Documentation](#documentation)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

<!-- GETTING STARTED -->
## Getting started

### Used Tecnologies
:pushpin: Most Used Tecnologies
* [Typescript](https://www.typescriptlang.org)
* [Postgres](https://www.postgresql.org)
* [KnexJS](http://knexjs.org/)
* [Docker](https://www.docker.com/)
* [JWT](https://jwt.io/)
* [NodeJS](https://nodejs.org/en/)

### Requisites

- You need <a href="https://nodejs.org/en/">NodeJS</a>.
- I used <a href="https://yarnpkg.com">Yarn</a>, you can use npm if you prefer to.
- I'd recommend you use <a href="https://www.postgresql.org">Postgres</a>.

- Configure knexfile.ts

  ```ts
   connection: {
      host: 'localhost',
      port: 5433,
      user: 'postgres',
      password: 'docker',
      database: 'postgres',
  },

  ```


### Installation

```bash
# Clone repository
git clone https://github.com/cKauan/user-management.git

# Install all packages

# Yarn
yarn install
# Npm
npm install


# Run migrations

# Yarn
yarn knex migrate:latest
# Npm
npx knex migrate:latest

# Run seeds

# Yarn
yarn knex seed:run

# Npm
npx knex seed:run

# Development server

# Yarn
yarn start:dev
# Npm
npm run start:dev

# Production Environment

# Yarn
yarn build
# Npm
npm run build

# Start project in production

# Yarn
yarn start
# Npm
npm run start
```

## Documentation

### Dashboard Routes
|Method|Path|Description|Body|
|---|---|---|---|
|**GET**|```/users```|get the users list ordered by id|No Body|
|**POST**|```/users```|create a new user|Json|
|**PUT**|```/user<id>```|update an user by id|Json|
|**DELETE**|```/user<id>```|delete an user by id|No Body|

 - #### GET
    - Header Authorization
      ```Authorization: Bearer <token>```

      **token must be valid. See:**
      <a href="/">How to get a token</a>
      
      
    - Query Params
    
      |Param|Description|Required|Example|
      |---|---|---|---|
      |**page**|Defines the page|false|```/users?page=2```|
      
    - Response Example
       
       200 - Success
       ```json
       {
         "data": 
         [
           {
             "name": "Carlos Kauãn Moreira de Sousa",
             "phone": "5585992476020",
             "bought": 500,
             "notes": "Estudando back-end",
             "created_at": "2020-11-16T19:22:56.065Z",
             "id": 3
           },
           {
             "name": "Carlos Kauãn",
             "phone": "5585992476020",
             "bought": 500,
             "notes": "Estudando back-end",
             "created_at": "2020-11-16T19:22:56.065Z",
             "id": 2
           },

         ],
         "total": 1
       }
       ```
   
       **See:** <a href="/">Error Docs</a>

 - #### POST
     |Field|Description|Type|
     |---|---|---|
     |**name**|user name|string|
     |**phone**|user phone|string|
     |**bought**|how much user bought|number|
     |**notes**|notes about user|string|

     - Header Authorization

       ```Authorization: Bearer <token>```

       **token must be valid. See:**
       <a href="/">How to get a token</a>
     - Request Example

        ```json
          {
            "name": "Carlos",
            "phone": "5585992476020",
            "bought": 650,
            "notes": "Estudando"
          }

        ```
      - Response Example

         201 - Success
         ```json
          {
             "id": 34,
             "name": "Carlos",
             "phone": "5585992476020",
             "bought": 650,
             "notes": "Estudando",
             "created_at": "2020-11-16T18:23:54.381Z"
          }
         ```
         
         **See:** <a href="/">Error Docs</a>
         
- #### PUT
 
    - Header Authorization
      ```Authorization: Bearer <token>```

      **token must be valid. See:**
      <a href="/">How to get a token</a>
      
    - Request Example

      ```json
        {
          "name": "José Silva",
          "bought": 1000
        }
      ```

    - Response Example

       201 - Success: Returns the updated user.
       ```json
        {
          "id": 36,
          "name": "José Silva",
          "phone": "5585992476020",
          "bought": 1000,
          "notes": "Estudando back-end",
          "created_at": "2020-11-16T19:22:56.065Z"
        }
       ```

       **See:** <a href="/">Error Docs</a>


 - #### DELETE
    - Header Authorization
      ```Authorization: Bearer <token>```

      **token must be valid. See:**
      <a href="/">How to get a token</a>
      
    - Response Example
       200 - Success
       ```json
        {
           "message": "Deleted"
        }
       ```
       
       **See:** <a href="/">Error Docs</a>

### Admin Routes
|Method|Path|Description|Body|
|---|---|---|---|
|**POST**|```/sign```|register a new admin|Json|
|**GET**|```/login```|login into admin account|No Body|

  - #### GET
     - Header Authorization
     
       ```Authorization: Basic <basic64credentials>```

        - Encoded: ```Authorization: Basic Y2FybG9za2F1YW5AZ21haWwuY29tOmNhcmxvczEyMw==```

        - Decoded: ```Authorization: Basic carloskauan@gmail.com:carlos123 ```
     
     - Response Example
     
        201 - Success
        ```json
         {
            "id": "4802f5a1-7e53-4c4c-8f60-e1c7ec4c161b",
            "name": "Carlos Kauãn",
            "email": "carloskauan@gmail.com",
            "token": "<token>"
          }
        ```
        
        **See:** <a href="/">Error Docs</a>
        
  - #### POST
      |Field|Description|type|
      |---|---|---|
      |**name**|admin name|string|
      |**email**|admin email|string|
      |**password**|admin password|string|
      
      - Header Authorization
      
        ```Authorization: Bearer <token>```
        
        **token must be a valid superuser. See:**
        <a href="/">How to get a admin token</a>
      - Request Example
      
         ```json
          {
            "name": "Carlos Kauãn",
            "email": "carloskauan@gmail.com",
            "password": "carlos123"
          }

         ```
       - Response Example
       
          201 - Success
          ```json
            {
              "id": "0554ec30-db86-4109-ae7d-0a3169e6a831",
              "name": "Carlos Kauãn",
              "email": "carloskauan@gmail.com",
              "token": "<token>"
            }
          ```
          **See:** <a href="/">Error Docs</a>
          

<!-- CONTRIBUTING -->
## Contributing

:dart: Do you wanna contribute and don't know why?

1. Fork Project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add some AmazingFeature'`)
4. Push to your branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

<!-- LICENSE -->
## License

<a href="https://choosealicense.com/licenses/mit/">MIT</a>

<!-- CONTACT -->
## Contact

:boy: Carlos Kauãn - [https://twitter.com/carlaodamassaa](https://twitter.com/carlaodamassaa) - carloskauanmoreiradesousa@gmail.com

<p align="center">Feito com 💚 por Carlos Kauãn</p>
