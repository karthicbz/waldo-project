const MouseMenu = ({handleMenu})=>{
    return(
        <div className="mouse-menu" onClick={handleMenu}>
            <p>Waldo</p>
            <p>Sally</p>
        </div>
    )
}

export default MouseMenu;