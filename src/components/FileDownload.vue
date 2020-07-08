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
import * as state from './../scripts/state'

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
      initDownload() {
          let file=state.getActiveFile();
          fs.downloadFile(file.name,file.content,document.getElementById('download-link'));
      }
     

  }
}
</script>