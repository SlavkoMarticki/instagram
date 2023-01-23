import React, {
    useState,
    useEffect
} from "react";
import Footer  from "../../common/footer/Footer";
import UserProfileHeader from "./components/user-profile-header/UserProfileHeader";
import UserMainInfo from "./components/user-main-info/UserMainInfo";
import { db, storage } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, listAll, ref} from "firebase/storage";
import store from "../../store/store";
import UserPicture from "./components/user-pictures/UserPicture";



export default function UserProfile(){
    
    const [imagerUrl, setImageUrl] = useState([]);
    const userCollectionData = collection(db, "users");
    const imageRef = ref(storage, "/");
    const [state, setState] = useState({});
    const getCuresntState = store.getState();


    useEffect(() => {
        console.log(getCuresntState);
        listAll(imageRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrl((prev) => [...prev, url]);
                })
            })
        });
       
    }, [])

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
                urls={getCuresntState.loginUser.images}
            />
            
            <Footer />
           
        </>
    );
}