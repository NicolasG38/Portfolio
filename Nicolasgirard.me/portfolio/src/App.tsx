import'./font/MonaSans-ExtraLight.ttf'
import'./font/MonaSans-Light.ttf'
import'./font/MonaSans-Medium.ttf'
import'./font/MonaSans-Regular.ttf'
import'./font/MonaSans-SemiBold.ttf'
import'./font/MonaSans-Bold.ttf'
import'./font/MonaSans-ExtraBold.ttf'
import'./font/MonaSans-Black.ttf'

import './App.css'
import'./UI-UX/HorizontalScrollingTop.css'

import Cursor from "./UI-UX/Cursor.tsx"
import Presentation from "./Components/Presentation.tsx";
import Skills from "./Components/Skills.tsx";
import NavBar from "./Components/NavBar.tsx";
import HorizontalScrollingTop from "./UI-UX/HorizontalScrollingTop.tsx";
import PersonalProject from "./Components/PersonalProject.tsx";
import Course from "./Components/Course.tsx";
import IntermediaireSectionBottom from "./Components/IntermediaireSectionBottom.tsx";
import Contact from "./Components/Contact.tsx";
import SocialBtn from "./UI-UX/SocialBtn.tsx";


function App() {

  return (
    <>
        <Cursor />
      <header>
        <NavBar />
      </header>
        <main>
            <Presentation/>
            <HorizontalScrollingTop/>
            <Skills/>
            <PersonalProject/>
            <Course/>
            <HorizontalScrollingTop/>
            <IntermediaireSectionBottom/>
            <Contact/>
            <SocialBtn />
            <div className="static-noise">
            </div>
        </main>
        <footer>

        </footer>
    </>
  )
}

export default App
