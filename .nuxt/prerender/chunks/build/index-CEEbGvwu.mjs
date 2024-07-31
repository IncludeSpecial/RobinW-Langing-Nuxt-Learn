import { d as useNuxtApp, e as useAppConfig, b as useRuntimeConfig, f as asyncDataDefaults, g as createError } from './server.mjs';
import { defineComponent, computed, h, ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, unref } from 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/vue/index.mjs';
import { u as useHead } from './index-BxLiCpJA.mjs';
import { Icon, loadIcons, getIcon } from 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/@iconify/vue/dist/iconify.mjs';
import { getIconCSS } from 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/devalue/index.js';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/unenv/runtime/npm/consola.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/ipx/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Switty/Documents/GitHub/RobinW-Langing-Nuxt-Learn/node_modules/vue-router/dist/vue-router.node.mjs';

async function loadIcon(name) {
  if (!name)
    return null;
  await new Promise((resolve) => loadIcons([name], () => resolve(true))).catch(() => null);
  return getIcon(name);
}
function useResolvedName(getName) {
  const options = useAppConfig().icon;
  const collections = (options.collections || []).sort((a, b) => b.length - a.length);
  return computed(() => {
    var _a;
    const name = getName();
    const bare = name.startsWith(options.cssSelectorPrefix) ? name.slice(options.cssSelectorPrefix.length) : name;
    const resolved = ((_a = options.aliases) == null ? void 0 : _a[bare]) || bare;
    if (!resolved.includes(":")) {
      const collection = collections.find((c) => resolved.startsWith(c + "-"));
      return collection ? collection + ":" + resolved.slice(collection.length + 1) : resolved;
    }
    return resolved;
  });
}
const SYMBOL_SERVER_CSS = "NUXT_ICONS_SERVER_CSS";
function escapeCssSelector(selector) {
  return selector.replace(/([^\w-])/g, "\\$1");
}
const NuxtIconCss = /* @__PURE__ */ defineComponent({
  name: "NuxtIconCss",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  async setup(props) {
    var _a;
    const nuxt = useNuxtApp();
    const options = useAppConfig().icon;
    const cssClass = computed(() => props.name ? options.cssSelectorPrefix + props.name : "");
    const selector = computed(() => "." + escapeCssSelector(cssClass.value));
    function getCSS(icon, withLayer = true) {
      let iconSelector = selector.value;
      if (options.cssWherePseudo) {
        iconSelector = `:where(${iconSelector})`;
      }
      const css = getIconCSS(icon, {
        iconSelector,
        format: "compressed",
        customise: props.customize
      });
      if (options.cssLayer && withLayer) {
        return `@layer ${options.cssLayer} { ${css} }`;
      }
      return css;
    }
    {
      const configs = useRuntimeConfig().icon || {};
      if (!((_a = configs == null ? void 0 : configs.serverKnownCssClasses) == null ? void 0 : _a.includes(cssClass.value))) {
        const icon = await loadIcon(props.name);
        if (icon) {
          let ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS];
          if (!ssrCSS) {
            ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS] = /* @__PURE__ */ new Map();
            nuxt.runWithContext(() => {
              useHead({
                style: [
                  () => {
                    const sep = "";
                    let css = Array.from(ssrCSS.values()).sort().join(sep);
                    if (options.cssLayer) {
                      css = `@layer ${options.cssLayer} {${sep}${css}${sep}}`;
                    }
                    return { innerHTML: css };
                  }
                ]
              }, {
                tagPriority: "low"
              });
            });
          }
          if (props.name && !ssrCSS.has(props.name)) {
            const css = getCSS(icon, false);
            ssrCSS.set(props.name, css);
          }
        }
      }
    }
    return () => h("span", { class: ["iconify", cssClass.value, options.class] });
  }
});
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
  var _a, _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = !((_a = nuxtApp.ssrContext) == null ? void 0 : _a._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp.runWithContext(_handler));
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const hasCachedData = () => options.getCachedData(key, nuxtApp) != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = asyncDataDefaults.errorValue;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref((_i = options.getCachedData(key, nuxtApp)) != null ? _i : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key, nuxtApp));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const NuxtIconSvg = /* @__PURE__ */ defineComponent({
  name: "NuxtIconSvg",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  async setup(props, { slots }) {
    useNuxtApp();
    const options = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const storeKey = "i-" + name.value;
    if (name.value) {
      {
        useAsyncData(
          storeKey,
          () => loadIcon(name.value),
          { deep: false }
        );
      }
    }
    return () => h(Icon, {
      icon: name.value,
      ssr: true,
      class: options.class,
      // Iconify uses `customise`, where we expose `customize` for consistency
      customise: props.customize
    }, slots);
  }
});
const __nuxt_component_2 = defineComponent({
  name: "NuxtIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    },
    customize: {
      type: Function,
      required: false
    }
  },
  async setup(props, { slots }) {
    const nuxtApp = useNuxtApp();
    const options = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const component = computed(
      () => {
        var _a;
        return ((_a = nuxtApp.vueApp) == null ? void 0 : _a.component(name.value)) || ((props.mode || options.mode) === "svg" ? NuxtIconSvg : NuxtIconCss);
      }
    );
    const style = computed(() => {
      const size = props.size || options.size;
      return size ? { fontSize: Number.isNaN(+size) ? size : size + "px" } : null;
    });
    const customize = props.customize || options.customize;
    return () => h(
      component.value,
      {
        ...options.attrs,
        name: name.value,
        class: options.class,
        style: style.value,
        customize
      },
      slots
    );
  }
});

export { __nuxt_component_2 as default };
//# sourceMappingURL=index-CEEbGvwu.mjs.map