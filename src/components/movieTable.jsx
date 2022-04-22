import Like from './common/likes';
import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';


class MoviesTable extends Component {

    columns = [
        {path:'title', label:'Title'},
        {path:'genre.name', label:'Genre'},
        {path:'numberInStock', label:'Stock'},
        {path:'dailyRentalRate', label:'Rating'},
        {
            key:'like', 
            content: movie => (
                <Like liked={movie.liked} onClick = {() => this.props.onLike(movie._id)}/>)
        },
        {
            key:'delete',
            content: movie => (<button
                        onClick={() => this.props.onDelete(movie._id)}
                        className='btn btn-danger'>Delete </button>)
        }
    ]

    render() { 
        const {movies, sortColumn, onSort} = this.props;

        return (
            <table className="table">
                <TableHeader 
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}/>
                <TableBody data={movies} columns={this.columns}/>
            </table>
        );
    }
}
 
export default MoviesTable;