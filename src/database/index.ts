import mongoose from "mongoose";

const connection = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { minPoolSize: 5 });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connection;
