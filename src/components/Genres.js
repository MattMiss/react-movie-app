import React from 'react';
import GenreColors from '../utils/GenreColors';
import styled from 'styled-components';

const GenreContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
`;

const SingleGenre = styled.div`
    background: ${props => props.color};
    border: 1px solid #777;
    border-radius: 10px;
    padding: 2px 8px 2px 8px;
    margin-right: 5px;
    margin-bottom: 5px;
    font-color: #777;
    font-size: .8rem;
    font-weight: 500;
`;

const Genres = ( {genreList} ) => {

    const genreDivs = genreList.map(genre => {
        console.log(GenreColors(genre.id))
        return <SingleGenre key={genre.id} color={GenreColors(genre.id)}>{genre.name}</SingleGenre>
    });

    return(
        <GenreContainer>
            {genreDivs}
        </GenreContainer>
    )
}

export default Genres;