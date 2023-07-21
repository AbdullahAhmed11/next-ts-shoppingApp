import { Product } from "@/types";
import { Box, Grid, GridItem, Heading, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useCartStore } from "@/store/useCartStore";
interface Props {
    product: Product;
}

export default function ProductCart({product}: Props) {

    const addToCart = useCartStore(state => state.addToCart)

        return (
            <>
            <Box
                width="300px"
                height="320px"
                // border="1px solid #000"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="Center"
                boxShadow="xl"
                margin="auto"
            >
                <Box
                    width="250px"
                    height="100px"
                >
                        <Image src={product.images[0]} width="100%" height="100%"  />
                </Box>
                <Box>
                    <Text fontWeight="bold">{product.title}</Text>
                </Box>
                <Box>
                    <Text fontSize="15px" p="10px">{product.description}</Text>
                </Box>
                <Box
                >
                    <Text>${product.price}</Text>
                </Box>
                <Box
                >
                    <Button colorScheme='blue' onClick={() => addToCart(product)}>Add To Cart</Button>
                </Box>

            </Box>
            
            </>
        )
}