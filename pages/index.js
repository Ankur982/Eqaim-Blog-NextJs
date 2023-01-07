import React from "react";
import { Box, Image, Link, SimpleGrid } from "@chakra-ui/react";
import { BlogTitleCard } from "../components/BlogTitleCard";
import createBlog from "../public/createBlog.svg";


export default function Home({ res }) {
console.log(res)
  return (
    <Box m="auto" position={"relative"}>
      <SimpleGrid columns={[1, 2, 3]} w="90%" m="auto">
        {res.map((el, i) => (
          <BlogTitleCard key={i} blog={el} />
        ))}
      </SimpleGrid>
      <Box
        position={"absolute"}
        right={"70px"}
        width={"80px"}
        height={"70px"}
        background={"#E9E9E9"}
        borderRadius={"20px"}
        m={"auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Link href={"/publishBlog"}>
        <Image
          w={"40px"}
          h={"52px"}
          src={createBlog.src}
        />
        </Link>
      </Box>
    </Box>
  );
};


export async function getServerSideProps() {
  const res = await fetch("https://eqaim-blog-next-js.vercel.app/api/getblogs").then((x) => x.json())
  return {
    props: { res }
  }
}