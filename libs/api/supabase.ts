import { SupabaseClient } from "@supabase/supabase-js";
import { Client } from "@sendgrid/client"

const AdoptersTable = "papayas-studio-contact-list";
const papayasWaitList = "papayas-studio-waitlist";


const supabase = new SupabaseClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ADMIN_SECRET
);

export const addUserToContactList = async (body: {
  email: string;
  message: string;
  service: string;
  code: string;
}) => {
  const { data, error } = await supabase.from(AdoptersTable).insert([body]);
  if (error) throw error;

  return data;
};

export const addUserToPapayasWaitList = async (body: {
  email: string;
  name: string;
  code: string;
}) => {
  const { data, error } = await supabase.from(papayasWaitList).insert([body]);
  if (error) throw error;

  return data;
};

// export const addUserToPapayasWaitList = async (body: {
//   email: string;
//   name: string;
//   code: string;
// }) => {
//   const value = await findUserBy({ email: body.email, }).catch(() => "NONE");
//   if (value !== "NONE") throw new Error("User already exist");
//   const { data, error } = await supabase.from(papayasWaitList).insert([body]);
//   if (error) throw error;
//   return data;
// };
// const findUserBy = async (record: Record<string, string>) => {
//   const { count } = await supabase
//     .from(papayasWaitList)
//     .select("*", { count: "exact", head: true })
//     .match(record);
//   if (count === 0) throw new Error("Record not found");
//   return count;
// };
// export default async function addToWaitList(body: {
//   email: string;
//   name: string;
//   code: string;
// }) {
//   if (!process.env?.SENDGRID_WAITLIST_ID) {
//     throw new Error("Waitlist not specified.");
//   }
//   const client = new Client();
//   client.setApiKey(process.env.SENDGRID_API_KEY);
//   const data = {
//     list_ids: [process.env.SENDGRID_WAITLIST_ID],
//     contacts: [
//       {
//         email: body.email,
//         name: body.name
//       },
//     ],
//   };
//   const request = {
//     url: `/v3/marketing/contacts`,
//     method: "PUT",
//     body: data,
//   };
//   return await client
//     // @ts-ignore
//     .request(request)
//     .then(() => {
//       return true;
//     })
//     .catch(() => {
//       throw new Error("Unable to add details to waitlist");
//     });
// }














