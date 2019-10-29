
const Header = () => {
    return(
        <div className="header">
                <h5 className="link">QR CODE SCANNER</h5>
            
            <style jsx>{`
                .link{
                    color: black;
                    text-decoration: none;
                }
                a:hover{
                    font-weight: bold;
                    color: black;
                }
                .header{
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    padding: 2em;
                    font-size: 1.2rem;
                    background: lightblue;
                }
            `}
            </style>
        </div>
        
    )
}

export default Header