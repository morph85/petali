<template>
  <div class="upload">
    <h1>{{ msg }}</h1>
    <vue-dropzone ref="videoDropzone" id="dropzone1" class="dropzone" :options="dropzoneOptions1"
      @vdropzone-upload-progress="dropzoneProgress"
      @vdropzone-error="dropzoneError"
      @vdropzone-success="dropzoneSuccess"
      @vdropzone-file-added="dropzoneFileAdded"
      @vdropzone-files-added="dropzoneFilesAdded"
      @vdropzone-removed-file="dropzoneRemoveVideo" ></vue-dropzone>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'Upload',
  components: {
    vueDropzone: vue2Dropzone
  },
  props: {
    msg: String
  },
  data () {
    return {
      dropzoneOptions1: {
        dictDefaultMessage: 'Browse or Add File(sx)',
        // url: 'http://localhost:8080/sie-october/public/external/youtube/video2.php',
        // url: 'https://noctorus.studio/video.php',
        url: 'http://192.168.0.133:8080/testvideo/',
        // url: 'https://httpbin.org/post',
        // thumbnailHeight: 100,
        // addRemoveLinks: true,
        // uploadMultiple: false,
        maxFiles: 1,
        maxFilesize: 10,
        // timeout: 7200000,
        // acceptedFiles: '.mp4, .mov, .avi, .wmv, .flv, .3gp, .webm, .m4v, .MP4, .MOV, .AVI, .WMV, .FLV, .3GP, .WEBM, .M4V',
        // paramName: 'video'
      }
    }
  },
  methods: {
    dropzoneProgress (file, progress, bytesSent) {
      console.log('dropzoneProgress', JSON.stringify({
        progress,
        bytesSent
      }))
      this.showProgress = true
      this.progressPercentage = Math.trunc(progress)

      if (progress === 100) {
        this.progressStatus = 'success'
        this.progressMsg = 'Video uploaded to server. You will still need to submit content for processing.'
      } else {
        this.progressMsg = 'Uploading video'
      }
    },
    dropzoneError (file, response) {
      console.log('dropzoneError', JSON.stringify({
        response
      }))
    },
    dropzoneSuccess (file, response) {
      if (response && response.hasOwnProperty('files')) {
        var files = response.files
        if (files.hasOwnProperty('file')) {
          delete response.files.file
        }
        for (var f = 0; f < files.length; f++) {
          var file = files[f]
          if (file.hasOwnProperty('file')) {
            delete response.files[f].file
          }
        }
      }
      console.log('dropzoneSuccess', JSON.stringify(response))
      this.video = response
      this.videoUploaded = true
      this.$refs.videoDropzone.disable()
    },
    dropzoneFileAdded (file) {
      console.log('dropzoneFileAdded')
    },
    dropzoneFilesAdded (file) {
      console.log('dropzoneFilesAdded')
    },
    dropzoneRemoveVideo () {
      console.log('dropzoneRemoveVideo')
      this.videoUploaded = false
      this.showProgress = false
      this.$refs.videoDropzone.enable()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
