import styled from "styled-components"

import Header from "../../Header"
import Receipt from "./Receipt"

export default function ReceiptScreen() {
    return (
        <Wrapper>
            <Header headerText={
                <>
                    <div className="success">
                        Pedido feito com sucesso!
                    </div>
                </>
            } />
            <Receipt />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    margin-top: 140px;
`