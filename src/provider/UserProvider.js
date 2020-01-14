import React, {createContext, useState} from 'react'


export const UserContext = createContext('Test')

const UserProvider = (props) => {

    const [userName, setUserName] = useState('GUEST')

    const updateUserName = (newName) => {
        setUserName(newName)
    }

    const obj = {userName, updateUserName}


    console.log("userprovider.................")

    return(
        <UserContext.Provider value= {obj}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserProvider