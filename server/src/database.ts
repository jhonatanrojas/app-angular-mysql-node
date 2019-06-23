import mysql  from 'promise-mysql';

import keys from './keys';

class dataBase {
    public connection :any;
    constructor() {
     /* mysql.createConnection(keys.database).then((conn) => {
      this.connection = conn;

    });*/

    const connection=    mysql.createPool(keys.database).then(connect=>{
      this.connection = connect;

    });

    }

    public async  query(sql:string){

        const consulta=  await this.connection.query(sql);
        return consulta;
    }


    public async  queryP(sql:string ,dt:any){

      const consulta=  await this.connection.query(sql,dt);
      return consulta;
  }


    
}


 export  const connection  = new dataBase();