import './Contact.css'
import SendBtn from "../UI-UX/SendBtn.tsx";

function Contact(){
    return (
        <>
            <section className={"contact"} id={"contact"}>
                <section  className={"contactBox"}>
                    <p className={"Numbers"}>.06</p>
                    <h1 className={"titleNameContact"}>CONTACT</h1>
                    <section className={"sectionForm"}>
                        <form className={"form"} action={"action.php"} method="POST" >
                            <input className={"contactInput"} type={"text"} placeholder={"Prénom"}/>
                            <input className={"contactInput"} type={"text"} placeholder={"Nom"}/>
                            <input className={"contactInput"} type={"email"} placeholder={"Email"}/>
                            <textarea className={"contactTextarea"} placeholder={"Votre message..."}></textarea>
                            <SendBtn />
                        </form>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Contact;