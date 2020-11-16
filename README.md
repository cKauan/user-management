# User Management
## Manage Users and Loyalty them.

- knexfile.ts 
```ts
 connection: {
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: 'docker',
    database: 'postgres',
},

```


## Dashboard Routes
|Method|Path|Description|
|---|---|---|
|**GET**|```/users```|get the users list ordered by id|
|**POST**|```/users```|create a new user|
|**PUT**|```/user<id>```|update an user by id|
|**DELETE**|```/user<id>```|delete an user by id|

## Admin Routes
|Method|Path|Description|
|---|---|---|
|**POST**|```/sign```|register a new admin|
|**GET**|```/login```|login into admin account|

  - ## GET
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
        
  - ### POST
      |Field|Description|
      |---|---|
      |**name**|admin name|
      |**email**|admin email|
      |**password**|admin password|
      
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
