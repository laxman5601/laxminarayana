// import React from "react";

import {UserContext} from "./App"
import React from "react"

const ChildTwo =()=>{
    return(
        <div>
            <UserContext.Consumer>
    {value=><div>{value}</div>}
    </UserContext.Consumer>
    </div>
    )
}
export default ChildTwo