const { create } = require('domain');
const fs = require('fs')

class UserRepo {
   constructor(filename){
      if(!filename){
         throw new Error('Creating a repository requires a file name.')
      }

      this.filename = filename;
      try {
         fs.accessSync(this.filename);
      } catch (err) {
         fs.writeFileSync(this.filename, '[]');
      }
      
   }

   async getAll() {
      return JSON.parse(await fs.promises.readFile(this.filename, {
         encoding: 'utf8'
         })
      )
   }


   async create(attrs){
      const records = await this.getAll();
      records.push(attrs);

      await fs.promises.writeFile(this.filename, JSON.stringify(records))
   
   }
}


const test = async () => {
const repo = new UserRepo('users.json');
await repo.getAll();
}

test()