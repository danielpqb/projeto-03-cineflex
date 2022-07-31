import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Receipt({ clientData, seatsSelected, getSession }) {
    return (
        <Wrapper>
            <div>
                <h1>Filme e sessão</h1>
                <h2>
                    {getSession.movie.title}
                    <br />
                    {`${getSession.day.date} ${getSession.name}`}
                </h2>
            </div>

            <div>
                <h1>Ingressos</h1>
                <h2>
                    {seatsSelected.map((value, index) => {
                        for (const element of getSession.seats) {
                            if (element.id === value) {
                                return (
                                    <div key={index}>
                                        {`Assento ${element.name}`}
                                    </div>
                                )
                            }
                        }
                        return (
                            <div key={index}>
                                ERRO: Assento não encontrado!
                            </div>
                        )
                    })}
                </h2>
            </div>

            <div>
                <h1>Comprador</h1>
                <h2>
                    {`Nome: ${clientData.name}`}
                    <br />
                    {`CPF: ${clientData.cpf}`}
                </h2>
            </div>

            <Link to={'/'} >
                <div>
                    <ButtonWrapper>
                        Voltar pra Home
                    </ButtonWrapper>
                </div>
            </Link>
        </Wrapper >
    )
};

const Wrapper = styled.div`
    & {
        flex-direction: column;
    }
    
    div {
        flex-direction: column;
        align-items: flex-start;
    }

    h1,
    h2 {
        font-family: 'Roboto';
        font-style: normal;
        
        color: #293845;

        margin: 0px;
    }

    h1 {
        margin: 5px;
        font-weight: 700;
        font-size: 24px;
    }

    h2 {
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 22px;
    }
`

const ButtonWrapper = styled.button`
    & {
        align-self: center;

        border: none;

        width: 225px;
        height: 45px;

        margin-top: 30px;

        background: #E8833A;
        border-radius: 3px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        text-align: center;

        color: #FFFFFF;
    }
`
