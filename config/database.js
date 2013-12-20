module.exports = {
    development: {
        driver: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'ankit1234',
        database: 'compoundjs_dev'
    },
    production: {
        driver: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: '',
        database: 'CompoundJS_production'
    }
};
