import { ref, child, get } from "firebase/database"
import { database } from "./FirebaseConfig"
import { data } from "./Data"

export const App = () => {
    const dbRef = ref(database)
    get(child(dbRef, "productList")).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val())
        } else {
            console.log("No data available")
        }
    }).catch((error) => {
        console.error(error)
    })

    console.log(Math.floor(Math.random() * 200) / 100 + 100)

    return (
        <h1>Hello, world!</h1>
    )
}