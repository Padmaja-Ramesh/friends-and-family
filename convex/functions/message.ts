import { v } from "convex/values";
import { mutation, query } from "../_generated/server";
// get/fetch data
export const list = query({
  handler: async (ctx) => {
    return ctx.db.query("messages").collect();
  },
});

//create mutations
export const create = mutation({
  args: { sender: v.string(), content: v.string() },
  handler: async (ctx, { sender, content }) => {
    await ctx.db.insert("messages", { sender, content });
  },
});
