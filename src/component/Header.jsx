
function Header() {
    return (
        <>
            <header id="header" className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-sm">
                        <a className="navbar-brand" href="#"><img src="images/logo.png" className="img-fluid" alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#home">Home </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About Us</a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" href="#project">Projects</a>
                                </li>
                            </ul>

                            <a href="#contact" className="btn btn-light my-2 my-sm-0" type="submit"><span>Contact</span></a>

                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}


export default Header;