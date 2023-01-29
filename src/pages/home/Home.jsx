import React, {useEffect} from "react";
import Header from "./components/header/Header";
import Story from "./components/stories/Story";
import PostedImage from "./components/posted-images/PostedImage";
import Footer from "../../common/footer/Footer";
import "../../common/body/body.css";
import store from "../../store/store";


export default function Home(){

    useEffect(() => {
        const emails = store.getState();
        store.dispatch({
            type: "getAllFollowersImages"
        })
        const images = store.getState();
        console.log(images.loginUser);
    },[]);
   

    return (
        <>
            <Header />
            <Story />
            <PostedImage />
            <Footer />
        </>
       
    );
}