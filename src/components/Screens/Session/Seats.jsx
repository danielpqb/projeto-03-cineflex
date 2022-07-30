import styled from "styled-components"
import Seat from "./Seat"

export default function Seats({ seats, seatsSelected, setSeatsSelected }) {

    return (
        <Wrapper>
            {
                seats.map((seat, index) => {
                    return (
                        <Seat seat={seat} key={index} seats={seats} seatsSelected={seatsSelected} setSeatsSelected={setSeatsSelected} />
                    )
                })
            }
            <div className="labels">
                <div className="label">
                    <div className="selected"></div>
                    Selecionado
                </div>
                <div className="label">
                    <div className="available"></div>
                    Disponível
                </div>
                <div className="label">
                    <div className="unavailable"></div>
                    Indisponível
                </div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    & {
        margin-top: 140px;
        margin-bottom: 140px;
        flex-wrap: wrap;
        min-width: 380px;
        max-width: 380px;
    }

    .labels {
        justify-content: space-evenly;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;

        color: #4E5A65;
    }

    .label {
        margin: 10px;
        flex-direction: column;
    }

    .selected,
    .available,
    .unavailable {
        margin: 5px;
        border-radius: 17px;
        width: 26px;
        height: 26px;
    }

    .selected {
        background: #8DD7CF;
        border: 1px solid #1AAE9E;
    }

    .available {
        background: #C3CFD9;
        border: 1px solid #7B8B99;
    }

    .unavailable {
        background: #FBE192;
        border: 1px solid #F7C52B;
    }
`