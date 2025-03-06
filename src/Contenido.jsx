import Card from "./Card"
import { envios } from "./api/database"
function Contenido() {
  return (
    <div className="panel-control-contenido">
      {
        envios.map((envio) => {
          return <Card children={envio} />
        })
      }
    </div>
  )
}
export default Contenido