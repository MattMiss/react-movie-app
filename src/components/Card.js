import React, {useState, useEffect} from 'react';

import Spinner from './Spinner';
import Genres from './Genres';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import data2 from '../data2';
import axios from 'axios';

const CardDiv = styled.div`
    display: flex;
    margin: 10px 20px;
    max-width: 700px;
    min-height: 200px;
    border-radius: 5px;
    background-color: white;
`;

const CardLeftDiv = styled.div`
    flex: 1;
    min-width: 135px;
    padding: 10px;
`;

const CardImg = styled.img`
    height: 200px;
    border-radius: 5px;
`;

const CardContent = styled.div`
    flex: 5;
    padding: 10px;
`;

const TitleRow = styled.div`
    display: flex;
    width: 100%;
`;

const MovieTitleH4 = styled.h3`
    margin-top: 0;
    flex:1;
`;

const DesktopRatingContainer = styled.div`
    @media(max-width: 500px){
        display: none;
    }
`;

const MobileRatingContainer = styled.div`
    padding-top: 10px;

    @media(min-width: 500px){
        display: none;
    }
`;

const MovieRatingDiv = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 2px solid #888;
    font-size: 1.5rem;
    color: white;
    padding-left: 10px;
    padding-top: 12px;
`;

const IMDBDiv = styled.div`
    position: absolute;
    font-size: .6rem;
    padding-left: 15px;
    padding-top: 6px;
    color: #ccc;
`;

const DateTimeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    height: 20px;
    font-size: .8rem;
    font-weight: 500;
    padding: 5px 5px 0 5px;
`;

const RuntimeDiv = styled.div`
    
`;

const ReleaseDateDiv = styled.div`
    
`;

const url = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/';
const url2 = 'https://movie-database-imdb-alternative.p.rapidapi.com/'

