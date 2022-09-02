import randomatic from "randomatic";
import { addUserToPapayasWaitList } from "../../libs/api/supabase";

export default async function joinWaitlistHandler(req, res) {
    if (!(req.method === "POST"))
        return res.status(404).json({
            message: "Resource not found!",
        });

    const code = randomatic("0A", 8);
    const { body } = req;

    try {
        await addUserToPapayasWaitList({
            email: body.email,
            name: body.name,
            code: code,
        });
        res.status(201).json({
            message: "Already signed up.Thanks for joining our waitlist, we’ll be in touch.",
        });
    } catch (err) {
        res.status(400).json({
            message: "Unable to add details to record",
            status: false,
            code: 400,
        });

        throw err;
    }
}
