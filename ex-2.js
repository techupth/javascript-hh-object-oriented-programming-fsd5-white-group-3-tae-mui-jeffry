class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {}
const user1 = new EmailNotification("0001", "00:00:01", "ABC", "John");
user1.send();

class SMSNotification extends Notification {}
const user2 = new SMSNotification("0002", "00:00:02", "CBA", "099-999-9989");
user2.send();
