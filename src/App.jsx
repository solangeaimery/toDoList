import { useState } from "react"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { Box } from '@chakra-ui/react'


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


  const handleItemList = (id) => {
    const newArray = list.map(obj => {
      if (obj.id === id) {
        obj.state = !obj.state
      }
      return obj;
    })
    setList(newArray)
    localStorage.setItem("list", JSON.stringify(newArray))
  }

  const handleEdit = (id, value) => {
    const newArray = list.map(obj => {
      if (obj.id === id) {
        obj.name = value
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
      <Box backgroundImage={{ base: "url('/backgroundMobile.jpeg')", md: "url('/background.jpeg')" }}
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        width="100vw">
        <Header handleList={handleList} handleFilters={handleFilters} alert={alert} />
        {list.length !== 0 && list.map(item => <List key={item.id} item={item} handleItemList={handleItemList} handleDeletTask={handleDeletTask} handleEdit={handleEdit} />)}
      </Box>
    </>
  )
}

export default App
