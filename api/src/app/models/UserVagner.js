import Sequelize, { Model } from 'sequelize';
import User from "./User";
class UserVagner extends Model {
  static init(connection) {
    super.init({
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        password_hash: Sequelize.STRING
    },
      {
        sequelize: connection,
      }

    );
    return this;
  }
}
export default UserVagner;
