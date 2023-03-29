import { useState } from "react"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { Box } from '@chakra-ui/react'


//El filter no esta funcionando correctamente, no logro que el array se resetee correctamente y no entiendo porque. queda pendiente

//el boton del check no me deja deschekearlo, no se como hacerlo, pedir help

function App() {

  const [list, setList] = useState(localStorage.getItem("list") && JSON.parse(localStorage.getItem("list")) || [])
  const [alert, setAlert] = useState(false)

  const handleList = (value) => {
    setAlert(false)
    if (value === "") {
      return setAlert(true)
    }
    const itemList = [...list, {
      id: self.crypto.randomUUID(),
      name: value,
      state: false
    }]

    setList(itemList)
    localStorage.setItem("list", JSON.stringify(itemList))
  }

  // const itemListCheck = (id, name, state) => {
  //   return {
  //     id,
  //     name,
  //     state,
  //   }
  // }

  const handleItemList = (id) => {
    const newArray = list.map(obj => {
      if (obj.id === id) {
        obj.state = !obj.state
        // return itemListCheck(id, name, !state)
      }
      return obj;
    })
    setList(newArray)
    localStorage.setItem("list", JSON.stringify(newArray))
  }

  const handleDeletTask = (idTaskDeleted) => {
    const listFilter = list.filter(obj => {
      return obj.id !== idTaskDeleted
    })
    setList(listFilter)
    localStorage.setItem("list", JSON.stringify(listFilter))
  }

  const handleFilters = (value) => {
    let arrFilter = JSON.parse(localStorage.getItem("list"))
    if (value === "all") {
      setList(arrFilter)
    }
    if (value === "complete") {
      const filterList = arrFilter.filter(obj => obj.state === true)
      setList(filterList)

    }
    if (value === "incomplete") {
      const filterList = arrFilter.filter(obj => obj.state === false)
      setList(filterList)
    }
  }

  return (
    <>
      <Box backgroundImage="url('/background.jpeg')" backgroundPosition="center"
        backgroundRepeat="no-repeat" h="100%" m="0" bgSize="cover" minHeight="100vh">
        <Header handleList={handleList} handleFilters={handleFilters} alert={alert}/>
        {list.length !== 0 && list.map(item => <List key={item.id} item={item} handleItemList={handleItemList} handleDeletTask={handleDeletTask} />)}
      </Box>
    </>
  )
}

export default App
