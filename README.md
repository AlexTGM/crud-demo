# Running the application

To run the application you must make the following steps:

* `cd frontend` -> `npm i` -> `npm start` -> this will make the client side works
* `cd backend/TestApplication` -> `dotnet ef database update` -> to generate application's database
* `dotnet run` -> to make the backend side works
* Open your browser and follow (http://localhost:5000/api/init/init) link to generate test data
* In your browser navigate to (http://localhost:4200) to see the working application

# Used technologies

## Frontend
    
    * Angular (https://github.com/angular/angular)
    * NgRx Store (https://github.com/ngrx/store)
    * Ng Zorro Antd (https://github.com/NG-ZORRO/ng-zorro-antd)

## Backend

    * ASP.Net Core Web Api (https://github.com/aspnet/AspNetCore)
    * Entity Framework Core (https://github.com/aspnet/EntityFrameworkCore)
    * SQLite
    * Mediator (https://github.com/jbogard/MediatR)