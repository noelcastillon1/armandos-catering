const Hero = () => {
    return (
        <div className="hero min-h-screen bg-hero">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Let Us Cater
                        Your Next Event!</h1>
                    <p className="mb-5">
                        Are you planning a wedding? a quinceañera? how about a graduation party? Nothing brings people together like a quality meal, so let Chef Armando cater your next event!<br />{`With 5-star service at an unbelievable price, he'll be sure to make your special moments unforgettable!`}
                    </p>
                    <div className="hero-btn-wrapper flex justify-center gap-3 flex-col md:flex-row md:justify-around">
                        <div className="hero-btn-container">
                            <button className="btn btn-primary">View Our Menus</button></div>
                        <div className="hero-btn-container">
                            <button className="btn btn-primary">Make an Appointment</button></div>
                        <div className="hero-btn-container">
                            <button className="btn btn-primary">Follow Us</button></div></div>
                </div>
            </div>
        </div>
    )
}

export default Hero