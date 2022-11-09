export const db = {
    server: '10.68.102.4',
    port: 1433,
    user:'sa',
    password:'Admin2018@',
    database:'LiberT', 
    options:{
        enableArithAbort: true,
        encrypt: false, 
        trustServerCertificate: true
    },
    connectionTimeout: 1500, 
    pool:{
        max:10, 
        min:0, 
        idleTimeoutMillis:30000
    },
} 