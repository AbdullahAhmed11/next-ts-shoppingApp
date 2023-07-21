import React, {useEffect} from "react";
import ProductList from "@/compoents/Products/ProductList";
import Header from "@/compoents/UI/Header";
import { Box } from "@chakra-ui/react";
import { useProductsStore } from "@/store/useProductsStore";


const Home = () => {
  const {products, error, isLoading, fetchData} = useProductsStore()
  useEffect(() => {
    fetchData();
  },[fetchData])
  return (
    <>
        <Header/>
        <Box mt="20px">
          {
            isLoading? <Box>Loading......</Box> : <ProductList products={products} />
          }
          
        </Box>
    </>
  )
}
export default Home;