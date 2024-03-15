import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Heading, List, ListItem, Flex, Spacer, Button } from '@chakra-ui/react';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(
                response => {
                    setProducts(response.data)
                    console.log(products)
                }
            )
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/products/${id}`)
            .then(() => {
                setProducts(prevProducts => prevProducts.filter(p => p.id !== id));
            })
            .catch(error => console.error(error));
    };

    return (
        <Box>
            <Flex justify="center">
                <Heading>Products</Heading>
            </Flex>
            <Flex justify="center" flexDirection="row" flexWrap="wrap">
                {products.map(product => (
                    <Box key={product.Id} bg="gray.200" p="4" rounded="md" marginBottom="4" marginTop="10" marginRight="10">
                        <Box marginBottom="2">
                            <Heading size="md" marginBottom={5}>{product.Name}</Heading>
                            <p>{product.Description}</p>
                            <p>Preço: {product.Price}</p>
                            <p>Quantidade: {product.QuantityInStock}</p>
                        </Box>
                        <Flex justify="flex-end">
                            <Button as={Link} to={`/edit/${product.Id}`} colorScheme="blue" mr="2">Edit</Button>
                            <Button onClick={() => handleDelete(product.Id)} colorScheme="red">Delete</Button>
                        </Flex>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default ProductListPage;
