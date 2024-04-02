import ServiceCard from "./ServiceCard"
import eventsCardImg from "/eventsCardImg.jpeg"
import budgetCardImg from "/budgetCardImg.jpeg"
import servicesCardImg from "/servicesCardImg.jpeg"

const Services = () => {
    return (
        <div
            className="card-section-services grid grid-cols-1 md:grid-cols-3 gap-4 px-10 my-8"
        >
            <ServiceCard cardImg={eventsCardImg} cardTitle={"Celebration & Special Events"} cardDesc={"Birthdays, anniversaries, weddings, quinceañeras, baptisms, and so much more! Whatever your event is, it's no problem for us!"} altText={"Assorted Spread of Dinner Plates"} />
            <ServiceCard cardImg={budgetCardImg} cardTitle={"We Work With Your Budget"} cardDesc={"Not sure if your budget will cover our costs? No need to worry—we can make it work!"} altText={"Plates of Mexican food"} />
            <ServiceCard cardImg={servicesCardImg} cardTitle={"Personalized Custom Service"} cardDesc={"Do you have a different vision than what you see in our menus? Not an issue⁠—just let us know and we will gladly make your dreams come true!"} altText={"Armando and a worker smiling gingerly at the camera"} />
        </div>
    )
}

export default Services