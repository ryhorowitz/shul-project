import React, { useState } from "react";
function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e) => { setUsername(e.target.value) }
  const handlePasswordChange = (e) => { setPassword(e.target.value) }

  const handleSubmit = e => {
    e.preventDefault()

    // add async stuff
    fetch(`/`)
    setUsername('')
    setPassword('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
      {/* <button type="submit">Signup</button> */}
    </form>
  )
}

export default LoginForm