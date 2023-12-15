class EmailNotification {
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

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

const alertNotification = new EmailNotification(
  "1",
  "10:32",
  "HH description too longggggggggggg",
  "noticeMeSenpai@techup.com"
);
alertNotification.send();
const msgNotification = new SMSNotification(
  "1",
  "10:40",
  "໒꒰ྀི´ ˘ ` ꒱ྀིაᶻ 𝗓 𐰁",
  "333-666-999"
);
msgNotification.send();

console.log(alertNotification);
console.log(msgNotification);
