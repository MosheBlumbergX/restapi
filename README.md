# restapi

# Start 

node server.js

## Create payload 

curl -X POST -H "Content-Type: application/json" -d '{"name" :"Don Draper"}' http://localhost/messages 

## Check the messages:

curl  http://localhost/messagesfromtopic         


## How 

The incoming payload gets appended to a file `log.txt` 
The Get request reads the file and provides the content 


## Create image 

```
docker build -t mosheblumberg/my-backend-api .
docker push  mosheblumberg/my-backend-api 
```
