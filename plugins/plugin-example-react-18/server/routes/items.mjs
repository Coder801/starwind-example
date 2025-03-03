import express from "express";

const router = express.Router();

router.get("/getitems", (_, res) => {
  res.json({
    status: "ok",
    items: [
      { id: 1, name: "Item 4" },
      { id: 2, name: "Item 5" },
      { id: 3, name: "Item 6" },
    ],
  });
});

export default router;
