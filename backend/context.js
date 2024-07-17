import {createContext, useContext} from 'something react context'

//making a firebase context 
const firebaseContext = createContext(null)


const firebaseContextProvider = ({children}) => {
    return(
        // <firebaseContext.provider value = {{all the functions, state and the value }}>
            {children}
        // </firebaseContext.provider>

    )
}


// so similarly then we have a concept in next js basically other components ko ek pipeline se pass karna hota hai so basically single source of truth hota hai jo ki ek wrapper se pass karna hota hai and then basically sare components uske aandar pass kiye jaate hai 

// so basically in a next js project we have something as the layout file so basically this is the file jahan se sara execution start hota hai and then the other components are rendered inside that 

// so basically how can we make a comp like that 
// export const AppWrapper = ({children}) => {
//     {children}
// }

// so basically when we need to make an authentication system then we need to make a session provider with which we need to wrap everything inside the layout.jsx so basically aisa isliye because we need to make it a client comp 