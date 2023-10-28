import { Outlet, Link } from "react-router-dom";



function NavLink() {
    return (
        <div class="p-8 text-center">
        <h1 class="text-5xl font-bold">MYPROMOSPHERE API</h1>
        <div class="my-8">
            <p className="border-solid border-2 border-sky-500">
                Developers, please take note that this API is still a work in progress, and the backend development team will be enhancing the API documentation's user interface in the near future. For the time being, kindly use this version, and should you encounter any errors, don't hesitate to reach out to the backend developers for clarification on how to proceed.
            </p>
        </div>
    
        <div class="my-8">
            <Link to="/web" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block">Web API</Link>
        </div>
    
        <div class="my-8">
            <Link to="/mobile" class="bg-blue-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full inline-block">Mobile API</Link>
        </div>
    
        <Outlet />
    </div>
    

    )
}

export default NavLink;