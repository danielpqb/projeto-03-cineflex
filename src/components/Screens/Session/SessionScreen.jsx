import Header from "../../Header"
import Footer from "../../Footer"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Seats from "./Seats"

export default function SessionScreen() {
    const [seatsSelected, setSeatsSelected] = useState([])
    const [getSession, setGetSession] = useState({})
    const { sessionId } = useParams()

    console.log(seatsSelected)

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`)
        promisse.then((resp) => {
            setGetSession(resp.data)
        })
    }, [sessionId])

    return (
        <>
            {getSession.seats !== undefined &&
                <>
                    <Header />
                    <Seats seats={getSession.seats} seatsSelected={seatsSelected} setSeatsSelected={setSeatsSelected} />
                    <Footer posterURL={getSession.movie.posterURL} title={getSession.movie.title} day={getSession.day} time={getSession.name} />
                </>
            }
        </>
    )
};