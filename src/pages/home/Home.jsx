import React, {useEffect} from "react";
import Header from "./components/header/Header";
import Story from "./components/stories/Story";
import PostedImage from "./components/posted-images/PostedImage";
import Footer from "../../common/footer/Footer";
import "../../common/body/body.css";
import store from "../../store/store";


export default function Home(){
    store.dispatch({
        type: "getAllFollowersImages"
    })
    const data = store.getState();
    const images = data.loginUser.images;
    //napravi home layout u layout folderu i u njega stavi header i footer i to sve vrepaj u ovoj home komponenti
    /**
     * ovako bi trebalo da izlgeda
     * <HomeLayout>
     *  {childern}
     * <HomeLayout/>
     */
    return (
        <>
            <Header />
            <Story />
            {/**promeni naizv */}
            <PostedImage 
               images = {images}
            />
            <Footer />
        </>
       
    );
}