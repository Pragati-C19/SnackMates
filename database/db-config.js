/* don't expose password or any sensitive info */
const config = {
  db: {
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database: "snackmates",
  },
  listPerPage: 10,
};
module.exports = config;
