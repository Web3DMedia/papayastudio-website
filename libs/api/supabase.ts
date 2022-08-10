import { SupabaseClient } from "@supabase/supabase-js";

const AdoptersTable = "papayas-studio-contact-list";

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