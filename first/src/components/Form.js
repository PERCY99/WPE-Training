import React from 'react'

function Form() {
    return (
        <div>
            <form>
                <label>Name
                    <input type="text" name="name"/>
                </label>
                <br></br>
                <label>Password
                    <input type="password" name="password"/>
                </label>
                
            </form>
        </div>
    )
}

export default Form