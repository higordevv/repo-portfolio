import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/prisma";
import { getToken, JWT } from "next-auth/jwt";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  if (method == "POST") {
    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (user?.email === body.email && user?.password === body.password) {
      return res.status(200).json(user);
    } else {
      return res.status(422).json({
        message: "Usuario ou senha incorreto",
      });
    }
  }
};
