import { useState } from 'react'
import TaskCard from './TaskCard'
import { tasks } from '../data/tasks'

function FilterBar() {
  var [busqueda, setBusqueda] = useState('')
  var [estado, setEstado] = useState('')

  var estados = []
  for (var i = 0; i < tasks.length; i++) {
    var yaEsta = false
    for (var j = 0; j < estados.length; j++) {
      if (estados[j] == tasks[i].estado) {
        yaEsta = true
      }
    }
    if (!yaEsta) {
      estados.push(tasks[i].estado)
    }
  }

  var filtradas = []
  for (var k = 0; k < tasks.length; k++) {
    var t = tasks[k]
    var ok = true

    if (busqueda != '') {
      var texto = ''
      for (var campo in t) {
        texto = texto + ' ' + t[campo]
      }
      if (texto.toLowerCase().indexOf(busqueda.toLowerCase()) == -1) {
        ok = false
      }
    }

    if (estado != '' && t.estado != estado) {
      ok = false
    }

    if (ok) {
      filtradas.push(t)
    }
  }

  var inputClass =
    'w-full border-2 border-[#b8b4bc] bg-white px-3 py-2 text-sm text-[#08060d] outline-none dark:border-[#444] dark:bg-[#1c1d24] dark:text-[#f3f4f6]'

  return (
    <div>
      <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#6b6375] dark:text-[#9ca3af]">
            Buscar
          </label>
          <input
            className={inputClass}
            value={busqueda}
            placeholder="Materia, docente, fecha..."
            onChange={function (e) {
              setBusqueda(e.target.value)
            }}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#6b6375] dark:text-[#9ca3af]">
            Estado
          </label>
          <select
            className={inputClass}
            value={estado}
            onChange={function (e) {
              setEstado(e.target.value)
            }}
          >
            <option value="">Todos</option>
            {estados.map(function (op) {
              return (
                <option key={op} value={op}>
                  {op}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      {filtradas.length == 0 ? (
        <p className="border-2 border-dashed border-[#b8b4bc] px-4 py-6 text-sm dark:border-[#444]">
          No hay tareas con esos filtros.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
          {filtradas.map(function (task) {
            return <TaskCard key={task.id} {...task} />
          })}
        </div>
      )}
    </div>
  )
}

export default FilterBar
