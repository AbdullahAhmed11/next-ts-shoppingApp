import { Box, 
    Text,     
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input } from "@chakra-ui/react";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
// import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCartStore } from "@/store/useCartStore";
import useFromStore from "@/hooks/useFromStore";
import Cart from "../MiniCart/Cart";


function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cart = useFromStore(useCartStore, state => state.cart)

    let total = 0;
    if(cart) {
      total = cart.reduce((acc, product) => acc + product.price * (product.quantity as number),0)
    }
    return (
        <Box
        borderBottom="1px solid #000"
        bg="#000"
        color="#fff"

        >
              <MaxWidthWrapper>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p="10px"
            >
                  <Box>
                      <Text>
                          My-Ecommerce
                      </Text>
                  </Box>
                  <Box>
                      <Box
                        width="20px"
                        height="20px"
                        bg="red"
                        rounded="50%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        ml="40px"
                      >
                        {cart?.length}
                      </Box>
                      <Button 
                        onClick={onOpen}
                      >
                        Cart
                      </Button>
                      <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                      >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader
                fontWeight="bold"
              >Shopping Cart</DrawerHeader>
    
              <DrawerBody>
                  <Cart/>
              </DrawerBody>

              <DrawerBody>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text
                    fontWeight="bold"
                  >Total</Text>
                  <Text>${total}</Text>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
                  </Box>

            </Box>
              </MaxWidthWrapper>
        </Box>
    )
}
export default Header;