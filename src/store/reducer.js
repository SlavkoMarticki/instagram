
import { db, storage } from "../firebase/firebase-config";
import { 
    where,
    collection,
    query,
    onSnapshot,
    updateDoc,
    doc,
    arrayUnion
 } from "firebase/firestore";
import { 
    ref,
    listAll,
    getDownloadURL,
    deleteObject,
    getStorage
} from "firebase/storage";


const user = {
    loginUser: {
        data: {
            id: ""
        },
        images: {}
    },
    searchUser: {
        data: {
            id: "",
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
                user.loginUser.data.id = doc.id
                
            });
        });
        listAll(imageRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    const imgLocation = item._location.path_
                    const subName = imgLocation.substring(imgLocation.indexOf("/")+1, imgLocation.length);
                    imgData.push(
                        {
                            imgUrl: url,
                            imgName: subName
                        }
                    );
                    
                   
                })
            })
            //console.log(imgData);
            user.loginUser.images = imgData;
        })
        
    }

    if(action.type === "searchUser"){
        user.searchUserName = action.userName
        

        const getUserData = () => {
            const getData = query(dataRef, where("user_name", "==",  user.searchUserName));

            onSnapshot(getData, (snapshot) => {
                snapshot.docs.map((doc) => {
                    //user.searchUser.data = doc.data();
                    user.searchUser.data.id = doc.id
                    user.searchUser.data.email = doc.data().email;
                    user.searchUser.data.user_name = doc.data().user_name;
                    user.searchUser.data.following = doc.data().following;
                    user.searchUser.data.followers = doc.data().followers;
                })
            }); 
            
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
              
                user.searchUser.images = imgData;

            })
        }
        getUserData();
        getImages();
    }
    if(action.type === "follow"){

  
        const loginUserDocument = doc(db, "users", user.loginUser.data.id);  
        const loginNewDocument = { following: arrayUnion(user.searchUser.data.user_name)};
        
       
        const searchUserDocument = doc(db, "users", user.searchUser.data.id);
        const searchNewDocument = { followers: arrayUnion(user.loginUser.data.user_name)}

        updateDoc(loginUserDocument, loginNewDocument);
        updateDoc(searchUserDocument, searchNewDocument);
        alert("follow from reducer");
    }
    if(action.type === "unfollow"){
     
        const loginUserDocument = doc(db, "users", user.loginUser.data.id);  
        const loginUserFollowing = user.loginUser.data.following;
        const newLoginUserFollowing = loginUserFollowing.filter((e) => {return e !== user.searchUser.data.user_name})
        const loginNewDocument = { following: newLoginUserFollowing};
        updateDoc(loginUserDocument, loginNewDocument);
        
       
        const searchUserDocument = doc(db, "users", user.searchUser.data.id);
        const searchUserFollowers = user.searchUser.data.following;
        const newSearchUserFollowers = searchUserFollowers.filter((e) => {return e !== user.loginUser.data.user_name});
        const searchNewDocument = { followers: newSearchUserFollowers}
        updateDoc(searchUserDocument,searchNewDocument);

        alert("Unfollow from reducer");

    }
    if(action.type === "deleteImage"){

        const imgRef = ref(storage, user.loginUser.data.email + "/" + action.name)
        
        deleteObject(imgRef).then(() => {
           alert("Uspesno")
        }).catch((error) => {
            alert("Oops! Something is wrong")
        });
    }

    return state;
}
export default reducer;
