import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Product } from "@/types";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import ProductCart from "./ProductCart";

interface Props {
    products: Product[]
}
export default function ProductList ({products}: Props) {
    return (
        <>
            <Box>
                <MaxWidthWrapper>
                    <Heading>Products</Heading>
                    <Box
                        
                    >
                    <Grid 
                        templateColumns={{base: "repeat(1, 1fr)", 
                        lg: "repeat(3, 1fr)"}} 
                        gap={6}
                    >
                        {
                            products.map(product => (
                                <GridItem>
                                        <ProductCart
                                            key={product.id}
                                            product={product}
                                        />
                                        </GridItem>
                                        ))
                                    }
                    </Grid>
                    </Box>
                </MaxWidthWrapper>
            </Box>
        </>
    )
}