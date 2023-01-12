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
    const [userData, setUserData] = useState([]);
    const [imagerUrl, setImageUrl] = useState([]);
    const userCollectionData = collection(db, "users");
    const imageRef = ref(storage, "/");
    const [state, setState] = useState([]);
    console.log(state[0]);

    useEffect(() => {
        
        setState(store.getState());
        listAll(imageRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrl((prev) => [...prev, url]);
                })
            })
        });

        const getData = async () => {
            const data = await getDocs(userCollectionData);
            setUserData(data.docs.map((doc) => (
                {...doc.data()}
            )))
        }

        getData();
    }, [])

    return(
        <>
            <UserProfileHeader 
                name = {state[1]?.user_name}    
             />
            <UserMainInfo 
                followers = {state[1]?.followers}
                following = {state[1]?.following}
                images = {state[0]}
            />
            <UserPicture 
                urls={state[0]}
            />
            
            <Footer />
           
        </>
    );
}