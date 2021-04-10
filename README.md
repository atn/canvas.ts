## Canvas.ts
##### NOTE: Canvas.ts is still in early development and is not production ready. Features are missing and bugs will occur.

### Documentation

#### Sample application
```js
const { Client } = require('canvas.ts')
const client = new Client()

// when client connects to Canvas
client.on('connect', () => {
  console.log(`Logged into ${client.domain} as ${client.user.name}, Enrolled in ${client.courses.size} courses.`)
})

client.connect('auth', 'domain')

```
