import { useState } from "react"

const WithCount = (WrappedComponent,increment) => {
    const UpdatedComponent = () => {
            const [userData,setUserData] = useState(0)

            const IncrementHandler =() =>{
            setUserData(userData + increment)
            };
        return ( <WrappedComponent count ={userData} Increment = {IncrementHandler} /> );
        };
    return UpdatedComponent
}
 
export default WithCount;