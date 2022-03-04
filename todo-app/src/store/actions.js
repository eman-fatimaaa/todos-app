import axios from "axios"

export const getUser = ({commit})=>{
axios.get("http://localhost:3000/user")
.then(response => {
    commit('GET_USERNAME',response.data)
})
}

export const sendData = ({commit},data)=>{
    axios.post("http://localhost:3000/task",data)
    .then(response => {
        
        commit('GET_DATA',response.data)

    })
    }