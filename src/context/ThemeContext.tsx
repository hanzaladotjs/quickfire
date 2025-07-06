import { createContext, useState } from "react";

interface themeContextType {
    theme: boolean,
    setTheme: any,
    
}

export const ThemeContext = createContext<themeContextType>({
    theme: true,
    setTheme: () => {},
    
});
 

const ContextProvider = ({children}:any) => {
    const [theme, setTheme] = useState<boolean>(true)

   

    const contextValue = {
        theme,
        setTheme,
        
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ContextProvider