import * as GenreIDs from './GenreIDs';

const GenreColors = (id) => {
    let color = '';
    switch(id){
        case GenreIDs.ACTION:
            color = '#f88b90';
            break;
        case GenreIDs.ADVENTURE:
            color = '#91d8f4';
            break;
        case GenreIDs.ANIMATION:
            color = '#cbe395';
            break;
        case GenreIDs.COMEDY:
            color = '#fab68c';
            break;
        case GenreIDs.CRIME:
            color = '#86b8b7';
            break;
        case GenreIDs.DOCUMENTARY:
            color = '#cdc3ba';
            break;
        case GenreIDs.DRAMA:
            color = '#bf9acd';
            break;
        case GenreIDs.FAMILY: 
            color = '#fef189';
            break;
        case GenreIDs.FANTASY:
            color = '#8f9ad0';
            break;
        case GenreIDs.HISTORY:
            color = '#8fbae4';
            break;
        case GenreIDs.HORROR: 
            color = '#c992ab';
            break;
        case GenreIDs.MUSIC:
            color = '#e6c4a8';
            break;
        case GenreIDs.MYSTERY:
            color = '#c0e6c1';
            break;
        case GenreIDs.ROMANCE:
            color = '#e191aa';
            break;
        case GenreIDs.SCIENCE_FICTION:
            color = '#c6c198';
            break;
        case GenreIDs.TV_MOVIE:
            color = '#a5b8e3';
            break; 
        case GenreIDs.THRILLER:
            color = '#cca8a8';
            break; 
        case GenreIDs.WAR:
            color = '#97b5b5';
            break;
        case GenreIDs.WESTERN:
            color = '#c3a998';
            break;
    }
    return color;
};

export default GenreColors;