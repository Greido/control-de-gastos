import styled from "styled-components";
import { v } from "../../../styles/variables";
import { LinksArray, SecondarylinksArray } from "../../../utils/dataEstatica";
//import { NavLink } from "react-router-dom";

export function Sidebar({ state, setState }) {
    return (
        <Main>
            <Container>
                <div className="Logocontent">
                    <div className="imgcontent">
                        <img src={v.logo} />
                    </div>
                </div>
                <h2>Cerdito</h2>
                {LinksArray.map(({ icono, label, to }, index) => (
                    <div key={index} to={to}>
                        <div className="Linkicon">{icono}</div>
                        <span>{label}</span>
                    </div>
                ))}
            </Container>
        </Main>
    );
}
const Container = styled.div`
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.bg};
    position: fixed;
    padding-top: 20px;
    z-index: 1;
    height: 100%;
    width: 150px;
    padding: 20px;
    transition: 0.1s ease-in-out;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 6px;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colorScroll};
        border-radius: 10px;
    }

    &.active {
        width: 220px;
    }
    .Logocontent {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 60px;
        .imgcontent {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            cursor: pointer;
            transition: 0.3s ease;
            transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)}
                rotate(${({ theme }) => theme.logorotate});
            img {
                width: 100%;
                animation: flotar 1.7s ease-in-out infinite alternate;
            }
        }
        h2 {
            display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
        }
        @keyframes flotar {
            0% {
                transform: translate(0, 0px);
            }
            50% {
                transform: translate(0, 4px);
            }
            100% {
                transform: translate(0, -0px);
            }
        }
    }
    .LinkContainer {
        margin: 5px 0;
        transition: all 0.3s ease-in-out;
        padding: 0 5%;
        position: relative;
        &:hover {
            background: ${(props) => props.theme.bgAlpha};
        }
        .Links {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: calc(${() => v.smSpacing} - 2px) 0;
            color: ${(props) => props.theme.text};
            height: 60px;
            .Linkicon {
                padding: ${() => v.smSpacing} ${() => v.mdSpacing};
                display: flex;
                svg {
                    font-size: 25px;
                }
            }
            .label_ver {
                transition: 0.3s ease-in-out;
                opacity: 1;
            }
            .label_oculto {
                opacity: 0;
            }
            &.active {
                color: ${(props) => props.theme.bg5};
                font-weight: 600;
                &::before {
                    content: "";
                    position: absolute;
                    height: 100%;
                    background: ${(props) => props.theme.bg5};
                    width: 4px;
                    border-radius: 10px;
                    left: 0;
                }
            }
        }
        &.active {
            padding: 0;
        }
    }
`;
const Main = styled.div`
    .Sidebarbutton {
        position: fixed;
        top: 70px;
        left: 42px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${(props) => props.theme.bgtgderecha};
        box-shadow: 0 0 4px ${(props) => props.theme.bg3},
            0 0 7px ${(props) => props.theme.bg};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        z-index: 2;
        transform: ${({ isOpen }) =>
            isOpen ? `translateX(162px) rotate(3.142rad)` : `initial`};
        color: ${(props) => props.theme.text};
    }
`;
