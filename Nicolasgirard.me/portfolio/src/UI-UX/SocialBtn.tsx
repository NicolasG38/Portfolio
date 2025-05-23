import './SocialBtn.css'

const btnSocial=[
    {
        id:1,
        img:'src/assets/images/social/Bluesky.svg',
        text:"BLUESKY",
        link:'https://bsky.app/profile/thelazyagency.bsky.social',
    },
    {
        id:2,
        img:"src/assets/images/social/Instagram.svg",
        text:"INSTAGRAM",
        link:'https://www.instagram.com/thelazyagency/',
    },
    {
        id:3,
        img:"src/assets/images/social/Threads.svg",
        text:"THREADS",
        link:'https://www.threads.com/@thelazyagency',
    },
]

function SocialBtn() {

    const socialMap= btnSocial.map((item=>

            <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button  className={"btnSocial"} type={'button'}>
                    <img className={"imgSocial"} src={item.img} alt=""/>
                    {item.text}
                </button>
            </a>
    ))

    return (
        <>
            <section className={"sectionSocial"}>
                <section className={"BtnSocials"}>
                    {socialMap}
                </section>
                <a href={"https://www.linkedin.com/in/nicolasgirard38/"} target="_blank" rel="noopener noreferrer">
                    <button className={"btnSocialLinkedIn"} type={'button'}>
                        <img className={"imgSocial"} src="src/assets/images/social/LinkedIn.svg" alt=""/>
                        LINKEDIN
                    </button>
                </a>
            </section>
        </>

    )
}

export default SocialBtn;