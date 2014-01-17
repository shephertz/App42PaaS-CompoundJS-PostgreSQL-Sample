App42PaaS-CompoundJS-PostgreSQL-Sample
======================================

Sample CompoundJS App with PostgreSQL for App42 PaaS Platform

## Getting Start with App42

1. Setup infrastructure for required environment
2. Create service
3. Deploy a CompoudJS application

### Setup infrastructure for required environment

    $ app42 setupInfra   
    
### Create service

    $ app42 createService
    
DB Configure(application_root_dir/config/database.js) 

    production: {
        driver: 'postgres',
        host: '<VM IP>',
        port: <VM PORT>,
        username: '<USER NAME>',
        password: 'PASSWORD',
        database: 'DATABASE NAME'
    }
    
### Deploy a CompoundJS application

    $ app42 deploy

#### Get application details:

    $ app42 appInfo --app AppName    
    
Visit your application:

