import React, {createContext, useState} from 'react'


export const PrivateContext = createContext('Private')

const PrivateProvider = (props) => {

    const [grade, setGrade] = useState('USER')


    console.log("userprovider.................")

    return(
        <PrivateContext.Provider value= {grade}>
            {props.children}
        </PrivateContext.Provider>
    )
}
export default PrivateProvider