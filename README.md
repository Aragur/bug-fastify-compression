# bug-exception-filter

This is a minimal bug report repository for [#6179](https://github.com/nestjs/nest/issues/6179) on nestjs/nest  

## Getting Started
Install all dependencies by running
```
yarn install
```
Run the Project by using
```
yarn start
```

## Testing
Navigate to [localhost:8080](http://localhost:8080) and see if everything runs fine. (Should Return `Hello World!`)  
Now Navigate to [localhost:8080/error](http://localhost:8080/error) and check the logs. (Here you can see the duplicate output from `ApiErrorFilter`)