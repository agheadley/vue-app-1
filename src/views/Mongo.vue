<template>
    <div>
     <p>Mongo.vue (Route: /mongo)</p>
        <button @click="onClickMongo">Back</button>
        <p>{{ message }}</p>
    </div>
</template>

<script>

  import * as mongo from './../scripts/db'

  export default {
    name: 'Mongo',
     data:function () {
      return {
      message:'Hello from mongo ...'
      }
    },
    created: function () {
      mongo.getData(res=>{
       let data=JSON.parse(res);
       console.log(data[0]);
      });
    },
    methods: {
      onClickMongo() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>