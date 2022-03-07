<template>
  <v-app id="inspire">
    <v-snackbar v-model="snackbar">
      <span>Awesome! You have added your task</span>
    </v-snackbar>
    <v-app-bar app color="rgb(207,92,80)" flat>
      <div class="d-flex">
        <img class="img" :src="image" />
      </div>
      <v-container class="py-0 fill-height">
        <router-link class="textDecor" to="/datatable"
          ><v-btn class="white--text" text> Dashboard </v-btn></router-link
        >
        <v-btn class="white--text" text> Profile </v-btn>
        <v-btn class="white--text" text> Messages </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260"> </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg" min-height="70vh">
              <v-list
                color="transparent"
                v-for="item in items"
                :key="item.name"
              >
                <v-list-item link color="grey lighten-4" :to="item.path">
                  <v-list-item-content>
                    <v-list-item-title>
                      <router-link
                        class="red--text mr-5 textDecor"
                        :to="item.path"
                        >{{ item.name }}</router-link
                      >
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="my-2" color="rgb(222,94,86)"></v-divider>
              </v-list>
              <v-list>
                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title @click="logOut" class="red--text">
                      Log out
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <router-view @taskAdded="snackbar = true"></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
    image: require("../assets/images/logo.png"),
    snackbar: false,
    items: [
      {
        name: "Tasks",
        path: "/taskcomponent",
      },
      {
        name: "Logs",
        path: "/logscomponent",
      },
    ],
  }),

  methods: {
    logOut() {
      this.$store.state.authenticated = false;
      this.$router.push({ name: "homeview" });
    },

    doSomething() {
      console.log("logout");
    },
  },
};
</script>
<style scoped>
.textDecor {
  text-decoration: none;
}
.img {
  width: 70px;
}
</style>
