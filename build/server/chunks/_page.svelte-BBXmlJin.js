import { W as ensure_array_like, S as store_get, T as unsubscribe_stores, x as pop, v as push } from './index-DBde35eV.js';
import { w as writable } from './index2-CdQAJLCS.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (is_boolean || name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const shoppingList = writable([]);
  const notifications = writable([]);
  let newItem = "";
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$notifications", notifications));
  const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$shoppingList", shoppingList));
  $$payload.out += `<div class="notifications"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let note = each_array[$$index];
    $$payload.out += `<div class="notification">${escape_html(note)}</div>`;
  }
  $$payload.out += `<!--]--></div> <input type="text"${attr("value", newItem)} placeholder="Add an item"> <button>Add</button> <ul><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    $$payload.out += `<li>${escape_html(item.item)} <button>🗑️</button></li>`;
  }
  $$payload.out += `<!--]--></ul>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BBXmlJin.js.map
