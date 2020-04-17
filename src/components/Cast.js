import React from 'react';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';

const CastContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
`;

const CastTheRestContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 5px;
`;

const SingleActor = styled.div`
    background: #grey;
    border: 1px solid #777;
    border-radius: 10px;
    padding: 0 8px 2px 8px;
    margin-right: 5px;
    margin-bottom: 5px;  
`;

const ActorSpan = styled.span`
    font-size: .8rem;
    font-weight: 600;
    
    &:hover {
        color: #035bbc;
        font-size: .85rem;
        cursor: pointer; 
    }
`;

const AsSpan = styled.span`
    font-size: .8rem;
    font-weight: 600; 
    color: #035bbc;
`;

const CharSpan = styled.span`
    font-size: .7rem;
    font-weight: 500;
    color: #555;
`;

const CastTitle = styled.div`
    font-weight: 500;
    padding: 5px 0 15px 15px;
`;

const CastCollaspeTrigger = styled.div`
    text-align: center;
    padding-top: 5px;
    color: #035bbc;
    font-weight: 500;
    font-size: .9rem;

    &:hover{
        cursor: pointer;
    }
`;

const Cast = ( {castList, actorClicked} ) => {

    const allActors = castList.map(member => {
        //console.log(GenreColors(genre.id))
        return <SingleActor key={member.actor_id} >
            <ActorSpan onClick={() => actorClicked(member.actor_id)}>
                {member.actor}
            </ActorSpan>
            <AsSpan>
                {" as "}
            </AsSpan>
            <CharSpan>
                {member.character}
            </CharSpan>
        </SingleActor>
    });
    const needCollapse = castList.length > 4;
    const firstFour = needCollapse ? allActors.slice(0, 4).map(i => i) : allActors;
    const theRest = needCollapse ? allActors.slice(4, castList.length).map(i => i) : null;

    //const trigg = 

    const castCollapse = needCollapse ? <Collapsible trigger={<CastCollaspeTrigger>more cast</CastCollaspeTrigger>}>
        <CastTheRestContainer>
            {theRest}
        </CastTheRestContainer>
    </Collapsible> : null;

    return(
        <>
            <CastTitle> Cast</CastTitle>
            <CastContainer>
                {firstFour}
            </CastContainer>
            {castCollapse}
        </>
        
    )
}

export default Cast;