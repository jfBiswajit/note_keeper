const EventEmiiter = require('events');

class Sales extends EventEmiiter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newNotifications', (notifiCount) => {
  console.log(`You have ${notifiCount} new notifications!`);
});

myEmitter.emit('newNotifications', 10);
