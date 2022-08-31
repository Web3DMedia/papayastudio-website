import randomatic from "randomatic";
import addToWaitList, { addUserToContactList } from "../../libs/api/supabase";
import { addUserToPapayasWaitList } from "../../libs/api/supabase";

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

export async function joinWaitlistHandler(req, res) {
  if (!(req.method === "POST"))
    return res.status(404).json({
      message: "Resource not found!",
    });
  const code = randomatic("0A", 8);
  const { body } = req;
  await addUserToPapayasWaitList({
    email: body.email,
    name: body.name,
    code: code,
  }).catch((err) => {
    if (err.message.includes("User already exist"))
      res.status(400).json({
        message:
          "Already signed up.Thanks for joining our waitlist, we’ll be in touch soon.",
        status: false,
        code: 400,
      });
    res.status(400).json({
      message: "Unable to add details to record",
      status: false,
      code: 400,
    });
    throw err;
  });
  try {
    await addToWaitList({
      email: body.email,
      name: body.name,
      code: code,
    });
    res.status(201).json({
      message: "Thanks for signing up! We will be in touch soon.",
    });
  } catch (error) {
    if (error.message.includes("User already exist"))
      res.status(400).json({
        message: "Unable to add details to contact list",
        status: false,
        code: 400,
      });
    throw error;
  }
}












