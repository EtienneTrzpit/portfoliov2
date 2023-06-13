import '../index.css'
import Presentation from './Presentation'
import SavoirFaire from './SavoirFaire'
import Projets from './Projets'
import Certifications from './Certifications'
import Contact from './Contact'
import { useRef, useEffect } from 'react'

export default function Main(){

    const cardRefs = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-active');
                    console.log("réussie");
                }
                else {
                    entry.target.classList.remove('section-active');
                }
        }), { threshold: 0.5 };
    });
    cardRefs.current.forEach(ref => observer.observe(ref));
}, []);

    return (
        <main className='content' id='presentation'>
            <Presentation />
            <SavoirFaire cardRefs={cardRefs}/>
            <Projets cardRefs={cardRefs}/>
            <Certifications cardRefs={cardRefs}/>
            <Contact cardRefs={cardRefs}/>
        </main>
    )
}