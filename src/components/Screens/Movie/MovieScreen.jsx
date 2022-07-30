import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

import Header from "../../Header"
import Footer from "../../Footer"
import MovieDates from "./MovieDates"

export default function MovieScreen() {
    const [movieDates, setMovieDates] = useState({})
    const { movieId } = useParams()

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`)
        promisse.then((resp) => { setMovieDates(resp.data) })
    }, [movieId])

    return (
        <>
            <Header />
            <MovieDates movieDates={movieDates} />
            <Footer posterURL={movieDates.posterURL} title={movieDates.title} />
        </>
    )
};