class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class postList {
  constructor(posts) {
    this.posts = [posts];
  }
  addpost(newPost) {
    this.posts.push(newPost);
  }
  sharepost(title) {
    console.log(`You've shared post ${title} to your friend.`);
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [comment];
  }
  addComment(newComment) {
    this.comment.push(newComment);
  }
}

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addLike() {
    this.like++;
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = [groupList];
    this.pageList = [pageList];
  }
  addGroup(newGroup) {
    this.groupList.push(newGroup);
  }
  addPage(newPage) {
    this.pageList.push(newPage);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }
  send(commentCreatedBy, postTitle) {
    console.log(
      `Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`
    );
  }
}

//------------------------------------

const UwU = new User("99", "UwU", "UwUuWuUwU@gmail.com");
console.log(UwU);

const newPostList = new postList("firstList");
newPostList.addpost("secondList");
console.log(newPostList);

const UwUPost = new Post("1", `say"UwU"!`, "◝(ᵔᵕᵔ)◜", "૮ ˙Ⱉ˙ ა Rawrrrr!");
UwUPost.addComment("٩(ˊᗜˋ*)و ♡");
console.log(UwUPost);

newPostList.sharepost(UwUPost.title);

const letMeSleep = new Comment("33", "Sleepy leaw kubbb", "InwCoding007");
letMeSleep.addLike();
console.log(letMeSleep);

const MyFacebookPage = new Facebook("ᕙ White Team ᕗ", "TechUp");
MyFacebookPage.addGroup("DTs");
MyFacebookPage.addPage("JS");
console.log(MyFacebookPage);

const MyPage = new FacebookPage("Let's Code!");
console.log(MyPage);

const MyGroup = new FacebookGroup("White da Best!");
console.log(MyGroup);

const alertNotification = new Notification("1");
console.log(alertNotification);
alertNotification.send(letMeSleep.createdBy, UwUPost.title);
