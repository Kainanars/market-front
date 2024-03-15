import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Heading, Flex, Button, Grid, GridItem } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://market-4c5n.onrender.com/api/products`)
            .then(
                response => {
                    setProducts(response.data)
                }
            )
            .catch(error => console.error(error));
    }, [products]);

    const handleDelete = (id) => {
        axios.delete(`https://market-4c5n.onrender.com/api/products/${id}`)
            .then(() => {
                setProducts(prevProducts => prevProducts.filter(p => p.id !== id));
            })
            .catch(error => console.error(error));
    };

    const bgColor = useColorModeValue('gray.100', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'gray.200');
    return (
        <Box>
            <Flex justify="center">
                <Heading>Produtos</Heading>
            </Flex>
            <Grid
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                gap={6}
                justifyContent="center"
                padding={4}
            >
                {products.map(product => (
                    <GridItem key={product.Id} maxWidth="90vw">
                        <Box bg={bgColor} p="4" rounded="md" marginBottom="4">
                            <Box marginBottom="2">
                                <Heading size="md" marginBottom={5} color={textColor}>{product.Name}</Heading>
                                <p style={{ color: textColor }}>{product.Description}</p>
                                <p style={{ color: textColor }}>Preço: {product.Price}</p>
                                <p style={{ color: textColor }}>Quantidade: {product.QuantityInStock}</p>
                            </Box>
                            <Flex justify="flex-end">
                                <Button as={Link} to={`/edit/${product.Id}`} colorScheme="blue" mr="2">Edit</Button>
                                <Button onClick={() => handleDelete(product.Id)} colorScheme="red">Delete</Button>
                            </Flex>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductListPage;
