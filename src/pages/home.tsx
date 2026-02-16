import { useEffect } from "react";

export const Home = () => {
    
    useEffect(() => {
        console.log('Llamado al servicio de traer información de algunas casas');
    }, []);
    
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Home
            </h1>        
        </>
    );
}