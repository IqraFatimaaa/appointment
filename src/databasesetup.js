
const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/appointmentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;


const appointmentSchema = new mongoose.Schema({
  slotid: number,
  userDetail: String,
  email:String,
  name:String
});

const Appointment = mongoose.model('appointments', appointmentSchema);


app.post('/appointments', async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const appointment = new Appointment({ slotid, email,userDetail,name });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
