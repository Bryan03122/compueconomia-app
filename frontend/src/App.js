import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/">
            <h1 className="compu">Compu</h1>
            <h1 className="economia">economía</h1>
          </a>
        </div>
        <div>
          <a href="/cart">
            <button>CARRITO</button>
          </a>
          <a href="/signin">
            <button>INGRESAR</button>
          </a>

        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map((product) => (
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                  <img className="medium" src={product.image} alt={product.name} />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="price">
                    {'$'}{product.price}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </main>
      <footer className="row center">
        Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
