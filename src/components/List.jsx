import { Box, Container, IconButton, Button, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverCloseButton, PopoverArrow, PopoverBody, PopoverFooter, useDisclosure, Portal } from '@chakra-ui/react'
import { DeleteIcon, EditIcon, CheckIcon } from '@chakra-ui/icons'

export const List = ({ item, handleItemList, handleDeletTask }) => {

    const { isOpen, onToggle, onClose } = useDisclosure()


    return (
        <Box display="flex" alignItems="center" justifyContent="center" gap="50px">
            <Box bg='pink' p="10px" w="fit-content" minW="20rem" display="flex" flexDir="row" borderRadius="7px" m="5px" justifyContent="spaceBetween">
                <Container textDecoration={item.state && 'line-through'} >{item.name}</Container>
                <Box display="flex" flexDir="row" gap="10px">
                    <IconButton aria-label='Search database' colorScheme={item.state ? "blackAlpha" : "teal"} icon={<CheckIcon />} onClick={() => handleItemList(item.id)} />
                    <IconButton aria-label='Search database' colorScheme="teal" icon={<EditIcon />} />
                    <Popover>
                        <PopoverTrigger>
                            <IconButton aria-label='Search database' colorScheme="teal" icon={<DeleteIcon />} onClick={() => isOpen}
                            />
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent p="10px">
                                <PopoverArrow />
                                <PopoverHeader>Esta seguro de que quiere eliminar esta task?</PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody>
                                    <Button colorScheme='red' onClick={() => handleDeletTask(item.id)}>Confirm</Button>
                                </PopoverBody>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                </Box>
            </Box>

        </Box>
    )
}


