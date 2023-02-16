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
        const data = localStorage.getItem("searchUserData");
        const imgData = localStorage.getItem("searchUserImages")
        const searchUserdata = JSON.parse(data);
        const searchUserImages = JSON.parse(imgData);
        console.log(searchUserImages);
        
        setUserData({
            user_name : searchUserdata.user_name,
            following : searchUserdata.following,
            followers : searchUserdata.followers,  
            images : searchUserImages
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