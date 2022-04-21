import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/likes';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';

class Movie extends Component {
    state = {
        genres : [],
        movies : [],
        pageSize : 4,
        currentPage: 1,
        selectedGenre : false,
    }

    componentDidMount() {
        const genres = [{name:'All Genres'}, ...getGenres()]
        this.setState({genres, movies : getMovies()});
    }

    handleDelete = (id) => {
        const movies = this.state.movies.filter(m => m._id !== id);
        this.setState({movies})
    }

    handleLike = (id) => {
        let movies = this.state.movies.map(movie => {
            if (movie._id === id) {
                movie.liked = !(movie.liked)
            }
            return movie;
        });

        this.setState({movies});
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    }

    handleGenreSelect = (genre) => {
        this.setState({selectedGenre: genre, currentPage:1});
    }

    render() {
        const {length : count} = this.state.movies
        const {pageSize, currentPage, movies:allMovies, genres, selectedGenre} = this.state;

        if (count === 0) return <p>There are no movies in the database</p>;
        
        const filtered = (selectedGenre && selectedGenre._id) 
                            ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
                            : allMovies;
        let movies = paginate(filtered, currentPage, pageSize)

        return (
            <React.Fragment>
                <div className='row'>
                    <div className="col-2">
                        <ListGroup
                            items={genres}
                            onItemSelect={this.handleGenreSelect}
                            selectedItem={selectedGenre}/></div>
                    <div className="col">
                        <p>There are {filtered.length} movies in a database</p>
                        <table className="table">
                            <thead>
                                <tr key={1}>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                            {movies.map(movie =>
                                    <tr key={movie._id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td><Like
                                                key={movie._id}
                                                liked={movie.liked}
                                                onClick = {() => this.handleLike(movie._id)}
                                                /></td>
                                        <td><button
                                                onClick={() => this.handleDelete(movie._id)}
                                                className='btn btn-danger'>Delete
                                            </button>
                                        </td>
                                    </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination 
                    itemCount={filtered.length} 
                    pageSize={pageSize}
                    onPageChange = {this.handlePageChange}
                    currentPage  = {currentPage}
                />
            </React.Fragment>
        );
    }
}

export default Movie;