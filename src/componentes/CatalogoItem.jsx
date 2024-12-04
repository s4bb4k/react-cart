import { useNavigate } from "react-router-dom";

export const CatalogoItem = ({handler, id, name, description, price}) => {

  const navigate = useNavigate();

  const addProduct = (producto) => {
      console.log(producto);
      handler(producto);
      navigate('/cart');
  }
  
  return (
    <>
         <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ name }</h5>
                <p className="card-text">{ description }</p>
                <p className="card-text">$ { price }</p>
                <button className="btn btn-primary" onClick={() => {
                  addProduct({id, name, description, price})
                }}>Agregar</button>
            </div>
        </div>
    </>
  )
}
