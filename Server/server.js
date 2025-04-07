import "./Config/instrument.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectMongoDB from "./Config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./Controllers/webhooks.js";
import CompanyRoutes from "./Routes/CompanyRoutes.js";
import connectCloudinary from "./Config/Cloudinary.js";
import JobRoutes from "./Routes/JobRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import { clerkMiddleware } from "@clerk/express";

//Initialize Express
const app = express();

//Connect to database
await connectMongoDB();
await connectCloudinary();

//Allowed Origins
const allowedOrigins = [
  "https://insider-jobs-frontend.vercel.app",
  "https://insider-jobs-frontend-yogesh-sharma12041s-projects.vercel.app",
  "https://insider-jobs-frontend-git-main-yogesh-sharma12041s-projects.vercel.app",
];

//Middlewares
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.use(clerkMiddleware());

//Routes
app.get("/", (req, res) => res.send("API Working"));
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post("/webhooks", clerkWebhooks);
app.use("/api/company", CompanyRoutes);
app.use("/api/jobs", JobRoutes);
app.use("/api/users", userRoutes);

//Port
const PORT = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
