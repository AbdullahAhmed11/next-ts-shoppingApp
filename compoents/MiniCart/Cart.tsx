import { Box } from "@chakra-ui/react";
import React from "react";
import CartItem from "./CartItem";
import { useCartStore } from "@/store/useCartStore";
import useFromStore from "@/hooks/useFromStore";

function Cart() {
    const cart = useFromStore(useCartStore, state => state.cart)
    return (
        <>
            <Box>
                {
                    cart?.map(product => (
                        <Box
                            mb="20px"
                        >
                            <CartItem key={product.id} product={product}/>
                        </Box>

                    ))
                }
            </Box>
        </>
    )
}
export default Cart;