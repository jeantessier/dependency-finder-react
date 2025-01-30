import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return (
        <div className={'nav-bar blue'}>
            <fieldset className="nav-element minor"><Link className={'navigation'} to="/extract">extract</Link></fieldset>
            <fieldset className="nav-element minor"><Link className={'navigation'} to="/load">load</Link></fieldset>
            <fieldset className="nav-element major"><Link className={'navigation'} to="/query">query</Link></fieldset>
            <fieldset className="nav-element major"><Link className={'navigation'} to="/closure">closure</Link></fieldset>
            <fieldset className="nav-element major"><Link className={'navigation'} to="/cycles">cycles</Link></fieldset>
            <fieldset className="nav-element major"><Link className={'navigation'} to="/metrics">metrics</Link></fieldset>
        </div>
    )
}
