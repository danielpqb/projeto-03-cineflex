import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function ClientDataForm({ clientData, setClientData, seatsSelected, getSession }) {

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (seatsSelected.length === 0) {
            return alert(`Olá, ${clientData.name}.\nPor favor escolha um assento.`)
        }

        const promise = axios.post(
            'https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many',
            {
                ids: seatsSelected,
                name: clientData.name,
                cpf: clientData.cpf,
            }
        )

        promise.then(() => {
            navigate('/sucesso', { replace: false, state: { clientData: clientData, seatsSelected: seatsSelected, getSession: getSession } })
        })
    }

    return (
        <>
            <FormWrapper action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome do comprador:</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome..."
                        name="name"
                        required
                        value={clientData.name}
                        onChange={(e) => { setClientData({ ...clientData, name: e.target.value }) }}
                    />
                </div>
                <div>
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input
                        type="text"
                        placeholder="Digite seu CPF..."
                        name="cpf"
                        required
                        pattern="^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$"
                        value={clientData.cpf}
                        onChange={(e) => { setClientData({ ...clientData, cpf: e.target.value }) }}
                    />
                </div>
                <div>
                    <ButtonWrapper type="submit">
                        Reservar assento(s)
                    </ButtonWrapper>
                </div>
            </FormWrapper>
        </>
    )
};

const FormWrapper = styled.form`
    width: 100%;

    min-width: 380px;
    max-width: 380px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    color: #293845;

    div {
        margin-top: 10px;
        flex-direction: column;

        justify-content: flex-start;
        align-items: flex-start;
    }

    div input {
        box-sizing: border-box;

        width: 100%;
        height: 50px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;

        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        padding: 15px;

        color: #6e6e6e;
    }

    div input::placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;

        color: #AFAFAF;
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