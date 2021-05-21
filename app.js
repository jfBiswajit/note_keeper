const EventEmitter = require('events');

const event = new EventEmitter();

event.on('newSale', () => {
  console.log('We got a sale today!');
});

event.emit('newSale');
