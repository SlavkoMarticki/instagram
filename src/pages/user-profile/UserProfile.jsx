import React from "react";
import Footer  from "../../common/footer/Footer";
import UserProfileHeader from "./components/user-profile-header/UserProfileHeader";
import UserMainInfo from "./components/user-main-info/UserMainInfo";
import UserPicture from "./components/user-pictures/UserPicture";

export default function UserProfile(){
    return(
        <>
            <UserProfileHeader />
            <UserMainInfo />
            <UserPicture />
            <Footer />
        </>
    );
}