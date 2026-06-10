import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import texts from "./texts.json";

import html5Icon from "../assets/icons/skills/html5.svg";
import jsIcon from "../assets/icons/skills/javascript.svg";
import reactIcon from "../assets/icons/skills/react.svg";
import vueIcon from "../assets/icons/skills/vuejs.svg";
import sassIcon from "../assets/icons/skills/sass.svg";
import gitIcon from "../assets/icons/skills/gitlab.svg";
import cssIcon from "../assets/icons/skills/css3.svg";
import lessIcon from "../assets/icons/skills/less.svg";
import phpIcon from "../assets/icons/skills/php.svg";
import jqueryIcon from "../assets/icons/skills/jquery.svg";
import gulpIcon from "../assets/icons/skills/gulp.svg";
import nodejsIcon from "../assets/icons/skills/nodejs.svg";
import tsIcon from "../assets/icons/skills/typescript.svg";
import webpackIcon from "../assets/icons/skills/webpack.svg";

import "./Skills.scss";

const Skills = () => {
    const { language } = useContext(LanguageContext);
    const t = texts[language].skills;

    const icons = [html5Icon, jsIcon, reactIcon, vueIcon, sassIcon, gitIcon, cssIcon, lessIcon, phpIcon, jqueryIcon, gulpIcon, nodejsIcon, tsIcon, webpackIcon];

    return (
        <section className="skills">
            <h2>{t.h2}</h2>
            <p>{t.description}</p>
            <div className="skills-flex">
                {t.skillsList.map((skillName, index) => (
                    <div key={index} className="skill">
                        <img src={icons[index]} alt={skillName} />
                        <p>{skillName}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
