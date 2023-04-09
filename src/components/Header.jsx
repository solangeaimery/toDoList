import { Heading, Input, Select, Box, Button, Alert, AlertIcon, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import "./styles.css"

export const Header = ({ handleList, handleFilters, alert, setList, setSelectValue, selectValue}) => {

    const [itemList, setItemList] = useState("")

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
        setList(handleFilters(value))
    }

    return (
        <header>
            <Heading as='h1' size='4xl' noOfLines={1} p="50px" textAlign="center" >To do List</Heading>
            <Box display="flex" alignItems="center" justifyContent="center" gap={{ base: '15px', md: '50px'}} flexDirection={{ base: 'column', md: 'row'}}> 
                <Input maxLength='25' boxShadow='lg' w={{ base: '20rem', md: "25rem"}} m="20px" placeholder='Enter task' border='2px'
                    borderColor='#B8B5A4' backgroundColor="white" value={itemList} onChange={(e) => handleItemList(e)} />
                <Select boxShadow='lg' w={{ base: '20rem', md: "25rem"}} m="20px" placeholder='Select option' border='2px'
                    borderColor='#B8B5A4' backgroundColor="white" value={selectValue} onChange={(e) => handleChange(e)}>
                    <option value='all'>All</option>
                    <option value='complete'>Complete</option>
                    <option value='incomplete'>Incomplete</option>
                </Select>
            </Box>
            {alert && <Flex justifyContent="center">
                <Alert status='error' w="25rem" ml="20px">
                    <AlertIcon />
                    Oooops, please enter a Task!
                </Alert>
            </Flex>}
            <Box display="flex" alignItems="center" justifyContent="center">
                <Button boxShadow='lg' _hover={{ backgroundColor: '#6E6D5A' }} m="20px" backgroundColor="#3D423A" border='2px'
                    borderColor='#B8B5A4' color="white" w="15rem" onClick={handleButton}> Send </Button>
            </Box>
        </header>
    )
}


