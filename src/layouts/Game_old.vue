<style>
body{

}
</style>
<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white text-primary q-electron-drag">
      <q-toolbar>
        <q-avatar>
          <img src="owl.png">
        </q-avatar>

        <span class="replay-left-title">{{g_title}}</span>

        <q-toolbar-title class="text-center" style="color: rgba(16, 16, 16, 100);font-size: 14px;font-family: SourceHanSansSC;">
          <q-avatar rounded>
            <img v-bind:src="teamAlogo">
          </q-avatar>
          <span style="padding-left: 20px;padding-right: 20px">{{teamAname}}</span>
          <span style="font-size: 20px;font-weight: bold;padding-left: 20px;padding-right: 20px">VS</span>
          <span style="padding-left: 20px;padding-right: 20px">{{teamBname}}</span>
          <q-avatar rounded>
            <img v-bind:src="teamBlogo">
          </q-avatar>
        </q-toolbar-title>
        <q-btn flat rounded dense icon="fas fa-bars" size="10px" color="grey-7" @click="Game_PP">
          <q-tooltip content-style="background-color: #D6EFFF;color:#42B1F8">
            {{btn_setting}}
          </q-tooltip>
        </q-btn>
        <q-btn flat rounded dense icon="fas fa-expand" size="10px" color="grey-7" @click="windowFullScreen">
          <q-tooltip content-style="background-color: #D6EFFF;color:#42B1F8">
            {{btn_fullscreen}}
          </q-tooltip>
        </q-btn>
        <q-btn flat rounded dense icon="fas fa-sign-out-alt" size="10px" color="grey-7" @click="windowClose">
          <q-tooltip content-style="background-color: #D6EFFF;color:#42B1F8">
            {{btn_exit}}
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>


    <q-page-container>
      <q-page>
        <q-drawer
          side="right"
          show-if-above
          :width="65"

          :breakpoint="65"
          content-class="bg-dark"
          style="opacity: 0.9;max-width: 65px"
        >
        </q-drawer>
        <div id="heroLayer" class="hero-layer" style="z-index: 50">
          <div style="height: 60px"></div>
          <div class="row hero-left">
            <div id="r1" class="tdiv" @contextmenu="SwitchHero('r1')" v-touch-pan.mouse="heroPanr1">
              <div id="r1header" class="tdivheader">
                <q-fab color="red" push :icon="r1icon" class="herofab" direction="right" id="r1fab">
                  <q-avatar color="red" @click="FabSwitch('dva','r1')">
                    <img src="heroes/dva.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('奥丽莎','r1')">
                    <img src="heroes/奥丽莎.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('莱因哈特','r1')">
                    <img src="heroes/莱因哈特.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('路霸','r1')">
                    <img src="heroes/路霸.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('温斯顿','r1')">
                    <img src="heroes/温斯顿.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('查莉娅','r1')">
                    <img src="heroes/查莉娅.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('破坏球','r1')">
                    <img src="heroes/破坏球.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('西格玛','r1')">
                    <img src="heroes/西格玛.png" draggable="false">
                  </q-avatar>
                </q-fab>
              </div>
            </div>
          </div>
          <div class="row hero-left">
            <div id="r2" class="tdiv" @contextmenu="SwitchHero('r2')" v-touch-pan.mouse="heroPanr2">
              <div id="r2header" class="tdivheader">
                <q-fab color="red" push :icon="r2icon" class="herofab" direction="right" id="r2fab">
                  <q-avatar color="red" @click="FabSwitch('dva','r2')">
                    <img src="heroes/dva.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('奥丽莎','r2')">
                    <img src="heroes/奥丽莎.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('莱因哈特','r2')">
                    <img src="heroes/莱因哈特.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('路霸','r2')">
                    <img src="heroes/路霸.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('温斯顿','r2')">
                    <img src="heroes/温斯顿.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('查莉娅','r2')">
                    <img src="heroes/查莉娅.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('破坏球','r2')">
                    <img src="heroes/破坏球.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('西格玛','r2')">
                    <img src="heroes/西格玛.png" draggable="false">
                  </q-avatar>
                </q-fab>
              </div>
            </div>
          </div>
          <div class="row hero-left">
            <div id="r3" class="tdiv" @contextmenu="SwitchHero('r3')" v-touch-pan.mouse="heroPanr3">
              <div id="r3header" class="tdivheader">
                <q-fab color="red" push :icon="r3icon" class="herofab" direction="right" id="r3fab">
                  <q-avatar color="red" @click="FabSwitch('艾什','r3')">
                    <img src="heroes/艾什.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('堡垒','r3')">
                    <img src="heroes/堡垒.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('末日铁拳','r3')">
                    <img src="heroes/末日铁拳.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('源氏','r3')">
                    <img src="heroes/源氏.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('半藏','r3')">
                    <img src="heroes/半藏.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('狂鼠','r3')">
                    <img src="heroes/狂鼠.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('麦克雷','r3')">
                    <img src="heroes/麦克雷.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('美','r3')">
                    <img src="heroes/美.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('法老之鹰','r3')">
                    <img src="heroes/法老之鹰.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('死神','r3')">
                    <img src="heroes/死神.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('士兵：76','r3')">
                    <img src="heroes/士兵：76.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('黑影','r3')">
                    <img src="heroes/黑影.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('秩序之光','r3')">
                    <img src="heroes/秩序之光.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('托比昂','r3')">
                    <img src="heroes/托比昂.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('猎空','r3')">
                    <img src="heroes/猎空.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('黑百合','r3')">
                    <img src="heroes/黑百合.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('回声','r3')">
                    <img src="heroes/回声.png" draggable="false">
                  </q-avatar>
                </q-fab>
              </div>
            </div>
          </div>
          <div class="row hero-left">
            <div id="r4" class="tdiv" @contextmenu="SwitchHero('r4')" v-touch-pan.mouse="heroPanr4">
              <div id="r4header" class="tdivheader">
                <q-fab color="red" push :icon="r4icon" class="herofab" direction="right" id="r4fab">
                  <q-avatar color="red" @click="FabSwitch('艾什','r4')">
                    <img src="heroes/艾什.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('堡垒','r4')">
                    <img src="heroes/堡垒.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('末日铁拳','r4')">
                    <img src="heroes/末日铁拳.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('源氏','r4')">
                    <img src="heroes/源氏.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('半藏','r4')">
                    <img src="heroes/半藏.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('狂鼠','r4')">
                    <img src="heroes/狂鼠.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('麦克雷','r4')">
                    <img src="heroes/麦克雷.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('美','r4')">
                    <img src="heroes/美.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('法老之鹰','r4')">
                    <img src="heroes/法老之鹰.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('死神','r4')">
                    <img src="heroes/死神.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('士兵：76','r4')">
                    <img src="heroes/士兵：76.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('黑影','r4')">
                    <img src="heroes/黑影.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('秩序之光','r4')">
                    <img src="heroes/秩序之光.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('托比昂','r4')">
                    <img src="heroes/托比昂.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('猎空','r4')">
                    <img src="heroes/猎空.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('黑百合','r4')">
                    <img src="heroes/黑百合.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('回声','r4')">
                    <img src="heroes/回声.png" draggable="false">
                  </q-avatar>
                </q-fab>
              </div>
            </div>
          </div>
          <div class="row hero-left">
            <div id="r5" class="tdiv" @contextmenu="SwitchHero('r5')" v-touch-pan.mouse="heroPanr5">
              <div id="r5header" class="tdivheader">
                <q-fab color="red" push :icon="r5icon" class="herofab" direction="right" id="r5fab">
                  <q-avatar color="red" @click="FabSwitch('安娜','r5')">
                    <img src="heroes/安娜.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('布丽吉塔','r5')">
                    <img src="heroes/布丽吉塔.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('卢西奥','r5')">
                    <img src="heroes/卢西奥.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('天使','r5')">
                    <img src="heroes/天使.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('莫伊拉','r5')">
                    <img src="heroes/莫伊拉.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('禅雅塔','r5')">
                    <img src="heroes/禅雅塔.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('巴蒂斯特','r5')">
                    <img src="heroes/巴蒂斯特.png" draggable="false">
                  </q-avatar>
                </q-fab>
              </div>
            </div>
          </div>
          <div class="row hero-left">
            <div id="r6" class="tdiv" @contextmenu="SwitchHero('r6')" v-touch-pan.mouse="heroPanr6">
              <div id="r6header" class="tdivheader">
                <q-fab color="red" push :icon="r6icon" class="herofab" direction="right" id="r6fab">
                  <q-avatar color="red" @click="FabSwitch('安娜','r6')">
                    <img src="heroes/安娜.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('布丽吉塔','r6')">
                    <img src="heroes/布丽吉塔.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('卢西奥','r6')">
                    <img src="heroes/卢西奥.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('天使','r6')">
                    <img src="heroes/天使.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('莫伊拉','r6')">
                    <img src="heroes/莫伊拉.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('禅雅塔','r6')">
                    <img src="heroes/禅雅塔.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="red" @click="FabSwitch('巴蒂斯特','r6')">
                    <img src="heroes/巴蒂斯特.png" draggable="false">
                  </q-avatar>
                </q-fab>
              </div>
            </div>
          </div>
          <div class="row hero-left">
            <div id="b1" class="tdiv" @contextmenu="SwitchHero('b1')">
              <div id="b1header" class="tdivheader">
                <q-fab color="blue" push :icon="b1icon" class="herofab" direction="right" id="b1fab">
                  <q-avatar color="blue" @click="FabSwitch('dva','b1')">
                    <img src="heroes/dva.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('奥丽莎','b1')">
                    <img src="heroes/奥丽莎.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('莱因哈特','b1')">
                    <img src="heroes/莱因哈特.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('路霸','b1')">
                    <img src="heroes/路霸.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('温斯顿','b1')">
                    <img src="heroes/温斯顿.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('查莉娅','b1')">
                    <img src="heroes/查莉娅.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('破坏球','b1')">
                    <img src="heroes/破坏球.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('西格玛','b1')">
                    <img src="heroes/西格玛.png" draggable="false">
                  </q-avatar>
                </q-fab>
              </div>
            </div>
          </div>
          <div class="row hero-left">
            <div id="b2" class="tdiv" @contextmenu="SwitchHero('b2')">
              <div id="b2header" class="tdivheader">
                <q-fab color="blue" push :icon="b2icon" class="herofab" direction="right" id="b2fab">
                  <q-avatar color="blue" @click="FabSwitch('dva','b2')">
                    <img src="heroes/dva.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('奥丽莎','b2')">
                    <img src="heroes/奥丽莎.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('莱因哈特','b2')">
                    <img src="heroes/莱因哈特.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('路霸','b2')">
                    <img src="heroes/路霸.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('温斯顿','b2')">
                    <img src="heroes/温斯顿.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('查莉娅','b2')">
                    <img src="heroes/查莉娅.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('破坏球','b2')">
                    <img src="heroes/破坏球.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('西格玛','b2')">
                    <img src="heroes/西格玛.png" draggable="false">
                  </q-avatar>
                </q-fab>
              </div>
            </div>
          </div>
          <div class="row hero-left">
            <div id="b3" class="tdiv" @contextmenu="SwitchHero('b3')">
              <div id="b3header" class="tdivheader">
                <q-fab color="blue" push :icon="b3icon" class="herofab" direction="right" id="b3fab">
                  <q-avatar color="blue" @click="FabSwitch('艾什','b3')">
                    <img src="heroes/艾什.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('堡垒','b3')">
                    <img src="heroes/堡垒.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('末日铁拳','b3')">
                    <img src="heroes/末日铁拳.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('源氏','b3')">
                    <img src="heroes/源氏.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('半藏','b3')">
                    <img src="heroes/半藏.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('狂鼠','b3')">
                    <img src="heroes/狂鼠.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('麦克雷','b3')">
                    <img src="heroes/麦克雷.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('美','b3')">
                    <img src="heroes/美.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('法老之鹰','b3')">
                    <img src="heroes/法老之鹰.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('死神','b3')">
                    <img src="heroes/死神.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('士兵：76','b3')">
                    <img src="heroes/士兵：76.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('黑影','b3')">
                    <img src="heroes/黑影.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('秩序之光','b3')">
                    <img src="heroes/秩序之光.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('托比昂','b3')">
                    <img src="heroes/托比昂.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('猎空','b3')">
                    <img src="heroes/猎空.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('黑百合','b3')">
                    <img src="heroes/黑百合.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('回声','b3')">
                    <img src="heroes/回声.png" draggable="false">
                  </q-avatar>
                </q-fab>
              </div>
            </div>
          </div>
          <div class="row hero-left">
            <div id="b4" class="tdiv" @contextmenu="SwitchHero('b4')">
              <div id="b4header" class="tdivheader">
                <q-fab color="blue" push :icon="b4icon" class="herofab" direction="right" id="b4fab">
                  <q-avatar color="blue" @click="FabSwitch('艾什','b4')">
                    <img src="heroes/艾什.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('堡垒','b4')">
                    <img src="heroes/堡垒.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('末日铁拳','b4')">
                    <img src="heroes/末日铁拳.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('源氏','b4')">
                    <img src="heroes/源氏.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('半藏','b4')">
                    <img src="heroes/半藏.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('狂鼠','b4')">
                    <img src="heroes/狂鼠.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('麦克雷','b4')">
                    <img src="heroes/麦克雷.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('美','b4')">
                    <img src="heroes/美.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('法老之鹰','b4')">
                    <img src="heroes/法老之鹰.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('死神','b4')">
                    <img src="heroes/死神.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('士兵：76','b4')">
                    <img src="heroes/士兵：76.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('黑影','b4')">
                    <img src="heroes/黑影.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('秩序之光','b4')">
                    <img src="heroes/秩序之光.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('托比昂','b4')">
                    <img src="heroes/托比昂.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('猎空','b4')">
                    <img src="heroes/猎空.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('黑百合','b4')">
                    <img src="heroes/黑百合.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('回声','b4')">
                    <img src="heroes/回声.png" draggable="false">
                  </q-avatar>
                </q-fab>
              </div>
            </div>
          </div>
          <div class="row hero-left">
            <div id="b5" class="tdiv" @contextmenu="SwitchHero('b5')">
              <div id="b5header" class="tdivheader">
                <q-fab color="blue" push :icon="b5icon" class="herofab" direction="right" id="b5fab">
                  <q-avatar color="blue" @click="FabSwitch('安娜','b5')">
                    <img src="heroes/安娜.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('布丽吉塔','b5')">
                    <img src="heroes/布丽吉塔.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('卢西奥','b5')">
                    <img src="heroes/卢西奥.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('天使','b5')">
                    <img src="heroes/天使.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('莫伊拉','b5')">
                    <img src="heroes/莫伊拉.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('禅雅塔','b5')">
                    <img src="heroes/禅雅塔.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('巴蒂斯特','b5')">
                    <img src="heroes/巴蒂斯特.png" draggable="false">
                  </q-avatar>
                </q-fab>
              </div>
            </div>
          </div>
          <div class="row hero-left">
            <div id="b6" class="tdiv" @contextmenu="SwitchHero('b6')">
              <div id="b6header" class="tdivheader">
                <q-fab color="blue" push :icon="b6icon" class="herofab" direction="right" id="b6fab">
                  <q-avatar color="blue" @click="FabSwitch('安娜','b6')">
                    <img src="heroes/安娜.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('布丽吉塔','b6')">
                    <img src="heroes/布丽吉塔.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('卢西奥','b6')">
                    <img src="heroes/卢西奥.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('天使','b6')">
                    <img src="heroes/天使.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('莫伊拉','b6')">
                    <img src="heroes/莫伊拉.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('禅雅塔','b6')">
                    <img src="heroes/禅雅塔.png" draggable="false">
                  </q-avatar>
                  <q-avatar color="blue" @click="FabSwitch('巴蒂斯特','b6')">
                    <img src="heroes/巴蒂斯特.png" draggable="false">
                  </q-avatar>
                </q-fab>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-layer" id="paintingLayer" style="z-index: 40;" v-touch-pan.mouse="device"> <!--  v-touch-pan.mouse="handlePan" -->
          <canvas id="canvas" style="float:left;z-index: 40;"></canvas>
        </div>
        <div id="playerDiv" style="position: fixed;top:0;left: 0">
          <q-drawer
            v-model="blackboard"
            side="right"
            :width="400"
            content-class="blackboard-bg"
          >
            <q-scroll-area class="fit blackboard-content">
              <div style="margin-top: 70px">
                <q-img src="blackboard.png" width="80%"></q-img>
              </div>

            </q-scroll-area>
          </q-drawer>

        </div>

        <div id="toolBar-hide" class="toolbar-mini" @click="toolbarShow">
          <q-icon name="keyboard_arrow_up" color="white" size="20px"></q-icon>
          <span style="color: white;font-size: 14px;font-family: SourceHanSansSC;">展开工具</span>
        </div>
        <div id="toolBar" class="toolbar">
          <q-toolbar>
            <q-toolbar-title style="text-align: center">
              <q-btn flat color="white" icon="img:toolbar/penetrate-txt.png" size="25px" :style="pet_style" id="btn_penetrate" @click="penetrate">

              </q-btn>
              <q-btn flat color="white" icon="img:toolbar/clean-txt.png" size="25px" id="btn_clear" @click="allBack">

              </q-btn>
              <q-btn flat color="white" icon="img:toolbar/undo-txt.png" size="25px" id="btn_undo" @click="CanvasUndo">

              </q-btn>
              <q-btn-dropdown flat color="white" :icon="colorbtn" size="25px">
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-btn flat color="white" icon="img:toolbar/color-yellow.png" size="20px" @click="colorControl('yellow')"></q-btn>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-btn flat color="white" icon="img:toolbar/color-red.png" size="20px" @click="colorControl('red')"></q-btn>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-btn flat color="white" icon="img:toolbar/color-blue.png" size="20px" @click="colorControl('blue')"></q-btn>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-btn flat color="white" icon="img:toolbar/color-green.png" size="20px" @click="colorControl('green')"></q-btn>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-btn flat color="white" icon="img:toolbar/color-black.png" size="20px" @click="colorControl('black')"></q-btn>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-btn flat color="white" icon="img:toolbar/color-white.png" size="20px" @click="colorControl('white')"></q-btn>
                    </q-item-section>
                  </q-item>
                </q-list>

              </q-btn-dropdown>

              <q-btn flat color="white" icon="img:toolbar/pen-txt.png" size="25px" :style="pen_style" @click="Pen('pencil')" id="btn_pen">

              </q-btn>

              <q-btn flat color="white" icon="img:toolbar/arrow-txt.png" size="25px" :style="arrow_style" @click="Pen('arrow')" id="btn_arrow">

              </q-btn>
              <q-btn flat color="white" icon="img:toolbar/circle-txt.png" size="25px" :style="circle_style" @click="Pen('circle')" id="btn_circle">

              </q-btn>

              <q-btn flat color="white" icon="img:toolbar/hero-txt.png" size="25px" :style="hero_style" id="btn_hero" @click="heroActive">

              </q-btn>

              <q-btn flat round color="white" icon="img:toolbar/down.png" size="8px" id="btn_tool_hide" @click="toolbarHide">

              </q-btn>


            </q-toolbar-title>
          </q-toolbar>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {globalShortcut} from "electron";
