const config = {
  db: {
    /* don't expose password or any sensitive info*/
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database: "snackmates",
  },
  listPerPage: 10,
};
module.exports = config;
