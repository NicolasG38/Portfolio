import './Course.css'



const job=[
    {
        Number:".05.1",
        Label:"Auto-entrepreneur",
        Name:"TheLazyAgency",
        Date:"2025 => ...",
    },
    {
        Number:".05.2",
        Label:"Étudiant-Reconversion",
        Name:"Wild Code School",
        Date:"2021 => 2024",
    },
    {
        Number:".05.3",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
    },
    {
        Number:".05.4",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
    },
    {
        Number:".05.5",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
    },
    {
        Number:".05.6",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
    },
    {
        Number:".05.7",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
    },
    {
        Number:".05.8",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
    },
    {
        Number:".05.9",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
    },
    {
        Number:".05.10",
        Label:"Bac Pro Commerce",
        Name:"GRETA de Grenoble",
        Date:"2011 => 2012",
    },
    {
        Number:".05.11",
        Label:"BEP Compatilité",
        Name: "Lycée E.Herriot",
        Date:"2008 => 2008",
    },
]


function Course() {
    const table= job.map((item=>
            <article className="courseArticle">
                <p key={item.Number} className={"Numbers"}>{item.Number}</p>
                <h3 className={"jobLabel"}>{item.Label}</h3>
                <h4 className={"jobName"}>{item.Name}</h4>
                <p className={"jobDate"}>{item.Date}</p>
            </article>

    ))
    return (
        <>
            <h1>PARCOURS</h1>

            <section className="courses">
                {table}
            </section>
        </>
    )
}
export default Course;