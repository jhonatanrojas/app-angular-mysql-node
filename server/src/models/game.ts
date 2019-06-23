import { connection } from '../database';

class game {
    constructor() {
        
    }

    public async getAll(): Promise<void>  {
    
        const data=  await connection.query('SELECT * FROM games');    
        return data;
    }

    public async create(body :Object) : Promise<void> {
    
    
        const data=  await connection.queryP('INSERT INTO games set ?',body);    
        return data;

    }

    public async update(body :Object) : Promise<void> {
    
    
        const data=  await connection.queryP('UPDATE games set ? WHERE id = ?',body);    
        return data;

    }

    public async getOne(id :Number) : Promise<void> {
    
    
        const data=  await connection.queryP('SELECT * FROM games WHERE id = ?', [id]);    
        return data;

    }

    public async delete(id :Number) : Promise<void> {
    
    
        const data=  await connection.queryP('DELETE FROM games WHERE id = ?', [id]);    
        return data;

    }

    
}


export const Game = new game();

