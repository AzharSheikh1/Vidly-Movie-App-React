import _ from 'lodash'
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const {itemCount, pageSize, onPageChange, currentPage} = props;
    const pagesCount = Math.ceil(itemCount / pageSize);

    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount+1)

    return (
        <nav>
            <ul className="pagination">
                {
                pages.map(page =>
                                <li key={page} className={(currentPage === page) ? "page-item active":"page-item"}>
                                    <button
                                        className="page-link" 
                                        onClick={() => onPageChange(page)}>
                                        {page}
                                    </button>
                                </li>
                    )}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired, 
    pageSize : PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired, 
    currentPage: PropTypes.number.isRequired
}
export default Pagination;