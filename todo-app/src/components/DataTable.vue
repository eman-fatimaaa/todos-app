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
              <!-- <div v-for="index in user" :key=index>
        <h1>{{index.name}}</h1>
    </div> -->
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
// import axios from "axios"
export default {
//   computed: {
//     user() {
//       return this.task = this.$store.state.user;
//     },

//   },
  mounted() {
    this.$store.dispatch("getUser");
    console.log("user",this.$store.state.user)
    this.task = this.$store.state.user;

  },

  data() {
    return {
        taskName:"",
        description:"",
        task:[],
      headers: [
        
        { text: "Name", value: "task" },
        { text: "id", value: "name" },
       
        { text: "Description", value: "description" },
        { text: "action", value: "task" },
      ],
      
     
      
    };
  },

  methods:{
      saveData(){
          let data ={
              taskName : this.taskName,
              description : this.description,
          }
          console.log(data);
          this.$store.dispatch("sendData",JSON.stringify(this.data))
      }
  }

  
};
</script>