import UserVagner from "../models/UserVagner";
import {INTEGER, where} from "sequelize";

class UserVagnerController {

  async store(req, res){

    const { name, email, password } = await UserVagner.create(req.body);

    res.json(name, email, password);

  }

  async find(req, res){

    const id = req.params.id;
    const user = await UserVagner.findByPk(id);

    res.json(user);

  }

  async update(req, res){

    const userId = req.params.id;
    const user = await UserVagner.update(req.body, {where: {id: userId}});
    res.json(user);

  }


}

export default new UserVagnerController();
