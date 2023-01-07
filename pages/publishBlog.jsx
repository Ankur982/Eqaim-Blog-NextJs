import React from "react";
import { Box, Image, Input, Link, Text, Textarea } from "@chakra-ui/react";
import home from "../public/home.svg";
import post from "../public/post.svg";
import { postBlog } from "../helper/helper";


export default function PublishBlog(){

  let [title, setTitle] = React.useState("");
  let [summary, setSummary] = React.useState("");
  let [image, setImage] = React.useState("");

  const initPost = {
    title: title,
    summary: summary,
    image: image,
  };

  const handlePost = async () => {
    if (!title || !summary) {
      alert("please field input");
      return;
    }

    postBlog(initPost)
  };

  return (
    <Box display={"flex"} w={"90%"} m={"auto"} mt={"30px"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"30px"}
        position={"absolute"}
        top={"30%"}
      >
        <Box
          width={"80px"}
          height={"70px"}
          background={"#E9E9E9"}
          borderRadius={"20px"}
          m={"auto"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
            <Link href={"/"}>
          <Image w={"80px"} h={"52px"} src={home.src} />
          </Link>
        </Box>
        <Box
          width={"80px"}
          height={"70px"}
          background={"#E9E9E9"}
          borderRadius={"20px"}
          m={"auto"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          onClick={handlePost}
        >
          <Image w={"70px"} h={"52px"} src={post.src} />
        </Box>
      </Box>
      <Box w={"78.7%"} border={"1px solid"} m={"auto"}>
        <Box
          m={"auto"}
          width={"919px"}
          height={"443px"}
          fontFamily={"Inter"}
          fontStyle={"normal"}
          fontWeight={"300"}
          textAlign={"justify"}
          color={"#767676"}
          mt={"20px"}
        >
          <Textarea
            value={title}
            placeholder="Enter Title...."
            fontWeight={"600"}
            fontSize={"40px"}
            lineHeight={"48px"}
            mt={"20px"}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Enter url...."
            fontWeight={"300"}
            fontSize={"40px"}
            lineHeight={"48px"}
            value={image}
            mt={"20px"}
            onChange={(e) => setImage(e.target.value)}
          />
          <Textarea
            fontWeight={"300"}
            fontSize={"40px"}
            lineHeight={"48px"}
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
            h={"50%"}
            mt={"20px"}
            placeholder="Enter content...."
          />
        </Box>
      </Box>
    </Box>
  );
};
