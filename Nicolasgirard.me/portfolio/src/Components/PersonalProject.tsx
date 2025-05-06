import './PersonalProject.css'
import '../App.css'

import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

function PersonalProject({
                  id,
                  title,
                  category,
                  open,
                  top,
                  bottom,
                  width = "100%",
                  left,
                  theme,
              }: CardProps) {
    return (
        <li className={`card ${theme}`} onClick={open}>
            <motion.div
                className="card-content"
                layoutId={`card-container-${id}`}
            >
                <motion.div
                    className="card-image-container"
                    layoutId={`card-image-container-${id}`}
                >
                    <motion.img
                        className=" card-image"
                        src={`src/assets/images/Resource/${id}.png`}
                        alt=""
                        style={{ top, bottom, width, left }}
                        layoutId={`card-image-${id}`}
                    />
                </motion.div>
                <motion.div
                    className="title-container"
                    layoutId={`title-container-${id}`}
                    layout="position"
                >
                    <span className="h6">{category}</span>
                    <h2 className="h3">{title}</h2>
                </motion.div>
            </motion.div>
        </li>
    )
}

function List({ open }: { open: (id: string) => void }) {
    return (
        <ul className="card-list">
            {items.map((card) => (
                <PersonalProject key={card.id} {...card} open={() => open(card.id)} />
            ))}
        </ul>
    )
}

function Item({ id, close }: { id: string; close: VoidFunction }) {
    const {
        category,
        title,
        content,
        top,
        bottom,
        theme,
        width = "100%",
        left,
    } = items.find((item) => item.id === id)!

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                style={{ pointerEvents: "auto" }}
                className="overlay"
                onClick={close}
            />
            <div className={`card-content-container open ${theme}`}>
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${id}`}
                >
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <motion.img
                            className="card-image"
                            src={`src/assets/images/Resource/${id}.png`}
                            alt=""
                            style={{ top, bottom, width, left }}
                            layoutId={`card-image-${id}`}
                        />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                        layout="position"
                    >
                        <span className="h6">{category}</span>
                        <h2 className="h3">{title}</h2>
                    </motion.div>
                    <motion.div className="content-container small">
                        {content}
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

function StoreFront() {
    const [openId, open] = useState<string | null>(null)

    const close = () => open(null)

    return (
        <>
            <List open={open} />
            <AnimatePresence>
                {openId && <Item close={close} id={openId} key="item" />}
            </AnimatePresence>
        </>
    )
}

export default function AppStore() {
    return (
        <div id="app-store">
            <header>
                <div>
                    <h2 className="store-title">PROJETS PERSONEL</h2>
                </div>
                <div className="avatar">
                    <img
                        src="src/assets/images/logo_V1.1.png"
                        alt="Photo of Matt Perry"
                        width={40}
                        height={40}
                    />
                </div>
            </header>
            <StoreFront />
        </div>
    )
}

/**
 * ==============   Mock data   ================
 */

// Photos by Unsplash
const items: Item[] = [
    {
        id: "Project_1",
        category: ".04.1",
        title: "Quest 1",
        content: (
            <>
                <p className="big">
                    Love to travel? So do the makers of these five subscription
                    apps. For a small monthly fee, they'll help you find the
                    best deals on flights, hotels, and some other stuff we turn
                    a blind eye to.
                </p>
                <p className="big">
                    Plan your perfect itinerary with intelligent recommendations
                    based on your interests, time, and credit history.
                </p>
            </>
        ),
        top: -300,
    },
    {
        id: "Project_2",
        category: ".04.2",
        title: "Solo Rush",
        content: (
            <>
                <p className="big">
                    What is life? You can't spell "life" without "i". You also
                    can't spell "life" without "l", "f", and "e". Worth thinking
                    about.
                </p>
                <p className="big">
                    The only way to find out more about life is to think about
                    it. And the only way to think about it is twice daily using
                    an app.
                </p>
                <p className="big">
                    Apps? We got 'em. Therefore we got the meaning of life.
                </p>
            </>
        ),
        bottom: -50,
        theme: "light",
        width: "110%",
        left: -20,
    },
    {
        id: "Project_3",
        category: ".04.3",
        title: "CSS Values & Units",
        content: (
            <>
                <p className="big">
                    Réalisé lors de ma deuxième tech Review. Ce mini-site vous présente les principal unité CSS et vous permet d'intergagir
                </p>
                <p className="big">
                    Locked door? No problem! This app crowdsources the access
                    code to every door in your city.
                </p>
            </>
        ),
        theme: "light",
        width: "100%",
        left: -100,
    },
    {
        id: "Project_4",
        category: ".04.4",
        title: "Mes projets en cours... et à venir !",
        content: (
            <>
                <h3> En cours...</h3>
                <ul className="big">
                    <li>SPIRE-PROJECT</li>
                </ul>

                <ul className="big">
                    <li>TheLazyAgency.com</li>
                    <li>NASCAR-PROJECT</li>
                </ul>
                <ul className="big">
                    <li>Photo de <a href="https://unsplash.com/fr/@mike_van_den_bos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target={"_blank"}>Mike van den Bos</a> sur <a href="https://unsplash.com/fr/photos/texte-jf1EomjlQi0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target={"_blank"}>Unsplash</a></li>

                </ul>
            </>
        ),
        bottom: -100,
    },
]

/**
 * ==============   Types   ================
 */

interface CardProps {
    id: string
    title: string
    category: string
    open: VoidFunction
    top?: number
    bottom?: number
    width?: string
    left?: number
    theme?: "dark" | "light"
}

interface Item {
    id: string
    category: string
    title: string
    content: React.ReactNode
    top?: number
    bottom?: number
    width?: string
    left?: number
    theme?: "dark" | "light"
}
