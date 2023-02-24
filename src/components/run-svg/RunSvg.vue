<template>
  <svg
    id="logo"
    class="icon"
    :stroke="stroke"
    fill="none"
    :stroke-width="lineWidth"
    hegiht="1024"
    width="1024"
    viewBox="0 0 1024 1024"
    @click="resetSvg"
    v-if="reloadSvg"
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
    reset?:boolean;
  }>(),
  {
    num: 2,
    loop: false,
    viewWidth: 10,
    viewHeight: 10,
    duration: 2,
    stroke: "#000",
    lineWidth: 3,
    fillColor: "#000",
    reset:true,
  }
);

let { loop, num, duration, reset, fillColor } = toRefs(props);

const loops = loop.value ? `infinite` : num.value;

const pathLength = ref(0);

const reloadSvg = ref(true);


const getNum = (n:number)=>{
            const res = []
            res[1] = 0;
            res[2] = 300;
            for (let i = 3; i <= n; i++) {
                res[i] = res[i - 1] + 200;
            }
            return res[n] + 'ms';
        }
onMounted(() => {
  const pathList = document.querySelectorAll("#logo path");
  if (pathList.length) {
    pathLength.value=pathList.length;
    let max = 0;
    for (let i = 0; i < pathList.length; i++) {
      //@ts-ignore
      const el = pathList[i].getTotalLength();
      document.styleSheets[0].insertRule(
          `.icon path:nth-child(${i+1}) {
        stroke-dasharray: ${el};
        stroke-dashoffset:${el};
        animation: line-anm 2s ease forwards ${getNum(i+1)};
        } `,
          0
        ); 
    
      max = max > el ? max : el;

      
    }
    // console.log(max); // 6076.2451171875
  } else throw new Error("没找到svg下的path");
});


 

// const viewBox = computed(() => {
//     return `0 0 ${viewWidth.value} ${viewHeight.value}`;
// });

const resetSvg = () => {
  if(!reset.value)return;
  reloadSvg.value = false;
  nextTick(() => {
    reloadSvg.value = true;
  });
};
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
  animation: fill-anm 500ms ease forwards v-bind(getNum(pathLength+4));
}
</style>
