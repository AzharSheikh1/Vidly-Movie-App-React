import Like from './common/likes';

const MoviesTable = (props) => {

    const {movies, onDelete, onLike} = props;

    return (
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
 
export default MoviesTable;