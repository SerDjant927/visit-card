import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import texts from "./texts.json";
import "./AboutMe.scss";

const AboutMe = () => {
    const { language } = useContext(LanguageContext);
    const t = texts[language].about;

    return (
        <section className="about-me">
            <h2>{t.h2}</h2>
            <p className="subtitle">{t.subtitle}</p>
            <p>{t.description}</p>

            <div className="about-me-cards">
                {t.cards.map((card, index) => (
                    <div key={index} className="card">
                        <h3>{card.title}</h3>
                        {card.text && <p>{card.text}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutMe;
