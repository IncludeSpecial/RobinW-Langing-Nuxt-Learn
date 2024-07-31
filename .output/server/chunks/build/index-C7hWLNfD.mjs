import { cva } from 'class-variance-authority';
import { useSSRContext, defineAsyncComponent, defineComponent, ref, computed, h, mergeProps, unref, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, resolveComponent, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { Primitive } from 'radix-vue';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { c as useNuxtApp, _ as _export_sfc, b as useRuntimeConfig } from './server.mjs';
import __nuxt_component_2 from './index-BkS1G7Xz.mjs';
import { u as useHead, a as useSeoMeta } from './index-DdBGWqj1.mjs';
import { y as encodeParam, l as hasProtocol, z as withLeadingSlash, n as joinURL, A as parseURL, p as defu, B as encodePath } from '../runtime.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import '@iconify/utils/lib/css/icon';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "as-child": _ctx.asChild,
        class: unref(cn)(unref(buttonVariants)({ variant: _ctx.variant, size: _ctx.size }), props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/button/Button.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded px-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
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
    description: "I\u2019ve worked on a wide variety of internal tools for Facebook over the past 6 years."
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
const PhilosophyItems = {
  PhilosophyTitle: "Our Philosophy & Values",
  Description: "At the core of our beliefs lie aspirations for profound connections with humanity, harmony in the metaphysical realm, and deep engagement with the universe. Our guiding principles\u2014authenticity, creativity, and hospitality\u2014steer us towards realizing these aspirations.",
  Link: "#",
  LinkText: "Learn More",
  ImageSrc: "https://burst.shopifycdn.com/photos/dark-portrait-of-woman-with-her-eyes-closed.jpg?width=1000&format=pjpg&exif=0&iptc=0",
  ImageAltText: "Human"
};
const InstagramItems = {
  PhilosophyTitle: "Instagram",
  Description: "If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I\u2019m an avid traveller and I capture the best moments that I would love to cherish with the world",
  Link: "#",
  LinkText: "Follow me on Instagram",
  ImageSrc: "https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=",
  ImageAltText: "Human"
};
const HeroItems = {
  title: "I\u2019m Robin Williams. A Product Designer,",
  titleSecond: "based in Italy.",
  description: "I\u2019m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I\u2019m your guy.",
  imageSrc: "https://i.pinimg.com/564x/dc/28/47/dc2847016e75a58c2ed97003b1d41c79.jpg",
  imageAlt: "Human"
};
const CompanyBodyItems = {
  title: "Skillset",
  description: "With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full-fledged project. Whatever your needs are, I can pretty much take on any challenge."
};
const CompanyItems = [
  {
    id: "01",
    logo: "arcticons:epic-games",
    link: "#",
    size: "16px"
  },
  {
    id: "02",
    logo: "arcticons:newsbreak",
    link: "#",
    size: "16px"
  },
  {
    id: "03",
    logo: "arcticons:steam",
    link: "#",
    size: "16px"
  },
  {
    id: "04",
    logo: "arcticons:funmax",
    link: "#",
    size: "16px"
  },
  {
    id: "05",
    logo: "arcticons:x-twitter",
    link: "#",
    size: "16px"
  },
  {
    id: "06",
    logo: "arcticons:twitch",
    link: "#",
    size: "16px"
  },
  {
    id: "07",
    logo: "arcticons:arena-breakout",
    link: "#",
    size: "16px"
  },
  {
    id: "08",
    logo: "arcticons:amd-link",
    link: "#",
    size: "16px"
  },
  {
    id: "09",
    logo: "arcticons:whatsapp",
    link: "#",
    size: "16px"
  }
];
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
    imgSrc: "https://media.istockphoto.com/photos/modern-tech-for-a-modern-workplace-picture-id824197440?b=1&k=20&m=824197440&s=170667a&w=0&h=1Z2fi7fYvmd17dBz9cEBGwHYecq_XCGquRyHls--8xc=",
    imgAlt: "Restaurant Website Design",
    title: "Restaurant Website Design",
    description: "I worked with the guys at CBRE to redesign their entire website and mobile app for both Android and iOS. This project lasted for 4 months and was a very challenging one."
  },
  {
    id: 2,
    imgSrc: "https://www.zdnet.com/a/img/resize/e9794c8e2b8a9a9173f0b1f496406d551f6e80b5/2023/08/22/8c939452-01fe-4087-a469-c902c577f0a1/asus-zenfone-10-in-hand.jpg?auto=webp&fit=crop&height=900&width=1200",
    imgAlt: "Restaurant Website Design",
    title: "Restaurant Website Design",
    description: "I worked with the guys at CBRE to redesign their entire website and mobile app for both Android and iOS. This project lasted for 4 months and was a very challenging one."
  },
  {
    id: 3,
    imgSrc: "https://cdn.prod.website-files.com/5e0a5d9d743608d0f3ea6753/64070707e3e10633530f0a08_daily.dev%20feed%20-%20mobile.webp",
    imgAlt: "Restaurant Website Design",
    title: "Restaurant Website Design",
    description: "I worked with the guys at CBRE to redesign their entire website and mobile app for both Android and iOS. This project lasted for 4 months and was a very challenging one."
  },
  {
    id: 4,
    imgSrc: "https://designmodo.com/wp-content/uploads/2018/08/1-Modern-Branding-Identity-Mockup-Vol.2.jpg",
    imgAlt: "Restaurant Website Design",
    title: "Restaurant Website Design",
    description: "I worked with the guys at CBRE to redesign their entire website and mobile app for both Android and iOS. This project lasted for 4 months and was a very challenging one."
  }
];
const TestimonialItems = [
  {
    ImageSrc: "https://i.pinimg.com/originals/e7/4b/b5/e74bb5c8efaa066cc9db6f6d82d22634.jpg",
    ImageAltText: "Image description",
    Testimonial: "Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.",
    AuthorName: "Richard Owens",
    AuthorTitle: "CEO, Company 1"
  },
  {
    ImageSrc: "https://i.pinimg.com/originals/e7/4b/b5/e74bb5c8efaa066cc9db6f6d82d22634.jpg",
    ImageAltText: "Image description",
    Testimonial: "Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.",
    AuthorName: "Richard Owens",
    AuthorTitle: "CEO, Company 1"
  },
  {
    ImageSrc: "https://i.pinimg.com/originals/e7/4b/b5/e74bb5c8efaa066cc9db6f6d82d22634.jpg",
    ImageAltText: "Image description",
    Testimonial: "Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.",
    AuthorName: "Richard Owens",
    AuthorTitle: "CEO, Company 1"
  }
];
const CityItems = [
  {
    city: "Italy",
    images: [
      {
        src: "https://img.freepik.com/free-photo/vertical-picture-gondolas-grand-channel-colorful-buildings-venice-italy_181624-28984.jpg?t=st=1722428812~exp=1722432412~hmac=8f6ce3184b525190730e99877b69e41ca4d7ae45a302824310a1c79649e87d11&w=740",
        alt: "Italy"
      },
      {
        src: "https://img.freepik.com/free-photo/venice-canal-with-boats_1163-171.jpg?t=st=1722429120~exp=1722432720~hmac=6da39cf6bfc9023308dac8bca0168d5379a158763f6b6b30667317394c0130cd&w=1380",
        alt: "Italy"
      },
      {
        src: "https://mrwallpaper.com/images/hd/italy-coast-portrait-1sfxx28sv0hrwvxj.jpg",
        alt: "Italy"
      },
      {
        src: "https://images.axios.com/wLi0s3Pcl6LVFNheenhlXWG_NiU=/0x638:6123x4082/1920x1080/2023/01/09/1673275741989.jpg",
        alt: "Italy"
      },
      {
        src: "https://www.civitatis.com/blog/wp-content/uploads/2020/02/blog-australia.jpg",
        alt: "Italy"
      },
      {
        src: "https://www.thoughtco.com/thmb/xQfMbZ4dRj8eH_YmQkV7nrf85CU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Florence-170003772-crop4-58b61fb15f9b5860465de909.jpg",
        alt: "Italy"
      },
      {
        src: "https://www.moon.com/wp-content/uploads/2019/01/Italy_TreviFountain_Dreamstime1.jpg",
        alt: "Italy"
      }
    ]
  },
  {
    city: "Australia",
    images: [
      {
        src: "https://www.shutterstock.com/image-photo/sydney-cityscape-image-australia-harbour-600nw-589390340.jpg",
        alt: "Australia"
      },
      {
        src: "https://youtooproject.com/wp-content/uploads/2024/05/Estudiar-y-vivir-en-Australia-image.jpg",
        alt: "Australia"
      },
      {
        src: "https://img.freepik.com/premium-photo/vertical-shot-sunrise-surfers-paradise-gold-coast-queensland-australia_665346-45986.jpg",
        alt: "Australia"
      },
      {
        src: "https://images.adsttc.com/media/images/6038/db85/f91c/818f/2900/0004/large_jpg/Sydney_for_Airplane.jpg",
        alt: "Australia"
      },
      {
        src: "https://i.pinimg.com/736x/48/e5/87/48e58726240caa4bef6960ebe377366a.jpg",
        alt: "Australia"
      },
      {
        src: "https://www.shutterstock.com/image-photo/aerial-view-brisbane-city-australia-600nw-2212848371.jpg",
        alt: "Australia"
      },
      {
        src: "https://previews.123rf.com/images/zstockphotos/zstockphotos1802/zstockphotos180200299/95017555-vertical-aerial-view-of-sunny-surfers-paradise-on-the-gold-coast-queensland-australia.jpg",
        alt: "Australia"
      }
    ]
  },
  {
    city: "India",
    images: [
      {
        src: "https://www.authenticindiatours.com/app/uploads/2022/05/10-Customs-and-Traditions-in-Indian-Culture-Jaisalmer-Desert-Festival.jpeg",
        alt: "India"
      },
      {
        src: "https://media.nomadicmatt.com/2022/indiatips2.jpeg",
        alt: "India"
      },
      {
        src: "https://curlytales.com/wp-content/uploads/2023/10/india-travel-report-cover.jpg",
        alt: "India"
      },
      {
        src: "https://e0.pxfuel.com/wallpapers/916/704/desktop-wallpaper-india-city-indian-city.jpg",
        alt: "India"
      },
      {
        src: "https://websaweprd.blob.core.windows.net/cms-assets-international/styles/640w/public/2021-01/Afbeelding2_0.jpg",
        alt: "India"
      },
      {
        src: "https://img.freepik.com/premium-photo/city-palace-jaipur-rajasthan-india_617018-358.jpg",
        alt: "India"
      },
      {
        src: "https://e0.pxfuel.com/wallpapers/703/379/desktop-wallpaper-india-city-india-city-background-on-bat-indian-city.jpg",
        alt: "India"
      }
    ]
  },
  {
    city: "Brazil",
    images: [
      {
        src: "https://media.telefonicatech.com/telefonicatech/uploads/2021/1/450_brazilian-cities-urban-planning.jpg",
        alt: "Brazil"
      },
      {
        src: "https://www.aventuradobrasil.com/assets/img/news/Brazils-Most-Beautiful-Cities-Olinda.jpg",
        alt: "Brazil"
      },
      {
        src: "https://www.worldatlas.com/r/w1200/upload/b3/44/56/shutterstock-557205925.jpg",
        alt: "Brazil"
      },
      {
        src: "https://travel2next.com/wp-content/uploads/brazil-cities-rio.jpg",
        alt: "Brazil"
      },
      {
        src: "https://www.brol.com/wp-content/uploads/2018/10/sao_paulo.jpg",
        alt: "Brazil"
      },
      {
        src: "https://www.aworldtotravel.com/wp-content/uploads/2019/01/sao-paulo-1-heres-how-to-road-trip-5-brazilian-cities-in-two-weeks-a-world-to-travel-1.jpg",
        alt: "Brazil"
      },
      {
        src: "https://goway-cms-files.s3.ca-central-1.amazonaws.com/production/wordpress_images/Sunset-view-of-Belo-Horizonte-Brazil-_631522190.jpg",
        alt: "Brazil"
      }
    ]
  }
];
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "NavBarSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$d;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "container flex justify-center md:justify-between items-center py-4 px-12 sticky top-0 z-10 bg-black/20 backdrop-blur-lg border border-gray-800 rounded-md" }, _attrs))}><a${ssrRenderAttr("href", unref(Logo)[0].link)} class="text-4xl font-bold text-primary">${ssrInterpolate(unref(Logo)[0].name)}</a><div class="justify-end gap-4 md:flex hidden"><!--[-->`);
      ssrRenderList(unref(navItems), (item) => {
        _push(ssrRenderComponent(_component_Button, {
          variant: "link",
          href: item.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></nav>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBarSection.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0_lazy$2 = defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtImg;
}).then((c) => c.default || c));
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyNuxtImg = __nuxt_component_0_lazy$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col md:flex-row justify-between items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LazyNuxtImg, {
        alt: unref(HeroItems).imageAlt,
        src: unref(HeroItems).imageSrc,
        class: "md:w-1/2 h-1/2 object-cover rounded-lg shadow-md"
      }, null, _parent));
      _push(`<div class="md:right-0 md:w-screen px-4"><h1 class="font-bold text-4xl md:text-5xl lg:text-6xl text-primary py-4">${ssrInterpolate(unref(HeroItems).title)} <span class="text-gray-400 block">${ssrInterpolate(unref(HeroItems).titleSecond)}</span></h1><p class="text-lg text-primary mt-4 lg: md:mt-8 md:pr-8">${ssrInterpolate(unref(HeroItems).description)}</p></div></section>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ExperienceSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(unref(CardItems), (card) => {
        _push(`<div class="work-card bg-accent-foreground/10 dark:bg-gray-800 rounded-lg shadow-md p-3 flex flex-col justify-start" data-v-85dca3ab><span class="text-4xl md:text-9xl text-gray-600" data-v-85dca3ab>${ssrInterpolate(card.id)}</span><p class="text-xl md:text-2xl py-2" data-v-85dca3ab><span class="${ssrRenderClass(card.firstColor)}" data-v-85dca3ab>${ssrInterpolate(card.firstWord)}</span> ${ssrInterpolate(card.secondWord)}</p><p class="py-2 text-sm md:text-base" data-v-85dca3ab>${ssrInterpolate(card.description)}</p></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ExperienceCard = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-85dca3ab"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "WorkSection",
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorkSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2_lazy = defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtImg;
}).then((c) => c.default || c));
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "PhilosophySection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$d;
      const _component_Icon = __nuxt_component_2;
      const _component_LazyNuxtImg = __nuxt_component_2_lazy;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, _attrs))}><div class="bg-accent-foreground/10 dark:bg-gray-800 p-4 flex flex-col justify-center items-start rounded-lg shadow-md"><h2 class="text-2xl text-primary dark:text-primary font-bold mb-4">${ssrInterpolate(unref(PhilosophyItems).PhilosophyTitle)}</h2><p class="text-accent-foreground/70 mb-4">${ssrInterpolate(unref(PhilosophyItems).Description)}</p>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "link",
        class: "text-blue-400",
        href: unref(PhilosophyItems).Link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "arcticons:linkhub",
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(PhilosophyItems).LinkText)}`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "arcticons:linkhub",
                class: "mr-2"
              }),
              createTextVNode(" " + toDisplayString(unref(PhilosophyItems).LinkText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-accent-foreground/10 dark:bg-gray-800 flex justify-center items-center rounded-lg shadow-md">`);
      _push(ssrRenderComponent(_component_LazyNuxtImg, {
        alt: unref(PhilosophyItems).ImageAltText,
        src: unref(PhilosophyItems).ImageSrc,
        class: "object-cover w-full h-64 md:h-96 rounded-lg"
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PhilosophySection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SkillCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SkillsetSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SkillCard = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, _attrs))}><div class="flex flex-col justify-start"><h4 class="text-4xl font-bold text-primary mb-4">${ssrInterpolate(unref(CompanyBodyItems).title)}</h4><p class="text-xl md:text-xl font-light text-gray-400">${ssrInterpolate(unref(CompanyBodyItems).description)}</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_component_SkillCard, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillsetSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CompanySection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "scroll-container no-scrollbar overflow-hidden touch-manipulation overflow-x-auto overflow-y-hidden whitespace-nowrap border-gray-500 border rounded-lg" }, _attrs))}><div class="flex"><!--[-->`);
      ssrRenderList(unref(CompanyItems), (item) => {
        _push(`<div class="flex justify-center items-center p-4 border border-gray-500 min-w-72 h-36"><a${ssrRenderAttr("href", item.link)} class="item-link">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: item.logo,
          size: "64px"
        }, null, _parent));
        _push(`</a></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CompanySection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0_lazy$1 = defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtImg;
}).then((c) => c.default || c));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyNuxtImg = __nuxt_component_0_lazy$1;
      const _component_Button = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div class="mb-8 md:w-1/2"><h5 class="text-xl text-gray-400">MY PROJECTS</h5><p class="text-4xl md:text-6xl font-semibold"> Work that I\u2019ve done for the past 8 years </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(unref(ProjectsItems), (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "md:top-16": index % 2 == 0 }, "relative bg-primary text-primary-foreground rounded-lg"])}">`);
        _push(ssrRenderComponent(_component_LazyNuxtImg, {
          alt: item.imgAlt,
          src: item.imgSrc,
          class: "w-full rounded-t-lg"
        }, null, _parent));
        _push(`<div class="p-4"><h5 class="lg:text-4xl text-2xl font-semibold md:text-4xl">${ssrInterpolate(item.title)}</h5><p class="text-lg md:text-xl">${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="w-full md:w-5/6 mt-8 flex justify-center md:justify-end">`);
      _push(ssrRenderComponent(_component_Button, { variant: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`VIEW ALL PROJECTS`);
          } else {
            return [
              createTextVNode("VIEW ALL PROJECTS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0_lazy = defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtImg;
}).then((c) => c.default || c));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InstagramSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyNuxtImg = __nuxt_component_0_lazy;
      const _component_Button = _sfc_main$d;
      const _component_Icon = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, _attrs))}><div class="bg-accent-foreground/10 dark:bg-gray-800 flex justify-center items-center rounded-lg shadow-md">`);
      _push(ssrRenderComponent(_component_LazyNuxtImg, {
        alt: unref(InstagramItems).ImageAltText,
        src: unref(InstagramItems).ImageSrc,
        class: "object-cover w-full h-64 md:h-96 rounded-lg"
      }, null, _parent));
      _push(`</div><div class="bg-accent-foreground/10 dark:bg-gray-800 p-4 flex flex-col justify-center items-start rounded-lg shadow-md"><h2 class="text-2xl text-primary dark:text-primary font-bold mb-4">${ssrInterpolate(unref(InstagramItems).PhilosophyTitle)}</h2><p class="text-accent-foreground/70 mb-4">${ssrInterpolate(unref(InstagramItems).Description)}</p>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "link",
        href: unref(InstagramItems).Link,
        class: "text-blue-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "arcticons:instagram",
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(InstagramItems).LinkText)}`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "arcticons:instagram",
                class: "mr-2"
              }),
              createTextVNode(" " + toDisplayString(unref(InstagramItems).LinkText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InstagramSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
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
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
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
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
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
const __nuxt_component_1 = defineComponent({
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
const nuxtImg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1,
  imgProps
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TestimonialSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$d;
      const _component_Div = resolveComponent("Div");
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 lg:grid-cols-2 gap-4 text-white" }, _attrs))}><div class="flex flex-col justify-start lg:pr-16"><h2 class="lg:text-4xl text-xl font-bold mb-4">This is what people say about me</h2><p class="text-gray-400 mb-8"> Here are a few lines from people who I have worked with over the past 8+ years in my design career. </p>`);
      _push(ssrRenderComponent(_component_Button, {
        href: "/testimonials",
        class: "text-blue-500 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` See all testimonials `);
          } else {
            return [
              createTextVNode(" See all testimonials ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Div, { class: "lg:gap-24 gap-4 flex flex-col justify-between" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(TestimonialItems), (item) => {
              _push2(`<div class="space-y-8"${_scopeId}><div class="flex flex-col rounded-lg border list-inside border-gray-300"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: item.ImageSrc,
                alt: item.ImageAltText,
                class: "object-cover rounded-t-lg w-full h-48 md:h-64 lg:h-96"
              }, null, _parent2, _scopeId));
              _push2(`<div class="gap-8 p-12 justify-between flex flex-col"${_scopeId}><p class="lg:text-2xl text-sm font-semibold"${_scopeId}> \u201C${ssrInterpolate(item.Testimonial)}\u201D </p><div${_scopeId}><p class="text-gray-500 text-xl font-bold"${_scopeId}>${ssrInterpolate(item.AuthorName)}</p><p class="text-gray-400"${_scopeId}>${ssrInterpolate(item.AuthorTitle)}</p></div></div></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(TestimonialItems), (item) => {
                return openBlock(), createBlock("div", { class: "space-y-8" }, [
                  createVNode("div", { class: "flex flex-col rounded-lg border list-inside border-gray-300" }, [
                    createVNode(_component_NuxtImg, {
                      src: item.ImageSrc,
                      alt: item.ImageAltText,
                      class: "object-cover rounded-t-lg w-full h-48 md:h-64 lg:h-96"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "gap-8 p-12 justify-between flex flex-col" }, [
                      createVNode("p", { class: "lg:text-2xl text-sm font-semibold" }, " \u201C" + toDisplayString(item.Testimonial) + "\u201D ", 1),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-gray-500 text-xl font-bold" }, toDisplayString(item.AuthorName), 1),
                        createVNode("p", { class: "text-gray-400" }, toDisplayString(item.AuthorTitle), 1)
                      ])
                    ])
                  ])
                ]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1_lazy = defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtImg;
}).then((c) => c.default || c));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PhotographySection",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedCity = ref("Italy");
    const showModal = ref(false);
    const modalImageSrc = ref("");
    const openModal = (imageSrc) => {
      modalImageSrc.value = imageSrc;
      showModal.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Button = _sfc_main$d;
      const _component_LazyNuxtImg = __nuxt_component_1_lazy;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-white" }, _attrs))}><div class="flex flex-col mb-8"><h2 class="text-4xl font-bold mb-4">Photography</h2><p class="text-gray-400"> Here is a collection of my best travel pictures that I took while travelling places all around the world. </p></div><div class="flex space-x-4 mb-8"><!--[-->`);
      ssrRenderList(unref(CityItems), (city) => {
        _push(ssrRenderComponent(_component_Button, {
          key: city.city,
          onClick: ($event) => selectedCity.value = city.city,
          class: [{
            "bg-purple-600 text-white": selectedCity.value === city.city,
            "bg-gray-700 text-white hover:bg-purple-600": selectedCity.value !== city.city
          }, "px-4 py-2 rounded"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(city.city)}`);
            } else {
              return [
                createTextVNode(toDisplayString(city.city), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex no-scrollbar gap-4 scroll-container rounded-lg overflow-hidden touch-manipulation overflow-x-auto overflow-y-hidden whitespace-nowrap"><!--[-->`);
      ssrRenderList(((_a = unref(CityItems).find((city) => city.city === selectedCity.value)) == null ? void 0 : _a.images) || [], (image, index) => {
        _push(ssrRenderComponent(_component_LazyNuxtImg, {
          key: index,
          src: image.src,
          alt: image.alt,
          height: "720",
          class: "h-96 w-72 object-cover cursor-pointer",
          onClick: ($event) => openModal(image.src)
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (showModal.value) {
        _push(`<div class="fixed inset-2 z-50 flex items-center justify-center bg-black bg-opacity-75"><div class="relative bg-white rounded-lg"><button class="absolute top-2 right-2 px-2 items-center justify-center rounded-full bg-primary text-center text-gray-700 text-4xl hover:text-gray-900"> \xD7 </button>`);
        _push(ssrRenderComponent(_component_LazyNuxtImg, {
          src: modalImageSrc.value,
          class: "max-w-full max-h-screen rounded-lg"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PhotographySection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta(
      {
        title: "Switty | \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
        description: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E Switty, \u0433\u0434\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u043C\u043E\u0438 \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F."
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBarSection = _sfc_main$c;
      const _component_HeroSection = _sfc_main$b;
      const _component_WorkSection = _sfc_main$9;
      const _component_PhilosophySection = _sfc_main$8;
      const _component_SkillsetSection = _sfc_main$6;
      const _component_CompanySection = _sfc_main$5;
      const _component_ProjectsSection = _sfc_main$4;
      const _component_InstagramSection = _sfc_main$3;
      const _component_TestimonialSection = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container flex flex-col px-4 relative z-10 mx-auto text-primary gap-4 pb-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NavBarSection, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_WorkSection, null, null, _parent));
      _push(ssrRenderComponent(_component_PhilosophySection, null, null, _parent));
      _push(ssrRenderComponent(_component_SkillsetSection, null, null, _parent));
      _push(ssrRenderComponent(_component_CompanySection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProjectsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_InstagramSection, null, null, _parent));
      _push(ssrRenderComponent(_component_TestimonialSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
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

export { _sfc_main as default };
//# sourceMappingURL=index-C7hWLNfD.mjs.map
