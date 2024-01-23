import storyImg from "/Chef with Logo.jpeg"

const Story = () => {

    //flag for en or es translation

    return (
        <div className="story-wrapper">
            <div className="story-container">
                <p>Meet the Chef</p>
                <h4>Armando's Story</h4>
                <div className="story-content">
                    <p>I’m Chef Armando Castillon</p>
                    <p>originally from Puerto Vallarta Jalisco, México. I have 40 years of experience. My beginnings in the culinary arts are in a gourmet restaurant called “La Perla” in the Westin Camino Real Hotel in Puerto Vallarta where the attention to our customers was “Geridon Service”.</p>
                    <p>I was trained by world famous chefs such as Chef Nelo de Camp and his team from “Fouquet’s De Paris Mexico” as well as Chef Jose Matilde Yerena and by Maritre D’ Fidencio Luna.</p>
                    <p>Along the years I have honed my skills in French, Italian, American, Spanish, Basque, and of course Mexican cuisines.</p>
                    <p>I am passionate in what I do, and I can define my style as extremely creative and easy to adjust to the taste and needs of my clients, always seeking first and foremost your complete satisfaction for having sought out my services.</p>
                    <p>Whether you’re having a huge, formal wedding, or you want finger foods for a community event, reach out to us today. We’ll provide you with a catering menu, so you know what’s available, and we can plan your party or other event together.</p>
                </div>
                <button className="btn btn-primary">How can I serve you?</button></div>
            <div className="story-container">
                <img src={storyImg} alt="" />
            </div>
        </div>
    )
}

export default Story