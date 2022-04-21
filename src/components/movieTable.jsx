import Like from './common/likes';
import React, { Component } from 'react';

class MoviesTable extends Component {

    raiseSort = path => {
        let sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        // what does it's mean here  ? 
        this.props.onSort(sortColumn);
    }

    render() { 
        const {movies, onDelete, onLike} = this.props;
        return (
            <table className="table">
                <thead>
                    <tr key={1}>
                        <th onClick={() => this.raiseSort('title')}>Title</th>
                        <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
                        <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
                        <th onClick={() => this.raiseSort('dailyRentalRate')}>Rating</th>
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
                                    onClick = {() => onLike(movie._id)}
                                    />
                            </td>
                            <td>
                                <button
                                    onClick={() => onDelete(movie._id)}
                                    className='btn btn-danger'>Delete
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}
 
export default MoviesTable;