<template>
  <v-app id="inspire">
    <v-app-bar app color="rgb(207,92,80)" flat>
        <div class="d-flex">
        <img class="img" :src="image"  />
      </div>
      <v-container class="py-0 fill-height">
        
        <v-btn class="white--text" v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <!-- <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field> -->
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3" >
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg" min-height="70vh">
              <v-list color="transparent">
                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title>
                      <router-link class="red--text mr-5 textDecor" to="/taskcomponent"
                        >Tasks</router-link
                      >
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="my-2" color="rgb(222,94,86)"></v-divider>
                <v-list-item link color="rgb(222,94,86)" >
                  <v-list-item-content>
                    <v-list-item-title>
                      <router-link class="mr-5 red--text textDecor"  to="/logscomponent"
                        >Logs</router-link
                      >
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2" color="rgb(222,94,86)"></v-divider>

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
            <router-view></router-view>
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
  }),
  
  methods: {
    logOut() {
      this.$store.state.authenticated = false;
      this.$router.push({ name: "loginview" });
    },
  },
};
</script>
<style scoped>
.textDecor{
    text-decoration:none;
}
.img {
  width: 70px;
}
</style>
