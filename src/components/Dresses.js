import { Card } from "./Card"
import "./Style.css"
import dress1 from "../assets/img/dress1.jpg";
import dress2 from "../assets/img/dress2.jpg";
import dress3 from "../assets/img/dress3.webp";
import dress4 from "../assets/img/dress4.jpg";


export const Dresses = ()=>{
    const dresses = [
        {
            name:'Dress 1',
            price:'898',
            imageURL: dress1,

        },
        {
            name:'Dress 2',
            price:'78',
            imageURL: dress2,
        },
        {
            name:'Dress 3',
            price:'985',
            imageURL: dress3,
        },
        {
            name:'Dress 4',
            price:'879',
            imageURL: dress4,
        },

    ]

    return(
        <section className="dresses">
            <div className="dresses-prod">
                <div className="dress-row">
                    {
                        dresses.map((dress,index)=>{
                            return(
                                <Card
                                    key={index}
                                    {...dress}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="single-dress">
                <div className="single-dress-div">
                    <h1>Dresses</h1>
                    <p>Sleeveless short dress featuring a round neckline, pronounced seams and a back zip fastening</p>
                    <div>SHOP DRESSES</div>
                </div>
            </div>
        </section>
    )
}