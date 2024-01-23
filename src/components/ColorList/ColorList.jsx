import { Link } from 'react-router-dom'
import Nav from '../common/Nav';
import './ColorList.css'

const ColorList = ({ colors }) => {
    console.log(colors);
    return (
        <div className='ColorList'>
            <Nav />
            <h2>Please select a color</h2>
            <ul>
                {colors.map(color => (
                    <li><Link to={"/colors/" + color.name}>{color.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default ColorList