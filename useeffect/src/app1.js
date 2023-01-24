import React, { useState } from 'react'

const App1 = () => {
    const [email,setEmail] = useState("")
    function change(e){
            setEmail(e.target.value)
    }
  return (
    <div>
        <input value={email} onChange={change} />
        <p>Email:{email}</p>
    </div>
  )
}

export default App1