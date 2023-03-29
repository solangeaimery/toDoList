import { Heading, Input, Select, Box, Button, Alert, AlertIcon, Flex } from '@chakra-ui/react'
import { useState } from 'react'

export const Header = ({ handleList, handleFilters, alert}) => {

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
        const value = e.target.value
        setSelectValue(value)
        handleFilters(value)
    }

    return (
        <header>
            <Heading as='h2' size='3xl' noOfLines={1} p="50px" textAlign="center" >To do List</Heading>
            <Box display="flex" alignItems="center" justifyContent="center" gap="50px">
                    <Input maxLength='25' boxShadow='lg' w="25rem" m="20px" placeholder='Enter task' border='2px'
                        borderColor='#B8B5A4' backgroundColor="white" value={itemList} onChange={(e) => handleItemList(e)} />
                <Select boxShadow='lg' w="25rem" m="20px" placeholder='Select option' border='2px'
                    borderColor='#B8B5A4' backgroundColor="white" value={selectValue} onChange={(e) => handleChange(e)}>
                    <option value='all'>All</option>
                    <option value='complete'>Complete</option>
                    <option value='incomplete'>Incomplete</option>
                </Select>
            </Box>
            {alert && <Flex justifyContent="center">
            <Alert status='error' w="25rem" ml="20px">
                        <AlertIcon />
                        Oooops, plese enter a Task!
                    </Alert>
            </Flex>}
            <Box display="flex" alignItems="center" justifyContent="center">
                <Button boxShadow='lg' _hover={{ backgroundColor: '#6E6D5A' }} m="20px" backgroundColor="#3D423A" border='2px'
                    borderColor='#B8B5A4' color="white" w="15rem" onClick={handleButton}> Send </Button>
            </Box>
        </header>
    )
}


