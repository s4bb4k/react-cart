import { Navigate, Route, Routes } from "react-router-dom"
import { CartView } from "../componentes/CartView"
import { CatalogoView } from "../componentes/CatalogoView"

export const CartRoutes = ({ handlerAddProductCart, cartItems, handlerDeleteProductCart }) => {
    return(
        <>
            <Routes>
                    <Route
                        path="catalog" 
                        element={ <CatalogoView handler = { handlerAddProductCart }/> }
                    />
                    <Route 
                        path="cart" element={( 
                                cartItems?.length <= 0 ?
                                <div className="alert alert-warning"> El carro de compras esta vacio </div>
                                 :
                                (
                                    <div className="my-4 w-50">
                                        <CartView items={ cartItems } handler = { handlerDeleteProductCart }/>
                                    </div>
                                )
                        )}  
                    />
                    <Route 
                        path="/" 
                        element = { <Navigate to={ '/catalog' } /> }
                    />
                    
                </Routes>
        </>
    )
}