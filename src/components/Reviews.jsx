const Reviews = () => {
    return (
        <>
            <div className="carousel-wrapper pb-8 text-5xl">
                <h6 className="px-12 py-4">Reviews</h6>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full grid grid-rows-2 md:grid-col-2">
                        <div className="review-img-container order-last h-64 w-full">
                            <img className="object-cover w-full h-full" src="./reviewSalmon.jpeg" />
                        </div>
                        <div className="review-text text-base pb-2 px-12">
                            <p>"Armando and his team are absolutely amazing from the food to the customer service he provides. I had my wedding catered from him and his team and everything was super organized and tasted amazing! My wedding was 400 people I was so nervous in finding someone who was able to feed that many people and they handled it with grace! Thank you again I will continue to recommend Armando!"</p>
                            <p><span className="text-2xl text-secondary">-Tamara Meraz</span></p>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full grid grid-rows-2 md:grid-col-2">
                        <div className="review-img-container order-last h-64 w-full">
                            <img className="object-cover w-full h-full" src="./reviewCMT.jpeg" /></div>
                        <div className="review-text text-base pb-2 px-12">
                            <p>"Armando is the greatest chef in the Valley! My family always get him to cook for us in small and Big events! His food is amazing and delicious! Way better than the fancier restaurant here in Fresno! Great service and delicious food what else can we ask for!"</p>
                            <p><span className="text-xl text-secondary">-Hassan Macedo</span></p>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full grid grid-rows-2 md:grid-col-2">
                        <div className="review-img-container order-last h-64 w-full">
                            <img className="object-cover w-full h-full" src="./reviewFlan.jpeg" />
                        </div>
                        <div className="review-text text-base pb-2 px-12">
                            <p>"High-quality food with excellent flavor, our meal was definitely made with love. Armando’s Catering has great service, will definitely be using his services for all our big or small events! My coworkers along with myself enjoyed our meal so much. 10/10 will be recommending Armando’s catering to our friends and family."</p>
                            <p><span className="text-xl text-secondary">-Blake Horwath</span></p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-primary btn-xs">1</a>
                    <a href="#item2" className="btn btn-primary btn-xs">2</a>
                    <a href="#item3" className="btn btn-primary btn-xs">3</a>
                </div>
            </div>
        </>
    )
}

export default Reviews