// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react';

function UsernameForm({onSubmitUsername}) {

  const inputRef = React.useRef(null);
  const [username, setUsername] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmitUsername(username);
  }

  const handleChange = event => {
    const {value} = event.target;
    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={inputRef} value={username} onChange={handleChange}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
