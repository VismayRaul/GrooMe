import { Card } from "./Card"
import "./Style.css"
import bag1 from "../assets/img/bag1.jpeg";
import bag2 from "../assets/img/bag2.jpeg";
import bag3 from "../assets/img/bag3.jpeg";
import bag4 from "../assets/img/bag4.jpeg";


export const Bags = ()=>{
    const dresses = [
        {
            name:'bag 1',
            price:'898',
            imageURL:bag1,

        },
        {
            name:'bag 2',
            price:'78',
            imageURL:bag2,
        },
        {
            name:'bag 3',
            price:'985',
            imageURL:bag3,
        },
        {
            name:'bag 4',
            price:'879',
            imageURL:bag4,
        },

    ]

    return(
        <section className="dresses">
            <div className="single-dress">
                <div>
                    <div className="single-bag-div">
                        <h1>Hand Bags</h1>
                        <p>Sleeveless short dress featuring a round neckline, pronounced seams and a back zip fastening</p>
                        <div>SHOP HAND BAG</div>
                    </div>
                </div>
            </div>
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
        </section>
    )
}