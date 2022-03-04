<template>
  <v-sheet min-height="70vh" rounded="lg">
    <router-view></router-view>
    <v-responsive max-width="260">
      <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <div class="text-center">
              <v-btn
                class="mt-10 mb-10"
                rounded
                color="rgb(222,94,86)"
                v-bind="attrs"
                v-on="on"
                dark
              >
                + Add new Task
              </v-btn>
            </div>
          </template>

          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="rgb(222,94,86)" dark
                >Hey!Add up your new Task</v-toolbar
              >
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Name of the task"
                        required
                        v-model="taskName"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Description"
                        type="text"
                        v-model="description"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="saveData">Save</v-btn>
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-responsive>

    <div>
      <v-data-table
        :headers="headers"
        :items="task"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </div>
  </v-sheet>
</template>
<script>

  import {mapState }from 'vuex'
export default {
  created() {
    
    this.$store.dispatch("getUser");
    console.log("user", this.$store.state.user);
    this.task = this.$store.state.user;
    
  },
  computed:{
    
      // ...mapGetters(["userObject"]),
      ...mapState(["user"]),
   
    
  },

  data() {
    return {
      taskName: "",
      description: "",
      task: [],
      date : new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
      headers: [
        { text: "Name", value: "task" },
        { text: "id", value: "id" },
        { text: "Description", value: "description" },
        { text: "action", value: "task" },
      ],
    };
  },

  methods: {
    saveData() {
      let task = {
        taskName: this.taskName,
        description: this.description,
        status :"New task has been added",
        date :this.date,
        time: this.time,
      };
      console.log(task);
      localStorage.setItem("task", JSON.stringify(task));
    },
  },
};
</script>