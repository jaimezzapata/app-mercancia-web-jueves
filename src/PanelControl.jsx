import imgUser from './assets/user.jpg'

function PanelControl() {
  return (
    <section className="panel-control">
      <aside className="panel-control-aside">
        <div>
          <img src={imgUser} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </nav>
      </aside>
      <div className="panel-control-contenido">
        <section className="panel-control-card">
          <div></div>
          <div>
            <p>Ver</p>
          </div>
        </section>
        <section className="panel-control-card">
          <div></div>
          <div>
            <p>Ver</p>
          </div>
        </section>
        <section className="panel-control-card">
          <div></div>
          <div>
            <p>Ver</p>
          </div>
        </section>
      </div>
    </section>
  )
}

export default PanelControl