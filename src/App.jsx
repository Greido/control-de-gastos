import { MyRoutes } from "./routers/routes";
import { Sidebar } from "./components/organismo/sidebar/Sidebar";
import { Device } from "./styles/breakpoints";
import { createContext, useState } from "react";
import Menuambur from "./components/organismo/Menuambur";
import { Light, Dark } from "./styles/themes";
import styled, { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("dark");
    const themeStyle = theme === "light" ? Light : Dark;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Create a QueryClient instance
    const queryClient = new QueryClient();

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <QueryClientProvider client={queryClient}>
                    <AuthContextProvider>
                        <Container className={sidebarOpen ? "active" : ""}>
                            <div className="ContentSidebar">
                                <Sidebar
                                    state={sidebarOpen}
                                    setState={() =>
                                        setSidebarOpen(!sidebarOpen)
                                    }
                                />
                            </div>
                            <div className="ContentMenuambur">
                                <Menuambur />
                            </div>
                            <Containerbody>
                                <MyRoutes />
                            </Containerbody>
                        </Container>
                        <ReactQueryDevtools initialIsOpen={true} />
                    </AuthContextProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    background: ${({ theme }) => theme.bgtotal};
    transition: all 0.2s ease-in-out;

    .ContentSidebar {
        display: none;
    }
    .ContentMenuambur {
        display: block;
        position: absolute;
        left: 20px;
    }
    @media ${Device.tablet} {
        grid-template-columns: 65px 1fr;
        &.active {
            grid-template-columns: 220px 1fr;
        }
        .ContentSidebar {
            display: initial;
        }
        .ContentMenuambur {
            display: none;
        }
    }
`;

const Containerbody = styled.div`
    grid-column: 1;
    width: 100%;
    @media ${Device.tablet} {
        grid-column: 2;
    }
`;

export default App;
