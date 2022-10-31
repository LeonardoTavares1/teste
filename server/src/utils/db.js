/* Como foi alterado o banco para SQL server, aviso que deve ser alterado as informações daqui para cada
local de uso. E o sql server precisa ser configurado para o funcionamento em sua máquina. 
Recomendo o link de um video para a configuração do servidor: https://youtu.be/fvpeb-MFtgQ */
/*aqui ficam as informações de conexão do banco de dados

OBSERVE SE O BANCO ESTÁ COMO O DA ETEC, SE NÃO DARÁ ERRO*/

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