# dotenvjs

dotenvjs is helps to get flavored with feature of .env and console.color.

This package is helps to provide many features with less efforts to save your development time.

`npm install -S dotenvjs`

------------------------------------------
#### .env Features

You can define `.env` in `json` and normal `string` format also.

Take a look of .env here.

##### `.env` String Format
```
    
    #Application settings
    SERVER_NAME=myAppServer
    SERVER_PORT=8080
    DATABASE='mongodb://localhost/test'
    REDIS_SERVER='redis://localhost:6379/'
    
    #SOCKET settings
    SOCKET_INTERVAL=****
    SOCKET_TIMEOUT=****
    
    #PUSH configurations
    PUSH_APIKEY='***********************'
    PUSH_RETRIES=2
```

To use this configuration. 

```js
    var env = require('dotenvjs').string();
    console.log(env.SERVER_NAME);
    //OR
    process.env.SERVER_NAME
```
------------------------------------------
##### `.env` JSON Format

```json


    {
        "serverName" : "myAppServer",
        "server": {
            "port": 80
        },
    
        "database": {
            "url": "mongodb://localhost/test"
        },
    
        "redis": {
            "url":"redis://localhost:6379/"
        },
    
        "socket": {
            "interval": ****,
            "timeout": ****
        },
    
        "pushNotification":{
            "apikey": "***********************",
            "retries": 2
        }
    }

```

To use this configuration.

```js
    var env = require('dotenvjs').json();
    env.serverName;
    env.database.url;
```
    
------------------------------------------

#### Custom environment file

Start filename with `.env` & specify file name with commandline argument.

`>> node server.js .env.development`

------------------------------------------
#### console.color

You can use this functionality for colorful logging in console:
 
 Simply write :
 
 ```js
    console.color.log('This is a simple log');
    console.color.info('This is an info');
    console.color.warn('This is a warning');
    console.color.error('This is an error');
    console.color.custom('magenta', 'MyCustom Msg',"Hello Test");
 ```
 
 Different Colors May Apply in custom:
 
    'cyan',
    'yellow',
    'green',
    'magenta',
    'red',
    'blue',
    'bright_cyan',
    'bright_yellow',
    'bright_green',
    'bright_magenta',
    'bright_red',
    'bright_blue'