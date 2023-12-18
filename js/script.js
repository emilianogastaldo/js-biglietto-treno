console.log('JS OK');

// Chiedo quantità km e anni dell'utente
const kmTrip = parseInt(prompt('Quanti km devi percorrere?', 100).trim());
console.log('km viaggio:', kmTrip);

const userAge = prompt('Quanti anni hai?', 66).trim();
console.log('età:', userAge);

// Calcolo il prezzo del biglietto
let priceTicket = kmTrip * 0.21;
console.log('prezzo biglietto:', priceTicket);

