import React from 'react'
import { useState } from 'react'
function Form() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name , pass);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input 
                        type="text" 
                        name="name"
                        value={name}
                        onChange ={(e) => setName(e.target.value)} />
                </label>
                <label>Password
                    <input 
                        type="password" 
                        name="password"
                        value={pass}
                        onChange = {(e) => setPass(e.target.value)}/>
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Form