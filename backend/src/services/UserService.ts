import { QueryError, QueryResult } from "mysql2";
import pool from "../db";
import { User } from "../models/User";

interface MySQLUserResponse {
  status: number;
  message: QueryResult | QueryError | null | string;
}

class UserService {
  response: MySQLUserResponse = {
    status: 200,
    message: "initialized",
  };

  onChangeDatabase = (err: QueryError | null, results: QueryResult) => {
    if (err) {
      this.response = { status: 500, message: err };
      return;
    }
    this.response = { status: 200, message: "Operation DONE" };
    return;
  };

  onReadDatabase = (err: QueryError | null, results: QueryResult) => {
    if (err) {
      this.response = { status: 500, message: err };
      return;
    }
    this.response = { status: 200, message: results };
    return;
  };

  create(user: User) {
    try {
      pool.query(
        "INSERT INTO Users (userId, email, registrated, role) VALUES (?, ?, default, default)",
        [user.id, user.email],
        this.onChangeDatabase
      );
      return this.response;
    } catch (error) {
      this.response = {
        status: 500,
        message: "Cannot add user",
      };
      return this.response;
    }
  }

  async read(id: string) {
    try {
      await pool.query(
        "SELECT * FROM users WHERE userId = ?",
        [id],
        this.onReadDatabase
      );
      return this.response;
    } catch (error) {
      this.response = {
        status: 500,
        message: "Cannot add user",
      };
      return this.response;
    }
  }
}

export default new UserService();
