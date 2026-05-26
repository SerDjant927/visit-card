import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import texts from "./texts.json";
import "./Header.scss";

const Header = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const t = texts[language];

    return (
        <header className="header">
            <div className="language-switcher">
                <button
                    className={language === "en" ? "active" : ""}
                    onClick={() => setLanguage("en")}
                >
                    EN
                </button>
                <button
                    className={language === "ru" ? "active" : ""}
                    onClick={() => setLanguage("ru")}
                >
                    RU
                </button>
            </div>

            <div className="header-content">
                <h1>{t.header.title}</h1>
                <h2>{t.header.subtitle}</h2>
                <p>{t.header.description}</p>
                <div className="header-buttons">
                    <button className="btn primary">{t.buttons?.viewWork || "View My Work"}</button>
                    <button className="btn secondary">{t.buttons?.contactMe || "Contact Me"}</button>
                </div>
            </div>

            <div className="header-image">
                <img src="/path-to-image.jpg" alt="Developer Illustration" />
            </div>
        </header>
    );
};

export default Header;
