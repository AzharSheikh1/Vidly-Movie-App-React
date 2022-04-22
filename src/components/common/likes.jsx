const Like = (props) => {
    let classes = "clickable fa fa-heart";
    if (!props.liked) classes += '-o';
    return (
        <i
            className={classes} 
            aria-hidden="true"
            onClick={props.onClick}
        ></i>
    );
}

export default Like;