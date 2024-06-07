import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [on, setOn] = useState(false)

    const container = {
        on: on,
        setOn: setOn
    }
    return (
        <AppContext.Provider value={container}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider