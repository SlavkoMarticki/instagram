import React, {
    useState,
    useEffect
} from "react";
import Footer  from "../../common/footer/Footer";
import UserProfileHeader from "./components/user-profile-header/UserProfileHeader";
import UserMainInfo from "./components/user-main-info/UserMainInfo";
import UserPicture from "./components/user-pictures/UserPicture";



export default function UserProfile(){

    const [data, setData] = useState({
        email : "",
        user_name: "",
        followers: [],
        following: [],
        images: [],
        profileImg: ""
    });
    useEffect(() => {
        const getData = localStorage.getItem("loginUser");
        const getImages = localStorage.getItem("loginUserImages");
        const getProfileImage = localStorage.getItem("loginUserProfileImage");

        const userData = JSON.parse(getData);
        const getImagesData = JSON.parse(getImages);
        const profileImage = JSON.parse(getProfileImage);
        
       

        setData({
            email: userData.data.email,
            user_name: userData.data.user_name,
            followers: userData.data.followers,
            following: userData.data.following,
            images: getImagesData,
            profileImg: profileImage
        });
    },[])

    console.log(data.images);
    return(
        <>
            <UserProfileHeader 
                name = {
                    data.user_name
                }    
             />
            <UserMainInfo 
                followers = {data.followers}
                following = {data.following}
                images = {data?.images}
                profileImg = {data.profileImg?.imgUrl}
            />
            <UserPicture 
                images={data?.images}
            />
            
            <Footer />
           
        </>
    );
}