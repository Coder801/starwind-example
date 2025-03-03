import express from "express";

const router = express.Router();

router.get("/getinfo", (_, res) => {
  res.json({
    status: "ok",
    info: {
      name: "plugin-example-react-19",
      version: "1.0.0",
      reactVersion: "19.0.0",
      description: "Example plugin for Starfleet with React 19",
    },
  });
});

export default router;
