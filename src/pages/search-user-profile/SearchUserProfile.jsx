import React from "react";
import UserMainInfo from "../user-profile/components/user-main-info/UserMainInfo";
import UserPicture  from "../user-profile/components/user-pictures/UserPicture";
import UserProfileHeader from "../user-profile/components/user-profile-header/UserProfileHeader";
import FollowUnffolowButton from "./components/follow-unffolow/FollowUnffolowButton";
export default function SearchUserProfile(props){

    return (
        <div>
            <UserProfileHeader 
                name={"slavko"}
                addImage = {true}
            />
           
            <UserMainInfo />
            <FollowUnffolowButton />
            <UserPicture />


        </div>
    );
}