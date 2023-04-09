import { useState } from "react"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { Box, Flex, Image, Text } from '@chakra-ui/react'


function App() {

  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")) || [])
  const [alert, setAlert] = useState(false)
  const [selectValue, setSelectValue] = useState("all")

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
    const newArray = (JSON.parse(localStorage.getItem("list"))).map(obj => {
      if (obj.id === id) {
        obj.state = !obj.state
      }
      return obj;
    })
    setList(newArray)
    localStorage.setItem("list", JSON.stringify(newArray))
  }

  const handleEdit = (id, value) => {
    const newArray = (JSON.parse(localStorage.getItem("list"))).map(obj => {
      if (obj.id === id) {
        obj.name = value
      }
      return obj;
    })
    setList(newArray)
    handleFilters(value)
    localStorage.setItem("list", JSON.stringify(newArray))
  }

  const handleDeletTask = (idTaskDeleted) => {
    const listFilter = (JSON.parse(localStorage.getItem("list"))).filter(obj => {
      return obj.id !== idTaskDeleted
    })
    setList(listFilter)
    localStorage.setItem("list", JSON.stringify(listFilter))
  }

  const handleFilters = (value, array = JSON.parse(localStorage.getItem("list"))) => {
    let arrFilter = array
    if (value === "all" && arrFilter) {
      return arrFilter
    }
    if (value === "complete" && arrFilter) {
      return arrFilter.filter(obj => obj.state === true)
    }
    if (value === "incomplete" && arrFilter) {
      return  arrFilter.filter(obj => obj.state === false)
    }
  }

  return (
    <>
      <Box backgroundImage={{ base: "url('/backgroundMobile.jpeg')", md: "url('/background.jpeg')" }}
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        width="100vw">
        <Header handleList={handleList} handleFilters={handleFilters} alert={alert} setList={setList} selectValue={selectValue} setSelectValue={setSelectValue}/>
        {list.length !== 0 ? handleFilters(selectValue, list).map(item => <List key={item.id} item={item} handleItemList={handleItemList} handleDeletTask={handleDeletTask} handleEdit={handleEdit} />) :
          <Flex justifyContent="center">
            <Flex backgroundColor="white" flexDirection="column" alignItems="center" justifyContent="center"
              textAlign="center" p="20px" m="10px" boxShadow='md' borderColor='#B8B5A4' border="1px" borderRadius="5px">
              <Image src='/cositos.jpeg' alt='kodama' w={{ base: '25vh', md: "15vw" }} />
              <Text fontSize="12px" >You have no task! <br /> try adding one or changing the filters...</Text>
            </Flex>
          </Flex>}
      </Box>
    </>
  )
}
"15vw"
export default App
