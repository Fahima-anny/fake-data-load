
import './Watch.css'

const Watch = ({watch}) => {
    let { name,price,id } = watch
    return (
        <div className='watch'>
            <p>Id: {id}</p>
            <p>Watch: {name}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;