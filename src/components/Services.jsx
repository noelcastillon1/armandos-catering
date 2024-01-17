import ServiceCard from "./ServiceCard"

const Services = () => {
    return (
        <div
            className="card-section-services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10"
        >
            <ServiceCard />
        </div>
    )
}

export default Services