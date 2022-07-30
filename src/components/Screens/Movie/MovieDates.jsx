import styled from "styled-components"

import MovieDay from "./MovieDay"

export default function MovieDates({ movieDates }) {
    return (
        <>
            <Wrapper>
                {movieDates.days !== undefined && movieDates.days.map((day, index) => {
                    return (
                        <MovieDay key={index} info={day} />
                    )
                })}
            </Wrapper >
        </>
    )
};

const Wrapper = styled.div`
    & {
        margin-top: 140px;
        margin-bottom: 140px;
        
        flex-direction: column;
    }
`