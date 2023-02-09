import React, {
    useState,
    useEffect
} from "react";
import Footer  from "../../common/footer/Footer";
import UserProfileHeader from "./components/user-profile-header/UserProfileHeader";
import UserMainInfo from "./components/user-main-info/UserMainInfo";
import store from "../../store/store";
import UserPicture from "./components/user-pictures/UserPicture";



export default function UserProfile(){
    

    const getCurentState = store.getState();
    
    return(
        <>
            <UserProfileHeader 
                name = {
                    getCurentState.loginUser.data.user_name
                }    
             />
            <UserMainInfo 
                followers = {getCurentState.loginUser.data.followers}
                following = {getCurentState.loginUser.data.following}
                images = {getCurentState.loginUser.images}
            />
            <UserPicture 
                images={getCurentState.loginUser.images}
            />
            
            <Footer />
           
        </>
    );
}