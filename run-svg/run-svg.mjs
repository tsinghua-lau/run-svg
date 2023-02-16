import { defineComponent as y, useCssVars as C, unref as S, toRefs as E, ref as o, onMounted as R, openBlock as h, createElementBlock as m, renderSlot as k } from "vue";
const T = ["stroke", "stroke-width"], W = {
  name: "RunSvg"
}, L = /* @__PURE__ */ y({
  ...W,
  props: {
    loop: { type: Boolean, default: !1 },
    num: { default: 2 },
    duration: { default: 2 },
    stroke: { default: "red" },
    lineWidth: { default: 3 },
    fillColor: { default: "#000" }
  },
  setup(t) {
    const n = t;
    C((a) => ({
      e91ec6e4: S(i),
      b3047a7c: f.value,
      b3047a7a: d.value,
      b3047a78: v.value,
      b3047a76: g.value,
      b3047a74: _.value,
      b3047a72: p.value,
      b3047a70: b.value,
      b3047a6e: $.value,
      b3047a6c: w.value,
      "293a95ae": x.value
    }));
    let { loop: s, num: u, duration: r, fillColor: i } = E(n);
    s.value || u.value;
    const f = o(), d = o(), v = o(), g = o(), _ = o(), p = o(), b = o(), $ = o(), w = o(), x = o();
    R(() => {
      const a = document.querySelectorAll("#logo path");
      if (a.length) {
        let c = 0;
        for (let l = 0; l < a.length; l++) {
          const e = a[l].getTotalLength();
          console.log("c第", l, "个", e), l == 0 && (f.value = e, console.log("第一个结束", e)), l == 1 && (d.value = e, console.log("第二个结束", e)), l == 2 && (v.value = e, console.log("第三个结束", e)), l == 3 && (g.value = e, console.log("第四个结束", e)), l === 4 && (_.value = e, console.log("第五个结束", e)), l === 5 && (p.value = e, console.log("第六个结束", e)), c = c > e ? c : e;
        }
        B.value = 2e3, console.log(c), console.log("fill结束");
      } else
        throw new Error("没找到svg下的path");
    });
    const B = o(0);
    return (a, c) => (h(), m("svg", {
      id: "logo",
      class: "icon",
      stroke: t.stroke,
      fill: "none",
      "stroke-width": t.lineWidth,
      hegiht: "200",
      width: "200",
      viewBox: "0 0 1024 1024"
    }, [
      k(a.$slots, "default")
    ], 8, T));
  }
});
const M = {
  name: "TestButton"
}, q = (t, n) => {
  const s = t.__vccOpts || t;
  for (const [u, r] of n)
    s[u] = r;
  return s;
};
function A(t, n, s, u, r, i) {
  return h(), m("button", null, [
    k(t.$slots, "default")
  ]);
}
const I = /* @__PURE__ */ q(M, [["render", A]]), O = [L, I], V = {
  install(t) {
    O.forEach((n) => {
      console.log(n.name), t.component(n.name, n);
    });
  }
};
export {
  V as default
};
