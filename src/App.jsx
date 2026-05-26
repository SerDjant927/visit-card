import { LanguageProvider } from "./components/LanguageContext";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
const App = () => {
  return (
      <div style={{maxWidth: "1440px", margin: "0 auto", padding: "0 20px"}}>
          <LanguageProvider>
            <Header/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Contact/>
          </LanguageProvider>
      </div>
  )
}

export default App
