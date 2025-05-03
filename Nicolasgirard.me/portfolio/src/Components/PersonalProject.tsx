import './PersonalProject.css'



function PersonalProject() {
    return (
        <>
            <h1>PROJETS PERSONNEL</h1>

            <section className={"projectSection"}>
                <img className={"projectImg"} src={"src/assets/images/Resource/Project_1.png"} alt="personal-project 1" />
                <img className={"projectImg"} src={"src/assets/images/Resource/Project_2.png"} alt="personal-project 2" />
            </section>
            <section className={"projectSection"}>
                <img className={"projectImg"} src={"src/assets/images/Resource/Project_3.png"} alt="personal-project 3" />
                <section className={"boxProject"}>
                    <p className={"Numbers"}>.04</p>
                    <h3>EN COURS DE DÉVELOPPEMENT</h3>
                    <ul className={"pojectUl"}>
                        <li>SPIRE-PROJECT <span>(Soluce de JV - REACT)</span></li>
                    </ul>
                    <h3>À VENIR...</h3>
                    <ul>
                        <li>TheLazyAgency <span>(Site web de mon agence - REACT)</span></li>
                        <li>NASCAR-PROJECT<span>(Réseaux social - REACT)</span></li>
                    </ul>
                </section>
            </section>

        </>
    )
}

export default PersonalProject