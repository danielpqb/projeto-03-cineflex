import styled from "styled-components"
import { Link } from "react-router-dom"

export default function MovieDay({ info }) {
    return (
        <Wrapper id={info.id}>
            <div className="sessionsDay">{`${info.weekday} - ${info.date}`}</div>
            <div className="sessions">
                {info.showtimes.map((session, index) => {
                    return (
                        <Link to={`/sessao/${session.id}`} key={index}>
                            <div className="session">
                                {session.name}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    & {
        margin: 10px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;

        color: #293845;

        flex-direction: column;
    }

    .sessionsDay,
    .sessions {
        justify-content: flex-start;
    }

    .session {
        background: #E8833A;
        border-radius: 3px;

        margin: 3px;
        
        width: 75px;
        height: 35px;
        
        color: #FFFFFF;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
`