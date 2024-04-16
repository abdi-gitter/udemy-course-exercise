import ProfileCard from "./ProfileCard";
import AlexaImages from "./udemyimages/alexa.png";
import CortanaImages from "./udemyimages/cortana.png";
import SiriImages from "./udemyimages/siri.png";
import "bulma/css/bulma.css";

function App() {
    return (
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title"> Personal Digital Assistant</p>
            </div>
        </section>
        <div className="container">
            <section className="section">
                <div className="columns">

                    <div className="column is-3">
                        <ProfileCard 
                        title="Alexa" 
                        handle="@alexa99" 
                        image = {AlexaImages}
                        description="Alexa was created by amazon and helps you buy things."
                        />
                    </div>

                    <div className="column is-3">
                        <ProfileCard 
                        title="Cortana" 
                        handle="@cortana99" 
                        image = {CortanaImages}
                        description="Cortana was created by Microsoft and helps you search. "
                        />
                    </div>

                    <div className="column is-3">
                        <ProfileCard 
                        title="Siri" 
                        handle="@siri99" 
                        image = {SiriImages}
                        description="Siri was created by Apple and is being phased out. "
                        />
                    </div>

                </div>
            </section>
        </div> 
    </div>   
        
    );
}
export default App;