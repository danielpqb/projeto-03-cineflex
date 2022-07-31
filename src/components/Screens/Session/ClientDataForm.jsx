import styled from "styled-components"

export default function ClientDataForm() {
    return (
        <>
            <FormWrapper action="">
                <div>
                    <label htmlFor="name">Nome do comprador:</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome..."
                        name="name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input
                        type="text"
                        placeholder="Digite seu CPF..."
                        name="cpf"
                        required
                        pattern="^([0-9]){3}\.([0-9]){3}-([0-9]){2}$"
                    />
                </div>
            </FormWrapper>
            <ButtonWrapper>
                Reservar assento(s)
            </ButtonWrapper>
        </>
    )
};

const FormWrapper = styled.form`
    width: 100%;

    min-width: 380px;
    max-width: 380px;

    margin-top: 25px;
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

const ButtonWrapper = styled.div`
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
`

/*value={name}
onChange={(e) => { setName(e.target.value) }}*/
