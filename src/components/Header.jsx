import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Header({ headerText, headerBackButton }) {

    const navigate = useNavigate()

    return (
        <Wrapper>
            <div className="logo">
                {headerBackButton === true &&
                    <div className="back-button" onClick={() => { navigate(-1) }}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                }
                CINEFLEX
            </div>
            <div className="text">
                {headerText}
            </div>
        </Wrapper>
    )
};


const Wrapper = styled.div`
& {
    position: fixed;
    left: 0;
    top: 0;

    width: 100%;
    height: auto;

    flex-direction: column;
    justify-content: flex-start;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;

    z-index: 1;
}

.logo {
    background: #C3CFD9;
    color: #E8833A;
    font-size: 34px;
    height: 70px;
}

.text {
    background: #FFFFFF;
    color: #293845;
    font-size: 24px;
    height: 70px;
}

.success {
    font-weight: 700;
    font-size: 24px;

    color: #247A6B;
}

.back-button {
    position: absolute;
    left: 20px;
    justify-content: flex-start;
    height: 70px;
}
`