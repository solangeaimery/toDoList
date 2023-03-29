import { Box, Container, IconButton, Button, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverCloseButton, PopoverArrow, PopoverBody, PopoverFooter, useDisclosure, Portal } from '@chakra-ui/react'
import { DeleteIcon, EditIcon, CheckIcon } from '@chakra-ui/icons'

export const List = ({ item, handleItemList, handleDeletTask }) => {

    const { isOpen, onToggle, onClose } = useDisclosure()


    return (
        <Box display="flex" alignItems="center" justifyContent="center" gap="50px">
            <Box bg='white' p="10px" w="fit-content" minW="20rem" display="flex" flexDir="row" borderRadius="7px" m="5px" 
            justifyContent="spaceBetween" borderWidth='2px' borderColor='#B8B5A4'>
                <Container textDecoration={item.state && 'line-through'} >{item.name}</Container>
                <Box display="flex" flexDir="row" gap="10px">
                    <IconButton aria-label='Search database' colorScheme={item.state ? "blackAlpha" : "teal"} icon={<CheckIcon />} onClick={() => handleItemList(item.id)} />
                    <IconButton aria-label='Search database' colorScheme="teal" icon={<EditIcon />} />
                    <Popover>
                        <PopoverTrigger>
                            <IconButton aria-label='Search database' backgroundColor="#3D413C" color="white" 
                            _hover={{ backgroundColor: '#6E6D5A' }}  icon={<DeleteIcon />} onClick={() => isOpen}
                            />
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent p="20px" backgroundImage="url('./hollines.png')" backgroundPosition="right 0 bottom -15px"
                                bgSize="60%" backgroundRepeat="no-repeat" >
                                <PopoverArrow />
                                <PopoverHeader color="red">Esta seguro de que quiere eliminar esta task?</PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody>
                                    <Button boxShadow='md'_hover={{ backgroundColor: '#6E6D5A' }} backgroundColor="#3D423A" border='2px'
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


