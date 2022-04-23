import React, { Component } from 'react';


const MovieForm = (props) => {

    return (
        <div>
            <h1>Movie From {props.match.params.id}</h1>
            <button onClick={()=> props.history.push("/movies")} className='btn btn-primary'>Save</button>
        </div>
    );
}
 
export default MovieForm;