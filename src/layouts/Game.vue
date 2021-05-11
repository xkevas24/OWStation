<style>
body{

}
.mouse{
  position:fixed;
  /*background: #ff6565;*/
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTI2VDIxOjAxOjQ3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0yNlQyMToxMjoxOCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0yNlQyMToxMjoxOCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ODE0MDQ2My1hMzEzLTU5NGMtYmYyNi01ZjE1YzVlMjZjOGMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzgxNDA0NjMtYTMxMy01OTRjLWJmMjYtNWYxNWM1ZTI2YzhjIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzgxNDA0NjMtYTMxMy01OTRjLWJmMjYtNWYxNWM1ZTI2YzhjIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ODE0MDQ2My1hMzEzLTU5NGMtYmYyNi01ZjE1YzVlMjZjOGMiIHN0RXZ0OndoZW49IjIwMjEtMDQtMjZUMjE6MDE6NDcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4o/gHLAAACm0lEQVRIie2WMU8UQRTHf29PehsSG1kpKDwLd5fShg+AhSZ3JlQm3h6JhGj8AgcdMWIkwRDurhALTe4KE7XXkijcbXKRRhOzVCQUUNCJPIs7jt1l5zjDaaP/ZJqZ/77fzOzMvCecodB3ZwVuK7JrVxr5nt6CUxKRCRXWyRw+tldaeyavmIN4RUQfAle7napzdjWYT/N/LzgTlsiHSOQdVBdG9seWpV7/mfRbp4DTbjb03Q1EV2PQ35VyCeTZ9sVvn8JpN9sTHE67WY6oAeMJ30Gv1QKMVoOPqM6lDHkcUUvCu1sdgV6LGYQ1wVq8XN5sGVcXnfw954ZkZFaVO4mhL1jk7dXmVhzsu5uAF7OK5u1yUO8HeGoCRSeHSi3R3bArzXHobHXoOw8GCQWwy0Ed0eQt8Dqs438sM4OE9oa3WRL6jg9S7nYLayPl5t3zQqMKi+5blJsnPVq0BJmKeA4Ea3GQ0DbnZGEAgkzF77HqE9PpVdW+W1J2pfEepPvrFNmVzjVaUrR1pRI8Mk46JaBJIukPYlhwSgB2NZg3Ppl/AhzVqSfzb+k/+B8BhwWndHzU/6SiHAl9rwaaaw9J3VTenPc6JTmWoMOR8LnQ9yZNwfptKdDJEygIOmyhlOMELfa9tH6ViCnCugBs+26gcD1iHEhahJSCQNghc5i1AFR5GnOr1MKik+OcSq1CVBfsldaeBWBXmy8RNgYJN5U+I/tjy9BHsYfwDpVyO7X1AfS9SUSL8cQPmIq9nnBA0Tf6Y+j+6IvPOz2gtejpNUEh8XLZq80tLPJAI/mlILcyQ4evjdCCUzJAG0kowIWkq2MYb1eDMgOMmWBn6Cvoc7sSLKUNnpmxQ9/xj+sytZhJzjzu9WqCDiv6yq4ElV5xfwFx+0VzM6TCiAAAAABJRU5ErkJggg==");
  width:30px;
  height:30px;
  border-radius:20px;
  display:block;
  opacity: 0.7;
  z-index: 8;
  animation:turn 1s linear infinite;
}
@keyframes turn{
  0%{-webkit-transform:rotate(0deg);}
  25%{-webkit-transform:rotate(90deg);}
  50%{-webkit-transform:rotate(180deg);}
  75%{-webkit-transform:rotate(270deg);}
  100%{-webkit-transform:rotate(360deg);}
}
.mouse-fadeout{
  position:fixed;
  /*background: #ff6565;*/
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTI2VDIxOjAxOjQ3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0yNlQyMToxMjoxOCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0yNlQyMToxMjoxOCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ODE0MDQ2My1hMzEzLTU5NGMtYmYyNi01ZjE1YzVlMjZjOGMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzgxNDA0NjMtYTMxMy01OTRjLWJmMjYtNWYxNWM1ZTI2YzhjIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzgxNDA0NjMtYTMxMy01OTRjLWJmMjYtNWYxNWM1ZTI2YzhjIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ODE0MDQ2My1hMzEzLTU5NGMtYmYyNi01ZjE1YzVlMjZjOGMiIHN0RXZ0OndoZW49IjIwMjEtMDQtMjZUMjE6MDE6NDcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4o/gHLAAACm0lEQVRIie2WMU8UQRTHf29PehsSG1kpKDwLd5fShg+AhSZ3JlQm3h6JhGj8AgcdMWIkwRDurhALTe4KE7XXkijcbXKRRhOzVCQUUNCJPIs7jt1l5zjDaaP/ZJqZ/77fzOzMvCecodB3ZwVuK7JrVxr5nt6CUxKRCRXWyRw+tldaeyavmIN4RUQfAle7napzdjWYT/N/LzgTlsiHSOQdVBdG9seWpV7/mfRbp4DTbjb03Q1EV2PQ35VyCeTZ9sVvn8JpN9sTHE67WY6oAeMJ30Gv1QKMVoOPqM6lDHkcUUvCu1sdgV6LGYQ1wVq8XN5sGVcXnfw954ZkZFaVO4mhL1jk7dXmVhzsu5uAF7OK5u1yUO8HeGoCRSeHSi3R3bArzXHobHXoOw8GCQWwy0Ed0eQt8Dqs438sM4OE9oa3WRL6jg9S7nYLayPl5t3zQqMKi+5blJsnPVq0BJmKeA4Ea3GQ0DbnZGEAgkzF77HqE9PpVdW+W1J2pfEepPvrFNmVzjVaUrR1pRI8Mk46JaBJIukPYlhwSgB2NZg3Ppl/AhzVqSfzb+k/+B8BhwWndHzU/6SiHAl9rwaaaw9J3VTenPc6JTmWoMOR8LnQ9yZNwfptKdDJEygIOmyhlOMELfa9tH6ViCnCugBs+26gcD1iHEhahJSCQNghc5i1AFR5GnOr1MKik+OcSq1CVBfsldaeBWBXmy8RNgYJN5U+I/tjy9BHsYfwDpVyO7X1AfS9SUSL8cQPmIq9nnBA0Tf6Y+j+6IvPOz2gtejpNUEh8XLZq80tLPJAI/mlILcyQ4evjdCCUzJAG0kowIWkq2MYb1eDMgOMmWBn6Cvoc7sSLKUNnpmxQ9/xj+sytZhJzjzu9WqCDiv6yq4ElV5xfwFx+0VzM6TCiAAAAABJRU5ErkJggg==");
  width:30px;
  height:30px;
  border-radius:20px;
  display:block;
  z-index: 8;
  -webkit-transition: opacity 3s;
  -moz-transition: opacity 3s;
  transition: opacity 3s;
  opacity: 0;
  animation:turn 1s linear infinite;
}
@keyframes turn{
  0%{-webkit-transform:rotate(0deg);}
  25%{-webkit-transform:rotate(90deg);}
  50%{-webkit-transform:rotate(180deg);}
  75%{-webkit-transform:rotate(270deg);}
  100%{-webkit-transform:rotate(360deg);}
}
.mouse-fadein{
  position:fixed;
  /*background: #ff6565;*/
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTI2VDIxOjAxOjQ3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0yNlQyMToxMjoxOCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0yNlQyMToxMjoxOCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ODE0MDQ2My1hMzEzLTU5NGMtYmYyNi01ZjE1YzVlMjZjOGMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzgxNDA0NjMtYTMxMy01OTRjLWJmMjYtNWYxNWM1ZTI2YzhjIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzgxNDA0NjMtYTMxMy01OTRjLWJmMjYtNWYxNWM1ZTI2YzhjIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ODE0MDQ2My1hMzEzLTU5NGMtYmYyNi01ZjE1YzVlMjZjOGMiIHN0RXZ0OndoZW49IjIwMjEtMDQtMjZUMjE6MDE6NDcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4o/gHLAAACm0lEQVRIie2WMU8UQRTHf29PehsSG1kpKDwLd5fShg+AhSZ3JlQm3h6JhGj8AgcdMWIkwRDurhALTe4KE7XXkijcbXKRRhOzVCQUUNCJPIs7jt1l5zjDaaP/ZJqZ/77fzOzMvCecodB3ZwVuK7JrVxr5nt6CUxKRCRXWyRw+tldaeyavmIN4RUQfAle7napzdjWYT/N/LzgTlsiHSOQdVBdG9seWpV7/mfRbp4DTbjb03Q1EV2PQ35VyCeTZ9sVvn8JpN9sTHE67WY6oAeMJ30Gv1QKMVoOPqM6lDHkcUUvCu1sdgV6LGYQ1wVq8XN5sGVcXnfw954ZkZFaVO4mhL1jk7dXmVhzsu5uAF7OK5u1yUO8HeGoCRSeHSi3R3bArzXHobHXoOw8GCQWwy0Ed0eQt8Dqs438sM4OE9oa3WRL6jg9S7nYLayPl5t3zQqMKi+5blJsnPVq0BJmKeA4Ea3GQ0DbnZGEAgkzF77HqE9PpVdW+W1J2pfEepPvrFNmVzjVaUrR1pRI8Mk46JaBJIukPYlhwSgB2NZg3Ppl/AhzVqSfzb+k/+B8BhwWndHzU/6SiHAl9rwaaaw9J3VTenPc6JTmWoMOR8LnQ9yZNwfptKdDJEygIOmyhlOMELfa9tH6ViCnCugBs+26gcD1iHEhahJSCQNghc5i1AFR5GnOr1MKik+OcSq1CVBfsldaeBWBXmy8RNgYJN5U+I/tjy9BHsYfwDpVyO7X1AfS9SUSL8cQPmIq9nnBA0Tf6Y+j+6IvPOz2gtejpNUEh8XLZq80tLPJAI/mlILcyQ4evjdCCUzJAG0kowIWkq2MYb1eDMgOMmWBn6Cvoc7sSLKUNnpmxQ9/xj+sytZhJzjzu9WqCDiv6yq4ElV5xfwFx+0VzM6TCiAAAAABJRU5ErkJggg==");
  width:30px;
  height:30px;
  border-radius:20px;
  display:block;
  z-index: 8;
  opacity: 0.7;
  animation:turn 1s linear infinite;
}
@keyframes turn{
  0%{-webkit-transform:rotate(0deg);}
  25%{-webkit-transform:rotate(90deg);}
  50%{-webkit-transform:rotate(180deg);}
  75%{-webkit-transform:rotate(270deg);}
  100%{-webkit-transform:rotate(360deg);}
}
.pause{
  position: fixed;
  width: 60px;
  height: 60px;
  z-index: 99999;
  cursor: pointer;
  display: none;
}
</style>
<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white text-primary q-electron-drag" style="display: none">
      <q-toolbar>
        <q-avatar>
          <img src="owl.png">
        </q-avatar>

        <span class="replay-left-title">{{g_title}}</span>

        <q-toolbar-title class="text-center" style="color: rgba(16, 16, 16, 100);font-size: 14px;font-family: SourceHanSansSC;visibility:hidden;">
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
        <q-btn flat rounded dense icon="fas fa-minus" size="10px" color="grey-7" @click="windowSmall">
          <q-tooltip content-style="background-color: #D6EFFF;color:#42B1F8">
            {{btn_minimize}}
          </q-tooltip>
        </q-btn>
        <q-btn flat rounded dense icon="fas fa-bars" size="10px" color="grey-7" @click="blackboard = !blackboard" style="display: none">
          <q-tooltip content-style="background-color: #D6EFFF;color:#42B1F8">
            {{btn_setting}}
          </q-tooltip>
        </q-btn>
        <q-btn flat rounded dense icon="fas fa-expand" size="10px" color="grey-7" @click="windowFullScreen">
          <q-tooltip content-style="background-color: #D6EFFF;color:#42B1F8" id="btn_fullscreen">
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
        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6">提示</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{showbox}}
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="知道了" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>

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
          <div id="mouse" class="mouse"></div>
          <div style="height: 60px"></div>
          <div class="row hero-left">
            <div id="r1" class="tdiv" @contextmenu="SwitchHero('r1')" v-touch-pan.mouse="heroPanr1">
              <div id="r1header" class="tdivheader">
                <q-fab color="red" push :icon="r1icon" active-icon="img:right-click.png" class="herofab" direction="right" id="r1fab">
                  <q-avatar color="red" @click="FabReset('r1')">
                    <img src="heroes/delete.png" draggable="false">
                  </q-avatar>
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
                <q-fab color="red" push :icon="r2icon" active-icon="img:right-click.png"  class="herofab" direction="right" id="r2fab">
                  <q-avatar color="red" @click="FabReset('r2')">
                    <img src="heroes/delete.png" draggable="false">
                  </q-avatar>
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
                <q-fab color="red" push :icon="r3icon" active-icon="img:right-click.png"  class="herofab" direction="right" id="r3fab">
                  <q-avatar color="red" @click="FabReset('r3')">
                    <img src="heroes/delete.png" draggable="false">
                  </q-avatar>
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
                <q-fab color="red" push :icon="r4icon" active-icon="img:right-click.png"  class="herofab" direction="right" id="r4fab">
                  <q-avatar color="red" @click="FabReset('r4')">
                    <img src="heroes/delete.png" draggable="false">
                  </q-avatar>
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
                <q-fab color="red" push :icon="r5icon" active-icon="img:right-click.png"  class="herofab" direction="right" id="r5fab">
                  <q-avatar color="red" @click="FabReset('r5')">
                    <img src="heroes/delete.png" draggable="false">
                  </q-avatar>
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
                <q-fab color="red" push :icon="r6icon" active-icon="img:right-click.png"  class="herofab" direction="right" id="r6fab">
                  <q-avatar color="red" @click="FabReset('r6')">
                    <img src="heroes/delete.png" draggable="false">
                  </q-avatar>
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
            <div id="b1" class="tdiv" @contextmenu="SwitchHero('b1')" v-touch-pan.mouse="heroPanb1">
              <div id="b1header" class="tdivheader">
                <q-fab color="blue" push :icon="b1icon" active-icon="img:right-click.png"  class="herofab" direction="right" id="b1fab">
                  <q-avatar color="blue" @click="FabReset('b1')">
                    <img src="heroes/delete.png" draggable="false">
                  </q-avatar>
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
            <div id="b2" class="tdiv" @contextmenu="SwitchHero('b2')" v-touch-pan.mouse="heroPanb2">
              <div id="b2header" class="tdivheader">
                <q-fab color="blue" push :icon="b2icon" active-icon="img:right-click.png"  class="herofab" direction="right" id="b2fab">
                  <q-avatar color="blue" @click="FabReset('b2')">
                    <img src="heroes/delete.png" draggable="false">
                  </q-avatar>
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
            <div id="b3" class="tdiv" @contextmenu="SwitchHero('b3')" v-touch-pan.mouse="heroPanb3">
              <div id="b3header" class="tdivheader">
                <q-fab color="blue" push :icon="b3icon" active-icon="img:right-click.png"  class="herofab" direction="right" id="b3fab">
                  <q-avatar color="blue" @click="FabReset('b3')">
                    <img src="heroes/delete.png" draggable="false">
                  </q-avatar>
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
            <div id="b4" class="tdiv" @contextmenu="SwitchHero('b4')" v-touch-pan.mouse="heroPanb4">
              <div id="b4header" class="tdivheader">
                <q-fab color="blue" push :icon="b4icon" active-icon="img:right-click.png"  class="herofab" direction="right" id="b4fab">
                  <q-avatar color="blue" @click="FabReset('b4')">
                    <img src="heroes/delete.png" draggable="false">
                  </q-avatar>
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
            <div id="b5" class="tdiv" @contextmenu="SwitchHero('b5')" v-touch-pan.mouse="heroPanb5">
              <div id="b5header" class="tdivheader">
                <q-fab color="blue" push :icon="b5icon" active-icon="img:right-click.png"  class="herofab" direction="right" id="b5fab">
                  <q-avatar color="blue" @click="FabReset('b5')">
                    <img src="heroes/delete.png" draggable="false">
                  </q-avatar>
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
            <div id="b6" class="tdiv" @contextmenu="SwitchHero('b6')" v-touch-pan.mouse="heroPanb6">
              <div id="b6header" class="tdivheader">
                <q-fab color="blue" push :icon="b6icon" active-icon="img:right-click.png"  class="herofab" direction="right" id="b6fab">
                  <q-avatar color="blue" @click="FabReset('b6')">
                    <img src="heroes/delete.png" draggable="false">
                  </q-avatar>
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
        <!--<div id="playerDiv" style="position: fixed;top:0;left: 0">
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
          <video id="MainPlayer" style="margin-top: 50px" @ended="PlayerPause"></video>
        </div>-->

        <div id="toolBar-hide" class="toolbar-mini" @click="toolbarShow">
          <q-icon name="keyboard_arrow_up" color="white" size="20px"></q-icon>
          <span style="color: white;font-size: 14px;font-family: SourceHanSansSC;">展开工具</span>
        </div>
        <div id="toolBar" class="toolbar">
          <q-toolbar>
            <q-toolbar-title style="text-align: center">
              <q-btn flat color="white" icon="img:toolbar/switch-txt.png" size="25px" :style="pet_style" id="btn_penetrate" @click="PPClick">
                <q-tooltip content-class="bg-blue-4">在游戏和画布之间切换，快捷键：`</q-tooltip>
              </q-btn>
              <q-btn flat color="white" icon="img:toolbar/clean-txt.png" size="25px" id="btn_clear" @click="allBack">
                <q-tooltip content-class="bg-blue-4">清除画布和贴纸，快捷键：C</q-tooltip>
              </q-btn>
              <q-btn flat color="white" icon="img:toolbar/undo-txt.png" size="25px" id="btn_undo" @click="CanvasUndo">
                <q-tooltip content-class="bg-blue-4">撤销画布操作，快捷键：Ctrl+Z</q-tooltip>
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
              <q-btn flat color="white" icon="img:toolbar/mouse-txt.png" size="25px" :style="hero_style" @click="heroActive" id="btn_mouse">
                <q-tooltip content-class="bg-blue-4">选择鼠标，快捷键：1</q-tooltip>
              </q-btn>

              <q-btn flat color="white" icon="img:toolbar/pen-txt.png" size="25px" :style="pen_style" @click="Pen('pencil')" id="btn_pen">
                <q-tooltip content-class="bg-blue-4">选择画笔，快捷键：2</q-tooltip>
              </q-btn>

              <q-btn flat color="white" icon="img:toolbar/arrow-txt.png" size="25px" :style="arrow_style" @click="Pen('arrow')" id="btn_arrow">
                <q-tooltip content-class="bg-blue-4">选择箭头，快捷键：3</q-tooltip>
              </q-btn>
              <q-btn flat color="white" icon="img:toolbar/circle-txt.png" size="25px" :style="circle_style" @click="Pen('circle')" id="btn_circle">
                <q-tooltip content-class="bg-blue-4">选择圆圈，快捷键：4</q-tooltip>
              </q-btn>

              <q-btn flat color="white" icon="img:toolbar/exit-txt.png" size="25px" @click="windowClose" id="btn_quit">
                <q-tooltip content-class="bg-blue-4">退出游戏复盘，快捷键：Alt+Q</q-tooltip>
              </q-btn>

              <!--<q-btn flat color="white" icon="img:toolbar/hero-txt.png" size="25px" id="btn_hero" :style="hero_style" @click="heroActive">
                <q-tooltip content-class="bg-blue-4">激活英雄贴纸，快捷键：H</q-tooltip>
              </q-btn>-->

              <q-btn flat round color="white" icon="img:toolbar/down.png" size="8px" id="btn_tool_hide" @click="toolbarHide">
                <q-tooltip content-class="bg-blue-4">工具栏隐藏，快捷键：T</q-tooltip>
              </q-btn>


            </q-toolbar-title>
          </q-toolbar>
        </div>


      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
var focuser;
var teamListener;
var touchListener;
var tailListener;
var herocss=''
var paintcss=''
var drawUtil = new GraffitiCanvas();
var vol = 0.1
drawUtil.isContinuous(true)
import { QSpinnerGears } from 'quasar'
export default {
  data () {
    return {
      alert: false,
      blackboard: false,
      is_pet: false,
      showbox: '',
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
      mt:null,
      startx:0,
      starty:0,
      mdevice: 'mouse',
      mouseico: 'mouse',
      g_title: "暴雪大神守望先锋复盘工具",
      ppicon:'play_arrow',
      video_progress: null,
      video_slider: null,
      video_seconds: null,
      video_jump: null,
      teamAlogo: '',
      teamBlogo: '',
      teamAname: '',
      teamBname: '',
      btn_minimize: '最小化',
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
          title: "暴雪大神守望先锋复盘工具",
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
  },
  methods:{
    teamListen(){
      var lang = this.$q.localStorage.getItem('lang')
      /* var teamA = this.$q.localStorage.getItem('teamA')
      var teamB = this.$q.localStorage.getItem('teamB')
      this.teamAname = this.owl[lang][teamA].name
      this.teamAlogo = this.owl[lang][teamA].logo
      this.teamBname = this.owl[lang][teamB].name
      this.teamBlogo = this.owl[lang][teamB].logo*/

      this.g_title = this.sys[lang].title
      this.btn_setting = this.sys[lang].btn_setting
      //this.$q.electron.remote.getCurrentWindow().isFullScreen()
      if(document.body.clientWidth>1000){
        this.btn_fullscreen = '缩小'
      }else {
        this.btn_fullscreen = '全屏'
      }
      this.btn_exit = this.sys[lang].btn_exit
    },
    windowClose(){
      this.unpenetrate()
      const ipcRenderer = require('electron').ipcRenderer;
      ipcRenderer.sendSync('synchronous-message', 'game-off')
      ipcRenderer.on('asynchronous-reply', function(event, arg) {
      });
      ipcRenderer.send('asynchronous-message', 'game-off');

      ipcRenderer.sendSync('synchronous-message', 'ready-on')
      ipcRenderer.on('asynchronous-reply', function(event, arg) {
      });
      ipcRenderer.send('asynchronous-message', 'ready-on');
      //this.$q.electron.remote.getCurrentWindow().setFullScreen(false)
      //this.$q.electron.remote.getCurrentWindow().unmaximize();
      setTimeout(this.pageRefresh,200)
      this.pageRefresh()
      //setTimeout(this.$q.electron.remote.getCurrentWindow().hide(),200)
    },
    windowFullScreen(){
      this.unpenetrate()
      if(document.body.clientWidth>1000){
        this.$q.electron.remote.getCurrentWindow().unmaximize();
      }else {
        this.$q.electron.remote.getCurrentWindow().maximize();
      }
      setTimeout(this.pageRefresh,200)
      this.pageRefresh()
    },
    windowSmall(){
      this.unpenetrate()
      this.$q.electron.remote.getCurrentWindow().minimize();
    },
    pageRefresh(){
      this.$router.push('/rttg')
    },
    SwitchHero (id) {
      document.getElementById(id+'fab').click()
    },
    closeFab(tab){
      document.getElementById(tab+'fab').click()
    },
    FabSwitch (hero,tab) {
      this.unpenetrate()
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
    FabReset(tab){
      if (tab === 'r1') {
        document.getElementsByClassName('tdiv')[0].style.cssText = ''
      }
      if (tab === 'r2') {
        document.getElementsByClassName('tdiv')[1].style.cssText = ''
      }
      if (tab === 'r3') {
        document.getElementsByClassName('tdiv')[2].style.cssText = ''
      }
      if (tab === 'r4') {
        document.getElementsByClassName('tdiv')[3].style.cssText = ''
      }
      if (tab === 'r5') {
        document.getElementsByClassName('tdiv')[4].style.cssText = ''
      }
      if (tab === 'r6') {
        document.getElementsByClassName('tdiv')[5].style.cssText = ''
      }
      if (tab === 'b1') {
        document.getElementsByClassName('tdiv')[6].style.cssText = ''
      }
      if (tab === 'b2') {
        document.getElementsByClassName('tdiv')[7].style.cssText = ''
      }
      if (tab === 'b3') {
        document.getElementsByClassName('tdiv')[8].style.cssText = ''
      }
      if (tab === 'b4') {
        document.getElementsByClassName('tdiv')[9].style.cssText = ''
      }
      if (tab === 'b5') {
        document.getElementsByClassName('tdiv')[10].style.cssText = ''
      }
      if (tab === 'b6') {
        document.getElementsByClassName('tdiv')[11].style.cssText = ''
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
      this.unpenetrate()
      drawUtil.enableFillStyle(false);
      if (pen === 'pencil') {
        drawUtil.begin(1);
        this.pen_style='background-color: rgba(79, 79, 79, 0.6);'
        this.pet_style=''
        this.circle_style=''
        this.arrow_style=''
        this.hero_style=''
        this.mt = null
      }
      if (pen === 'arrow') {
        drawUtil.begin(21);
        drawUtil.enableFillStyle(true);
        this.pen_style=''
        this.circle_style=''
        this.arrow_style='background-color: rgba(79, 79, 79, 0.6);'
        this.pet_style=''
        this.hero_style=''
        this.mt = null
      }
      if (pen === 'rectangle') {
        drawUtil.begin(4);
      }
      if (pen === 'circle') {
        drawUtil.begin(6);
        this.pen_style=''
        this.circle_style='background-color: rgba(79, 79, 79, 0.6);'
        this.pet_style=''
        this.arrow_style=''
        this.hero_style=''
        this.mt = null
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
      // console.log('已激活画布')
    },
    ActiveHero () {
      // 激活英雄层：将画布层至于20，将英雄层至于40
      document.getElementById('paintingLayer').style.cssText = paintcss+';z-index:-999'
      document.getElementById('heroLayer').style.cssText = herocss+';z-index:999'
      // console.log('已激活英雄')
      this.mt = this.mousetail
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
      this.info = heroi
      var x = heroi.position.left - 25
      var y = heroi.position.top - 25
      if(heroi.isFirst){
        this.heroActive()
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        document.getElementsByClassName('tdiv')[0].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanr2({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left - 25
      var y = heroi.position.top - 25
      if(heroi.isFirst){
        this.heroActive()
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        document.getElementsByClassName('tdiv')[1].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanr3({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left - 25
      var y = heroi.position.top - 25
      if(heroi.isFirst){
        this.heroActive()
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        document.getElementsByClassName('tdiv')[2].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanr4({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left - 25
      var y = heroi.position.top - 25
      if(heroi.isFirst){
        this.heroActive()
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        document.getElementsByClassName('tdiv')[3].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanr5({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left - 25
      var y = heroi.position.top - 25
      if(heroi.isFirst){
        this.heroActive()
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        document.getElementsByClassName('tdiv')[4].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanr6({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left - 25
      var y = heroi.position.top - 25
      if(heroi.isFirst){
        this.heroActive()
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        document.getElementsByClassName('tdiv')[5].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanb1({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left - 25
      var y = heroi.position.top - 25
      if(heroi.isFirst){
        this.heroActive()
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        document.getElementsByClassName('tdiv')[6].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanb2({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left - 25
      var y = heroi.position.top - 25
      if(heroi.isFirst){
        this.heroActive()
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        document.getElementsByClassName('tdiv')[7].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanb3({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left - 25
      var y = heroi.position.top - 25
      if(heroi.isFirst){
        this.heroActive()
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        document.getElementsByClassName('tdiv')[8].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanb4({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left - 25
      var y = heroi.position.top - 25
      if(heroi.isFirst){
        this.heroActive()
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        document.getElementsByClassName('tdiv')[9].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanb5({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left - 25
      var y = heroi.position.top - 25
      if(heroi.isFirst){
        this.heroActive()
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        document.getElementsByClassName('tdiv')[10].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    heroPanb6({evt,...heroi}){
      this.info = heroi
      var x = heroi.position.left - 25
      var y = heroi.position.top - 25
      if(heroi.isFirst){
        this.heroActive()
        this.panning = true
      }else if(heroi.isFinal){
        this.panning = false
      }else{
        document.getElementsByClassName('tdiv')[11].style.cssText = 'left: '+x+'px;top: '+y+'px'
      }
    },
    mousetail({evt,...mti}){
      /*var mouse = document.getElementById('mouse');
      this.info = mti
      var x = mti.position.left
      var y = mti.position.top
      console.log(mti)
      if(mti.isFirst){
        console.log('按下')
        this.panning = true
        mouse.className = 'mouse'
        var targetX = x - mouse.offsetWidth / 2;
        var targetY = y - mouse.offsetHeight / 2;
        mouse.style.left = targetX + 'px';
        mouse.style.top = targetY + 'px';
      }else if(mti.isFinal){
        console.log('松开')
        this.panning = false
        mouse.className = 'mouse-fadeout'
        //mouse.style.cssText = "";
      }else{
        console.log('松开')
        this.panning = false
        mouse.className = 'mouse-fadeout'
      }*/
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
      this.ActiveHero()
      this.pen_style=''
      this.circle_style=''
      this.pet_style=''
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
    tailListen(){
      var mouse = document.getElementById('mouse');
      if(this.$q.localStorage.getItem('tail')){
        document.onclick = function () {
          //console.log('焦点')
          mouse.className = "mouse"
          var targetX = event.clientX - mouse.offsetWidth / 2
          var targetY = event.clientY - mouse.offsetHeight / 2
          mouse.style.left = targetX + 'px';
          mouse.style.top = targetY + 'px';
          mouse.className = "mouse-fadeout"
        }
      }else{
        document.onclick = function () {
        }
      }
    },
    topen(){
      this.Pen('pencil')
    },
    tocircle(){
      this.Pen('circle')
    },
    toarrow(){
      this.Pen('arrow')
    },
    FocusWindow () {
      if (process.env.MODE === 'electron') {
        const win = require('electron').remote.getCurrentWindow()
        if(!win.isFocused()){
          win.focus()
        }
      }
    },
    penetrate(){
      //this.allBack()
      this.FocusWindow()
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
      //focuser = setInterval(this.FocusWindow,3000)
      this.FocusWindow()
      //win.setAlwaysOnTop(true)
    },
    unpenetrate(){
      //this.allBack()
      this.FocusWindow()
      //focuser = null
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
      this.FocusWindow()
      //win.setAlwaysOnTop(true)
    },
    GamePP(){
      this.allBack()
      //this.alert = true
      var flag = document.getElementById('btn_penetrate').style.backgroundColor
      if(flag === ""){
        this.penetrate()
        document.getElementById('btn_penetrate').click()
      }else {
        this.Pen('pencil')
        document.getElementById('btn_pen').click()
      }
      this.showLoading()
    },
    PPClick(){
      this.allBack()
      this.penetrate()
    },
    showLoading () {
      const dialog = this.$q.dialog({
        message: '正在切换... 0%',
        progress: true, // we enable default settings
        persistent: true, // we want the user to not be able to close it
        ok: false // we want the user to not be able to close it
      })

      // we simulate some progress here...
      let percentage = 0
      const interval = setInterval(() => {
        percentage = Math.min(100, percentage + 80)

        // we update the dialog
        dialog.update({
          message: `正在切换... ${percentage}%`
        })

        // if we are done, we're gonna close it
        if (percentage >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            dialog.hide()
          }, 350)
        }
      }, 500)
    }
  },
  mounted() {
    document.title = "游戏复盘"
    this.FocusWindow()
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
    var canvas_ht = document.body.offsetHeight + 100
    // document.getElementById('canvas').style.width = canvas_wd + "px"
    // document.getElementById('canvas').style.height = canvas_ht + "px"
    if(drawUtil.init({'id':'canvas'})){
      let canvas = document.getElementById('canvas');
      canvas.width = canvas_wd - 60;
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
    // 初始化焦点
    tailListener = setInterval(this.tailListen,10)
    var mouse = document.getElementById('mouse');
    document.onclick = function () {
      mouse.className = "mouse"
      var targetX = event.clientX - mouse.offsetWidth / 2
      var targetY = event.clientY - mouse.offsetHeight / 2
      mouse.style.left = targetX + 'px';
      mouse.style.top = targetY + 'px';
      mouse.className = "mouse-fadeout"
    }
    //快捷键
    const {globalShortcut} = require('electron').remote; //`
    const gsc = globalShortcut.register('`', () => this.GamePP())
    const gsq = globalShortcut.register('Alt+q', () => this.windowClose())
    var Mousetrap = require('mousetrap');
    Mousetrap.bind('c', this.allBack)
    Mousetrap.bind('ctrl+z', this.CanvasUndo)
    Mousetrap.bind('q', this.topen)
    Mousetrap.bind('w', this.tocircle)
    Mousetrap.bind('e', this.Pen('circle'))
    Mousetrap.bind('h', this.ActiveHero)
    Mousetrap.bind('t', this.toolbarHide)
    Mousetrap.bind('1',this.heroActive)
    Mousetrap.bind('2',this.topen)
    Mousetrap.bind('3',this.tocircle)
    Mousetrap.bind('4',this.toarrow)
    //Mousetrap.bind('alt+q', this.windowClose())
    /*var Mousetrap = require('mousetrap');
    Mousetrap.bind('i', this.PlayerBefore)
    Mousetrap.bind('o', this.VPP)
    Mousetrap.bind('p', this.PlayerNext)
    Mousetrap.bind('c', this.allBack)
    Mousetrap.bind('ctrl+z', this.CanvasUndo)
    Mousetrap.bind('q', this.topen)
    Mousetrap.bind('w', this.tocircle)
    Mousetrap.bind('e', this.Pen('circle'))
    Mousetrap.bind('h', this.ActiveHero)
    Mousetrap.bind('t', this.toolbarHide)
    Mousetrap.bind('b', this.volup) //遥控器+
    Mousetrap.bind('n', this.voldown) //遥控器-
    Mousetrap.bind('ctrl+h', this.ActiveHero) //遥控器AV
    Mousetrap.bind('ctrl+i', this.PlayerBefore) //遥控器快进
    Mousetrap.bind('ctrl+o',this.VPP) //遥控器播放
    Mousetrap.bind('m',this.PlayerPause) //遥控器暂停
    Mousetrap.bind('ctrl+f',this.allBack) //遥控器停止
  */
    this.Pen('pencil')
    this.FocusWindow()
  },
  created() {
    // this.$q.electron.remote.BrowserWindow.getFocusedWindow().title = "游戏复盘"
  }
}
</script>
