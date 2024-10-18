import useTitle from '../../hooks/useTitle.js'
import './NotFound.css'

export default function NotFound() {
    useTitle('Not Found')

    return (
        <p>There is nothing here!</p>
    )
}
