import ItalianMenu from "./ItalianMenu"
import AmericanMenu from "./AmericanMenu"
import FrenchMenu from "./FrenchMenu"
import MexicanMenu from "./MexicanMenu"
import VegetarianMenu from "./VegetarianMenu"

const FoodMenuSection = () => {
    return (
        <>
            <AmericanMenu />
            <ItalianMenu />
            <FrenchMenu />
            <MexicanMenu />
            <VegetarianMenu />
        </>
    )
}

export default FoodMenuSection