
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/react-login-tut", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection`);
});

const Flight = mongoose.model("flights", new mongoose.Schema({
  flight_no: {
    type: String
  },
  from: {
    type: String
  },
  to: {
    type: String
  },
  price: {
    type: Number,
    default: null
  },
  gate: {
    type: String
  }
}));

// const destinations = ["Bangalore", "Ahmedabad", "Kolkata", "Mumbai", "Hyderabad"];

// function generateRandomPrice() {
//   const basePrice = Math.floor(Math.random() * (100 - 50 + 1)) * 100 + 5000; // Random base price between 5000 and 10000, divisible by 100
//   return Math.floor(Math.random() * 100) * 100 + basePrice; // Randomly add multiples of 100
// }

// async function generateFlights() {
//   for (let i = 0; i < destinations.length; i++) {
//     for (let j = 0; j < destinations.length; j++) {
//       if (i !== j) {
//         const flight = new Flight({
//           flight_no: `F${i * destinations.length + j + 1}`,
//           from: destinations[i],
//           to: destinations[j],
//           price: generateRandomPrice(),
//           gate: `Gate ${i * destinations.length + j + 1}`
//         });

//         try {
//           await flight.save();
//           console.log(`Flight ${flight.flight_no} saved`);
//         } catch (error) {
//           console.error(`Error saving flight ${flight.flight_no}:`, error.message);
//         }
//       }
//     }
//   }

//   console.log('Flight generation complete');
//   mongoose.connection.close();
// }

// // Call the function to generate flights
// generateFlights(); This code is to generate a database for flight details(run once and then comment the below).
