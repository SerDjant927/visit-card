import "./Contact.scss";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import texts from "./texts.json";

const Contact = () => {
    const { language } = useContext(LanguageContext);
    const t = texts[language].contacts;
    return (
        <section className="contact">
            <h2>{t.h2}</h2>
            <form className="contact-form">
                <input type="text" placeholder={t.fields.name} />
                <input type="email" placeholder={t.fields.email} />
                <textarea placeholder={t.fields.message}></textarea>
                <button type="submit" className="btn primary">{t.btnsend}</button>
            </form>
        </section>
    );
};

export default Contact;
