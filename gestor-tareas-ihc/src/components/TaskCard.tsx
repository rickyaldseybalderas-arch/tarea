function TaskCard(props: any) {
  var datos = props
  var nombreMateria = datos['materia']
  var profe = datos.docente
  var cuando = datos.fecha
  var comoVa = datos.estado

  var claseEstado =
    'shrink-0 border px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wide'

  if (comoVa == 'Pendiente') {
    claseEstado = claseEstado + ' text-[#8a6500] border-[#8a6500]'
  } else {
    if (comoVa == 'En progreso') {
      claseEstado = claseEstado + ' text-[#0d5a7a] border-[#0d5a7a]'
    } else {
      claseEstado = claseEstado + ' text-[#1a5c38] border-[#1a5c38]'
    }
  }

  return (
    <div className="border-2 border-[#b8b4bc] border-l-[5px] border-l-[#888] bg-[#faf9f7] px-4 py-3.5 text-left shadow-[3px_3px_0_#ddd] dark:border-[#444] dark:border-l-[#777] dark:bg-[#1c1d24] dark:shadow-[3px_3px_0_#0d0e12]">
      <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
        <h3 className="m-0 text-[17px] leading-tight font-semibold text-[#08060d] dark:text-[#f3f4f6]">
          {nombreMateria}
        </h3>
        <span className={claseEstado}>{comoVa}</span>
      </div>
      <p className="text-[15px] leading-snug text-[#6b6375] dark:text-[#9ca3af]">
        <strong className="text-[#08060d] dark:text-[#f3f4f6]">{'Docente:'}</strong>
        {' ' + profe}
      </p>
      <p className="mt-1 text-[15px] leading-snug text-[#6b6375] dark:text-[#9ca3af]">
        <strong className="text-[#08060d] dark:text-[#f3f4f6]">{'Fecha:'}</strong>
        {' ' + cuando}
      </p>
    </div>
  )
}

export default TaskCard
