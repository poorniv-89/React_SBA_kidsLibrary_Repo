import { Link } from "react-router-dom"
export default function Nav() {
    return (
        <nav className="nav">
            <Link to='/'>Home</Link>
            <Link to='/categories'>Categories</Link>
            <Link to='/favorites'>Favorites</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
}

