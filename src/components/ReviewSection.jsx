import Review from "./Review"
import { reviews } from "./constants"

const ReviewSection = () => {
    return (
        <div className="carousel-wrapper my-8 pb-8">
            <h5 className="text-5xl px-12 py-4 text-center md:text-left">Reviews</h5>
            <div className="carousel w-full">
                <Review reviewId={reviews.tamara.itemId} reviewContent={reviews.tamara.reviewContent} reviewer={reviews.tamara.reviewer} img={"./reviewSalmon.jpeg"} altText={"Plate of Crab-stuffed Salmon"} />
                <Review reviewId={reviews.hassan.itemId} reviewContent={reviews.hassan.reviewContent} reviewer={reviews.hassan.reviewer} img={"./reviewCMT.jpeg"} altText={"Plate of Surf, Turf, and Sky"} />
                <Review reviewId={reviews.blake.itemId} reviewContent={reviews.blake.reviewContent} reviewer={reviews.blake.reviewer} img={"./reviewFlan.jpeg"} altText={"Plate of Flan"} />
                <Review reviewId={reviews.marydith.itemId} reviewContent={reviews.marydith.reviewContent} reviewer={reviews.marydith.reviewer} img={"./cordon bleu.jpeg"} altText={"Sliced Chicken Cordon Bleu with cream sauce"} />
                <Review reviewId={reviews.ana.itemId} reviewContent={reviews.ana.reviewContent} reviewer={reviews.ana.reviewer} img={"./cordon bleu2.jpeg"} altText={"Plate of Chicken Cordon Bleu with rice, vegetables, and a roll"} />
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-primary btn-xs">1</a>
                <a href="#item2" className="btn btn-primary btn-xs">2</a>
                <a href="#item3" className="btn btn-primary btn-xs">3</a>
                <a href="#item4" className="btn btn-primary btn-xs">4</a>
                <a href="#item5" className="btn btn-primary btn-xs">5</a>
            </div>
        </div>
    )
}

export default ReviewSection