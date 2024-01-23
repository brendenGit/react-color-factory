import { Link, useParams } from 'react-router-dom'
import './Color.css'

const Color = ({ getColor }) => {
    const params = useParams();
    const color = getColor(params.name);
    const style = {backgroundColor: color.value};

    return (
        <div className='Color' style={style}>
            <h2>THIS IS {color.name.toUpperCase()}</h2>
            <h2>ISN'T IT BEAUTIFUL?</h2>
            <h2><Link to="/colors">GO BACK</Link></h2>
        </div>
    )
}

export default Color