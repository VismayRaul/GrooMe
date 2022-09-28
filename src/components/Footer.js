export const Footer = ()=>{
    return(
        <footer className="footer">
            <div>
                <h1 className="footer-logo">GrooMe</h1>
                <p>@copyright 2022</p>
            </div>
            <div className="inner-foot">
                <div style={{textAlign:"center"}}>
                    <p>Home</p>
                    <p>Bags</p>
                    <p>Products</p>
                    <p>Shop</p>
                </div>
                <div>
                    <p>Dresses</p>
                    <p>Subscribe</p>                
                    <p>Contact</p>                
                    <p>Address</p>                
                </div>
                <div>
                    <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26103.377987828182!2d72.8375682402759!3d19.115292635722376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e2bf7afb8d%3A0x5e9780a57ad5c88f!2sVersova%20Beach!5e0!3m2!1sen!2sin!4v1664383473498!5m2!1sen!2sin"} width="500" height="250" style={{ border:"0",borderRadius:"8px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </footer>
    );
}