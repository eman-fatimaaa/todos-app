import axios from "axios"

export const getName = ({commit})=>{
axios.get("http://localhost:3000/user")
.then(response =>{
    commit('GET_USERNAME',response.data.name)
})
}