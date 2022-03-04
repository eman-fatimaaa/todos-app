<template>
  <div>
    <v-parallax
      height="70vh"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
      <v-sheet min-height="70vh" rounded="lg">
        <h1 class="text-center pt-10">Logs</h1>

        <!-- <div>
        <h1 class="text-center">Saved Tasks</h1>
        <p class="text-center">{{ task.description }}</p>
      </div> -->
        <div class="container mt-10">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" style="font-size: 20px">Name</th>
                  <th class="text-left" style="font-size: 20px">Status</th>
                  <th class="text-left" style="font-size: 20px">Date</th>
                  <th class="text-left" style="font-size: 20px">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="font-size: 15px">{{ task.taskName }}</td>
                  <td style="font-size: 15px">{{ task.status }}</td>
                  <td style="font-size: 15px">{{ task.date }}</td>
                  <td style="font-size: 15px">{{ task.time }}</td>
                </tr>
                <v-divider class="mx-auto"></v-divider>
              </tbody>
            </template>
          </v-simple-table>
          <v-container>
          <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
          ></v-sparkline>
          </v-container>
        </div>
      </v-sheet>
    </v-parallax>
  </div>
</template>
<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
export default {
  mounted() {
    console.log((this.task = JSON.parse(localStorage.getItem("task"))));
  },
  data() {
    return {
      task: [],
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: "top",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false,
    };
  },
};
</script>
<style scoped>
.font {
  font-size: 15px;
}
</style>
