import express from "express";

const router = express.Router();

router.get("/getinfo", (_, res) => {
  res.json({
    status: "ok",
    info: {
      name: "plugin-example-react-18",
      version: "1.0.0",
      reactVersion: "18.3.1",
      description: "Example plugin for Starfleet with React 18",
    },
  });
});

export default router;
