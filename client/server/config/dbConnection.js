const mongoose = require('mongoose');

const dbConnection = async () => {
  try {

    const data = await mongoose.connect(process.env.DB_URI);

    console.log(
      `Database connected successfully with host: ${data.connection.host} and port: ${data.connection.port}`
    );

  } catch (err) {
    console.log(`Database connection failed with error: ${err}`);
  }
};

module.exports = dbConnection;