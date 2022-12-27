import React from "react";
import Header from "./components/header/Header";
import Story from "./components/stories/Story";
import PostedImage from "./components/posted-images/PostedImage";
import Footer from "./components/footer/Footer";


export default function Home(){
    return (
        <>
            <Header />
            <Story />
            <PostedImage />
            <Footer />
        </>
       
    );
}