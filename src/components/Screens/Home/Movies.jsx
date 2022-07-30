import styled from "styled-components"
import axios from "axios"
import React, { useEffect } from "react"

import Movie from "./Movie"

export default function Movies() {
    const [movies, setMovies] = React.useState([])

    useEffect(() => {
        const promisse = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')
        promisse.then((resp) => { console.log(resp.date); setMovies(resp.data) })
    }, [])

    return (
        <>
            <Wrapper>
                {movies.map((movie, index) => (<Movie key={index} info={movie} />))}
            </Wrapper >
        </>
    )
};

const Wrapper = styled.div`
    & {
        margin-top: 140px;
        flex-wrap: wrap;
    }
`