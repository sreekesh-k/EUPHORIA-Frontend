import { c as create_ssr_component, v as validate_component } from './ssr-BPpBco92.js';
import { I as Icon } from './Icon-Cvl7DYRt.js';

const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});

export { Check as C };
//# sourceMappingURL=check-B7hBTfZC.js.map