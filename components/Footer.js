import Link from 'next/link'

const Footer = () => {
    return (
        <div className="header">
            {/* <p>&copy; {new Date().getFullYear()}</p> */}
            <Link href="/qrScanner">

                <button>
                    <img src="/static/scanner.jpg" title="scan" alt="scan" width="60px" />
                    <p>Scan here ></p>
                </button>
            </Link>

            <style jsx>{`
                button{
                    background-color: lightblue;
                    height: 69px;
                    width: 80px;
                    border: none
                }
                button:hover>p{
                    font-weight: bold;
                    color: black;
                }
                p{
                    font-size: 12px;
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

export default Footer