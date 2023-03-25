import { useState } from "react"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { Box } from '@chakra-ui/react'

//El filter no esta funcionando correctamente, no logro que el array se resetee correctamente y no entiendo porque. queda pendiente
function App() {

  const [list, setList] = useState(localStorage.getItem("list") && JSON.parse(localStorage.getItem("list")) || [])

  const handleList = (value) => {
    const itemList = [...list, {
      id: self.crypto.randomUUID(),
      name: value,
      state: false
    }]

    setList(itemList)
    localStorage.setItem("list", JSON.stringify(itemList))
  }


  const itemListCheck = (id, name) => {
    return {
      id: id,
      name: name,
      state: true,
    }
  }

  const handleItemList = (id, name, state) => {
    const newArray = list.map(obj => {
      if (obj.id === id) {
        return itemListCheck(id, name)
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

  const resetList = () => {
    const resetList = localStorage.getItem("list") && JSON.parse(localStorage.getItem("list"))
    setList(resetList)
  }

  const handleFilters = (value) => {
    resetList()
    if (value === "complete") {
      resetList()
      const filterList = list.filter(obj => obj.state === true)
      console.log(filterList)
      setList(filterList)

    }
    if (value === "incomplete") {
      resetList()
      const filterList = list.filter(obj => obj.state === false)
      console.log(filterList)
      setList(filterList)
    }
  }

  return (
    <>
      <Box backgroundImage="url(`./assets/background.jpeg`)">
        <Header handleList={handleList} handleFilters={handleFilters} resetList={resetList} />
        {list.length !== 0 && list.map(item => <List key={item.id} item={item} handleItemList={handleItemList} handleDeletTask={handleDeletTask} />)}
      </Box>
    </>
  )
}

export default App
