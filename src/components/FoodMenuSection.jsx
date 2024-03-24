import ItalianMenu from "./ItalianMenu"
import AmericanMenu from "./AmericanMenu"
import FrenchMenu from "./FrenchMenu"
import MexicanMenu from "./MexicanMenu"
import VegetarianMenu from "./VegetarianMenu"

const FoodMenuSection = () => {
    return (
        <section id="menus">
            <AmericanMenu />
            <FrenchMenu />
            <ItalianMenu />
            <MexicanMenu />
            <VegetarianMenu />
        </section>
    )
}

export default FoodMenuSection