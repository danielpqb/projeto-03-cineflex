import { useLocation } from "react-router-dom"
import styled from "styled-components"

import Header from "../../Header"
import Receipt from "./Receipt"

export default function ReceiptScreen() {

    const { state } = useLocation()
    let { clientData, seatsSelected, getSession } = state

    return (
        <Wrapper>
            <Header
                headerBackButton={true}
                headerText={
                    <>
                        <div className="success">
                            Pedido feito com sucesso!
                        </div>
                    </>
                }
            />
            <Receipt clientData={clientData} seatsSelected={seatsSelected} getSession={getSession} />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    margin-top: 140px;
`