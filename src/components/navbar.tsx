import { Link } from "react-router-dom";

export const Navbar = () => {
    
    return (
        <>
            <div className="w-full flex justify-between">
                <Link to={"/"}>
                    <button className="text- font-bold">CABREJO QUINTA</button>
                </Link>



            </div>  
        </>
    );
}
