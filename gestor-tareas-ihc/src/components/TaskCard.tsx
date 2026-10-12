function TaskCard(props: any) {
  var datos = props
  var nombreMateria = datos['materia']
  var profe = datos.docente
  var cuando = datos.fecha
  var comoVa = datos.estado

  var pedazoEstado = ''
  for (var i = 0; i < comoVa.length; i++) {
    var letra = comoVa[i]
    if (letra === ' ') {
      pedazoEstado = pedazoEstado + '-'
    } else {
      pedazoEstado = pedazoEstado + letra.toLowerCase()
    }
  }

  var claseDelEstado =
    'task-status' + ' ' + 'task-status-' + pedazoEstado

  return (
    <div className={'task-card'}>
      <div className="task-card-heading">
        <h3>{nombreMateria}</h3>
        <span className={claseDelEstado}>{comoVa}</span>
      </div>
      <p>
        <strong>{'Docente:'}</strong> {' ' + profe}
      </p>
      <p>
        <strong>{'Fecha:'}</strong> {' ' + cuando}
      </p>
    </div>
  )
}

export default TaskCard
