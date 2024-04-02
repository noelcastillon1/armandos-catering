const ServiceCard = ({ cardImg, cardTitle, cardDesc, altText }) => {
    return (
        <div className="card shadow-xl">
            <figure className="max-h-52 lg:max-h-72 min-h-40">
                <img
                    className="object-contain"
                    src={cardImg}
                    alt={altText}
                />
            </figure>
            <div className="card-body">
                <h3>{cardTitle}</h3>
                <p>
                    {cardDesc}
                </p>
                <a href="/#interestForm" className="btn btn-primary">Contact Us</a>
            </div>
        </div>
    )
}

export default ServiceCard