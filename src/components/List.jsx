import { Box , Container, IconButton} from '@chakra-ui/react'
import { DeleteIcon, EditIcon, CheckIcon } from '@chakra-ui/icons'

export const List = ({ item }) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" gap="50px">
            <Box bg='pink' p="10px" w="fit-content" minW="20rem" display="flex" flexDir="row" borderRadius="7px" m="5px" justifyContent="spaceBetween">
                <Container textDecoration={item.state && 'line-through' } >{item.name}</Container> 
                <Box display="flex" flexDir="row" gap="10px">
                <IconButton aria-label='Search database' icon={<CheckIcon/>} />
                <IconButton aria-label='Search database' icon={<EditIcon/>} />
                <IconButton aria-label='Search database' icon={<DeleteIcon/>} />
                </Box>
            </Box>
        </Box>
    )
}


