const ListGroup = (props) => {

    const {items, textProperty, valueProperty, selectedItem ,onItemSelect} = props;

    return (
        <ul style={{cursor:'pointer'}} className="list-group">
            {items.map(item =>
                    <li  key={item[valueProperty]}
                        className={selectedItem === item ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                        onClick={() => onItemSelect(item)}>
                        {item[textProperty]}
                    </li>
            )}
        </ul>
    );
}

// with this implementation we don't need to pass these two props in movies 
ListGroup.defaultProps = {
    textProperty : 'name',
    valueProperty : '_id'
}

export default ListGroup;