# gitignore server

Wraps [joe](https://karan.goel.io/joe/) into a web-api.

## Dependencies

- Install [joe](https://karan.goel.io/joe/) and make sure it is reachable in `PATH`.
- Install [nodejs](https://nodejs.org).

## Installation

```bash
$ npm install
```

## Running

Set `HOST` and `PORT` environment variables (defaults to `localhost` and 8090 respectively) and run:

```bash
$ node index.js
```

## Usage

The server exposes a `/templates` endpoint that can be queried with `GET`, for example:

```bash
$ curl http://localhost:8090/templates/javascript
```

Also you can query the root with a get query parameter:

```bash
$ curl http://localhost:8090/\?lang\=javascript
```

A 404 will be sent if the template is not found.
