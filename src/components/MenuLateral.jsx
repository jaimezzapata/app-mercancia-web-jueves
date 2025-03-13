import imgUser from '../assets/user.jpg'
import { Link } from 'react-router-dom'
function MenuLateral() {
  return (
    <aside className="panel-control-aside">
      <div>
        <img src={imgUser} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/envios">Envios</Link></li>
          <li><Link to="/clientes">Clientes</Link></li>
          <li><Link to="/cerrar">Cerrar Sesión</Link></li>
        </ul>
      </nav>
    </aside>
  )
}
export default MenuLateral