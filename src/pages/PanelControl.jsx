import Contenido from "../components/Contenido"
import MenuLateral from "../components/MenuLateral"

function PanelControl() {
  return (
    <section className="panel-control">
      <MenuLateral />
      <Contenido />
    </section>
  )
}

export default PanelControl