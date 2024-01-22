import ItalianMenu from "./ItalianMenu"
import AmericanMenu from "./AmericanMenu"
import FrenchMenu from "./FrenchMenu"
import MexicanMenu from "./MexicanMenu"
import VegetarianMenu from "./VegetarianMenu"

const FoodMenuSection = () => {
    return (
        <>
            <AmericanMenu />
            <FrenchMenu />
            <ItalianMenu />
            <MexicanMenu />
            <VegetarianMenu />
        </>
    )
}

export default FoodMenuSection