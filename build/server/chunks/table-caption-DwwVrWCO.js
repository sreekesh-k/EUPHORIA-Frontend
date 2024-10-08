import { c as create_ssr_component, f as compute_rest_props, h as spread, j as escape_attribute_value, k as escape_object } from './ssr-Diu9wf_y.js';
import { c as cn } from './index3-Dowwk4Sl.js';

const Table_caption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<caption${spread(
    [
      {
        class: escape_attribute_value(cn("text-muted-foreground mt-4 text-sm", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</caption>`;
});

export { Table_caption as T };
//# sourceMappingURL=table-caption-DwwVrWCO.js.map
