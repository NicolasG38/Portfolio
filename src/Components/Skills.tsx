import './Skills.css'


function Skills() {
    return (
        <>
            <section className={"allSkills"} id={"skills"}>
                <section className={"boxSkills"}>
                        <p className={"Numbers"}>.01</p>
                        <h3 className={"skill-titles"}>FRONT SKILLS</h3>
                        <ul>
                            <li>HTML / CSS / JAVASCRIPT</li>
                            <li>REACT / VITEJS</li>
                            <li>TYPESCRIPT</li>
                            <li>NEXSTJS</li>
                            <li>PHP</li>
                        </ul>
                </section>
                <section className={"boxSkills"}>
                    <p className={"Numbers"}>.02</p>
                    <h3 className={"skill-titles"}>BACK SKILLS</h3>
                    <ul>
                        <li>NODEJS</li>
                        <li>EXPRESSJS</li>
                        <li>MySQL</li>
                    </ul>
                </section>
                <section className={"boxSkills"}>
                    <p className={"Numbers"}>.03</p>
                    <h3 className={"skill-titles"}>OTHERS SKILLS</h3>
                    <ul>
                        <li>EXCALIDRAW</li>
                        <li>FIRGMA</li>
                        <li>GIT/GITHUB</li>
                        <li>VSCODE / WEBSTROM</li>
                        <li>TRELLO</li>
                        <li>SPLINE</li>
                    </ul>
                </section>
            </section>
        </>
    )
}

export default Skills;