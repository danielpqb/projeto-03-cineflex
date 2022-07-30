import { useState } from "react"
import styled from "styled-components"

export default function Seat({ seats }) {
    const [isAvailable, setIsAvailable] = useState(false)

    return (
        <>
            {
                seats.map((seat, index) => {
                    return (
                        <Wrapper key={index}>
                            <div className="seat" id={seat.id}>
                                {seat.name}
                            </div>
                        </Wrapper>
                    )
                })
            }
        </>
    )
}

const Wrapper = styled.div`
    & {
        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;

        width: 26px;
        height: 26px;

        margin: 5px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
    }
`