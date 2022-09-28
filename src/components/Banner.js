import { useEffect, useState } from "react";


export const Banner = ()=>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] =useState(false);
    const toRotate = ['Perfectly groomed'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period= 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1 );

        setText(updatedText);

        if (isDeleting){
            setDelta(500)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period)
        }
        else if (isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500)
        }

    }
    return(
        <section className="banner" id='home'>
            <div className="flex-container">
                <div className="dummy"></div>
                <div className="main">
                    <p className="upper-ticker">SPRING SUMMER COLLECTION</p>
                    <h1 className="ticker">{text}</h1>
                    <button className="button">COLLECTION</button>
                </div>
            </div>
        </section>
    )
}