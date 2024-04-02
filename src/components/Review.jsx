const Review = ({ reviewId, reviewContent, reviewer, img }) => {
    return (
        <div id={reviewId} className="carousel-item w-full grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
            <div className="review-img-container order-last md:order-first h-64 md:h-96 w-full">
                <img className="object-cover w-full h-full" src={img} />
            </div>
            <div className="review-text pb-2 px-12">
                <p className="md:text-2xl">"{reviewContent}"</p>
                <p className="text-right"><span className="text-2xl md:text-3xl text-secondary">-{reviewer}</span></p>
            </div>
        </div>
    )
}

export default Review