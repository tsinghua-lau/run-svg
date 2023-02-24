import { defineComponent as v, useCssVars as k, unref as $, toRefs as y, ref as d, onMounted as w, openBlock as h, createElementBlock as p, renderSlot as _, createCommentVNode as B, nextTick as C } from "vue";
const S = ["stroke", "stroke-width"], x = {
  name: "RunSvg"
}, R = /* @__PURE__ */ v({
  ...x,
  props: {
    loop: { type: Boolean, default: !1 },
    num: { default: 2 },
    duration: { default: 2 },
    stroke: { default: "red" },
    lineWidth: { default: 3 },
    fillColor: { default: "#000" },
    reset: { type: Boolean, default: !0 }
  },
  setup(t) {
    const n = t;
    k((o) => ({
      f93507c4: $(m),
      "1e7b8e7f": f(i.value + 4)
    }));
    let { loop: l, num: r, duration: a, reset: c, fillColor: m } = y(n);
    l.value || r.value;
    const i = d(0), u = d(!0), f = (o) => {
      const e = [];
      e[1] = 0, e[2] = 300;
      for (let s = 3; s <= o; s++)
        e[s] = e[s - 1] + 200;
      return e[o] + "ms";
    };
    w(() => {
      const o = document.querySelectorAll("#logo path");
      if (o.length) {
        i.value = o.length;
        for (let e = 0; e < o.length; e++) {
          const s = o[e].getTotalLength();
          document.styleSheets[0].insertRule(
            `.icon path:nth-child(${e + 1}) {
        stroke-dasharray: ${s};
        stroke-dashoffset:${s};
        animation: line-anm 2s ease forwards ${f(e + 1)};
        } `,
            0
          );
        }
      } else
        throw new Error("没找到svg下的path");
    });
    const g = () => {
      c.value && (u.value = !1, C(() => {
        u.value = !0;
      }));
    };
    return (o, e) => u.value ? (h(), p("svg", {
      key: 0,
      id: "logo",
      class: "icon",
      stroke: t.stroke,
      fill: "none",
      "stroke-width": t.lineWidth,
      hegiht: "200",
      width: "200",
      viewBox: "0 0 1024 1024",
      onClick: g
    }, [
      _(o.$slots, "default")
    ], 8, S)) : B("", !0);
  }
});
const T = {
  name: "TestButton"
}, E = (t, n) => {
  const l = t.__vccOpts || t;
  for (const [r, a] of n)
    l[r] = a;
  return l;
};
function L(t, n, l, r, a, c) {
  return h(), p("button", null, [
    _(t.$slots, "default")
  ]);
}
const b = /* @__PURE__ */ E(T, [["render", L]]), N = [R, b], W = {
  install(t) {
    N.forEach((n) => {
      console.log(n.name), t.component(n.name, n);
    });
  }
};
export {
  W as default
};
