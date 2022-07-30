import styled from "styled-components"

export default function Footer() {

    return (
        <Wrapper>
            <div className="img"></div>
            <div className="info">

            </div>
        </Wrapper>
    )
};


const Wrapper = styled.div`
& {
    position: fixed;
    left: 0;
    bottom: 0;

    width: 100vw;
    height: 120px;

    justify-content: flex-start;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;

    background: #DFE6ED;
    border: 1px solid #9EADBA;

    z-index: 1;
}

.img {
    width: 70px;
    height: 90px;

    margin: 10px;
    padding: 5px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
}

.info {

}
`