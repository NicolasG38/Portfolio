import './Course.css'
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"



const job=[
    {
        Number:".05.1",
        Label:"Auto-entrepreneur",
        Name:"TheLazyAgency",
        Date:"2025 => ...",
        id:2,
        key:1,
    },
    {
        Number:".05.2",
        Label:"Étudiant-Reconversion",
        Name:"Wild Code School",
        Date:"2021 => 2024",
        id:1,
        key:2,
    },
    {
        Number:".05.3",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        id:2,
        key:3,
    },
    {
        Number:".05.4",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        id: 2,
        key:4,
    },
    {
        Number:".05.5",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        id: 2,
        key:5,
    },
    {
        Number:".05.6",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        id: 2,
        key:6,
    },
    {
        Number:".05.7",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        id: 2,
        key:7,
    },
    {
        Number:".05.8",
        Label:"Agent Administratif Logistique",
        Name:"ML2LOG",
        Date:"2021 => 2024",
        id: 2,
        key:8,
    },
    {
        Number: ".05.9",
        Label: "Agent Administratif Logistique",
        Name: "ML2LOG",
        Date: "2021 => 2024",
        id: 2,
        key: 9,
    },
    {
        Number:".05.10",
        Label:"Bac Pro Commerce",
        Name:"GRETA de Grenoble",
        Date:"2011 => 2012",
        id: 1,
        key:10,
    },
    {
        Number:".05.11",
        Label:"BEP Compatilité",
        Name: "Lycée E.Herriot",
        Date:"2008 => 2008",
        id:1,
        key:11,
    },
]

function Course() {
    const [isVisible, setIsVisible] = useState(true)
    const [isVisibleDiplome, setIsVisibleDiplome] = useState(true)

    const filtredJob= job.filter((job)=>{
        return job.id
    }).map((job)=>{
        return (
            <section className={"courses"}>
                <AnimatePresence initial={false}>
                    {isVisibleDiplome && job.id=== 1 || isVisible && job.id=== 2 ? (
                        <motion.div
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0}}
                            style={box}
                            key={job.key}
                        >
                            <p key={job.key} className={"Numbers"}>{job.Number}</p>
                            <h3 className={"jobName"}>{job.Label}</h3>
                            <h4 className={"jobName"}>{job.Name}</h4>
                            <p className={"jobDate"}>{job.Date}</p>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </section>
        )
    })

    console.log(filtredJob)

    const sortExperience=()=> {
        if(!filtredJob) {
            setIsVisible(isVisible)
        }else if(filtredJob){
            setIsVisible(!isVisible)
        }
    }

    const sortDiplome=()=> {
        if(!filtredJob) {
            setIsVisibleDiplome(isVisibleDiplome)
        }else if(filtredJob){
            setIsVisibleDiplome(!isVisibleDiplome)
        }
    }

    return (
        <>
            <h1>PARCOURS</h1>
            <section className={"btnCourse"}>
                <motion.button
                    style={button}
                    onClick={sortExperience}
                    whileTap={{ y: 1 }}
                    key={2}
                >
                    {isVisible ? "EMPLOIS" : "MONTRER EMPLOIS"}
                </motion.button>
                <motion.button
                    style={button}
                    onClick={sortDiplome}
                    whileTap={{ y: 1 }}
                    key={1}
                >
                    {isVisibleDiplome ? "DIPLÔMES" : "MONTRER DIPLÔMES"}
                </motion.button>
            </section>

            <section className="courses">
                {filtredJob}
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