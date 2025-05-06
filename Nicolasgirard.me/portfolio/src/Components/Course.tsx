import './Course.css'
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"


const job=[
    {
        Number:".05.1",
        Label:"Auto-entrepreneur",
        Name:"TheLazyAgency",
        Date:"2025 => ...",
        key:2,
    },
    {
        Number:".05.2",
        Label:"Étudiant-Reconversion",
        Name:"Wild Code School",
        Date:"2021 => 2024",
        key:2,
    },
    {
        Number:".05.3",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        key:2,
    },
    {
        Number:".05.4",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        key:2,
    },
    {
        Number:".05.5",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        key:2,
    },
    {
        Number:".05.6",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        key:2,
    },
    {
        Number:".05.7",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        key:2,
    },
    {
        Number:".05.8",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        key:2,
    },
    {
        Number:".05.9",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        key:2,
    },
]

const diplome=[
    {
        Number:".05.10",
        Label:"Bac Pro Commerce",
        Name:"GRETA de Grenoble",
        Date:"2011 => 2012",
        key:1,
    },
    {
        Number:".05.11",
        Label:"BEP Compatilité",
        Name: "Lycée E.Herriot",
        Date:"2008 => 2008",
        key:1,
    },
]

function Course() {
    const [isVisibleJob, setIsVisibleJob] = useState(true)
    const [isVisible, setIsVisible] = useState(true)

    const jobMap= job.map((item=>
            <>
            <section className={"courses"}>

                    <AnimatePresence initial={false}>
                        {isVisibleJob ? (
                            <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0}}
                                style={box}
                                key={item.key}
                                >

                                    <p key={item.key} className={"Numbers"}>{item.Number}</p>
                                    <h3 className={"jobName"}>{item.Label}</h3>
                                    <h4 className={"jobName"}>{item.Name}</h4>
                                    <p className={"jobDate"}>{item.Date}</p>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
            </section>
            </>
    ))


    const diplomeMap= diplome.map((item=>
            <>
                <section className={"courses"}>
                    <AnimatePresence initial={false}>
                        {isVisible ? (
                            <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0}}
                                style={box}
                                key={item.key}
                            >
                                <p key={item.key} className={"Numbers"}>{item.Number}</p>
                                <h3 className={"jobName"}>{item.Label}</h3>
                                <h4 className={"jobName"}>{item.Name}</h4>
                                <p className={"jobDate"}>{item.Date}</p>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </section>
            </>
    ))

    return (
        <>
            <h1>PARCOURS</h1>
            <section className={"btnCourse"}>
                <motion.button
                    style={button}
                    onClick={() => setIsVisibleJob(!isVisibleJob)}
                    whileTap={{ y: 1 }}
                    key={2}
                >
                    {isVisibleJob ? "EMPLOIS" : "MONTRER EMPLOIS"}
                </motion.button>
                <motion.button
                    style={button}
                    onClick={() => setIsVisible(!isVisible)}
                    whileTap={{ y: 1 }}
                    key={1}
                >
                    {isVisible ? "DIPLÔMES" : "MONTRER DIPLÔMES"}
                </motion.button>
            </section>

            <section className="courses">
                {jobMap}{diplomeMap}
            </section>
        </>
    )
}


const box: React.CSSProperties = {
    width: 228,
    height: 230,
    color:"#dac5a7",
    borderRadius: "3px",
    border:".5px solid #dac5a7",
}

const button: React.CSSProperties = {
    backgroundColor: "#333",
    borderRadius: "3px",
    border:".5px solid #dac5a7",
    padding: "10px 20px",
    color: "#dac5a7",
    width: 250,
    height: 44,
}

export default Course;