import'./HorizontalScrollingTop.css'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react";



const animation = { duration: 20000, easing: (t: number) => t };

function HorizontalScrollingTop() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "precision",
        rtl:false,
        drag: false,

        slides: { perView :"auto" },
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
    });
    return (
        <>
            <div ref={sliderRef} className="keen-slider" >
                <img src={"src/assets/images/Resource/HTML5.svg"} className="keen-slider__slide number-slide1" alt={""} />
                <img src={"src/assets/images/Resource/CSS3.svg"} className="keen-slider__slide number-slide2" alt={""} />
                <img src={"src/assets/images/Resource/React.svg"} className="keen-slider__slide number-slide3" alt={""} />
                <img src={"src/assets/images/Resource/Vitejs.svg"} className="keen-slider__slide number-slide4" alt={""} />
                <img src={"src/assets/images/Resource/Node.js.svg"} className="keen-slider__slide number-slide5" alt={""} />
                <img src={"src/assets/images/Resource/VSC.svg"} className="keen-slider__slide number-slide6" alt={""} />
            </div>
        </>
    )
}

export default HorizontalScrollingTop;
