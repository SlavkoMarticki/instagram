
import { db, storage } from "../firebase/firebase-config";
import { 
    where,
    collection,
    query,
    onSnapshot,
    getDocs
 } from "firebase/firestore";
import { 
    ref,
    listAll,
    getDownloadURL 
} from "firebase/storage";


const user = {
    loginUser: {
        data: {},
        images: {}
    },
    searchUser: {
        data: {
            email: "",
            followers: [],
            following: [],
            user_name: ""
        },
        images: {}
    },
    searchUserName: ""
};

const dataRef = collection(db, "users");

const reducer = (state = user, action) => {
    //user.push([]);
    if(action.type === "getUser"){
        const q = query(dataRef, where("email", "==", action.email));
        const imageRef = ref(storage, action.email);
        const imgData = []
  
        onSnapshot(q, (snapshot) => {
           
            snapshot.docs.map((doc) => {
                user.loginUser.data = doc.data()
                
            });
        });
        listAll(imageRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                  
                   imgData.push(url);
                   
                })
            })
            //console.log(imgData);
            user.loginUser.images = imgData;
        })
        
    }

    if(action.type === "searchUser"){
        user.searchUserName = action.userName
        console.log(action.userEmail);

        const getUserData = () => {
            const getData = query(dataRef, where("user_name", "==",  user.searchUserName));

            onSnapshot(getData, (snapshot) => {
                snapshot.docs.map((doc) => {
                    //user.searchUser.data = doc.data();
                    user.searchUser.data.email = doc.data().email;
                    user.searchUser.data.user_name = doc.data().user_name;
                    user.searchUser.data.following = doc.data().following;
                    user.searchUser.data.followers = doc.data().followers;
                })
            }); 
            console.log(user.searchUser.data.email);
            return user.searchUser.data.email;
        }
        const getImages = () => {
            
           
            const imageRef = ref(storage, action.userEmail);
            const imgData = [];
            
            listAll(imageRef).then((res) => {
            
                res.items.forEach((item) => {
                    getDownloadURL(item).then((url) => {
                      
                       imgData.push(url);
                       
                    });
                })
                console.log(user);
                user.searchUser.images = imgData;

            })
        }
        getUserData();
        getImages();
    }

    return state;
}
export default reducer;
