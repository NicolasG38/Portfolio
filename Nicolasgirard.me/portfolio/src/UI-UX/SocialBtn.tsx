import './SocialBtn.css'

const btnSocial=[
    {
        id:1,
        img:'src/assets/images/social/Bluesky.svg',
        text:"BLUESKY"
    },
    {
        id:2,
        img:"src/assets/images/social/Instagram.svg",
        text:"INSTAGRAM"
    },
    {
        id:3,
        img:"src/assets/images/social/Threads.svg",
        text:"THREADS"
    },
]

function SocialBtn() {

    const socialMap= btnSocial.map((item=>

            <button  className={"btnSocial"} type={'button'}><img className={"imgSocial"} src={item.img} alt=""/> {item.text}</button>
    ))

    return (
        <>
            <section className={"sectionSocial"}>
                <section className={"BtnSocials"}>
                    {socialMap}
                </section>
                <button className={"btnSocialLinkedIn"} type={'button'}><img className={"imgSocial"} src="src/assets/images/social/LinkedIn.svg" alt=""/>LINKEDIN</button>
            </section>
        </>

    )
}

export default SocialBtn;