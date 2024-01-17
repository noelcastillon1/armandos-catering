const ServiceCard = () => {
    return (
        <div className="card shadow-xl">
            <figure className="max-h-40 min-h-40">
                <img
                    className="object-contain"
                    src="/assets/Clear glass bottle table.avif"
                    alt="Cups being placed onto a person's back."
                />
            </figure>
            <div className="card-body">
                <h2>Cupping Therapy</h2>
                <p>
                    Improve blood flow, reduce muscle tension, and promote your
                    overall relaxation with a cupping therapy session. This is an
                    alternative medicine technique that involves placing cups on the
                    skin to create suction.
                </p>
                <a href="/#contact" className="btn btn-primary">Contact Us</a>
            </div>
        </div>
    )
}

export default ServiceCard