import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Movie({ info }) {
    return (
        <Link to={`/filme/${info.id}`}>
            <Wrapper>
                <div className="movie" id={info.id}>
                    <img src={info.posterURL} alt="" />
                </div>
            </Wrapper>
        </Link>
    )
};

const Wrapper = styled.div`
    & {
        width: 150px;
        height: 210px;

        margin: 5px;
        padding: 10px;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;

        object-fit: contain;
    }
`

/*title={movie.title} posterURL={movie.posterURL} overview={movie.overview} releaseDate={movie.releaseDate}*/