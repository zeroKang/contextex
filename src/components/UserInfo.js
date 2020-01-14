import React, {useContext} from 'react'
import {UserContext} from '../provider/UserProvider'


const UserInfo = () => {

    const userObj =  useContext(UserContext) 

    return (
        <div>
            <h4>User Info</h4>
            <h5>{userObj.userName}</h5>
            <hr/>
        </div>
    )
}

export default UserInfo