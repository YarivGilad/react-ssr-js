import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app';


export async function render() {
  let body = ReactDOMServer.renderToString(<App/>)
  return `<!DOCTYPE html>
          <html>
            <body>
              <div id="app">${body}</div>
              <script src="/_static/app.bundle.js"></script>
            </body>
          </html>`         
}