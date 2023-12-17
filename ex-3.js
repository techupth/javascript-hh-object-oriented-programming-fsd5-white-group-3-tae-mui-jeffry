class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor() {
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  sharePost(post) {
    console.log(`You've shared post "${post.title}" to your friend.`);
  }
}

class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.likes = 0;
  }

  addLike() {
    this.likes++;
  }
}

class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }

  addGroup(group) {
    this.groupList.push(group);
  }

  addPage(page) {
    this.pageList.push(page);
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

  send(comment, post) {
    console.log(
      `Notification: ${comment.createdBy} has just commented on this post—"${post.title}"`
    );
  }
}

const user1 = new User("1", "John Doe", "john@example.com");

const postList = new PostList();

const post1 = new Post("1", "First Post", "Content of the first post");
const post2 = new Post("2", "Second Post", "Content of the second post");

postList.addPost(post1);
postList.addPost(post2);

const comment1 = new Comment("1", "Great post!", "Alice");
const comment2 = new Comment("2", "Interesting content", "Bob");

post1.addComment(comment1);
post2.addComment(comment2);

const facebook = new Facebook();

const group1 = new FacebookGroup("Tech Enthusiasts");
const page1 = new FacebookPage("Science News");

facebook.addGroup(group1);
facebook.addPage(page1);

const notification = new Notification("1");
notification.send(comment1, post1);
