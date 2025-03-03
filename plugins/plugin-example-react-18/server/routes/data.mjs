import express from "express";

const router = express.Router();

router.get("/ping", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

router.get("/cpuusage", (req, res) => {
  res.json({ status: "ok", cpuUsage: Math.floor(Math.random() * 100) + 1 });
});

export default router;
