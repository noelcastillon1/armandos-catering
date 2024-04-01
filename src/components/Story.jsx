import { useState } from "react"
import storyImg from "/Chef with Logo.jpeg"

const Story = () => {

    const engStory = <div className="flex flex-col gap-5"><p className="leading-loose">I’m Chef Armando Castillon.</p>
        <p className="leading-loose">Originally from Puerto Vallarta Jalisco, México. I have 40 years of experience. My beginnings in the culinary arts are in a gourmet restaurant called “La Perla” in the Westin Camino Real Hotel in Puerto Vallarta where the attention to our customers was “Geridon Service”.</p>
        <p className="leading-loose">I was trained by world famous chefs such as Chef Nelo de Camp and his team from “Fouquet’s De Paris Mexico” as well as Chef Jose Matilde Yerena and by Maritre D’ Fidencio Luna.</p>
        <p className="leading-loose">Along the years I have honed my skills in French, Italian, American, Spanish, Basque, and of course Mexican cuisines.</p>
        <p className="leading-loose">I am passionate in what I do, and I can define my style as extremely creative and easy to adjust to the taste and needs of my clients, always seeking first and foremost your complete satisfaction for having sought out my services.</p>
        <p className="leading-loose">Whether you’re having a huge, formal wedding, or you want finger foods for a community event, reach out to us today. We’ll provide you with a catering menu, so you know what’s available, and we can plan your party or other event together.</p><div className="text-center md:text-left py-4"><button className="btn btn-primary">How can I serve you?</button></div></div>

    const enStory = <div className="flex flex-col gap-5"><p>I’m Chef Armando Castillon.</p>
        <p className="leading-loose">Originario de Puerto Vallarta, Jalisco, México. Me respaldan 40 años de experiencia. Mis inicios en el Arte Culinario fueron en el Westin Camino Real Hotel, en el restaurant gourmet “La Perla” donde la atención al cliente era “Servicio al Gueridon”.</p>
        <p className="leading-loose">Recibí entrenamiento de grandes Chefs de reconocimiento mundial como el Chef Nelo de Camp y su equipo del Restaurant “Fouquet de Paris, México”. También del Chef José Matilde Yerena y con el Maitre D’ Fidencio Luna.</p>
        <p className="leading-loose">A través de los años he adquirido habilidades en cocina Francesa, Italiana, Americana, Española, Basque y por supuesto, Mexicana.</p>
        <p>Me apasiona lo que hago y puedo definir mi estilo como extremadamente creativo y fácil de ajustarme al gusto y necesidades del cliente, deseando en todo momento su complete satisfacción al haber buscado mis servicios.</p>
        <p className="leading-loose">Gracias por permitirme servirles!</p><div className="text-center md:text-left py-4"><button className="btn btn-primary">¿Cómo puedo servirle hoy?
        </button></div></div>

    const [isChecked, setIsChecked] = useState(engStory)
    const [isCollapse, setIsCollapse] = useState("collapse")

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked)
    }

    const handleCollapseChange = (event) => {
        setIsCollapse(event.target.checked)
    }

    return (
        <div className="story-wrapper px-12 my-12">
            <h4 className="text-5xl text-center md:text-left">Armando's Story</h4>
            <div className="collapse">
                <input type="checkbox" checked={isCollapse} onChange={handleCollapseChange} />
                <div className="collapse-title min-w-fit py-4 px-0 text-primary">
                    <div className="flex flex-row gap-2 justify-center md:justify-start">
                        <p className="tracking-widest uppercase">Meet the Chef</p>
                        <div className={`transform transition duration-250 ease-in-out ${isCollapse ? 'rotate-180' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="collapse-content">
                    <div className="story-container grid col-span-1 md:grid-cols-2 gap-4 my-4">
                        <div>
                            <label className="swap">
                                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                                <div className="swap-on text-blue-500">Lee en Espanol</div>
                                <div className="swap-off text-blue-500">Read in English</div>
                            </label>
                            <div className="story-content">
                                {isChecked ? engStory : enStory}
                            </div>
                        </div>
                        <div className="story-container h-fit w-full al">
                            <img className="object-cover h-3/4 w-full" src={storyImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story