const assert = require('assert')

const  UserRepository = require('./repos/users.js');


describe('REPOSITORIES', function (){
  describe('Users Class', function (){
    const userRepo = new UserRepository('users.test.json')
    
    it('should create a new empty json file', async function (){
      const records = await userRepo.getAll()
      assert.ok(records)
    })

    it('should create an email, password, and id', async function (){
      await userRepo.create({email: 'test@test.com', password: "password"})
      const records = await userRepo.getAll()
      assert.ok(records[0].email === 'test@test.com' && records[0].id.length > 7)
    })

    it('should update a user', async function (){
      let records = await userRepo.getAll()
      const { id } = records[0]
      await userRepo.update(id, {email: 'change'})
      records = await userRepo.getAll()
      assert.ok(records[0].email === 'change')
    })

    it('should delete a user', async function (){
      let records = await userRepo.getAll()
      const { id } = records[0]
      await userRepo.delete(id)
      records = await userRepo.getAll()
      assert.ok(!records[0])
    })
  })
})