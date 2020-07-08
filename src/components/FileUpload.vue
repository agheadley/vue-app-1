<template>
<div class="file">
    <p>FileUpload Component</p>
    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <div class="fields">
            <label>Upload file</label>
            <input type="file" ref="file" @change="onSelect" accept=".txt, .csv, .md"/>      
        </div>
         <div class="fields">
             <button>Submit</button>
        </div>
        <div class="message">
            <p>{{message}}</p>
        </div>
    </form>
</div>
</template>
<script>
import * as fs from './../scripts/fs'

export default {
  name: 'FileUpload',
  data() {
      return {
          file:"",
          message:__dirname
      }
  },
  methods: {
      onSelect(){
          this.file=this.$refs.file.files[0];
          console.log(this.file);
          fs.readFile(this.file);
          fs.writeFile('test.txt','blah, blah, blah!');
      },
     

  }
}
</script>