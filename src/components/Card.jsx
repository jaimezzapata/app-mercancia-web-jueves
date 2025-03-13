function Card({ children }) {
  return (
    <section className="panel-control-card">
      <div>
        <p>Origen: {children.origen}</p>
        <p>Destino: {children.destino}</p>
        <p>Descripcion: {children.pedido}</p>
        <p>Precio: {children.precio}</p>
        <p>Peso: {children.peso}</p>
      </div>
      <div>
        <p>Ver 1: </p>
        <p>Ver 1: </p>
      </div>
    </section>
  )
}
export default Card