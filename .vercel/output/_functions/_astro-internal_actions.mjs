import 'kleur/colors';
import { g as getActionQueryString, a as astroCalledServerError, A as ActionError, d as deserializeActionResult, b as ACTION_QUERY_PARAMS, c as appendForwardSlash } from './chunks/astro-designed-error-pages_BkxV2CV2.mjs';
import 'es-module-lexer';
import './chunks/astro/server_sIsuFZJU.mjs';
import 'clsx';
import 'cookie';
import * as z from 'zod';
import { v4 } from 'uuid';
import { asDrizzleTable } from '@astrojs/db/runtime';
import { createClient } from '@astrojs/db/db-client/libsql-node.js';
import '@astrojs/db/dist/runtime/virtual.js';
import { d as defineAction } from './chunks/server_D59mDSMP.mjs';

const apiContextRoutesSymbol = Symbol.for("context.routes");
const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (target.hasOwnProperty(objKey) || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // redefine prototype methods as the object's own property, not the prototype's
        bind: action.bind,
        valueOf: () => action.valueOf,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
function getActionPath(action) {
  let path = `${"/".replace(/\/$/, "")}/_actions/${new URLSearchParams(action.toString()).get(ACTION_QUERY_PARAMS.actionName)}`;
  {
    path = appendForwardSlash(path);
  }
  return path;
}
async function handleAction(param, path, context) {
  if (context) {
    const pipeline = Reflect.get(context, apiContextRoutesSymbol);
    if (!pipeline) {
      throw astroCalledServerError();
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
  const headers = new Headers();
  headers.set("Accept", "application/json");
  let body = param;
  if (!(body instanceof FormData)) {
    try {
      body = JSON.stringify(param);
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: `Failed to serialize request body to JSON. Full error: ${e.message}`
      });
    }
    if (body) {
      headers.set("Content-Type", "application/json");
    } else {
      headers.set("Content-Length", "0");
    }
  }
  const rawResult = await fetch(
    getActionPath({
      toString() {
        return getActionQueryString(path);
      }
    }),
    {
      method: "POST",
      body,
      headers
    }
  );
  if (rawResult.status === 204) {
    return deserializeActionResult({ type: "empty", status: 204 });
  }
  return deserializeActionResult({
    type: rawResult.ok ? "data" : "error",
    body: await rawResult.text()
  });
}
toActionProxy();

const db = await createClient({
  url: "libsql://astro-portfolio-manutatum.aws-eu-west-1.turso.io",
  token: process.env.ASTRO_DB_APP_TOKEN ?? "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NTg1NDE4NzcsImlkIjoiNzA3NDVkOWUtY2E3ZC00ZjFlLThlOWItNjJjNmRmMjJlNmE4IiwicmlkIjoiZmJhMzgxYWItNTc0My00ZjBhLTk2MmItZmM0NGI1ZWIzNzU3In0.f97Yf5DLBRCvesgiNdRrkwFQha4wINHF9yCQ3S3FIEwQu-UbvemUY36YzwRFAeQbmXs2iQlUlMlZr4lrXa8zDw"
});
const ContactMessage = asDrizzleTable("ContactMessage", { "columns": { "id": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "ContactMessage", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "ContactMessage", "primaryKey": false, "optional": false } }, "email": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "email", "collection": "ContactMessage", "primaryKey": false, "optional": false } }, "message": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "message", "collection": "ContactMessage", "primaryKey": false, "optional": false } }, "sendAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "sendAt", "collection": "ContactMessage" } } }, "deprecated": false, "indexes": {} }, false);

const sendContact = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(6).max(30),
    email: z.string().email(),
    message: z.string().min(6).max(150)
  }),
  handler: async ({ name, email, message }) => {
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      throw new Error("All fields are required");
    }
    const newContactMessage = {
      id: v4(),
      name,
      email,
      message,
      sendAt: /* @__PURE__ */ new Date()
    };
    await db.insert(ContactMessage).values(newContactMessage);
    return { message: "Form sent successfully", ok: true };
  }
});

const server = {
  sendContact
};

export { server };
