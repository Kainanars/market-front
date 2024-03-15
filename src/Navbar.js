import { Box, Flex, Link, Spacer, VStack } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Flex bg="blue.500" p="4" align="center">
            <Box>
                <Link href="/" color="white" fontWeight="bold" fontSize="xl">Produtos</Link>
            </Box>
            <Spacer />
            <VStack spacing="4" direction="row">
                <Link href="/add" color="white" fontWeight="bold" fontSize="xl">Cadastrar</Link>
            </VStack>
        </Flex>
    );
};

export default Navbar;
