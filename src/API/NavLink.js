import { Outlet ,Link} from "react-router-dom";



function NavLink() {
    return (
        <div>
            <Link to="/web">Web Api</Link>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Link to="/moblie">Mobile Api</Link>
            
            <Outlet/>

        </div>

    )
}

export default NavLink;