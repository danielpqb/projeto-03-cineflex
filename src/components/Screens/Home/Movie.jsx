import styled from "styled-components"

export default function Movie({ info }) {
    return (
        <Wrapper>
            <div className="movie" id={info.id}>
                <img src={info.posterURL} alt="" />
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    & {
        width: 150px;
        height: 210px;

        margin: 5px;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;

        object-fit: contain;
    }

    img {
        width: 90%;
        height: 90%;
    }
`

/*title={movie.title} posterURL={movie.posterURL} overview={movie.overview} releaseDate={movie.releaseDate}*/