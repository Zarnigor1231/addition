import React from 'react'
import TodoItem from './TodoItem'


let arr = []

function TodoModal() {
  const [ btn , setBtn ] = React.useState(false)
  const [ valueInp , setValueInp ] = React.useState("")
  const [ valueSearch , setValueSearch ] = React.useState("")
  const [ search , setSearch ] = React.useState(false)
  const [ arrSearchInp , setArrSearch ] = React.useState([])
  

  const addBtn = () => {
    setBtn(!btn)
  }

  const AddPerson = (e) => {
    e.preventDefault();
    if(valueInp){
      arr.push({ id:(arr.at(-1)?.id+1 || 1) ,name:valueInp})
    }
    setBtn(!btn)
    setValueInp("")
  }
  const Change = (value) => {
    setValueInp(value)
  }

  const searchValue = (value) => {
    setValueSearch(value)
    console.log(search)
   
  }

  const SearchBtn = (e) => {
    e.preventDefault();
    const arrSearch = arr.filter((item) => item.name.toLowerCase() === valueSearch.toLowerCase())
    setArrSearch([...arrSearch])
    setSearch(!search)
  }

  return (
    <div>
          <div className='flex justify-between content-center'>
              <div className='w-50 ml-40'>
              <form>
                  <input onChange={(e) => searchValue(e.target.value)} className='p-3 rounded-sm w-2/4 bg-slate-300' type="text" placeholder='Search' />
                  <button onClick={SearchBtn} className='bg-cyan-700 p-3 rounded-sm text-white px-3 bg-opacity-80'>Send</button>
              </form>
                <TodoItem arr = {arr} arrSearchInp = {arrSearchInp} search = {search}  />
              </div>
              <div className='w-50'>
              <button onClick={addBtn} className='bg-cyan-700 p-3 rounded-sm text-white px-5 mb-3 bg-opacity-80 w-2/4' >Add user</button>
                <form className='absolute mr-5'>
                    <div className={!btn ? 'hidden' : 'bg-slate-400 text-center p-3 bg-opacity-40  w-full flex'}>
                          <input onChange={(e) => Change(e.target.value)} className='p-2 rounded-sm w-5/6' type="text"  placeholder='FirstName'/>
                          <button onClick={AddPerson} className='bg-cyan-700 p-2 rounded-sm text-white px-3 w-50 bg-opacity-80'>Send</button> 
                    </div>
                </form>
              </div>
          </div>
    </div>
  )
}

export default TodoModal