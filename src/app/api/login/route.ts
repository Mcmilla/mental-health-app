import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Extract only the first name (first word of the name)
    const firstName = user.name.split(" ")[0];

    // Generate JWT token with only userId and firstName
    const token = jwt.sign(
      { id: user.id, name: firstName }, // Only storing user ID and first name
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // console.log("Stored in session:", { id: user.id, firstName });

    // Return only userId and firstName
    return NextResponse.json({
      message: "Login successful",
      user: { id: user.id, name: firstName },
      token,
    }, { status: 200 });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
