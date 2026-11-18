import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  const todos = ['Buy milk', 'Walk the dog', 'Ship the app']
  return (
    <main style={{ fontFamily: 'system-ui', padding: 32 }}>
      <h1>Pocket</h1>
      <p>The web companion of the Pocket iOS app.</p>
      <ul>{todos.map((todo) => <li key={todo}>{todo}</li>)}</ul>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
