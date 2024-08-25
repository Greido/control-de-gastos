import styled from "styled-components";

import { BtnSave } from "../moleculas/BtnSave";
import { v } from "../../styles/variables";
import { useAuthStore } from "../../store/AuthStore";

export function LoginTemplate() {
    const { signInWithGoogle } = useAuthStore();
    return (
        <Container>
            <div className="contentCard">
                <span className="version">Version 1.0</span>
                <div className="contentImg">
                    <img src={v.logo} />
                </div>
                <Titulo>Cerdito</Titulo>
                <p className="frase">
                    Toma el control de tus 💵 gastos e 💰 ingresos
                </p>
                <ContainerBtn>
                    <BtnSave
                        titulo="Iniciar con google"
                        icono={<v.iconogoogle />}
                        bgcolor={v.colorSecundario}
                        funcion={signInWithGoogle}
                    />
                </ContainerBtn>
            </div>
        </Container>
    );
}
const Container = styled.div`
    background-image: url(${v.imagenfondo});
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    .contentCard {
        background-color: #131313;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin: 20px;
        padding: 20px;
        box-shadow: 10px 9px 25px 0px rgba(0, 0, 0, 0.75);
    }
    .version {
        color: #c4c3c3;
        text-align: start;
    }
    .contentImg {
        img {
            max-width: 60%;
            animation: flotar 1.5s ease-in-out infinite alternate;
        }
    }
    .frase {
        color: #909090;
        font-size: 1.2rem;
    }

    @keyframes flotar {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(0, 15px);
        }
        100% {
            transform: translate(0, -0);
        }
    }
`;
const Titulo = styled.span`
    font-size: 5rem;
    font-weight: 700;
`;
const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
`;
