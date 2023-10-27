import { Link } from "react-router-dom";



function Home() {
    return ( 
        <div>
            <Link to="/web">Web Api</Link>


            <br />
            
            <Link to="/moblie">Mobile Api</Link>
            
        </div>
    )
}

export default Home;