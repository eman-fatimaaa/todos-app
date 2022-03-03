<template>
    <div>
        <v-sheet min-height="70vh" rounded="lg">
            <h1 class=" mb-10 text-center">Tasks</h1>
            <v-card
                class="mx-auto mb-10"
                max-width="344"
                outlined
                v-for="task in currentAccount"
                :key="task.id"
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4">{{ task.name }}</div>
                    <v-list-item-title class="text-h5 mb-1">
                      {{ task.description }}
                    </v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                  ></v-list-item-avatar>
                </v-list-item>
              </v-card>
        </v-sheet>
    </div>
</template>
<script>
export default{
   
    data(){
        return{
            currentAccount: [{
                name:"hello",
                description:"world",
                id:1,
            },
            {name : "Exercise",
            description:"Its good for health",
            id:2}],
        }
    }
}

</script>
<style scoped>

</style>
