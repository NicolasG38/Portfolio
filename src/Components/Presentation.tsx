import NicolasG38 from '../../public/assets/images/NicolasG38-NG.png'
import './Presentation.css'
import '../App.css'

function Presentation() {
    return (
        <>
            <section className={"presentation"} id={"presentation"}>
                <section className={"presentationImg"}>
                    <img className={"presentationSetimg"} src={NicolasG38} alt={"Nicolas GIRARD se présente les bras croisés"} />
                </section>
                <section className={"presentation-text"}>
                    <h1 className={"title"}>Développeur Full Stack</h1>
                    <h3 className={"presentationResearch"}>Alternance - Professionnalisation</h3>
                    <h3 className={"presentationResearch"}>Concepteur développeur d'applications</h3>
                    <h3 className={"presentationResearch"}>Septembre 2025 - 15 mois</h3>
                    <article className={"presentationResearchText"}>
                    <p className={"presentationText"}>Hello, moi c’est Nicolas ! En reconversion après une carrière dans la vente et la logistique, je me réoriente vers l’une de mes passions, le dév’.
                        Actuellement à la WILD CODE SCHOOL de Lyon, je poursuis une formation pour décrocher la certification de développeur web et web mobile.
                        J’ai pu acquérir les bases de plusieurs langages web, mais aussi me perfectionner dans l’utilisation de différents outils tels qu’Excalidraw pour les wireframes ou encore Figma en ce qui concerne les maquettes interactives.

                        Mon objectif actuelle est de poursuivre mon parcours en alternance (A compléter...) </p>
                    </article>
                </section>

            </section>
        </>
    )
}

export default Presentation;