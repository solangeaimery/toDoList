import { Box , Container, IconButton} from '@chakra-ui/react'
import { DeleteIcon, EditIcon, CheckIcon } from '@chakra-ui/icons'

export const List = ({ item, handleItemList, handleDeletTask }) => {



    return (
        <Box display="flex" alignItems="center" justifyContent="center" gap="50px">
            <Box bg='pink' p="10px" w="fit-content" minW="20rem" display="flex" flexDir="row" borderRadius="7px" m="5px" justifyContent="spaceBetween">
                <Container textDecoration={item.state && 'line-through' } >{item.name}</Container> 
                <Box display="flex" flexDir="row" gap="10px">
                <IconButton aria-label='Search database'colorScheme={item.state ? "blackAlpha" : "teal"} icon={<CheckIcon/>} onClick={() => handleItemList(item.id, item.name)}/>
                <IconButton aria-label='Search database' colorScheme="teal" icon={<EditIcon/>} />
                <IconButton aria-label='Search database' colorScheme="teal" icon={<DeleteIcon/>} onClick={() => handleDeletTask(item.id)} />
                </Box>
            </Box>
        </Box>
    )
}


