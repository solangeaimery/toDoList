import { useState } from "react"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { Box } from '@chakra-ui/react'

function App() {

  const [list, setList] = useState(
    localStorage.getItem("list") && JSON.parse(localStorage.getItem("list") ) || []
  )

  const handleList = (value) => {
    const itemList = [...list, {
      id: self.crypto.randomUUID(),
      name: value,
      state: false
    }]

    setList(itemList)
    localStorage.setItem("list", JSON.stringify(itemList))
  }

  return (
    <>
      <Box bg='white'>
        <Header handleList={handleList} />
        {list.length !== 0 && list.map(item => <List key={item.id} item={item} />)}
      </Box>
    </>
  )
}

export default App
