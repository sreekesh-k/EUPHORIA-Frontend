import { r as redirect } from './index-DzcLzHBX.js';
import { c as connection } from './connection-B7tAGNEl.js';
import crypto from 'crypto';
import { writeFileSync } from 'fs';
import '@prisma/client';

const load = async ({ locals }) => {
  const res = await connection.findParticipation(locals.user.participant_id);
  const events = res.map((e) => e.event_code);
  if (events.includes("TH") || events.includes("CUG") || events.includes("CPG") || events.includes("WEB")) {
    throw redirect(301, "/dashboard");
  }
};
const actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    let event = data.get("event");
    event = event.toUpperCase();
    if (event !== "CUG" && event !== "CPG" && event !== "WEB") {
      return {
        success: false,
        message: "Invalid event"
      };
    }
    const paymentScreenshot = data.get("payment-screenshot");
    const transactionId = data.get("upi-transaction-id");
    const { user } = locals;
    const registeredDetails = await connection.findSoloEvents(user.participant_id);
    const registeredEvents = registeredDetails?.map((e) => e.event_code);
    if (registeredEvents?.length) {
      return {
        success: false,
        message: "Event already registered"
      };
    }
    let amount = 150;
    if (!transactionId) {
      return {
        success: false,
        message: "Transaction id required."
      };
    }
    if (!paymentScreenshot) {
      return {
        success: false,
        message: "Payment screenshot required."
      };
    }
    const uuid = crypto.randomUUID();
    try {
      const fileName = `static/screenshots/${user.participant_id}-${uuid}.png`;
      writeFileSync(fileName, Buffer.from(await paymentScreenshot.arrayBuffer()));
      const res = await connection.addPayment({ amount, uuid: crypto.randomUUID(), upi_transaction_id: transactionId, screenshot: fileName });
      const eventParticipation = {
        participant_id: user.participant_id,
        payment_id: res.payment_id,
        verified: false,
        event_code: event
      };
      console.log(eventParticipation);
      const res2 = await connection.addParticipation([eventParticipation]);
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error"
      };
    }
    throw redirect(302, "/dashboard");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DGe-6qV8.js')).default;
const server_id = "src/routes/(protected)/events/solo/+page.server.ts";
const imports = ["_app/immutable/nodes/9.BmrcbImO.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/index.BP1vhqCy.js","_app/immutable/chunks/index.r_n6alX8.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.DbGQmkCI.js","_app/immutable/chunks/input.DYxjnJHz.js","_app/immutable/chunks/types.CyUq3k7x.js","_app/immutable/chunks/create.BQ-Ir3Gq.js","_app/immutable/chunks/events.z-Wf44Zc.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-CjYYUF4e.js.map