const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: 'user3331@example.com',
      name: 'User One',
      password: 'passwo33333rd123',
      role: 'USER',
      isEmailVerified: true,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'use3333r2@example.com',
      name: 'User Two',
      password: 'password4333356',
      role: 'ADMIN',
      isEmailVerified: true,
    },
  });

  // Create categories
  const category1 = await prisma.category.create({
    data: {
      name: 'Category One',
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: 'Category Two',
    },
  });

  // Create tags
  const tag1 = await prisma.tag.create({
    data: {
      name: 'Tag One',
    },
  });

  const tag2 = await prisma.tag.create({
    data: {
      name: 'Tag Two',
    },
  });

  // Create posts
  const post1 = await prisma.post.create({
    data: {
      title: 'Post One',
      content: 'This is the content of Post One',
      authorId: user1.id,
      published: true,
      categoryId: category1.id,
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: 'Post Two',
      content: 'This is the content of Post Two',
      authorId: user2.id,
      published: true,
      categoryId: category2.id,
    },
  });

  // Create comments
  const comment1 = await prisma.comment.create({
    data: {
      content: 'Comment One for Post One',
      authorId: user2.id,
      postId: post1.id,
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      content: 'Comment Two for Post Two',
      authorId: user1.id,
      postId: post2.id,
    },
  });

  console.log('Dummy data created successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
