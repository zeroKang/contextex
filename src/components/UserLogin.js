import React, {useState, useContext} from 'react'
import {UserContext} from '../provider/UserProvider'

const UserLogin = () => {

    const [text, setText] = useState('')

    const {updateUserName} =  useContext(UserContext) 

    const handleClick = () => {

        updateUserName(text)

    }

    return(
        <div>
            <h5>USER LOGIN</h5>
            <input type='text' value={text} onChange= { (e) => { setText(e.target.value)}}></input>
            <button onClick={handleClick}>LOGIN</button>
        </div>
    )
}
export default UserLogin
