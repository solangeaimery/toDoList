import { Box, Container, IconButton, Button, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverCloseButton, PopoverArrow, PopoverBody, useDisclosure, Portal, Input, Flex } from '@chakra-ui/react'
import { DeleteIcon, EditIcon, CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react'

export const List = ({ item, handleItemList, handleDeletTask, handleEdit }) => {

    const {
        isOpen: isOpenEditPopover,
        onOpen: onOpenEditPopover,
        onClose: onCloseEditPopover
    } = useDisclosure();
    const [edit, setEdit] = useState(item.name)

    const handlePopover = () => {
        handleEdit(item.id, edit)
    }

    return (
        <Box display="flex" alignItems="center" justifyContent="center" gap="50px">
            <Box bg='white' p="10px" w="fit-content" minW="20rem" display="flex" flexDir="row" borderRadius="7px" m="5px"
                justifyContent="spaceBetween" borderWidth='2px' borderColor='#B8B5A4'>
                <Container textDecoration={item.state && 'line-through'} >{item.name}</Container>
                <Box display="flex" flexDir="row" gap="10px">
                    <IconButton aria-label='Search database' colorScheme={item.state ? "blackAlpha" : "teal"} icon={<CheckIcon />} onClick={() => handleItemList(item.id)} />
                    <Popover isOpen={isOpenEditPopover} onClose={onCloseEditPopover}>
                        <PopoverTrigger>
                            <IconButton aria-label='Search database' colorScheme="teal" icon={<EditIcon />} onClick={onOpenEditPopover}/>
                        </PopoverTrigger>
                        <PopoverContent backgroundImage="url('./hollinesTrabajando.png')" backgroundPosition="left 0 bottom 5px"
                                bgSize="40%" backgroundRepeat="no-repeat">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Edit Task</PopoverHeader>
                            <Input borderColor='#B8B5A4' maxLength='25' w="fitContent" m="20px" value={edit} onChange={(e) => setEdit(e.target.value)} bg="white" />
                            <Flex justifyContent="end">
                                <Button boxShadow='md' _hover={{ backgroundColor: '#6E6D5A' }} backgroundColor="#3D423A" border='2px'
                                    borderColor='#B8B5A4' color="white" w="30%" m="10px" onClick={() => { handlePopover()
                                        onCloseEditPopover() }} > Save</Button>
                            </Flex>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger>
                            <IconButton aria-label='Search database' backgroundColor="#3D413C" color="white"
                                _hover={{ backgroundColor: '#6E6D5A' }} icon={<DeleteIcon />}
                            />
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent p="20px" backgroundImage="url('./hollines.png')" backgroundPosition="right 0 bottom -15px"
                                bgSize="60%" backgroundRepeat="no-repeat" >
                                <PopoverArrow />
                                <PopoverHeader color="red">Are you sure you want to delete this task?</PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody>
                                    <Button boxShadow='md' _hover={{ backgroundColor: '#6E6D5A' }} backgroundColor="#3D423A" border='2px'
                                        borderColor='#B8B5A4' color="white" onClick={() => handleDeletTask(item.id)}>Confirm</Button>
                                </PopoverBody>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                </Box>
            </Box>
        </Box>
    )
}


