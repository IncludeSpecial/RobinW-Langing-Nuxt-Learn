import { defineComponent, mergeProps, unref, useSSRContext, computed, ref, h } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, c as useNuxtApp, a as useRuntimeConfig } from "../server.mjs";
import { u as useHead, a as useSeoMeta } from "./index-DIUDACRG.js";
import { defu } from "defu";
import { hasProtocol, withLeadingSlash, joinURL, parseURL, encodeParam, encodePath } from "ufo";
import { appendHeader } from "h3";
import __nuxt_component_0$2 from "./index-DwrR_Jvt.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "klona";
import "devalue";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
const navItems = [
  { name: "Experience", link: "#Experience" },
  { name: "Work", link: "#Work" },
  { name: "Photography", link: "#Photography" },
  { name: "Contact", link: "#Contact" }
];
const Logo = [
  { name: "W.Robin", link: "#" }
];
const CardItems = [
  {
    id: "01",
    firstColor: "text-green-500",
    firstWord: "Google, ",
    secondWord: "Interaction Designer",
    description: "I currently am the lead designer on the interaction design team for Google Play."
  },
  {
    id: "02",
    firstColor: "text-blue-500",
    firstWord: "Facebook, ",
    secondWord: "Product Designer",
    description: "I’ve worked on a wide variety of internal tools for Facebook over the past 6 years."
  },
  {
    id: "03",
    firstColor: "text-pink-500",
    firstWord: "Instagram, ",
    secondWord: "Graphic Designer",
    description: "I started my design career with Dribble. I was in charge of creating illustrations for the platform."
  }
];
const Works = {
  WorkTitle: "Work Experience",
  Description: "Companies I have worked for in the past"
};
const PhilosophySection = {
  PhilosophyTitle: "Our Philosophy & Values",
  Description: "At the core of our beliefs lie aspirations for profound connections with humanity, harmony in the metaphysical realm, and deep engagement with the universe. Our guiding principles—authenticity, creativity, and hospitality—steer us towards realizing these aspirations.",
  Link: "#",
  LinkText: "Learn More",
  ImageSrc: "/human_2.jpg",
  ImageAltText: "Human"
};
const HeroSection = {
  title: "I’m Robin Williams. A Product Designer,",
  titleSecond: "based in Italy.",
  description: "I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.",
  imageSrc: "/human.jpg",
  imageAlt: "Human"
};
const SkillsetBody = {
  title: "Skillset",
  description: "With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full-fledged project. Whatever your needs are, I can pretty much take on any challenge."
};
const SkillsetItems = [
  {
    Icon: "mdi:view-dashboard",
    Skill: "Product Design",
    Description: "Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."
  },
  {
    Icon: "mdi:pen",
    Skill: "Visual Design",
    Description: "My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package."
  },
  {
    Icon: "mdi:motion-play",
    Skill: "Motion Design",
    Description: "I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling. "
  },
  {
    Icon: "mdi:play",
    Skill: "Photography",
    Description: "Clicking pictures really brings out the creative in me. Phtography really makes you look and percieve things in a different way."
  }
];
const ProjectsItems = [
  {
    id: 1,
    imgSrc: "/img_1.png",
    imgAlt: "Restaurant Website Design",
    title: "Restaurant Website Design",
    description: "I worked with the guys at CBRE to redesign their entire website and mobile app for both Android and iOS. This project lasted for 4 months and was a very challenging one."
  },
  {
    id: 2,
    imgSrc: "/img_2.png",
    imgAlt: "Restaurant Website Design",
    title: "Restaurant Website Design",
    description: "I worked with the guys at CBRE to redesign their entire website and mobile app for both Android and iOS. This project lasted for 4 months and was a very challenging one."
  },
  {
    id: 3,
    imgSrc: "/img_3.png",
    imgAlt: "Restaurant Website Design",
    title: "Restaurant Website Design",
    description: "I worked with the guys at CBRE to redesign their entire website and mobile app for both Android and iOS. This project lasted for 4 months and was a very challenging one."
  },
  {
    id: 4,
    imgSrc: "/img_4.png",
    imgAlt: "Restaurant Website Design",
    title: "Restaurant Website Design",
    description: "I worked with the guys at CBRE to redesign their entire website and mobile app for both Android and iOS. This project lasted for 4 months and was a very challenging one."
  }
];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center py-4 px-12 sticky top-0 z-10 bg-black/20 backdrop-blur-lg border border-gray-800 rounded-md" }, _attrs))} data-v-9e489ece><a${ssrRenderAttr("href", unref(Logo)[0].link)} class="text-4xl font-bold text-primary" data-v-9e489ece>${ssrInterpolate(unref(Logo)[0].name)}</a><div class="flex justify-end" data-v-9e489ece><!--[-->`);
      ssrRenderList(unref(navItems), (item) => {
        _push(`<a${ssrRenderAttr("href", item.link)} class="nav-link" data-v-9e489ece>${ssrInterpolate(item.name)}</a>`);
      });
      _push(`<!--]--></div></nav>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-9e489ece"]]);
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import("image-meta").then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function prerenderStaticImages(src = "", srcset = "") {
  if (!process.env.prerender) {
    return;
  }
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  appendHeader(
    useRequestEvent(),
    "x-nitro-prerender",
    paths.map((p) => encodeURIComponent(p)).join(", ")
  );
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    if (process.env.prerender) {
      prerenderStaticImages(image.url);
    }
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$vRpByDH4NI = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$vRpByDH4NI, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, default: void 0 },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: {
    type: [Boolean, Object],
    default: void 0
  },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 },
  placeholderClass: { type: String, default: void 0 }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    if (process.env.prerender) {
      prerenderStaticImages(src.value, sizes.value.srcset);
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs,
      class: props.placeholder && !placeholderLoaded.value ? [props.placeholderClass] : void 0,
      src: src.value
    });
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col md:flex-row justify-between items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        alt: unref(HeroSection).imageAlt,
        src: unref(HeroSection).imageSrc,
        class: "md:w-1/2 h-1/2 object-cover rounded-lg shadow-md"
      }, null, _parent));
      _push(`<div class="md:right-0 md:w-screen px-4"><h1 class="font-bold text-4xl md:text-5xl lg:text-6xl text-primary py-4">${ssrInterpolate(unref(HeroSection).title)} <span class="text-gray-400 block">${ssrInterpolate(unref(HeroSection).titleSecond)}</span></h1><p class="text-lg text-primary mt-4 lg: md:mt-8 md:pr-8">${ssrInterpolate(unref(HeroSection).description)}</p></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ExperienceCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(unref(CardItems), (card) => {
        _push(`<div class="work-card bg-accent-foreground/10 dark:bg-gray-800 rounded-lg shadow-md p-3 flex flex-col justify-start" data-v-7b235254><span class="text-5xl md:text-9xl text-gray-600" data-v-7b235254>${ssrInterpolate(card.id)}</span><p class="text-xl md:text-2xl py-2" data-v-7b235254><span class="${ssrRenderClass(card.firstColor)}" data-v-7b235254>${ssrInterpolate(card.firstWord)}</span> ${ssrInterpolate(card.secondWord)}</p><p class="py-2 text-sm md:text-base" data-v-7b235254>${ssrInterpolate(card.description)}</p></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ExperienceCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7b235254"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Work",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "Work",
        class: "scroll-auto"
      }, _attrs))}><h2 class="font-bold text-xl md:text-2xl text-primary/70">${ssrInterpolate(unref(Works).WorkTitle)}</h2><h2 class="font-bold text-2xl md:text-6xl text-primary py-4">${ssrInterpolate(unref(Works).Description)}</h2><div class="flex flex-col md:flex-row justify-between gap-4">`);
      _push(ssrRenderComponent(ExperienceCard, null, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Work.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Philosophy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, _attrs))}><div class="bg-accent-foreground/10 dark:bg-gray-800 p-6 flex flex-col justify-center rounded-lg shadow-md"><h2 class="text-2xl text-primary dark:text-primary font-bold mb-4">${ssrInterpolate(unref(PhilosophySection).PhilosophyTitle)}</h2><p class="text-accent-foreground/70">${ssrInterpolate(unref(PhilosophySection).Description)}</p><a${ssrRenderAttr("href", unref(PhilosophySection).Link)} class="mt-4 text-blue-500 hover:underline">${ssrInterpolate(unref(PhilosophySection).LinkText)}</a></div><div class="bg-accent-foreground/10 dark:bg-gray-800 flex justify-center items-center object-cover rounded-lg shadow-md"><div class="w-full h-full flex justify-center items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        alt: unref(PhilosophySection).ImageAltText,
        src: unref(PhilosophySection).ImageSrc,
        class: "object-cover w-full h-64 md:h-96 rounded-lg shadow-md"
      }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Philosophy.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SkillCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(`<!--[-->`);
      ssrRenderList(unref(SkillsetItems), (skill) => {
        _push(`<div class="bg-white p-4 rounded-lg shadow-md">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: skill.Icon,
          size: "36px",
          style: { "color": "black" }
        }, null, _parent));
        _push(`<h4 class="text-2xl text-secondary font-semibold mb-2">${ssrInterpolate(skill.Skill)}</h4><p class="text-gray-600">${ssrInterpolate(skill.Description)}</p></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Skillset",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SkillCard = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, _attrs))} data-v-dbb5bafa><div class="flex flex-col justify-start" data-v-dbb5bafa><h4 class="text-2xl font-bold text-primary/70 mb-4" data-v-dbb5bafa>${ssrInterpolate(unref(SkillsetBody).title)}</h4><p class="text-xl md:text-4xl font-bold text-gray-700" data-v-dbb5bafa>${ssrInterpolate(unref(SkillsetBody).description)}</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-dbb5bafa>`);
      _push(ssrRenderComponent(_component_SkillCard, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skillset.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-dbb5bafa"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div class="mb-8 md:w-1/2"><h5 class="text-xl">MY PROJECTS</h5><p class="text-4xl md:text-6xl font-bold"> Work that I’ve done for the past 8 years </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(unref(ProjectsItems), (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "md:top-16": index % 2 == 0 }, "relative bg-primary text-primary-foreground rounded-lg"])}">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          alt: item.imgAlt,
          src: item.imgSrc,
          class: "w-full rounded-t-lg"
        }, null, _parent));
        _push(`<div class="p-4"><h5 class="text-2xl md:text-4xl">${ssrInterpolate(item.title)}</h5><p class="text-lg md:text-xl">${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="w-full md:w-5/6 mt-8 flex justify-center md:justify-end"><button class="p-4 border-gray-500 border-2">VIEW ALL PROJECTS</button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta(
      {
        title: "Switty | Портфолио",
        description: "Добро пожаловать в портфолио Switty, где представлены мои лучшие проекты и достижения."
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nav_bar = __nuxt_component_0$1;
      const _component_hero = _sfc_main$7;
      const _component_work = _sfc_main$5;
      const _component_philosophy = _sfc_main$4;
      const _component_skillset = __nuxt_component_4;
      const _component_projects = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container flex flex-col relative z-10 text-primary gap-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_nav_bar, null, null, _parent));
      _push(ssrRenderComponent(_component_hero, null, null, _parent));
      _push(ssrRenderComponent(_component_work, null, null, _parent));
      _push(ssrRenderComponent(_component_philosophy, null, null, _parent));
      _push(ssrRenderComponent(_component_skillset, null, null, _parent));
      _push(ssrRenderComponent(_component_projects, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-7lke0Ema.js.map
