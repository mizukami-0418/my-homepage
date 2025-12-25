"use server";

import { supabase } from "@/app/lib/supabase";

// Define the shape of the contact form data
type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

// Function to handle contact form submission
export async function submitContact(formData: FormData) {
  const data: ContactFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  if (!data.name || !data.email || !data.message) {
    return { success: false, error: "必須項目が未入力です" };
  }

  const { error } = await supabase.from("contacts").insert(data);

  if (error) {
    return { success: false, error: "送信に失敗しました" };
  }

  return { success: true };
}
