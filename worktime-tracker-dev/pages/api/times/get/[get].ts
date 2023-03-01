import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Process a GET request
    res.status(200).json({ specificTime: "specificTime" })
  } else {
        res.status(400).json({ error: "Invalid request method" })
  }
}