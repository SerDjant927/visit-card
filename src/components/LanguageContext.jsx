import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext({
    language: "en",
    setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
