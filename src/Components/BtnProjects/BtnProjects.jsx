import React from 'react'


const BtnProjects = ({ seletcCategori }) => {


  const btnTechno = [{ id: 0, name: 'All' }, { id: 1, name: 'React' }, { id: 2, name: 'Mongodb' }, { id: 3, name: 'API' }, { id: 4, name: 'Js' }]

  function btnActive(id) {
    const botones = document.getElementsByClassName('boton')
    for (let i = 0; i < botones.length; i++) {

      botones[i].classList.remove('bg-blue-300')
    }
    botones[id].classList.toggle('bg-blue-300')
  }

  return (
    <div className='flex  gap-2 hover:cursor-pointer' >
      <div className='flex gap-4 flex-wrap justify-center' role="group">
        {btnTechno.map((datos) => {
          return (
            <button onClick={() => { seletcCategori(datos.name); btnActive(datos.id) }} id={datos.id} type="button" className='boton rounded-xl h-[2rem] w-[5rem] bg-blue-300  text-white border-white border-2' key={datos.id}>
              <span>{datos.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default BtnProjects