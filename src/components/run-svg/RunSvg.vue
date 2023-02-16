<template>
  <svg
    id="logo"
    class="icon"
    :stroke="stroke"
    fill="none"
    :stroke-width="lineWidth"
    hegiht="200"
    width="200"
    viewBox="0 0 1024 1024"
  >
    <slot></slot>
  </svg>
</template>

<script lang="ts">
export default {
  name: "RunSvg",
};
</script>
<script lang="ts" setup>
import { onMounted, ref, toRefs, withDefaults, nextTick } from "vue";

const props = withDefaults(
  defineProps<{
    loop?: boolean;
    num?: number;
    duration?: number;
    stroke?: any;
    lineWidth?: number;
    fillColor?: any;
  }>(),
  {
    num: 2,
    loop: false,
    viewWidth: 10,
    viewHeight: 10,
    duration: 2,
    stroke: "red",
    lineWidth: 3,
    fillColor: "#000",
  }
);

let { loop, num, duration, fillColor } = toRefs(props);

const loops = loop.value ? `infinite` : num.value;

const a1 = ref();
const a2 = ref();
const a3 = ref();
const a4 = ref();
const a5 = ref();
const a6 = ref();
const a7 = ref();
const a8 = ref();
const a9 = ref();
const a10 = ref();

onMounted(() => {
  const pathList = document.querySelectorAll("#logo path");
  if (pathList.length) {
    let max = 0;
    for (let i = 0; i < pathList.length; i++) {
      //@ts-ignore
      const el = pathList[i].getTotalLength();
      switch (i) {
        case 0:
        a1.value = el;
          break;
          case 1:
        a2.value = el;
          break;
          case 2:
        a3.value = el;
          break;
          case 3:
        a4.value = el;
          break;
          case 4:
        a5.value = el;
          break;
          case 5:
        a6.value = el;
          break;
          case 6:
        a7.value = el;
          break;
          case 7:
        a8.value = el;
          break;
          case 8:
          a9.value = el;
          break;
          case 9:
          a10.value = el;
          break;
      
        default:
          break;
      }
     
      max = max > el ? max : el;
    }
    console.log(max); // 6076.2451171875
  } else throw new Error("没找到svg下的path");
});

// const viewBox = computed(() => {
//     return `0 0 ${viewWidth.value} ${viewHeight.value}`;
// });

const reset = (e: any) => {};
</script>

<style>
@keyframes fill-anm {
  from {
    fill: transparent;
  }

  to {
    fill: v-bind("fillColor");
  }
}

@keyframes line-anm {
  to {
    stroke-dashoffset: 0;
  }
}

.icon {
  animation: fill-anm 500ms  ease   forwards 1s;
}

.icon path {
  animation: fill-anm 500ms ease forwards 1500ms;
}

.icon path:nth-child(1) {
  stroke-dasharray: v-bind("a1");
  stroke-dashoffset: v-bind("a1");
  animation: line-anm 2s  ease  forwards;
}

.icon path:nth-child(2) {
  stroke-dasharray: v-bind("a2");
  stroke-dashoffset: v-bind("a2");
  animation: line-anm 2s ease forwards 300ms;
}

.icon path:nth-child(3) {
  stroke-dasharray: v-bind("a3");
  stroke-dashoffset: v-bind("a3");
  animation: line-anm 2s ease forwards 500ms;
}

.icon path:nth-child(4) {
  stroke-dasharray: v-bind("a4");
  stroke-dashoffset: v-bind("a4");
  animation: line-anm 2s ease forwards 700ms;
}

.icon path:nth-child(5) {
  stroke-dasharray: v-bind("a5");
  stroke-dashoffset: v-bind("a5");
  animation: line-anm 2s ease forwards 1000ms;
}

.icon path:nth-child(6) {
  stroke-dasharray: v-bind("a6");
  stroke-dashoffset: v-bind("a6");
  animation: line-anm 2s ease forwards 1200ms;
}

.icon path:nth-child(7) {
  stroke-dasharray: v-bind("a7");
  stroke-dashoffset: v-bind("a7");
  animation: line-anm 2s ease forwards 1400ms;
}

.icon path:nth-child(8) {
  stroke-dasharray: v-bind("a8");
  stroke-dashoffset: v-bind("a8");
  animation: line-anm 2s ease forwards 1400ms;
}

.icon path:nth-child(9) {
  stroke-dasharray: v-bind("a9");
  stroke-dashoffset: v-bind("a9");
  animation: line-anm 2s ease forwards 1400ms;
}


.icon path:nth-child(10) {
  stroke-dasharray: v-bind("a10");
  stroke-dashoffset: v-bind("a10");
  animation: line-anm 2s ease forwards 1400ms;
}
</style>
