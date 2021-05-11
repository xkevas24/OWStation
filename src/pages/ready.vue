<style>
.q-menu{
  background-color: white;
}
.q-item--active{
  background-color: #D6EFFF;
}
</style>
<template>
  <q-page padding>
    <q-dialog v-model="Logout" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="img:ne100.png" size="80px" color="white" text-color="white" />
          <span class="q-ml-sm">您希望登出网易通行证吗？</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="取消" color="primary" v-close-popup />
          <q-btn flat label="确认" color="primary" @click="ShowLogout" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div class="row">
      <div class="row" id="unlogin" style="margin-left: 15px">
        <q-item clickable v-ripple>
          <q-item-section side>
            <q-avatar size="53px">
              <img src="ne100.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section @click="showLogin">
            <q-item-label style="font-family: SourceHanSansSC-bold">登录网易通行证</q-item-label>
          </q-item-section>
          <q-item-section side>

          </q-item-section>
        </q-item>
      </div>
      <div class="row" id="logined">
        <q-item clickable v-ripple @click="Logout = true" style="margin-left: 15px">
          <q-item-section side>
            <q-avatar size="53px">
              <img src="rh.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-family: SourceHanSansSC-bold;font-size: 13px">{{username}}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label style="font-family: SourceHanSansSC-bold;font-size: 10px">{{validate}}到期</q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <div class="row">
        <div class="q-pa-md" style="max-width: 400px">
          <q-list padding>
            <q-item>
              <q-item-section side>
                <q-avatar rounded size="53px" class="bg-blue">
                  <q-icon name="img:record.png" size="21px"></q-icon>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label style="color: rgba(166, 166, 166, 100);font-size: 14px;font-family: SourceHanSansSC-regular;">{{g_r1}}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn rounded unelevated style="color: #2196F3;background-color: #E1F3FF;" size="sm" v-bind:label="g_btn1" @click="CreateVideoWindow" disable id="video_false"/>
                <q-btn rounded unelevated style="color: #2196F3;background-color: #E1F3FF;" size="sm" v-bind:label="g_btn1" @click="CreateVideoWindow" id="video_true"/>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section side>
                <q-avatar rounded size="53px" class="bg-blue">
                  <q-icon name="img:ow.png" size="21px"></q-icon>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label style="color: rgba(166, 166, 166, 100);font-size: 14px;font-family: SourceHanSansSC-regular;">{{g_r2}}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn rounded unelevated style="color: #2196F3;background-color: #E1F3FF;" size="sm" v-bind:label="g_btn2" @click="CreateGameWindow" disable id="game_false"/>
                <q-btn rounded unelevated style="color: #2196F3;background-color: #E1F3FF;" size="sm" v-bind:label="g_btn2" @click="CreateGameWindow"  id="game_true"/>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section side>
                <q-avatar rounded size="53px" class="bg-blue">
                  <q-icon name="img:map.png" size="21px"></q-icon>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label style="color: rgba(166, 166, 166, 100);font-size: 14px;font-family: SourceHanSansSC-regular;">{{g_r3}}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn rounded unelevated style="color: #FF7B2D;background-color: #FFDFCC" size="sm" v-bind:label="g_btn3"/>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="q-pa-md" style="max-width: 400px">
          <q-list padding>
            <q-item >
              <q-item-section side>
                <q-icon name="fas fa-cog"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label style="font-family: SourceHanSansSC-bold;color: rgba(149, 149, 149, 100);font-size: 14px;font-weight: bold">{{g_h1}}</q-item-label>
              </q-item-section>
              <q-item-section side>
              </q-item-section>
            </q-item>
            <q-item style="display: none">
              <q-item-section side>
                <q-item-label style="font-family: SourceHanSansSC;color: rgba(16, 16, 16, 100);font-size: 14px;">{{g_s1}}</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-btn rounded unelevated size="sm" v-bind:label="g_s1_i" style="width: 102px;color: #2196F3;background-color: #E1F3FF" @click="Game_PP"/>
              </q-item-section>
              <q-item-section side>
                <q-icon name="help" size="14px" color="orange"></q-icon>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section side>
                <q-item-label style="font-family: SourceHanSansSC;color: rgba(16, 16, 16, 100);font-size: 14px;">{{g_s2}}</q-item-label>
              </q-item-section>
              <q-item-section>
                <div class="row">
                  <div class="col" style="padding-right: 20px">
                    <q-btn unelevated size="sm" label="中文" v-bind:class="langzh" @click="langChange('zh')"/>
                  </div>
                  <div class="col" style="padding-left: 20px;padding-right: 20px">
                    <q-btn unelevated  size="sm" label="English" v-bind:class="langen" @click="langChange('en')" disable/>
                  </div>
                  <div class="col" style="padding-left: 20px;padding-right: 20px">
                    <q-btn unelevated  size="sm" label="한국어" v-bind:class="langkr" @click="langChange('kr')" disable/>
                  </div>
                </div>




              </q-item-section>
              <q-item-section side>

              </q-item-section>
            </q-item>
            <q-item style="display: none">
              <q-item-section side>
                <q-item-label style="font-family: SourceHanSansSC;color: rgba(16, 16, 16, 100);font-size: 14px;">{{g_s3}}</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-checkbox v-model="bb_active" v-bind:label="g_s3_i" @click="bbSwitch"/>
              </q-item-section>
              <q-item-section side>

              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section side>
                <q-item-label style="font-family: SourceHanSansSC;color: rgba(16, 16, 16, 100);font-size: 14px;">{{g_s4}}</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-checkbox v-model="touch_active" v-bind:label="g_s4_i"/>
              </q-item-section>
              <q-item-section side>

              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section side>
                <q-item-label style="font-family: SourceHanSansSC;color: rgba(16, 16, 16, 100);font-size: 14px;">{{g_s5}}</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-checkbox v-model="tail_active" v-bind:label="g_s5_i"/>
              </q-item-section>
              <q-item-section side>

              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>


    <q-dialog v-model="videoSetting">
      <q-card style="width: 400px">
        <q-card-section>
          <p style="color: rgba(16, 16, 16, 100);font-size: 14px;font-family: SourceHanSansSC-bold;font-weight: bold;padding-top: 10px">战队A</p>
          <q-select rounded standout bg-color="blue-2" v-model="teamA" :options="teams"/>
          <p style="color: rgba(16, 16, 16, 100);font-size: 14px;font-family: SourceHanSansSC-bold;font-weight: bold;padding-top: 10px">战队B</p>
          <q-select rounded standout bg-color="deep-orange-3" v-model="teamB" :options="teams"/>
          <!--<p style="color: rgba(16, 16, 16, 100);font-size: 14px;font-family: SourceHanSansSC-bold;font-weight: bold;padding-top: 10px">地图</p>
          <q-select rounded standout v-model="teamB" :options="teams"/>-->
          <p style="color: rgba(16, 16, 16, 100);font-size: 14px;font-family: SourceHanSansSC-bold;font-weight: bold;padding-top: 10px">选择录像</p>
          <q-file
            v-model="videosrc"
            filled
            id="videouploader"
            accept="video/mp4"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click.stop="model = null" class="cursor-pointer" />
            </template>
          </q-file>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn color="blue" class="full-width" label="进入复盘" @click="saveVideoSetting"/>
          <p style="padding-top: 10px;color: rgba(198, 198, 198, 100);font-size: 14px;font-family: SourceHanSansSC;cursor:pointer;" @click="videoSetting=false">返回</p>
        </q-card-actions>
      </q-card>
    </q-dialog>


  </q-page>
