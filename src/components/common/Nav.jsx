import { Link } from 'react-router-dom';
import './Nav.css'


const Nav = () => {
    return (
        <nav>
            <h1>Welcome to the color factory</h1>
            <Link to="/colors/new">Add a color</Link>
        </nav>
    );
};

export default Nav;
