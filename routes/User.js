const express = require("express");
const { User } = require("../models");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    let { id, password } = req.body;
    console.log(id);
    const rows = await User.findOrCreate({
      where: { id: id, password: password },
      defaults: {
        id: id,
      },
    });
    console.log(rows);
    console.log(rows[0].isNewRecord);
    if (!rows) throw { code: 1 };
    if (rows[0].isNewRecord) {
      return res.status(200).send("회원가입 성공");
    } else {
      return res.status(200).send("로그인 성공");
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
