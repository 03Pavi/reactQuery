import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { AddPost, fetchPost } from "./services/products.service";
import ImgMediaCard from "./components/Card";
import { Box, Container, Divider, Stack } from "@mui/material";
import Form from "./components/Form";

const App = () => {
  const [productsArray, setProductsArray] = useState([]);
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchPost,
    refetchInterval:1000*10
  });

  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <Form />
      {isLoading && <p>isloading</p>}
      {toggle && (
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {data?.data?.products.map((i: Product) => {
            return (
              <ImgMediaCard
                title={i.title}
                description={i.description}
                price={i.price}
                images={i.images}
              />
            );
          })}
        </Box>
      )}
    </div>
  );
};

export default App;
