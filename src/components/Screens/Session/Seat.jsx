import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Seat({ seats, seatsSelected, setSeatsSelected, index, seat }) {

    const [seatState, setSeatState] = useState(seat.isAvailable ? 'available' : 'unavailable')

    function handleSeatState() {
        if (seatState === 'available') {
            setSeatState('selected')
            setSeatsSelected([...seatsSelected, seat.id])
        }
        else if (seatState === 'selected') {
            setSeatState('available')

            const arr = [...seatsSelected]
            arr.splice(seatsSelected.indexOf(seat.id), 1)
            setSeatsSelected(arr)
        }
    }

    return (
        <>
            {
                <Wrapper key={index}
                    id={seat.id}
                    className={seatState}
                    onClick={() => { handleSeatState() }
                    }>
                    <div className="seat">
                        {seat.name}
                    </div>
                </Wrapper>
            }
        </>
    )
}

const Wrapper = styled.div`
    & {
        box-sizing: content-box;
        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
    }
`