import { Client } from '../lib'
const client = new Client()

client.on('connect', async () => {
  console.log(client.user)
  console.log(await client.todo.get())
})

client.connect('xxxx', 'yyy.example.com') 