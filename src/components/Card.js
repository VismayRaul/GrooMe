export const Card = ({name, price, imageURL})=>{
    return(
        <div className="dress-col">
            <div className="dress-imgbx">
                <img src={imageURL}/>
            </div>
            <div className="dress-txtx">
                <h4>{name}</h4>
                <span>Rs. {price}</span>
            </div>
        </div>
    )
}