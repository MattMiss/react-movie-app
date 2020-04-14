import React, { useEffect, useState, useRef } from 'react';
import Card from './components/Card';
import Spinner from './components/Spinner';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

import data from './data';

// EXAMPLE URL
// https://api.themoviedb.org/3/movie/popular?api_key=aa90bb6b62b3cbed1840017d68be3764&language=en-US&page=1

const TMDB_API = 'https://api.themoviedb.org/3';
const MOVIETV = 'movie';
const TYPE = 'popular';
const API_KEY = 'aa90bb6b62b3cbed1840017d68be3764';
const LANG = 'en-US';
const PAGE = '1';
const url = `${TMDB_API}/${MOVIETV}/${TYPE}?api_key=${API_KEY}&language=${LANG}&page=`


const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3a3a3a;
`;

const TitleBarH2 = styled.h2`
  color: white;
  position: sticky;
  top: 10px;
  background-color: #3a3a3ac9;
  width: 100%;
  text-align: center;
  padding: 15px;
`;

const App = () => {

  const [movieData, setMovieData] = useState([]);
  const lazyDiv = useRef();
  // useEffect(() => {
  //   console.log(url+PAGE)
  //   axios.all([
  //     axios.get(url + PAGE),
  //     axios.get(url + (PAGE + 1)),
  //     axios.get(url + (PAGE + 2))
  //   ])
  //   .then(axios.spread((page1Res, page2Res, page3Res) => {
  //     setMovieData([...page1Res.data.results, ...page2Res.data.results, ...page3Res.data.results])
  //     //console.log(JSON.stringify([...page1Res.data.results, ...page2Res.data.results, ...page3Res.data.results]))
  //   }))
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }, [])

  return(
    <AppDiv >
      <TitleBarH2>Current Popular Movies</TitleBarH2>
      <div className="post-container" >
        {data.map(post => (
          <LazyLoad 
            key={post.id} 
            height={100}
            offset={[-100, 100]}
            placeholder={<Spinner />}
          >
            <Card key={post.id} {...post} />
          </LazyLoad>
        ))}
      </div>
    </AppDiv>
  )
};
  

export default App;
