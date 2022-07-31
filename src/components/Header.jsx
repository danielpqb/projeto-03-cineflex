import styled from "styled-components"

export default function Header() {

    return (
        <Wrapper>
            <div className="logo">
                CINEFLEX
            </div>
            <div className="text">
                Selecione o filme
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
`