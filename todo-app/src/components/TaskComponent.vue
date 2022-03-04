<template>
  <div>
    <v-parallax
      height="70vh"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
      <v-sheet min-height="70vh" rounded="lg">
        <v-row class="pt-5">
          <v-col cols="12" sm="6" offset-sm="3">
            <v-card class="mb-5" height="200px" v-for="task in currentAccount" :key="task">
              <v-card-title class=" white--text" style="background-color:rgb(222,94,86)">
                <span class="text-h5">{{ task.id }}</span>

                <v-spacer></v-spacer>

                <v-menu bottom left>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-menu>
              </v-card-title>

              <v-card-text class="text-center pt-5" style="font-size:20px"><strong>Task Name :</strong>{{task.name}}  
                </v-card-text>
              <v-card-text class="text-center pt-5" style="font-size:20px"> <strong>Task Description : </strong>{{
                task.description
              }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-parallax>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentAccount: [
        {
          name: "Gym",
          description: "I'll go to gym tommorow",
          id: "Task 1",
        },
        { name: "Exercise", description: "Its good for health", id: "Task 2" },
      ],
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
};
</script>
<style scoped>
.color{
  color:rgb"rgb(222,94,86)"
}
</style>

