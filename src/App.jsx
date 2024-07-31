import { MyRoutes } from "./routers/routes";
import { createContext, useState } from "react";
import { Light, Dark } from "./styles/themes";
import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./context/AuthContext";
export const ThemeContext = createContext(null);
function App() {
    const [theme, setTheme] = useState("light");

    const themeStyle = theme === "light" ? Light : Dark;

    return (
        <>
            <ThemeContext.Provider value={{ setTheme, theme }}>
                <ThemeProvider theme={themeStyle}>
                    <AuthContextProvider>
                        <MyRoutes />
                    </AuthContextProvider>
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
