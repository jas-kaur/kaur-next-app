import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const posts = [
        {title: 'Title 1', author: 'Author 1', body: 'Body 1'},
        {title: 'Title 2', author: 'Author 2', body: 'Body 2'},
        {title: 'Title 3', author: 'Author 3', body: 'Body 3'},
        {title: 'Title 4', author: 'Author 4', body: 'Body 4'},
    ]

    for(let post of posts) {
        const postCreated = await prisma.post.create({
            data: post
        })

        console.log(postCreated)
    }
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
    });