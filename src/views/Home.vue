<template>
    <div>
        <p>Home.vue (Route: /)</p>
        <button @click="onClickGo">Go to /mongo</button>
         <button @click="onClickFile">Go to /file</button>
    
        <p>{{ message }}</p>

        <button @click="print">print page</button>
    
    
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data:function () {
      return {
      message:'Hello from home ...'
      }
    },
    methods: {
      onClickGo() {
        this.$router.push('/mongo')
      },
      onClickFile() {
        this.$router.push('/file')
      },
      print() {
         window.print();
      }
    }
  }
</script>


<style scoped>
    p {
        color: deeppink;
    }
</style>