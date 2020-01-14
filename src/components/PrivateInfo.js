import React, {useContext} from 'react'
import {UserContext} from '../provider/UserProvider'

import {PrivateContext} from '../provider/PrivateProvider'

const PrivateInfo = () => {

    const userObj = useContext(UserContext)

    console.log(useContext(PrivateContext))
    
    console.log(userObj)

    return(
        <div>
            <h6>Private Page</h6>
        </div>
    )
}

export default PrivateInfo