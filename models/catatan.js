const connection = require('../db-config/connect');
const {DataTypes} = require('sequelize');
const mysql = require('mysql2/promise');

const dbConnection = connection.connect;

const Pasien = dbConnection.define('jurnal_db', {
      id_catatan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      judul_catatan: {
          type: DataTypes.STRING
      },
      catatan_tambahan : {
        type :DataTypes.STRING
      },
      registration_date: {
          type:  DataTypes.DATE
      }
},
{
    freezeTablename: true,
    timestamps: false
});


  // Insert pasien baru
  const insertUser = async (judul_catatan, tanggal) => {
    try {
      const newUser = await Pasien.create({ nama_pasien, jenis_kelamin, alamat, usia, no_telp });
      console.log('User inserted:', newUser.toJSON());
    } catch (error) {
      console.error('Error inserting user:', error.message);
      throw error;
    }
  };

  //Read Pasien
  


module.exports = { Pasien, insertUser};
