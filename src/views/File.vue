<template>
    <div>
        <p>File.vue (Route: /file)</p>
        <button @click="onClickGo">Go to /</button>
    
        <p>{{ message }}</p>


        <FileUpload/>

      
    
    
    </div>
</template>

<script>

  import FileUpload from '../components/FileUpload.vue'

  export default {
    name: 'File',
    components: {
        FileUpload
    },
    data:function () {
      return {
      message:'Hello from file ...'
      }
    },
    methods: {
      onClickGo() {
        this.$router.push('/')
      },
     
    }
  }
</script>


<style scoped>
    p {
        color: deeppink;
    }
</style>