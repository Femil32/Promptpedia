import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  const { prompt, tag, userId } = await req.json();

  try {
    await connectToDB();
  } catch (error) {}
};
