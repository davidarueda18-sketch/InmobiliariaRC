import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Button } from "../atoms/button";
import menu from "../../assets/icons/menu.png";

export const Navbar = () => {

    const navigationLinks = [
        { name: "Home", path: "/" },
        { name: "Propiedades", path: "/Propiedades" },
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="w-full flex text-eerie-black justify-between items-center px-5 py-7 lg:px-16 2xl:px-32">
                <Link to={"/"}>
                    <button className="font-bold text-lg">CABREJO QUINTA</button>
                </Link>

                {/* Desktop */}
                <div className="gap-4 hidden justify-center lg:flex">
                    {navigationLinks.map((link) => (
                        <NavLink 
                            key={link.path} 
                            to={link.path}
                            className={({ isActive }) => `text-lg transition-all ${isActive ? "font-bold" : ""}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="gap-3 hidden lg:flex">
                    <Button
                        variant="secondary"
                        size="md"
                        onClick={() => console.log("Iniciar")}
                    >
                        Ingresar
                    </Button>
                    <Button
                        variant="primary"
                        size="md"
                        onClick={() => console.log("Registro")}
                    >
                        Registrarse
                    </Button>
                </div>


                {/* ? Mobile */}
                <div className="w-7 h-7 lg:hidden">
                    <button onClick={() => setIsModalOpen(!isModalOpen)}>
                        <img src={menu} alt="Menu" />
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-dark-gray bg-opacity-50 flex flex-col items-center justify-center z-50">
                    <button onClick={() => setIsModalOpen(!isModalOpen)} className="absolute top-5 right-5 text-white text-2xl font-bold">X</button>
                    <nav className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-sm">
                        {navigationLinks.map((link) => (
                            <NavLink 
                                key={link.path} 
                                to={link.path}
                                onClick={() => setIsModalOpen(!isModalOpen)}
                                className={({ isActive }) => `text-lg transition-all ${isActive ? "font-bold" : ""}`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}

        </>
    );
}
