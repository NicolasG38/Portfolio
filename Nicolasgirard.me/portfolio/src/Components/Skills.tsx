import './Skills.css'


function Skills() {
    return (
        <>
            <section className={"allSkills"}>
                <section className={"boxSkills"}>
                        <p className={"Numbers"}>.01</p>
                        <h3 className={"skill-titles"}>FRONT SKILLS</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT / VITEJS</li>
                            <li>TYPESCRIPT</li>
                        </ul>
                </section>
                <section className={"boxSkills"}>
                    <p className={"Numbers"}>.02</p>
                    <h3 className={"skill-titles"}>BACK SKILLS</h3>
                    <ul>
                        <li>NODEJS</li>
                        <li>EXPRESSJS</li>
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