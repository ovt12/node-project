import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const List = sequelize.define(
  "List",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    task: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    priority: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_by: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },

  {
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);
