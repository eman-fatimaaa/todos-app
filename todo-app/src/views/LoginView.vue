<template>
  <div class="Login">
    <v-app-bar app height="90" color="rgb(207,92,80)" >
      <div class="d-flex">
        <img class="img" :src="image"  />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container class="mt-15 width">
      <v-row class="text-center color" cols="6">
        <!-- Log in form starts here-->
        <v-col>
          <h1>Log In</h1>
          <v-container class="align">
            <v-form ref="form">
              <v-col cols="5">
                <v-text-field
                  label="User Name"
                  type="text"
                  required
                  v-model="userName"
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  
                  label="Password"
                  type="password"
                  v-model="password"
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-btn depressed class="white--text" color="rgb(207,92,80)" block @click="logIn">
                  Log In
                </v-btn>
              </v-col>
              
            </v-form>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
     image: require("../assets/images/logo.png"),
      valid: true,
      //data properties for Regex

      //v-modeling for two way binding
      userName: "",
      password: "",
      show4: true,
      accounts:[],
    };
  },
  methods: {
    logIn() {
      axios.get("http://localhost:3000/user").then((response) => {
        console.log(response);

        this.accounts = response.data;
        localStorage.setItem(
          "accounts",
          JSON.stringify(this.accounts)
        );
        this.accounts = JSON.parse(localStorage.getItem("accounts"));
        
        this.currentAccount = this.accounts.find((u) => {
          return u.name == this.userName && u.password == this.password;
        });
        if (this.currentAccount) {
          (this.$store.state.authenticated = true),
            this.$router.push({ path: "/datatable" });
          localStorage.setItem(
            "currentAccount",
            JSON.stringify(this.currentAccount)
          );
        } else {
          alert("We are afraid your account does not exist");
        }
      });
    },
  },
};
</script>
<style scoped>
.align {
  margin-left: 28%;
}
img {
  width: 100px;
}
.color {
  /* background-color: rgba(245, 245, 245, 0.5); */
  /* border: 1px; */
  /* box-shadow: 0px 0px 3px 0px; */
  border-radius:4px;
}
.width {
  width: 900px;
}
.pMargin {
  margin-left: -59%;
}
</style>
