
import { db, storage } from "../firebase/firebase-config";
import { 
    where,
    collection,
    query,
    onSnapshot
 } from "firebase/firestore";
import { 
    ref,
    listAll,
    getDownloadURL 
} from "firebase/storage";


const user = [];
const dataRef = collection(db, "users");

const reducer = (state = user, action) => {
    //user.push([]);
    if(action.type === "getUser"){
        const q = query(dataRef, where("email", "==", action.email));
        const imageRef = ref(storage, action.email);
        const imgData = []
  
        onSnapshot(q, (snapshot) => {
           
            snapshot.docs.map((doc) => {
                user.push(
                    {...doc.data()}
                )
            });
        });
        listAll(imageRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                  
                   imgData.push(url);
                   
                })
            })
            console.log(imgData);
            user.push(imgData);
        })
    }

    return state;
}
export default reducer;