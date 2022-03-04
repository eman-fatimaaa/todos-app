<template>
  <div>
    <v-sheet min-height="70vh" rounded="lg">
      <h1 class="text-center">Logs</h1>

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
      </div>
    </v-sheet>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log((this.task = JSON.parse(localStorage.getItem("task"))));
  },
  data() {
    return {
      task: [],
    };
  },
};
</script>
<style scoped>
.font {
  font-size: 15px;
}
</style>
