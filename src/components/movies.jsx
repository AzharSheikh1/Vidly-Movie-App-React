import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movie extends Component {
    state = {
        movies : getMovies(),
    }

    handleDelete = (id) => {
        const movies = this.state.movies.filter(m => m._id !== id);
        this.setState({movies})
    }

    render() { 
        const {length : count} = this.state.movies

        if (count === 0) return <p>There are no movies in the database</p>;
        return (
            <React.Fragment>
                <p>There are {count} movies in a database</p>
                <table class="table">
                    <thead>
                        <tr key={1}>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie =>
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button onClick={() => this.handleDelete(movie._id)} className='btn btn-danger'>Delete</button></td>
                            </tr>
                    )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movie;