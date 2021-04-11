const { Client } = require('./lib')
const client = new Client()

// when client connects to Canvas
client.on('connect', async () => {
  console.log(`Logged into ${client.domain} as ${client.user.name}, Enrolled in ${client.courses.size} courses.`)
})

client.connect('auth', 'domain.example.com')
