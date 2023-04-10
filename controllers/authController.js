import User from '../model/user.js';
import bcrypt from 'bcryptjs';

const authController = {
  registerUser: async (req,res) => {
    console.log(req.body);
    try{
      const salt =  bcrypt.genSaltSync(10);
      const hashed = await bcrypt.hashSync(req.body.password, salt);
      console.log(hashed);

      //Create new user
      const  newUser = await new User({
        username: req.body.username,
        password: hashed,
      });

      //Save to DB
      const user = await newUser.save();
      res.status(200).json(user);
    }
    catch (err) {
      res.status(500).json(err);
    }
  },

  //Login
  loginUser: async(req,res) => {
    try{
      const user = await User.findOne({username: req.body.username});
      if(!user) {
        res.status(404).json("Wrong username!");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      console.log(req.body.password)
      console.log(user.password)
      if(!validPassword) {
        res.status(404).json("Wrong password!");
      }
      if(user && validPassword) {
        res.status(200).json(user);
      }
    }
    catch (err) {
      res.status(500).json(err)
    }
  }
};

export default authController;
