import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    console.log(user);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
export { UserContext };
