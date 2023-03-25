import { Heading, Input, Select, Box, Button } from '@chakra-ui/react'
import { useState } from 'react'

export const Header = ({ handleList, handleFilters , resetList}) => {

    const [itemList, setItemList] = useState("")
    const [selectValue, setSelectValue] = useState("")

    const handleItemList = (e) => {
        setItemList(e.target.value)
    }

    const handleButton = () => {
        setItemList("")
        handleList(itemList)
    }

    const handleChange = (e) => {
        resetList()
        const value = e.target.value
        setSelectValue(value)
        handleFilters(value)
    }

    return (
        <header>
            <Heading as='h2' size='3xl' noOfLines={1} m="50px" textAlign="center" >To do List</Heading>
            <Box display="flex" alignItems="center" justifyContent="center" gap="50px">
                <Input maxLength='25' boxShadow='md' w="25rem" m="20px" placeholder='Enter task' value={itemList} onChange={(e) => handleItemList(e)} />
                <Select boxShadow='md' w="25rem" m="20px" placeholder='Select option' value={selectValue} onChange={(e) => handleChange(e)}>
                    <option value='all'>All</option>
                    <option value='complete'>Complete</option>
                    <option value='incomplete'>Incomplete</option>
                </Select>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Button boxShadow='md' m="20px" colorScheme='pink' variant='outline' w="15rem" onClick={handleButton}> Send </Button>
            </Box>
        </header>
    )
}


