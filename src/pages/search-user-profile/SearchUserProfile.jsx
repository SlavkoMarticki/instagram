import React, { useEffect } from "react";
import UserMainInfo from "../user-profile/components/user-main-info/UserMainInfo";
import UserPicture  from "../user-profile/components/user-pictures/UserPicture";
import UserProfileHeader from "../user-profile/components/user-profile-header/UserProfileHeader";
import FollowUnffolowButton from "./components/follow-unffolow/FollowUnffolowButton";
import store from "../../store/store";

export default function SearchUserProfile(){

    const state = store.getState().searchUser;
    console.log(state);
    return (
        <div>
            <UserProfileHeader 
                name={state.data.user_name}
                addImage = {true}
            />
           
            <UserMainInfo 
                following={state.data.following}
                followers={state.data.followers}
                
            />
            <FollowUnffolowButton />
            <UserPicture />
        </div>
    );
}