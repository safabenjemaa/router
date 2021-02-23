import React,{useEffect , useState} from 'react';
import ReactPlayer from 'react-player';


const MovieDesc = ({match,movies}) => {

const [myfilm , setFilm]= useState({})

useEffect(() => {

    setFilm(movies.find(el=> el.id === +match.params.id))
  
}, [])


    return (
        <div>
           
            <ReactPlayer style={{marginTop:40,marginLeft:340}} url={myfilm.trailerPage} />
           <div style={{marginLeft:30}}>
            <h1 style={{fontSize:40,color:"#f326d1"}} >Description:</h1> 
            <p style={{fontSize:30}}> {myfilm.description} </p>
        </div>
          
        </div>
    )
}

export default MovieDesc;
