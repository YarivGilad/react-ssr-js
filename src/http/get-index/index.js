let arc = require('@architect/functions')
const {render} = require('@architect/views/dist/server.render')

async function app(req) {
    return {
        statusCode: 200,
        type: 'text/html',
        body: await render()
      }
}

exports.handler = arc.http.async(app)
