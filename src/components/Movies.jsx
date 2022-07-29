import styled from "styled-components"
import Movie from "./Movie"

export default function Movies() {
    return (
        <Wrapper>
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    margin-top: 140px;
    flex-wrap: wrap;
`