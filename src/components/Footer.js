
import {Link} from 'react-router-dom';
export default function Footer() {
    return (
        <footer>
            <menu>
                <li className="img-footer">
                    <img src={require('../assets/footer-logo.png')} alt="Little Lemon logo"></img>
                </li>
                <li className = "contact" >
                    <h1 className="footer-header">Navigation</h1>
                    <ul className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/reservations">Reservations</Link>
                    </ul>
                </li>

                <li>
                    <h1 className="footer-header">Contact</h1>
                    <ul className="footer-links">
                        <li>2395 Maldove Way,</li>
                        <li>Chicago Illinois</li>
                        <br></br>
                    </ul>
                </li>
                <li>
                    <h1 className="footer-header">Connect</h1>
                    <ul className="footer-links">
                        <a href="https://www.facebook.com/thelittlelemonshop/" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/littlelemonmoon/" target="_blank" rel="noreferrer">Instagram</a>
                    </ul>
                </li>
            </menu>
        </footer>
    );
}