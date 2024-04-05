const Navbar = () => {
    return (
        <div className="navbar bg-gradient-to-r from-primary from-50% to-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" aria-label="dropdown menu" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Menus</a></li>
                        <li><a>Make an Appointment</a></li>
                        <li><a>Follow Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center max-w-sm hidden md:flex">
                <a href="/"><img src="/Monochrome Black Logo.png" alt="Armando's Catering Logo" /></a>
            </div>
            <div className="navbar-end">
                <a href="/#contact" className="btn btn-primary">Contact Us</a>
            </div>
        </div>
    )
}

export default Navbar