</template>

<script>
const axios = require('axios');
const fs = require("fs")
var LoginWindow;
var cvl;
export default {
  name: 'ready',
  data() {
    return {
      username: '',
      trueusername: '',
      client_rd: '',
      crddata: '',
      validate: '',
      valistatus: false,
      Logout: false,
      videosrc: '',
      bb_active: true,
      touch_active: false,
      tail_active: false,
      videoSetting:false,
      teams: null,
      teamA: null,
      teamB: null,
      owl:{
        zh: [
          '亚特兰大君临队','波士顿崛起队','成都猎人队','达拉斯燃料队','佛罗里达狂欢队','广州冲锋队','杭州闪电队','休斯顿神枪手队','伦敦喷火战斗机队','洛杉矶角斗士队','洛杉矶英勇队',
          '纽约九霄天擎队','巴黎永生队','费城融合队','旧金山震动队','首尔王朝队','上海龙之队','多伦多捍卫者队','温哥华泰坦队','华盛顿正义队',
          'AE','BTRG','FLAG','LAB','LF','LGD','LGE','RS','T1w','TEAM CC','TSL','ZOO'
        ],
        en: [
          'Atlanta Reign','Boston Uprising','Chengdu Hunters','Dallas Fuel','Florida Mayhem','Guangzhou Charge','Hangzhou Spark','Houston Outlaws','London Spitfire',
          'Los Angeles Gladiators','Los Angeles Valiant','New York Excelsior','Paris Eternal','Philadelphia Fusion','San Francisco Shock','Seoul Dynasty','Shanghai Dragons',
          'Toronto Defiant','Vancouver Titans','Washington, DC Justice',
          'AE','BTRG','FLAG','LAB','LF','LGD','LGE','RS','T1w','TEAM CC','TSL','ZOO'
        ],
        kr: [
          'Atlanta Reign','Boston Uprising','Chengdu Hunters','Dallas Fuel','Florida Mayhem','Guangzhou Charge','Hangzhou Spark','Houston Outlaws','London Spitfire',
          'Los Angeles Gladiators','Los Angeles Valiant','New York Excelsior','Paris Eternal','Philadelphia Fusion','San Francisco Shock','Seoul Dynasty','Shanghai Dragons',
          'Toronto Defiant','Vancouver Titans','Washington, DC Justice',
          'AE','BTRG','FLAG','LAB','LF','LGD','LGE','RS','T1w','TEAM CC','TSL','ZOO'
        ]
      },
      lang: this.$q.localStorage.getItem('lang'),
      g_r1: "",
      g_r2: "",
      g_r3: "",
      g_btn1: "",
      g_btn2: "",
      g_btn3: "",
      g_h1: "",
      g_s1: "",
      g_s2: "",
      g_s3: "",
      g_s4: "",
      g_s5: "",
      g_s1_i: "",
      g_s1_info: "",
      g_s3_i: "",
      g_s4_i: "",
      g_s5_i: "",
      zh : {
        r1: "添加一段录像复盘",
        r2: "直接在游戏窗口上复盘",
        r3: "基于地图进行战术布置",
        btn1:"启动",
        btn2:"启动",
        btn3:"即将上线",
        h1: "系统设置",
        s1: "遥控匹配",
        s2: "语言设置",
        s3: "小黑板",
        s4: "触屏设备",
        s5: "点击焦点",
        s1_i: "开启蓝牙匹配",
        s1_info: "无法匹配",
        s3_i: "默认开启",
        s4_i: "勾选则自动适配触屏设备",
        s5_i: "勾选后，点击会出现一个红色焦点",
      },
      en : {
        r1: "Import a replay video",
        r2: "Draw over game",
        r3: "Draw over map",
        btn1:"Start",
        btn2:"Start",
        btn3:"Online Soon",
        h1: "System Settings",
        s1: "Remote Control",
        s2: "Language",
        s3: "Blackboard",
        s4: "Touch Screen",
        s1_i: "Bluetooth",
        s1_info: "Cannot Connet",
        s3_i: "Open Default",
        s4_i: "Tick to fit touch screen",
      },
      kr : {
        r1: "비디오 복사를 추가",
        r2: "게임 화면에 그리",
        r3: "부감 지도에서 그리",
        btn1:"가동",
        btn2:"가동",
        btn3:"온라인 게임",
        h1: "시스템 설정",
        s1: "리모컨",
        s2: "언어",
        s3: "칠판",
        s4: "Touch Screen",
        s1_i: "연결할 수 있음",
        s1_info: "일치할 수 없음",
        s3_i: "기본값 켜기",
        s4_i: "Tick to fit touch screen",
      },
      langzh: "btn-active",
      langen: "btn-disable",
      langkr: "btn-disable",
    }
  },
  watch: {
    valistatus(val, oldVal){
      if(val){
        document.getElementById('video_false').style.display='none'
        document.getElementById('video_true').style.display='block'
        document.getElementById('game_false').style.display='none'
        document.getElementById('game_true').style.display='block'
      }else{
        document.getElementById('video_false').style.display='block'
        document.getElementById('video_true').style.display='none'
        document.getElementById('game_false').style.display='block'
        document.getElementById('game_true').style.display='none'
      }
    },
    videosrc(val, oldVal){
      this.$q.localStorage.set('videoSrc',val.path)
    },
    lang(val, oldVal){
     var lang = val
      if(lang==="zh"){
        this.g_r1 = this.zh.r1
        this.g_r2 = this.zh.r2
        this.g_r3 = this.zh.r3
        this.g_btn1 = this.zh.btn1
        this.g_btn2 = this.zh.btn2
        this.g_btn3 = this.zh.btn3
        this.g_h1 = this.zh.h1
        this.g_s1 = this.zh.s1
        this.g_s2 = this.zh.s2
        this.g_s3 = this.zh.s3
        this.g_s4 = this.zh.s4
        this.g_s1_i = this.zh.s1_i
        this.g_s1_info = this.zh.s1_info
        this.g_s3_i = this.zh.s3_i
        this.g_s4_i = this.zh.s4_i
      }
      if(lang==="en"){
        this.g_r1 = this.en.r1
        this.g_r2 = this.en.r2
        this.g_r3 = this.en.r3
        this.g_btn1 = this.en.btn1
        this.g_btn2 = this.en.btn2
        this.g_btn3 = this.en.btn3
        this.g_h1 = this.en.h1
        this.g_s1 = this.en.s1
        this.g_s2 = this.en.s2
        this.g_s3 = this.en.s3
        this.g_s4 = this.en.s4
        this.g_s1_i = this.en.s1_i
        this.g_s1_info = this.en.s1_info
        this.g_s3_i = this.en.s3_i
        this.g_s4_i = this.en.s4_i
      }
      if(lang==="kr"){
        this.g_r1 = this.kr.r1
        this.g_r2 = this.kr.r2
        this.g_r3 = this.kr.r3
        this.g_btn1 = this.kr.btn1
        this.g_btn2 = this.kr.btn2
        this.g_btn3 = this.kr.btn3
        this.g_h1 = this.kr.h1
        this.g_s1 = this.kr.s1
        this.g_s2 = this.kr.s2
        this.g_s3 = this.kr.s3
        this.g_s4 = this.kr.s4
        this.g_s1_i = this.kr.s1_i
        this.g_s1_info = this.kr.s1_info
        this.g_s3_i = this.kr.s3_i
        this.g_s4_i = this.kr.s4_i
      }
    },
    touch_active(val){
      this.$q.localStorage.set('touch',val)
    },
    tail_active(val){
      this.$q.localStorage.set('tail',val)
    }
  },
  mounted() {
    // 生成客户端码
    this.client_rd = this.RandomString(64);
    // 语言选项
    var lan = this.lang
    this.langChange(lan)
    this.teams = this.owl[lan]
    if(lan==="zh"){
      this.g_r1 = this.zh.r1
      this.g_r2 = this.zh.r2
      this.g_r3 = this.zh.r3
      this.g_btn1 = this.zh.btn1
      this.g_btn2 = this.zh.btn2
      this.g_btn3 = this.zh.btn3
      this.g_h1 = this.zh.h1
      this.g_s1 = this.zh.s1
      this.g_s2 = this.zh.s2
      this.g_s3 = this.zh.s3
      this.g_s4 = this.zh.s4
      this.g_s5 = this.zh.s5
      this.g_s1_i = this.zh.s1_i
      this.g_s1_info = this.zh.s1_info
      this.g_s3_i = this.zh.s3_i
      this.g_s4_i = this.zh.s4_i
      this.g_s5_i = this.zh.s5_i
    }
    if(lan==="en"){
      this.g_r1 = this.en.r1
      this.g_r2 = this.en.r2
      this.g_r3 = this.en.r3
      this.g_btn1 = this.en.btn1
      this.g_btn2 = this.en.btn2
      this.g_btn3 = this.en.btn3
      this.g_h1 = this.en.h1
      this.g_s1 = this.en.s1
      this.g_s2 = this.en.s2
      this.g_s3 = this.en.s3
      this.g_s4 = this.en.s4
      this.g_s1_i = this.en.s1_i
      this.g_s1_info = this.en.s1_info
      this.g_s3_i = this.en.s3_i
      this.g_s4_i = this.en.s4_i
    }
    if(lan==="kr"){
      this.g_r1 = this.kr.r1
      this.g_r2 = this.kr.r2
      this.g_r3 = this.kr.r3
      this.g_btn1 = this.kr.btn1
      this.g_btn2 = this.kr.btn2
      this.g_btn3 = this.kr.btn3
      this.g_h1 = this.kr.h1
      this.g_s1 = this.kr.s1
      this.g_s2 = this.kr.s2
      this.g_s3 = this.kr.s3
      this.g_s4 = this.kr.s4
      this.g_s1_i = this.kr.s1_i
      this.g_s1_info = this.kr.s1_info
      this.g_s3_i = this.kr.s3_i
      this.g_s4_i = this.kr.s4_i
    }
    // 网易通行证登录
    // 判断是否有登录记录
    var login = this.$q.localStorage.getItem('ntes')
    if(login == null){
      //没有登录，显示登录按钮
      document.getElementById('unlogin').style.display='block'
      document.getElementById('logined').style.display='none'

      document.getElementById('video_false').style.display='block'
      document.getElementById('video_true').style.display='none'
      document.getElementById('game_false').style.display='block'
      document.getElementById('game_true').style.display='none'

    }else{
      document.getElementById('unlogin').style.display='none'
      document.getElementById('logined').style.display='block'
      this.trueusername = login
      this.username = this.PhoneHide(login)
      //判断有效期限
      if(this.valistatus === true){
        document.getElementById('video_false').style.display='none'
        document.getElementById('video_true').style.display='block'
        document.getElementById('game_false').style.display='none'
        document.getElementById('game_true').style.display='block'
      }else{
        document.getElementById('video_false').style.display='block'
        document.getElementById('video_true').style.display='none'
        document.getElementById('game_false').style.display='block'
        document.getElementById('game_true').style.display='none'
      }
      cvl = setInterval(this.CheckValidate,1000)
    }

    // 记住选项
    this.teamA = this.code2team(this.$q.localStorage.getItem('teamA'))
    this.teamB = this.code2team(this.$q.localStorage.getItem('teamB'))
  },
  created() {
    if (this.$q.localStorage.getItem('touch') === null) {
      this.touch_active = false
    }else{
      this.touch_active = this.$q.localStorage.getItem('touch')
    }
    if (this.$q.localStorage.getItem('tail') === null) {
      this.tail_active = false
    }else{
      this.tail_active = this.$q.localStorage.getItem('tail')
    }
    var cp = require("child_process")
    cp.execFile('runtime.bat', (error) => {
      console.log(error);
    });
    var Mousetrap = require('mousetrap');
    Mousetrap.bind('ctrl+r', null)
    Mousetrap.bind('ctrl+shift+i', null)
    Mousetrap.bind('f5', null)
  },
  methods: {
    RandomString(len) {
      len = len || 32;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      var maxPos = $chars.length;
      var pwd = '';
      var i=0;
      for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    },
    CreateVideoWindow() {
      this.videoSetting = true



      /*this.$q.localStorage.set('workmode','video')
      console.log('video')
      const ipcRenderer = require('electron').ipcRenderer;
      ipcRenderer.sendSync('synchronous-message', 'replay-on')
      ipcRenderer.on('asynchronous-reply', function(event, arg) {
        // console.log(arg);
      });
      ipcRenderer.send('asynchronous-message', 'replay-on');*/
    },
    CreateGameWindow() {
      //检测守望先锋是否在运行
      var fs = require('fs');
      var runtime = false
      var owwindow = false
      var runtimedata = ''
      runtimedata = fs.readFileSync('GameRuntime\\runtime.ow', 'utf8');
      if(runtimedata === "SLEEPING-UNKNOWN"){
        runtime = false
        owwindow = false
      }else{
        runtime = true
        owwindow = true
      }
      if(runtime){
        if(owwindow === false){
          this.$q.notify({
            position: 'center',
            message: '请将游戏设置为最大化的窗口化运行',
            color: 'orange',
            classes: 'rd5'
          })
        }else{
          /*const ipcRenderer = require('electron').ipcRenderer;
          console.log(ipcRenderer.sendSync('synchronous-message', 'replay-on'));
          ipcRenderer.on('asynchronous-reply', function(event, arg) {
            console.log(arg);
          });
          ipcRenderer.send('asynchronous-message', 'game-on');*/
          const ipcRenderer = require('electron').ipcRenderer;
          ipcRenderer.sendSync('synchronous-message', 'game-on')
          ipcRenderer.on('asynchronous-reply', function(event, arg) {
          });
          ipcRenderer.send('asynchronous-message', 'game-on');

          ipcRenderer.sendSync('synchronous-message', 'ready-off')
          ipcRenderer.on('asynchronous-reply', function(event, arg) {
          });
          ipcRenderer.send('asynchronous-message', 'ready-off');
          this.$q.electron.remote.getCurrentWindow().hide()
        }
      }else{
        this.$q.notify({
          position: 'center',
          message: '游戏未运行',
          color: 'orange',
          classes: 'rd5'
        })
      }

    },
    langChange(lang) {
      this.lang = lang
      this.$q.localStorage.set('lang',lang)
      if (lang==="zh"){
        this.langzh = 'btn-active'
        this.langen = 'btn-disable'
        this.langkr = 'btn-disable'
      }
      if (lang==="en"){
        this.langzh = 'btn-disable'
        this.langen = 'btn-active'
        this.langkr = 'btn-disable'
      }
      if (lang==="kr"){
        this.langzh = 'btn-disable'
        this.langen = 'btn-disable'
        this.langkr = 'btn-active'
      }
    },
    bbSwitch() {

    },
    saveVideoSetting(){
      this.videoSetting = false
      var teamA = this.teamA
      var teamB = this.teamB
      // 队伍转编号
      this.$q.localStorage.set('teamA',this.team2code(teamA))
      this.$q.localStorage.set('teamB',this.team2code(teamB))


      this.$q.localStorage.set('workmode','video')
      const ipcRenderer = require('electron').ipcRenderer;
      ipcRenderer.sendSync('synchronous-message', 'replay-on')
      ipcRenderer.on('asynchronous-reply', function(event, arg) {
      });
      ipcRenderer.send('asynchronous-message', 'replay-on');

      ipcRenderer.sendSync('synchronous-message', 'ready-off')
      ipcRenderer.on('asynchronous-reply', function(event, arg) {
      });
      ipcRenderer.send('asynchronous-message', 'ready-off');

    },
    team2code(team){
      var zh = {
        '亚特兰大君临队':'o1','波士顿崛起队':'o2','成都猎人队':'o3','达拉斯燃料队':'o4',
        '佛罗里达狂欢队':'o5','广州冲锋队':'o6','杭州闪电队':'o7','休斯顿神枪手队':'o8',
        '伦敦喷火战斗机队':'o9','洛杉矶角斗士队':'o10','洛杉矶英勇队':'o11',
        '纽约九霄天擎队':'o12','巴黎永生队':'o13','费城融合队':'o14','旧金山震动队':'o15',
        '首尔王朝队':'o16','上海龙之队':'o17','多伦多捍卫者队':'o18','温哥华泰坦队':'o19','华盛顿正义队':'o20'
        ,
        'AE':'c1','BTRG':'c2','FLAG':'c3','LAB':'c4','LF':'c5','LGD':'c6','LGE':'c7','RS':'c8','T1w':'c9','TEAM CC':'c10','TSL':'c11','ZOO':'c12'
      }
      var en = {
        'Atlanta Reign':'o1',
        'Boston Uprising':'o2',
        'Chengdu Hunters':'o3',
        'Dallas Fuel':'o4',
        'Florida Mayhem':'o5',
        'Guangzhou Charge':'o6',
        'Hangzhou Spark':'o7',
        'Houston Outlaws':'o8',
        'London Spitfire':'o9',
        'Los Angeles Gladiators':'o10',
        'Los Angeles Valiant':'o11',
        'New York Excelsior':'o12',
        'Paris Eternal':'o13',
        'Philadelphia Fusion':'o14',
        'San Francisco Shock':'o15',
        'Seoul Dynasty':'o16',
        'Shanghai Dragons':'o17',
        'Toronto Defiant':'o18',
        'Vancouver Titans':'o19',
        'Washington, DC Justice':'o20',
        'AE':'c1','BTRG':'c2','FLAG':'c3','LAB':'c4','LF':'c5','LGD':'c6','LGE':'c7','RS':'c8','T1w':'c9','TEAM CC':'c10','TSL':'c11','ZOO':'c12'
      }
      var kr = {
        'Atlanta Reign':'o1',
        'Boston Uprising':'o2',
        'Chengdu Hunters':'o3',
        'Dallas Fuel':'o4',
        'Florida Mayhem':'o5',
        'Guangzhou Charge':'o6',
        'Hangzhou Spark':'o7',
        'Houston Outlaws':'o8',
        'London Spitfire':'o9',
        'Los Angeles Gladiators':'o10',
        'Los Angeles Valiant':'o11',
        'New York Excelsior':'o12',
        'Paris Eternal':'o13',
        'Philadelphia Fusion':'o14',
        'San Francisco Shock':'o15',
        'Seoul Dynasty':'o16',
        'Shanghai Dragons':'o17',
        'Toronto Defiant':'o18',
        'Vancouver Titans':'o19',
        'Washington, DC Justice':'o20',
        'AE':'c1','BTRG':'c2','FLAG':'c3','LAB':'c4','LF':'c5','LGD':'c6','LGE':'c7','RS':'c8','T1w':'c9','TEAM CC':'c10','TSL':'c11','ZOO':'c12'
      }
      if(this.$q.localStorage.getItem('lang')==="zh"){
        return zh[team]
      }
      if(this.$q.localStorage.getItem('lang')==="en"){
        return en[team]
      }
      if(this.$q.localStorage.getItem('lang')==="kr"){
        return kr[team]
      }
    },
    code2team(code){
      var zh = {
        'o1':'亚特兰大君临队','o2':'波士顿崛起队','o3':'成都猎人队','o4':'达拉斯燃料队',
        'o5':'佛罗里达狂欢队','o6':'广州冲锋队','o7':'杭州闪电队','o8':'休斯顿神枪手队',
        'o9':'伦敦喷火战斗机队','o10':'洛杉矶角斗士队','o11':'洛杉矶英勇队',
        'o12':'纽约九霄天擎队','o13':'巴黎永生队','o14':'费城融合队','o15':'旧金山震动队',
        'o16':'首尔王朝队','o17':'上海龙之队','o18':'多伦多捍卫者队','o19':'温哥华泰坦队','o20':'华盛顿正义队',
        'c1':'AE','c2':'BTRG','c3':'FLAG','c4':'LAB','c5':'LF','c6':'LGD','c7':'LGE','c8':'RS','c9':'T1w','c10':'TEAM CC','c11':'TSL','c12':'ZOO'
      }
      if(this.$q.localStorage.getItem('lang')==="zh"){
        return zh[code]
      }
    },
    videouploader(file){

    },
    Game_PP(){
      //判断当前是否穿透

      // fs.writeFile('OWHook\\ccc', 'PP',  function(err) {});
    },
    showLogin() {
      this.client_rd = this.RandomString(64)
      const BrowserWindow =require('electron').remote.BrowserWindow
      LoginWindow = null;
      LoginWindow =new BrowserWindow({
        width:480,
        height:450,
        frame:true,//是否显示边缘框
        fullscreen:false, //是否全屏显示
        webPreferences: {
          nodeIntegration: process.env.QUASAR_NODE_INTEGRATION,
          nodeIntegrationInWorker: process.env.QUASAR_NODE_INTEGRATION,
          webSecurity: false,
          devTools:true,
        }
      })
      LoginWindow.setMenu(null)
      LoginWindow.loadURL(`http://ronghuogame.com/app/ntes.html?crd=`+this.client_rd);
      // 监听登录情况
      var lst = setInterval(this.LoginCheck,1000)
      LoginWindow.on('close',()=>{
        clearInterval(lst)
        LoginWindow=null
      })
    },
    LoginCheck(){
      axios.get('https://ronghuogame.com/app/crd_listen.ow?crd='+this.client_rd)
        .then((response) => {
          this.crddata = response.data
          var dt = response.data
          if(dt.status === 'success'){
            this.trueusername = dt.username
            this.username = this.PhoneHide(dt.username)
            //关闭窗口
            LoginWindow.close()
            this.$q.localStorage.set('ntes', dt.username)
            document.getElementById('unlogin').style.display='none'
            document.getElementById('logined').style.display='block'
            clearInterval(cvl)
            cvl = setInterval(this.CheckValidate,1000)
          }
        })
    },
    PhoneHide(cellValue){
      if (Number(cellValue) && String(cellValue).length === 11) {
        var mobile = String(cellValue)
        var reg = /^(\d{3})\d{4}(\d{4})$/
        return mobile.replace(reg, '$1****$2')
      } else {
        return cellValue
      }
    },
    ShowLogout(){
      this.$q.localStorage.remove('ntes')
      this.username = ''
      this.trueusername = ''
      document.getElementById('unlogin').style.display='block'
      document.getElementById('logined').style.display='none'
      document.getElementById('video_false').style.display='block'
      document.getElementById('video_true').style.display='none'
      document.getElementById('game_false').style.display='block'
      document.getElementById('game_true').style.display='none'
    },
    CheckValidate(){
      axios.get('https://ronghuogame.com/app/ow_validate.ow?username='+this.trueusername)
        .then((response) => {
          this.validate = response.data.validate
          this.valistatus = response.data.valistatus
        })
    }

  }
}
</script>
