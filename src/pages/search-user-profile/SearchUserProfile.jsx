import React, { useEffect, useState } from "react";
import UserMainInfo from "../user-profile/components/user-main-info/UserMainInfo";
import UserPicture  from "../user-profile/components/user-pictures/UserPicture";
import UserProfileHeader from "../user-profile/components/user-profile-header/UserProfileHeader";
import FollowUnffolowButton from "./components/follow-unffolow/FollowUnffolowButton";
import store from "../../store/store";

export default function SearchUserProfile(){

    const [userData, setUserData] = useState({
        user_name: "",
        following: 0,
        followers: 0,
        images: []
    })

    useEffect(()=>{
        const userData = store.getState();
        console.log(userData);
        setUserData({
            user_name : userData.searchUser.data.user_name,
            following : userData.searchUser.data.following,
            followers : userData.searchUser.data.followers,  
            images : userData.searchUser.images
        })
    },[])

    return (
        <>
           <UserProfileHeader 
                name={userData.user_name}
                addImage = {true}
            /> 
           
            <UserMainInfo 
                following={userData.following}
                followers={userData.followers}
                images = {userData.images}
                
            />
            <FollowUnffolowButton />
            <UserPicture 
                urls={userData.images}
            />
        </>
    );
}