const MouseMenu = ({handleMenu})=>{
    return(
        <div className="mouse-menu" onClick={handleMenu}>
            <p>Waldo</p>
            <p>Odlaw</p>
            <p>Wizard</p>
        </div>
    )
}

export default MouseMenu;