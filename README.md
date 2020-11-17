# user-management
Manage Users and Loyalty them.
Setup connection
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

  - ### POST
      |Field|Description|
      |---|---|
      |**name**|admin name|
      |**email**|admin email|
      |**password**|admin password|