const fs = require("fs")
var teamListener;
var touchListener;
var herocss=''
var paintcss=''
var drawUtil = new GraffitiCanvas();
drawUtil.isContinuous(true)
export default {
  data () {
    return {
      isPet:false,
      blackboard: false,
      pet_style:'',
      pen_style:'',
      arrow_style:'',
      circle_style:'',
      hero_style:'',
      blackboard_icon:'keyboard_arrow_right',
      bc_css: '',
      bt_css: '',
      colorbtn:'img:toolbar/yellow-txt.png',
      info:null,
      panning:false,
      heroi:null,
      herop:null,
      device:null,
      startx:0,
      starty:0,
      mdevice: 'mouse',
      mouseico: 'mouse',
      g_title: "暴雪大神守望复盘工具",
      ppicon:'play_arrow',
      video_progress: null,
      video_slider: null,
      video_seconds: null,
      video_jump: null,
      teamAlogo: '',
      teamBlogo: '',
      teamAname: '',
      teamBname: '',
      btn_setting: '',
      btn_fullscreen: '',
      btn_exit: '',
      mainLayer:false,
      r1icon:'img:heroes/莱因哈特.png',
      r2icon:'img:heroes/查莉娅.png',
      r3icon:'img:heroes/源氏.png',
      r4icon:'img:heroes/猎空.png',
      r5icon:'img:heroes/卢西奥.png',
      r6icon:'img:heroes/安娜.png',
      b1icon:'img:heroes/莱因哈特.png',
      b2icon:'img:heroes/查莉娅.png',
      b3icon:'img:heroes/源氏.png',
      b4icon:'img:heroes/猎空.png',
      b5icon:'img:heroes/卢西奥.png',
      b6icon:'img:heroes/安娜.png',
      fabPos: [ 18, 18 ],
      draggingFab: false,
      sys:{
        zh: {
          title: "暴雪大神守望复盘工具",
          btn_setting: "设置",
          btn_fullscreen: "全屏",
          btn_exit: "退出",
        },
        en: {
          title: "OWStation",
          btn_setting: "Settings",
          btn_fullscreen: "Fullscreen",
          btn_exit: "Exit",
        },
        kr: {
          title: "OWStation",
          btn_setting: "설정",
          btn_fullscreen: "전체 화면",
          btn_exit: "폐쇄",
        }
      },
      owl:{
        zh: {
          o1: {
            name: '亚特兰大君临队',
            logo: 'owl/Atlanta Reign.png'
          },
          o2: {
            name: '波士顿崛起队',
            logo: 'owl/Boston Uprising.png'
          },
          o3: {
            name: '成都猎人队',
            logo: 'owl/Chengdu Hunters.png'
          },
          o4: {
            name: '达拉斯燃料队',
            logo: 'owl/Dallas Fuel.png'
          },
          o5: {
            name: '佛罗里达狂欢队',
            logo: 'owl/Florida Mayhem.png'
          },
          o6: {
            name: '广州冲锋队',
            logo: 'owl/Guangzhou Charge.png'
          },
          o7: {
            name: '杭州闪电队',
            logo: 'owl/Hangzhou Spark.png'
          },
          o8: {
            name: '休斯顿神枪手队',
            logo: 'owl/Houston Outlaws.png'
          },
          o9: {
            name: '伦敦喷火战斗机队',
            logo: 'owl/London Spitfire.png'
          },
          o10: {
            name: '洛杉矶角斗士队',
            logo: 'owl/Los Angeles Gladiators.png'
          },
          o11: {
            name: '洛杉矶英勇队',
            logo: 'owl/Los Angeles Valiant.png'
          },
          o12: {
            name: '纽约九霄天擎队',
            logo: 'owl/New York Excelsior.png'
          },
          o13: {
            name: '巴黎永生队',
            logo: 'owl/Paris Eternal.png'
          },
          o14: {
            name: '费城融合队',
            logo: 'owl/Philadelphia Fusion.png'
          },
          o15: {
            name: '旧金山震动队',
            logo: 'owl/San Francisco Shock.png'
          },
          o16: {
            name: '首尔王朝队',
            logo: 'owl/Seoul Dynasty.png'
          },
          o17: {
            name: '上海龙之队',
            logo: 'owl/Shanghai Dragons.png'
          },
          o18: {
            name: '多伦多捍卫者队',
            logo: 'owl/Toronto Defiant.png'
          },
          o19: {
            name: '温哥华泰坦队',
            logo: 'owl/Vancouver Titans.png'
          },
          o20: {
            name: '华盛顿正义队',
            logo: 'owl/Washington, DC Justice.png'
          }
        },
        en: {
          o1: {
            name: 'Atlanta Reign',
            logo: 'owl/Atlanta Reign.png'
          },
          o2: {
            name: 'Boston Uprising',
            logo: 'owl/Boston Uprising.png'
          },
          o3: {
            name: 'Chengdu Hunters',
            logo: 'owl/Chengdu Hunters.png'
          },
          o4: {
            name: 'Dallas Fuel',
            logo: 'owl/Dallas Fuel.png'
          },
          o5: {
            name: 'Florida Mayhem',
            logo: 'owl/Florida Mayhem.png'
          },
          o6: {
            name: 'Guangzhou Charge',
            logo: 'owl/Guangzhou Charge.png'
          },
          o7: {
            name: 'Hangzhou Spark',
            logo: 'owl/Hangzhou Spark.png'
          },
          o8: {
            name: 'Houston Outlaws',
            logo: 'owl/Houston Outlaws.png'
          },
          o9: {
            name: 'London Spitfire',
            logo: 'owl/London Spitfire.png'
          },
          o10: {
            name: 'Los Angeles Gladiators',
            logo: 'owl/Los Angeles Gladiators.png'
          },
          o11: {
            name: 'Los Angeles Valiant',
            logo: 'owl/Los Angeles Valiant.png'
          },
          o12: {
            name: 'New York Excelsior',
            logo: 'owl/New York Excelsior.png'
          },
          o13: {
            name: 'Paris Eternal',
            logo: 'owl/Paris Eternal.png'
          },
          o14: {
            name: 'Philadelphia Fusion',
            logo: 'owl/Philadelphia Fusion.png'
          },
          o15: {
            name: 'San Francisco Shock',
            logo: 'owl/San Francisco Shock.png'
          },
          o16: {
            name: 'Seoul Dynasty',
            logo: 'owl/Seoul Dynasty.png'
          },
          o17: {
            name: 'Shanghai Dragons',
            logo: 'owl/Shanghai Dragons.png'
          },
          o18: {
            name: 'Toronto Defiant',
            logo: 'owl/Toronto Defiant.png'
          },
          o19: {
            name: 'Vancouver Titans',
            logo: 'owl/Vancouver Titans.png'
          },
          o20: {
            name: 'Washington, DC Justice',
            logo: 'owl/Washington, DC Justice.png'
          }
        },
        kr: {
          o1: {
            name: 'Atlanta Reign',
            logo: 'owl/Atlanta Reign.png'
          },
          o2: {
            name: 'Boston Uprising',
            logo: 'owl/Boston Uprising.png'
          },
          o3: {
            name: 'Chengdu Hunters',
            logo: 'owl/Chengdu Hunters.png'
          },
          o4: {
            name: 'Dallas Fuel',
            logo: 'owl/Dallas Fuel.png'
          },
          o5: {
            name: 'Florida Mayhem',
            logo: 'owl/Florida Mayhem.png'
          },
          o6: {
            name: 'Guangzhou Charge',
            logo: 'owl/Guangzhou Charge.png'
          },
          o7: {
            name: 'Hangzhou Spark',
            logo: 'owl/Hangzhou Spark.png'
          },
          o8: {
            name: 'Houston Outlaws',
            logo: 'owl/Houston Outlaws.png'
          },
          o9: {
            name: 'London Spitfire',
            logo: 'owl/London Spitfire.png'
          },
          o10: {
            name: 'Los Angeles Gladiators',
            logo: 'owl/Los Angeles Gladiators.png'
          },
          o11: {
            name: 'Los Angeles Valiant',
            logo: 'owl/Los Angeles Valiant.png'
          },
          o12: {
            name: 'New York Excelsior',
            logo: 'owl/New York Excelsior.png'
          },
          o13: {
            name: 'Paris Eternal',
            logo: 'owl/Paris Eternal.png'
          },
          o14: {
            name: 'Philadelphia Fusion',
            logo: 'owl/Philadelphia Fusion.png'
          },
          o15: {
            name: 'San Francisco Shock',
            logo: 'owl/San Francisco Shock.png'
          },
          o16: {
            name: 'Seoul Dynasty',
            logo: 'owl/Seoul Dynasty.png'
          },
          o17: {
            name: 'Shanghai Dragons',
            logo: 'owl/Shanghai Dragons.png'
          },
          o18: {
            name: 'Toronto Defiant',
            logo: 'owl/Toronto Defiant.png'
          },
          o19: {
            name: 'Vancouver Titans',
            logo: 'owl/Vancouver Titans.png'
          },
          o20: {
            name: 'Washington, DC Justice',
            logo: 'owl/Washington, DC Justice.png'
          }
        }
      },
      penwidth: 2,
    }
  },
  watch:{
    blue1(val){
      document.getElementById('b1img').src='heroes/' + val + '.png'
    },
    blue2(val){
      document.getElementById('b2img').src='heroes/' + val + '.png'
    },
    blue3(val){
      document.getElementById('b3img').src='heroes/' + val + '.png'
    },
    blue4(val){
      document.getElementById('b4img').src='heroes/' + val + '.png'
    },
    blue5(val){
      document.getElementById('b5img').src='heroes/' + val + '.png'
    },
    blue6(val){
      document.getElementById('b6img').src='heroes/' + val + '.png'
    },
    red1(val){
      document.getElementById('r1img').src='heroes/' + val + '.png'
    },
    red2(val){
      document.getElementById('r2img').src='heroes/' + val + '.png'
    },
    red3(val){
      document.getElementById('r3img').src='heroes/' + val + '.png'
    },
    red4(val){
      document.getElementById('r4img').src='heroes/' + val + '.png'
    },
    red5(val){
      document.getElementById('r5img').src='heroes/' + val + '.png'
    },
    red6(val){
      document.getElementById('r6img').src='heroes/' + val + '.png'
    }
  }
  ,
  methods:{
    pageRefresh(){
      this.$router.push('/rttg')
    },
    penetrate(){
      this.isPet = true
      this.pet_style='background-color: rgba(79, 79, 79, 0.6);'
      this.pen_style=''
      this.circle_style=''
      this.arrow_style=''
      this.hero_style=''
      //鼠标穿透，且保持窗口前置
      const win = require('electron').remote.getCurrentWindow()
      let pl = document.getElementById('paintingLayer')
      let hl = document.getElementById('heroLayer')
      let tb = document.getElementById('toolBar')

      pl.onmouseenter = function () {
        win.setIgnoreMouseEvents(true, {forward: true})
      }
      hl.onmouseenter = function () {
        win.setIgnoreMouseEvents(true, {forward: true})
      }
      pl.onmouseleave = function () {
        win.setIgnoreMouseEvents(false)
      }
      hl.onmouseleave = function () {
        win.setIgnoreMouseEvents(false)
      }
      tb.onmouseenter = function () {
        win.setIgnoreMouseEvents(false)
      }
      tb.onmouseleave = function () {
        win.setIgnoreMouseEvents(true, {forward: true})
      }
      win.setAlwaysOnTop(true)
    },
    unpenetrate(){
      // 鼠标不穿透
      this.isPet = false
      const win = require('electron').remote.getCurrentWindow()
      let pl = document.getElementById('paintingLayer')
      let hl = document.getElementById('heroLayer')

      pl.onmouseenter = function () {
        win.setIgnoreMouseEvents(false)
      }
      hl.onmouseenter = function () {
        win.setIgnoreMouseEvents(false)
      }
      pl.onmouseleave = function () {
        win.setIgnoreMouseEvents(false)
      }
      hl.onmouseleave = function () {
        win.setIgnoreMouseEvents(false)
      }
      win.setAlwaysOnTop(true)
    },
    teamListen(){
      var lang = this.$q.localStorage.getItem('lang')
      var teamA = this.$q.localStorage.getItem('teamA')
      var teamB = this.$q.localStorage.getItem('teamB')
      this.teamAname = this.owl[lang][teamA].name
      this.teamAlogo = this.owl[lang][teamA].logo
      this.teamBname = this.owl[lang][teamB].name
      this.teamBlogo = this.owl[lang][teamB].logo

      this.g_title = this.sys[lang].title
      this.btn_setting = this.sys[lang].btn_setting
      this.btn_fullscreen = this.sys[lang].btn_fullscreen
      this.btn_exit = this.sys[lang].btn_exit
    },
    windowClose(){
      this.unpenetrate()
      this.$q.electron.remote.getCurrentWindow().setFullScreen(false)
      setTimeout(this.pageRefresh,200)
      this.pageRefresh()
      setTimeout(this.$q.electron.remote.getCurrentWindow().hide(),200)
    },
    windowFullScreen(){
      var current_width = document.body.clientWidth
      if (current_width<=960){
        console.log('当前不是全屏，即将全屏')
        this.$q.electron.remote.getCurrentWindow().setFullScreen(true)
      }else{
        console.log('当前是全屏，取消全屏')
        this.$q.electron.remote.getCurrentWindow().setFullScreen(false)
      }
      setTimeout(this.pageRefresh,200)
      this.pageRefresh()
    },
    showBar(){
      document.getElementById('progress').style.cssText = "display:none"
      document.getElementById('slider').style.cssText = "display:block"
    },
    showProgress(){
      console.log('显示可拖动进度条')
      document.getElementById('slider').style.cssText = "display: block;position: fixed;bottom: -8px"
    },
    hideProgress(){
      console.log('隐藏可拖动进度条')
      document.getElementById('slider').style.cssText = "display: none;position: fixed;bottom: -8px"
    },
    SwitchHero (id) {
      document.getElementById(id+'fab').click()
    },
    FabSwitch (hero,tab) {
      if (tab === 'r1') {
        this.r1icon = 'img:heroes/' + hero + '.png'
      }
      if (tab === 'r2') {
        this.r2icon = 'img:heroes/' + hero + '.png'
      }
      if (tab === 'r3') {
        this.r3icon = 'img:heroes/' + hero + '.png'
      }
      if (tab === 'r4') {
        this.r4icon = 'img:heroes/' + hero + '.png'
      }
      if (tab === 'r5') {
        this.r5icon = 'img:heroes/' + hero + '.png'
      }
      if (tab === 'r6') {
        this.r6icon = 'img:heroes/' + hero + '.png'
      }
      if (tab === 'b1') {
        this.b1icon = 'img:heroes/' + hero + '.png'
      }
      if (tab === 'b2') {
        this.b2icon = 'img:heroes/' + hero + '.png'
      }
      if (tab === 'b3') {
        this.b3icon = 'img:heroes/' + hero + '.png'
      }
      if (tab === 'b4') {
        this.b4icon = 'img:heroes/' + hero + '.png'
      }
      if (tab === 'b5') {
        this.b5icon = 'img:heroes/' + hero + '.png'
      }
      if (tab === 'b6') {
        this.b6icon = 'img:heroes/' + hero + '.png'
      }
      document.getElementById(tab+'fab').click()
    },
    heroReset () {
      document.getElementsByClassName('tdiv')[0].style.cssText = ''
      document.getElementsByClassName('tdiv')[1].style.cssText = ''
      document.getElementsByClassName('tdiv')[2].style.cssText = ''
      document.getElementsByClassName('tdiv')[3].style.cssText = ''
      document.getElementsByClassName('tdiv')[4].style.cssText = ''
      document.getElementsByClassName('tdiv')[5].style.cssText = ''
      document.getElementsByClassName('tdiv')[6].style.cssText = ''
      document.getElementsByClassName('tdiv')[7].style.cssText = ''
      document.getElementsByClassName('tdiv')[8].style.cssText = ''
      document.getElementsByClassName('tdiv')[9].style.cssText = ''
      document.getElementsByClassName('tdiv')[10].style.cssText = ''
      document.getElementsByClassName('tdiv')[11].style.cssText = ''
    },
    Pen (pen) {
      // 激活画布层
      this.ActivePainting()
      // 取消穿透
      this.unpenetrate()
      drawUtil.enableFillStyle(false);
      if (pen === 'pencil') {
        drawUtil.begin(1);
        this.pet_style=''
        this.pen_style='background-color: rgba(79, 79, 79, 0.6);'
        this.circle_style=''
        this.arrow_style=''
        this.hero_style=''
      }
      if (pen === 'arrow') {
        drawUtil.begin(21);
        drawUtil.enableFillStyle(true);
        this.pet_style=''
        this.pen_style=''
        this.circle_style=''
        this.arrow_style='background-color: rgba(79, 79, 79, 0.6);'
        this.hero_style=''
      }
      if (pen === 'rectangle') {
        drawUtil.begin(4);
      }
      if (pen === 'circle') {
        drawUtil.begin(6);
        this.pet_style=''
        this.pen_style=''
        this.circle_style='background-color: rgba(79, 79, 79, 0.6);'
        this.arrow_style=''
        this.hero_style=''
      }
      if (pen === 'mouse') {
        if (this.mdevice === "mouse"){
          this.mdevice = "hand"
          this.mouseico = "pan_tool"
          this.device = this.handlePan
        } else {
          this.mdevice = "mouse"
          this.mouseico = "mouse"
          this.device = null
        }

        // drawUtil.begin(0);
      }
    },
    CanvasClear () {
      drawUtil.Clear()
    },
    CanvasUndo () {
      drawUtil.Undo()
    },
    PenColor (color) {
      drawUtil.setPaintConfig({
        lineWidth:'2',
        strokeStyle:color,
        fillStyle:color,
      })
      //document.getElementById('ColorPanel').style.cssText = "color: " + color
    },
    ActivePainting () {
      // 激活画布层：将英雄层至于20，将画布层至于40
      document.getElementById('heroLayer').style.cssText = herocss+';z-index:20'
      document.getElementById('paintingLayer').style.cssText = paintcss+';z-index:999'
      console.log('已激活画布')
    },
    ActiveHero () {
      // 激活英雄层：将画布层至于20，将英雄层至于40
      document.getElementById('paintingLayer').style.cssText = paintcss+';z-index:20'
      document.getElementById('heroLayer').style.cssText = herocss+';z-index:999'
      console.log('已激活英雄')
    },
    layerSwitch () {
      if (this.mainLayer){
        // 画板
        this.mainLayer = false
      } else {
        this.mainLayer = true
      }
    },
    allBack () {
      this.CanvasClear()
      this.heroReset()
    },
    handlePan({evt,...info}){
      this.info = info
      console.log(info)
      //console.log( + "," + info.offset.y)
      if (info.isFirst){
        this.panning = true
        //drawUtil.touchStart(info.offset.x,info.offset.y)
        drawUtil.touchStart(info.position.left,info.position.top)
      }else if (info.isFinal){
        this.panning = false
        drawUtil.touchEnd(info.position.left,info.position.top)
      }else{
        drawUtil.touchMove(info.position.left,info.position.top)
      }
    },
    heroPanr1({evt,...heroi}){
      /*this.info = heroi
      var x = heroi.position.left
      var y = heroi.position.top
      if(heroi.isFirst){
        console.log('prepare to move')
        this.startx = x
        this.starty = y
        this.panning = true
        console.log('sx:'+this.startx+',sy:'+this.starty)
      }else if(heroi.isFinal){
        this.panning = false
        this.startx = 0
        this.starty = 0
      }else{
        var dx = x-this.startx
        var dy = y-this.starty
        var ox = document.getElementsByClassName('tdiv')[0].style.left.replace('px','')
        var oy = document.getElementsByClassName('tdiv')[0].style.top.replace('px','')
        ox = parseInt(ox)
        oy = parseInt(oy)
        //console.log('ox:'+ox+',oy:'+oy)
        var nx = ox + dx
        var ny = oy + dy
        this.startx = nx
        this.starty = ny
        console.log('nx:'+nx+',ny:'+ny)
        document.getElementsByClassName('tdiv')[0].style.left = nx + "px"
        document.getElementsByClassName('tdiv')[0].style.top = ny + "px"
      }*/
      this.info = heroi
      var x = heroi.position.left
      var y = heroi.position.top
      if(heroi.isFirst){
        console.log('prepare to move')
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        console.log(x + ',' + y)
        document.getElementsByClassName('tdiv')[0].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanr2({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left
      var y = heroi.position.top
      if(heroi.isFirst){
        console.log('prepare to move')
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        console.log(x + ',' + y)
        document.getElementsByClassName('tdiv')[1].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanr3({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left
      var y = heroi.position.top
      if(heroi.isFirst){
        console.log('prepare to move')
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        console.log(x + ',' + y)
        document.getElementsByClassName('tdiv')[2].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanr4({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left
      var y = heroi.position.top
      if(heroi.isFirst){
        console.log('prepare to move')
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        console.log(x + ',' + y)
        document.getElementsByClassName('tdiv')[3].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanr5({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left
      var y = heroi.position.top
      if(heroi.isFirst){
        console.log('prepare to move')
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        console.log(x + ',' + y)
        document.getElementsByClassName('tdiv')[4].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanr6({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left
      var y = heroi.position.top
      if(heroi.isFirst){
        console.log('prepare to move')
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        console.log(x + ',' + y)
        document.getElementsByClassName('tdiv')[5].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    colorControl(color){
      this.colorbtn = 'img:toolbar/' + color +'-txt.png'
      if (color === "black") {
        this.PenColor('#000000')
      }
      if (color === "white") {
        this.PenColor('#ffffff')
      }
      if (color === "red") {
        this.PenColor('#f44336')
      }
      if (color === "yellow") {
        this.PenColor('#ffeb3b')
      }
      if (color === "blue") {
        this.PenColor('#2196f3')
      }
      if (color === "green") {
        this.PenColor('#4caf50')
      }
    },
    heroActive(){
      this.unpenetrate()
      this.ActiveHero()
      this.pet_style=''
      this.pen_style=''
      this.circle_style=''
      this.arrow_style=''
      this.hero_style='background-color: rgba(79, 79, 79, 0.6);'
    },
    toolbarHide(){
      document.getElementById('toolBar').className =  "toolbar-hide"
      document.getElementById('toolBar-hide').className =  "toolbar-mini"
    },
    toolbarShow(){
      document.getElementById('toolBar').className =  "toolbar"
      document.getElementById('toolBar-hide').className =  "toolbar-hide"
    },
    blackboardSH(){
      if (this.blackboard) {
        // 隐藏
        document.getElementById('blackboard-content').style.cssText = 'width: 0 !important;height: 0 !important'
        this.blackboard = false
        this.blackboard_icon = 'keyboard_arrow_left'
        console.log('要隐藏')
      }else{
        // 显示
        document.getElementById('blackboard-content').style.cssText = this.bc_css
        this.blackboard = true
        this.blackboard_icon = 'keyboard_arrow_right'
        console.log('要显示')
      }
    },
    touchListen(){
      if(this.$q.localStorage.getItem('touch')){
        this.device = this.handlePan
      }else{
        this.device = null
      }
    },
    FocusWindow () {
      if (process.env.MODE === 'electron') {
        const win = require('electron').remote.getCurrentWindow()
        win.focus()
      }
    },
    Game_PP(){
      fs.writeFile('OWHook\\ccc', 'AAA',  function(err) {});
    }
  },
  created() {
    //聚焦
    const win = require('electron').remote.getCurrentWindow()
    win.focus()
    console.log('聚焦')
  },
  mounted() {
    const win = require('electron').remote.getCurrentWindow()
    win.focus()
    setInterval(this.FocusWindow,100)

    // 初始化工具栏
    var tl = Math.round((document.body.clientWidth - document.getElementById('toolBar').offsetWidth)/2)
    document.getElementById('toolBar').style.cssText = 'margin-left: ' + tl.toString() + 'px !important'
    var tm = Math.round((document.body.clientWidth - document.getElementById('toolBar-hide').offsetWidth)/2)
    document.getElementById('toolBar-hide').style.cssText = 'margin-left: ' + tm.toString() + 'px !important'
    document.getElementById('toolBar-hide').className = 'toolbar-hide'

    var lang = this.$q.localStorage.getItem('lang')
    // 初始化系统组件语言
    this.g_title = this.sys[lang].title
    this.btn_setting = this.sys[lang].btn_setting
    this.btn_fullscreen = this.sys[lang].btn_fullscreen
    this.btn_exit = this.sys[lang].btn_exit

    // 初始化顶部队标
    teamListener = setInterval(this.teamListen,200)

    dragElement(document.getElementById(("r1")));
    dragElement(document.getElementById(("r2")));
    dragElement(document.getElementById(("r3")));
    dragElement(document.getElementById(("r4")));
    dragElement(document.getElementById(("r5")));
    dragElement(document.getElementById(("r6")));
    dragElement(document.getElementById(("b1")));
    dragElement(document.getElementById(("b2")));
    dragElement(document.getElementById(("b3")));
    dragElement(document.getElementById(("b4")));
    dragElement(document.getElementById(("b5")));
    dragElement(document.getElementById(("b6")));
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
        elmnt.ontouchstart = dragMouseDown;
      }
      function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.ontouchstart = null;
        document.onmousemove = null;
        document.ontouchmove = null;
      }
    }
    // 初始化hero-left到右侧
    var cw = document.body.clientWidth
    var sticker_ml = cw-60
    for (var i=0;i<12;i++){
      document.getElementsByClassName('hero-left')[i].style.cssText = 'margin-left: ' + sticker_ml + "px"
    }

    // 初始化画布
    var canvas_wd = document.body.offsetWidth
    var canvas_ht = document.body.offsetHeight
    // document.getElementById('canvas').style.width = canvas_wd + "px"
    // document.getElementById('canvas').style.height = canvas_ht + "px"
    if(drawUtil.init({'id':'canvas'})){
      let canvas = document.getElementById('canvas');
      canvas.width = canvas_wd;
      canvas.height = canvas_ht;
      drawUtil.setPaintConfig({
        lineWidth:this.penwidth.toString(),
        strokeStyle:'#f44336',
        fillStyle:'#f44336',
      });
    }
    this.PenColor('#ffeb3b')
    this.Pen('pencil')
    // 初始化触屏判断
    touchListener = setInterval(this.touchListen,10)
    // 注册窗口快捷键
    /*var Mousetrap = require('mousetrap');
    Mousetrap.bind('tab', function() {
      this.Game_PP()
    }); */
    const {globalShortcut} = require('electron').remote;
    const ret = globalShortcut.register('Tab', () => this.Game_PP())
    /*console.log('热键已按下')
          if(this.isPet){
            console.log('退出穿透模式')
            document.getElementById('btn_pen').click()
            win.focus()
          }else{
            console.log('进入穿透模式')
            document.getElementById('btn_penetrate').click()
            win.blur()
          }*/
    if (!ret) {
      //alert('快捷键注册失败')
      console.log('registration failed')
    }

    // 检查快捷键是否注册成功
    console.log('快捷键注册:'+globalShortcut.isRegistered('Tab'))
  }
}
</script>
