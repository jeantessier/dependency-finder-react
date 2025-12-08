import { useTitle } from '../../hooks'
import './NotFound.css'

const NotFound = () => {
    useTitle('Not Found')

    return (
        <p>There is nothing here!</p>
    )
}

export default NotFound
