import { Box, Text } from "@chakra-ui/react";
import React from "react";
import {DeleteIcon} from "@chakra-ui/icons"
import { Product } from "@/types";
import { useCartStore } from "@/store/useCartStore";

interface Props {
    product: Product
}

function CartItem({product}: Props) {
    const removeFromCart = useCartStore(state => state.removeFromCart)
    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="xl"
                p="10px"
            >
                <Box>
                    <Text>{product.title}</Text>
                    <Text>${product.price}</Text>
                    <Text>quantity: {product.quantity}</Text>
                </Box>
                <Box>
                    <DeleteIcon
                        color="red"
                        cursor="pointer"
                        onClick={() => removeFromCart(product)}
                    />
                </Box>
            </Box>
        </>
    )
}
export default CartItem;