import { a as client } from './connection-B7tAGNEl.js';
import { r as redirect } from './index-DzcLzHBX.js';
import '@prisma/client';

const load = async ({ url, depends }) => {
  depends("database");
  let pageNumber = Number(url.searchParams.get("page")) || 1;
  let limit = Number(url.searchParams.get("limit") || 10);
  if (limit < 0)
    limit = 10;
  const where = {
    verified: true
  };
  const count = await client.tickets.count({
    where
  });
  if (pageNumber > Math.ceil(count / limit)) {
    pageNumber = Math.ceil(count / limit);
  }
  if (pageNumber < 1)
    pageNumber = 1;
  let tickets = await client.tickets.findMany({
    take: limit,
    include: {
      viewer: true
    },
    skip: (pageNumber - 1) * limit,
    where
  });
  return {
    tickets,
    pageNumber,
    limit,
    count,
    filter: ""
  };
};
const actions = {
  verify: async ({ request, locals }) => {
    try {
      const data = await request.formData();
      const participation_id = Number(data.get("participationId"));
      if (!participation_id) {
        return {
          success: false
        };
      }
      const res = await client.event_participants.update({
        where: {
          event_participant_id: participation_id
        },
        data: {
          verified: true
        }
      });
      return {
        success: true
      };
    } catch (error) {
      console.log(error);
      return {
        success: false
      };
    }
  },
  logout: async ({ cookies }) => {
    cookies.delete("admin", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: false,
      //TODO : to be changed,
      maxAge: 60 * 60 * 24 * 3
    });
    throw redirect(302, "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-gyJ10PpJ.js')).default;
const server_id = "src/routes/(admin)/beprofessional/admin/tickets-approved/+page.server.ts";
const imports = ["_app/immutable/nodes/8.Bnt5gKFr.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/each.vxFX_h8z.js","_app/immutable/chunks/index.BPbQtlAe.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.BEPY084A.js","_app/immutable/chunks/table-row.Dypp-yo7.js","_app/immutable/chunks/ButtonWrapper.Cok3fw3E.js","_app/immutable/chunks/x.BMxJxi-T.js","_app/immutable/chunks/index.BwcdSs5b.js","_app/immutable/chunks/Icon.g8OtteLt.js","_app/immutable/chunks/events.B6wRTb4t.js","_app/immutable/chunks/index.BqFHBEbv.js","_app/immutable/chunks/entry.3ADNXllK.js","_app/immutable/chunks/paths.B5VCgVQX.js","_app/immutable/chunks/index.Ryb5LU2t.js","_app/immutable/chunks/index.CJbdzusb.js","_app/immutable/chunks/check.8h7GiVfQ.js","_app/immutable/chunks/create.DwgpHfEX.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-Q5R7Lbud.js.map
