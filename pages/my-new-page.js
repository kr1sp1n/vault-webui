/* Page: myNewPage */

const html = require('choo/html')

function myNewPage (state, prev, send) {
  return html`
    <main>
      <h1>myNewPage</h1>
    </main>
  `
}

module.exports = myNewPage
