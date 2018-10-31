const express = require('express')
const { exec, execSync } = require('child_process')

const app = express()

exec('joe ls', (exception, output, error) => {
  if (exception) {
    console.error(exception)
    process.exit(1)
  }
  const supported = output
    .split('\n')[1]
    .split(',')
    .map(s => s.trim())
    .reduce((acc, curr) => {
      const ignorefileContents = execSync('joe g ' + curr)
      acc[curr] = ignorefileContents.toString('utf-8')
      return acc
    }, {})

  app.listen(process.env.PORT || 8080, process.env.HOST || 'localhost', () => {
    console.log(
      'started server on ' + process.env.HOST + ':' + process.env.PORT,
      supported
    )
  })

  app.get('/', (req, res) => {
    if (supported[req.query.lang]) {
      res.send(supported[req.query.lang])
    } else {
      res.sendStatus(404)
    }
  })
  app.get('/:lang', (req, res) => {
    if (supported[req.params.lang]) {
      res.send(supported[req.query.lang])
    } else {
      res.sendStatus(404)
    }
  })
})
