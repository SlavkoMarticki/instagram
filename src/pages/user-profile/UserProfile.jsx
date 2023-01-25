import React, {
    useState,
    useEffect
} from "react";
import Footer  from "../../common/footer/Footer";
import UserProfileHeader from "./components/user-profile-header/UserProfileHeader";
import UserMainInfo from "./components/user-main-info/UserMainInfo";
import { db, storage } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, listAll, ref, getMetadata} from "firebase/storage";
import store from "../../store/store";
import UserPicture from "./components/user-pictures/UserPicture";



export default function UserProfile(){
    

    const getCuresntState = store.getState();
    
    return(
        <>
            <UserProfileHeader 
                name = {
                    getCuresntState.loginUser.data.user_name
                }    
             />
            <UserMainInfo 
                followers = {getCuresntState.loginUser.data.followers}
                following = {getCuresntState.loginUser.data.following}
                images = {getCuresntState.loginUser.images}
            />
            <UserPicture 
                images={getCuresntState.loginUser.images}
            />
            
            <Footer />
           
        </>
    );
}