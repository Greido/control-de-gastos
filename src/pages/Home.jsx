import styled from "styled-components";
import { useAuthStore } from "../store/AuthStore";
import { UserAuth } from "../context/AuthContext";
export function Home() {
    const { signOut } = useAuthStore();
    const { user } = UserAuth();
    return (
        <Container>
            <h1>Bienvenido {user.name}</h1>
            <img src={user.picture} alt={user.name} />
            <button onClick={signOut}>Cerrar</button>
        </Container>
    );
}
const Container = styled.div`
    height: 100vh;
`;
