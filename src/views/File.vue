<template>
    <div>
        <p>File.vue (Route: /file)</p>
        <button @click="onClickGo">Go to /</button>
    
        <p>{{ message }}</p>

         <p> Now for the upload </p>
        <FileUpload></FileUpload>
  

        <!--<FileUpload/> -->
        <p> Now for the download </p>
        <FileDownload></FileDownload>

        
      
    
    
    </div>
</template>

<script>

  import FileUpload from '../components/FileUpload.vue'
  import FileDownload from '../components/FileDownload.vue'

  import * as state from './../scripts/state'

  export default {
    name: 'File',
    components: {
        'FileUpload':FileUpload,
        'FileDownload':FileDownload
    },
    data:function () {
      return {
      message:'Hello from file ...'
      }
    },
    created() {
        state.setActiveFile("y.txt","user content here ...")
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