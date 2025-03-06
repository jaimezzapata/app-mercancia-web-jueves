import Contenido from "./Contenido"
import MenuLateral from "./MenuLateral"

function PanelControl() {
  return (
    <section className="panel-control">
      <MenuLateral />
      <Contenido />
    </section>
  )
}

export default PanelControl