const Card = ({id, title, overview, poster_path}) => {

    const [movie, setMovie] = useState(null);
    const [imdbData, setImdbData] = useState(null);

    useEffect(() => {
        console.log("Title: " + title + ", ID: " + id)
        if (id){
            // Get IMDB info based on movie ID
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=aa90bb6b62b3cbed1840017d68be3764&language=en-US`)
            .then(response => {
                if(response.data){
                    setMovie(response.data)
                }
                
                //console.log(JSON.stringify(response.data))
            }).catch(error => {
                console.log(error)
            });
        }else{
            // If IMDB ID fails, try to get IMDB info based on Title search
            console.log("No id")
            axios.get(`https://api.themoviedb.org/3/movie/${title}?api_key=aa90bb6b62b3cbed1840017d68be3764&language=en-US`)
            .then(response => {
                if(response.data){
                    console.log(response.data)
                }
                
                //console.log(JSON.stringify(response.data))
            }).catch(error => {
                console.log(error)
            });
        }     
    }, []);

    useEffect(() => {
        if (movie){
            console.log(movie)
            getIMDBData(movie.imdb_id)
        }  
    }, [movie])

    // imdb-internet-movie-database-unofficial
    const getIMDBData = (query) => {
        //console.log(url+encodeURI(query))
        axios.get(url + encodeURI(query), {
            headers: {
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "e13b7a2c63msh9e661b9f9c3fd73p10d420jsnb6973bc98289"
            }
          })
        .then(res => {
            console.log("Query: " + query + ", Data: " + JSON.stringify(res.data))
            setImdbData(res.data)
        })
        .catch(err => console.log(err))
    };
    
    // // movie-database-imdb-alternative
    // const getIMDBData = (query) => {
    //     console.log(url2+encodeURI(query))
    //     axios.get(url2, {
    //         params: {
    //             "i": encodeURI(query),
    //             "r": "json"
    //         },
    //         headers: {
    //             "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    //             "x-rapidapi-key": "e13b7a2c63msh9e661b9f9c3fd73p10d420jsnb6973bc98289"
    //         }    
    //       })
    //     .then(res => {
    //         console.log(res.data["Ratings"][0]["Value"])
    //         setImdbData(res.data)
    //     })
    //     .catch(err => console.log(err))
    // };


    const lengthFormatter = (mins) => {
        let length = '';
        if(!mins || mins <= 0){
            length = '?';
        }else{
            if (mins <= 60){
                length = `${mins}m`;
            }else{
                const hour = Math.floor(mins / 60);
                const minute = mins - hour * 60;
                length = `${hour}h ${minute}m`;
            } 
        }
        return length;
    };

    const dateFormatter = (dt) => {
        const ymd = dt.split("-");
        const newDate = {
            year: ymd[0],
            month: ymd[1],
            monthText: getMonth(ymd[1]),
            day: ymd[2]
        }

        return `${newDate.monthText} ${newDate.year}`
    };

    const getMonth = (mt) => {
        let newMonth = '';
        switch(mt){
            case '01':
                newMonth = 'Jan';
                break;
            case '02':
                newMonth = 'Feb';
                break;
            case '03':
                newMonth = 'Mar';
                break;
            case '04':
                newMonth = 'Apr';
                break;
            case '05':
                newMonth = 'May';
                break;
            case '06':
                newMonth = 'Jun';
                break;
            case '07':
                newMonth = 'Jul';
                break;
            case '08':
                newMonth = 'Aug';
                break;
            case '09':
                newMonth = 'Sep';
                break;
            case '10':
                newMonth = 'Oct';
                break;
            case '11':
                newMonth = 'Nov';
                break;
            case '12':
                newMonth = 'Dec';
                break;
            default:
                newMonth = mt;
        }
        return newMonth;
    };

    const getRatingColor = (num) => {
        let color = '';
        if (num){
            if (num >= 0 && num < 1){
                color = '#C23B22';
            }else if (num >= 1 && num < 2){
                color = '#BB4B2B';
            }else if (num >= 2 && num < 3){
                color = '#B35B33';
            }else if (num >= 3 && num < 4){
                color = '#AC6C3C';
            }else if (num >= 4 && num < 5){
                color = '#A47C44';
            }else if (num >= 5 && num < 6){
                color = '#9D8C4D';
            }else if (num >= 6 && num < 7){
                color = '#959C55';
            }else if (num >= 7 && num < 8){
                color = '#8EAC5E';
            }else if (num >= 8 && num < 9){
                color = '#86BD66';
            }else if (num >= 9 && num < 10){
                color = '#7FCD6F';
            }else if (num === 10 ){
                color = '#77DD77';
            }else{
                color = '#333'
            }
            console.log("PIX", num, color)
            return color;
        }
    };


    const genreContainer = movie ? <Genres genreList={movie.genres} /> : null;

    return(
    <CardDiv>
        
        <CardLeftDiv>
            <LazyLoad 
                key={id} 
                placeholder={<div></div>}
            >
                <CardImg src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="..." />
            </LazyLoad>
            <DateTimeDiv>
                <RuntimeDiv>{movie ? lengthFormatter(movie.runtime) : null}</RuntimeDiv>
                <ReleaseDateDiv>{movie ? dateFormatter(movie.release_date) : null}</ReleaseDateDiv>
            </DateTimeDiv>
            <MobileRatingContainer>
                <IMDBDiv>IMDB</IMDBDiv>
                <MovieRatingDiv color={imdbData ? getRatingColor(imdbData.rating) : '#333'}>{imdbData ? imdbData.rating : null}</MovieRatingDiv>
            </MobileRatingContainer>
        </CardLeftDiv>
        
        
    
      <CardContent>
        <TitleRow>
            <MovieTitleH4>{title}</MovieTitleH4>
            <DesktopRatingContainer>
                <IMDBDiv>IMDB</IMDBDiv>
                <MovieRatingDiv color={imdbData ? getRatingColor(imdbData.rating) : '#333'}>{imdbData ? imdbData.rating : null}</MovieRatingDiv>
            </DesktopRatingContainer>
            
        </TitleRow>
        
        <p>{overview}</p>
        <LazyLoad
            placeholder={<Spinner />}
        >
            {genreContainer}    
        </LazyLoad>
      </CardContent>
    </CardDiv>
)};

export default Card;