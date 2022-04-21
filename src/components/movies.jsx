import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './movieTable';

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
                            selectedItem={selectedGenre}/>
                        </div>
                    <div className="col">
                        <p>There are {filtered.length} movies in a database</p>
                        <MoviesTable
                            onLike = {this.handleLike}
                            onDelete = {this.handleDelete} 
                            movies = {movies}/>
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