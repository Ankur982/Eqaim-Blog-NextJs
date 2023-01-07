import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";

export const BlogTitleCard = ({ blog }) => {
  return (
    <Link href={`/blogPost/${blog._id}`}>
    <Box
      width={"300px"}
      height={"180px"}
      background={"#D9D9D9"}
      borderRadius={"15px"}
      m={"auto"}
      mt={"60px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      // onClick={() => handleBlog(blog._id)}
    >
      <Text
        fontFamily={"Inter"}
        fontStyle={"normal"}
        fontWeight={"400"}
        fontSize={"32px"}
        lineHeight={"39px"}
        color={"#000000"}
      >
        
        {blog.title}
      </Text>
    </Box>
    </Link>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/getblogs", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(id),
  }).then((x) => x.json());
  return {
    props: { res },
  };
}
