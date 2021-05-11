<template>
  <div class="row flex flex-center" id="playerDiv">
    <!--<q-media-player
      ref="MainPlayer"
      type="video"
      background-color="black"
      :autoplay="false"
      :show-big-play-button="true"
      :sources="video.sources"
      :poster="video.poster"
      track-language="Chinese"
      style="height: 100% !important;"
    >
    </q-media-player>-->
    <video  height="100%" id="MainPlayer"></video>
</div>

</template>

<script>
import {globalShortcut} from "electron";

export default {
  name: 'PageIndex',
  data () {
    return {
      video: {
        sources: [
          {
            src: 'demo.mp4',
            type: 'video/mp4'
          }
        ]
      },
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight
    }
  },
  watch:{
    'screenWidth':function(){
      this.FitPlayer ()
    },
    'screenHeight':function(){
      this.FitPlayer ()
    }
  },
  created () {
    // document.getElementById('playerDiv').clientHeight
  },
  mounted () {
    this.FitPlayer ()
    window.onresize = function() { // 定义窗口大小变更通知事件
      var h = document.body.clientHeight - document.getElementById('MainHeader').clientHeight - document.getElementById('MainFooter').clientHeight
      document.getElementById('playerDiv').style.cssText = 'height: ' + h + 'px'
    }
    // setInterval(this.ppFlagListen,200)
    document.getElementById('MainPlayer').volume = 0.3
    // 使video标签居中
  },
  methods: {
    FitPlayer () {
      var h = document.body.clientHeight - document.getElementById('MainHeader').clientHeight - document.getElementById('MainFooter').clientHeight
      document.getElementById('playerDiv').style.cssText = 'height: ' + h + 'px'
    }
  }
}
</script>
