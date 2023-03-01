import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 
import "./NavBar.css"

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <div className="NavBar">
                <p>Welcome, <strong>{user.name}</strong></p>
                <Link to="/notes">All Notes</Link>
                <Link to="/notes/new">Create a Note</Link>
                <Link to="" onClick={handleLogOut}>Log Out</Link>
            </div>
            <div className="NavBar">
                <h1>📝 Quick Notes</h1>
            </div>
        </nav>
    )
}