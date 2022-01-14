const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark mb-3">
            <div className="container-fluid">
                <a className="navbar-brand">Kanban Board</a>
                <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-secondary" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;