import Header from "../../Header"
import Footer from "../../Footer"
import Seats from "./Seats"
import ClientDataForm from "./ClientDataForm"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

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
                <Wrapper>
                    <Header />
                    <Seats seats={getSession.seats} seatsSelected={seatsSelected} setSeatsSelected={setSeatsSelected} />
                    <ClientDataForm />
                    <Footer posterURL={getSession.movie.posterURL} title={getSession.movie.title} day={getSession.day} time={getSession.name} />
                </Wrapper>
            }
        </>
    )
};

const Wrapper = styled.div`
    flex-direction: column;

    margin-top: 140px;
    margin-bottom: 140px;
`