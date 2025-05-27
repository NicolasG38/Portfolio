import type React from "react"
import type { Variants } from "motion/react"
import * as motion from "motion/react-client"
import { useEffect, useRef, useState } from "react"
import './NavBar.css'


const iconNav=[
    {
        name:"Home",
        icon:"public/assets/images/nav/home.svg",
        link:"#home",
        id:1,
    },
    {
        name:"Projet personel",
        icon:"public/assets/images/nav/code.svg",
        link:"#app-store",
        id:2,
    },
    {
        name:"Parcours",
        icon:"public/assets/images/nav/assignment.svg",
        link:"#course",
        id:3,
    },
    {
        name:"Contact",
        icon:"public/assets/images/nav/mail.svg",
        link:"#contact",
        id:4,
    }
]

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const { height } = useDimensions(containerRef)

    const iconMap= iconNav.map((nav=>
                <li className={"navbar-li"}><a href={nav.link}><img key={nav.id} className={"navBarIcon"} src={nav.icon} alt={nav.name} /></a></li>
    ));
    return (
        <>
            <nav className="navbar">
                <ul className={"navbar-ul"}>
                <li className={"navbar-li"}><p>&#10094;NicolasGIRARD &#8725;&#10095;</p></li>
                {iconMap}
                </ul>
            </nav>
            <div>
                <div  className={"containerNav"}>
                    <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        custom={height}
                        ref={containerRef}
                        style={nav}
                    >
                        <motion.div className={"backgroundNav"} variants={sidebarVariants} />
                        <Navigation />
                        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
                    </motion.nav>
                </div>
            </div>
        </>
    )
}

export default NavBar;

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const Navigation = () => (
    <motion.ul style={list} variants={navVariants}>
        {[0].map((i) => (
            <MenuItem i={i} key={i} />

        ))}
    </motion.ul>
)

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

const colors = ["#9f8170"]

const MenuItem = ({ i }: { i: number }) => {
    const border = `1px solid ${colors[i]}`
    return (
        <>
        <motion.li
            style={listItem}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div style={{ ...iconPlaceholder, border }}><img className={"iconBurger"} src={iconNav[0].icon}/></div>
            <div style={{ ...textPlaceholder, border }}>{iconNav[0].name}</div>
        </motion.li>
        <motion.li
            style={listItem}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div style={{ ...iconPlaceholder, border }}><img className={"iconBurger"} src={iconNav[1].icon}/></div>
            <div style={{ ...textPlaceholder, border }}>{iconNav[1].name}</div>
        </motion.li>
            <motion.li
                style={listItem}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <div style={{ ...iconPlaceholder, border }}><img className={"iconBurger"} src={iconNav[2].icon}/></div>
                <div style={{ ...textPlaceholder, border }}>{iconNav[2].name}</div>
            </motion.li>
            <motion.li
                style={listItem}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <div style={{ ...iconPlaceholder, border }}><img className={"iconBurger"} src={iconNav[3].icon}/></div>
                <div style={{ ...textPlaceholder, border }}>{iconNav[3].name}</div>
            </motion.li>

        </>
    )
}

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 30px 30px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 44px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
}

interface PathProps {
    d?: string
    variants: Variants
    transition?: { duration: number }
}

const Path = (props: PathProps) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 0%)"
        strokeLinecap="round"
        {...props}
    />
)

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button style={toggleContainer} onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">

            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },

                }}

            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346"},
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
)

const nav: React.CSSProperties = {
    width: 300,
}

const toggleContainer: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    border: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    cursor: "pointer",
    position: "fixed",
    top: 19,
    left: 15,
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "#dac5a7",
    zIndex: 10,
}

const list: React.CSSProperties = {
    listStyle: "none",
    padding: 25,
    margin: 0,
    position: "fixed",
    top: 80,
    width: 250,
    zIndex: 10,
}

const listItem: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
    listStyle: "none",
    marginBottom: 20,
    cursor: "pointer",
    position: "relative",
    zIndex:10,
}

const iconPlaceholder: React.CSSProperties = {
    width: 60,
    height: 40,
    borderRadius: "50%",
    flex: "40px 0",
    marginRight: 20,
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 10,
}

const textPlaceholder: React.CSSProperties = {
    borderRadius: 3,
    display: "flex",
    alignItems: "center",
    padding: ".5rem",
    width: 250,
    height: 30,
    flex: 1,
    position: "relative",
    zIndex: 10,
}

/**
 * ==============   Utils   ================
 */

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const dimensions = useRef({width: 0, height: 0})

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth
            dimensions.current.height = ref.current.offsetHeight
        }
    }, [ref])

    return dimensions.current
}
