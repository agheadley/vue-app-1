<template>
<div class="file">
    <p>FileDownload component</p>
    <div id="download-link">
        <button v-on:click="initDownload">download file</button>

    </div>
</div>
</template>
<script>

import * as fs from './../scripts/fs'

export default {
  name: 'FileDownload',
  data() {
      return {
          file:"",
          message:__dirname,
          pathToFile:'./../../uploads/test.txt'
      }
  },

  methods: {
      onSelect(){
          this.file=this.$refs.file.files[0];
          console.log(this.file);
          fs.readFile(this.file);
          fs.writeFile('test.txt','blah, blah, blah!');
      },
      initDownload() {
          fs.downloadFile('test.text','blahdeblah',document.getElementById('download-link'));
      }
     

  }
}
</script>