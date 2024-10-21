import useTitle from '../../hooks/useTitle'
import './NotFound.css'

export default function NotFound() {
    useTitle('Not Found')

    return (
        <p>There is nothing here!</p>
    )
}
