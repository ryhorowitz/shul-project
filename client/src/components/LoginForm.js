import React, { useState } from "react";
function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e) => { setUsername(e.target.value) }
  const handlePasswordChange = (e) => { setPassword(e.target.value) }

  const handleSubmit = e => {
    e.preventDefault()

    // add async stuff

    setUsername('')
    setPassword('')
  }

  return (

    <></>
  )
}

export default LoginForm