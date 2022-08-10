import randomatic from "randomatic";
import { addUserToContactList } from "../../libs/api/supabase";

export default async function mailHandler(req, res) {
  if (!(req.method === "POST"))
    return res.status(404).json({
      message: "Resource not found!",
    });

  const code = randomatic("0A", 8);
  const { body } = req;

  try {
    await addUserToContactList({
      email: body.email,
      message: body.message,
      service: body.service,
      code: code,
    });
    res.status(201).json({
      message: "Your message has been received! We will be in touch soon.",
    });
  } catch (err) {
    res.status(400).json({
      message: "Unable to send message",
      status: false,
      code: 400,
    });

    throw err;
  }
}
