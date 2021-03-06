const router = require("express").Router();
const User = require("../schema/User");
const Post = require("../schema/Post");
const bcrypt = require("bcryptjs");

//Update

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
      return;
    }
  } else {
    res.status(401).json("You can update only your account!");
    return;
  }
});

//Delete

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (error) {
        res.status(500).json(error);
        return;
      }
    } catch (error) {
      res.status(404).json("User not found!");
      return;
    }
  } else {
    res.status(401).json("You can delete only your account!");
    return;
  }
});

//Get user

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = await user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
    return;
  }
});

module.exports = router;
