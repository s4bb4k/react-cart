import { useEffect, useState } from "react";
import { getProductos } from "../services/productosService";
import { CatalogoItem } from "./CatalogoItem";

export const CatalogoView = ({ handler }) => {

    const[productos, setProductos] = useState([]);
    useEffect(
        () => {
            setProductos(getProductos());
        }, []);

    return(
        <>
            <div className="row">
                {productos.map(prod => (
                    <div className="col-4 my-2" key={prod.id}>
                       <CatalogoItem 
                            handler = { handler }
                            id = {prod.id}
                            name={prod.name} 
                            description={prod.description} 
                            price={prod.price} />
                    </div>
                ))}
            </div>
        </>
    )
}