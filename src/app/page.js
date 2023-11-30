// import Image from 'next/image'

// export default function Home() {
//   return (
//     <div>
//       Root
//     </div>
//   )
// }

import { prisma } from "@/lib/prisma";

export default async function Home() {
  let posts = await prisma.post.findMany();
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{ border: "1px solid #ccc", textAlign: "center" }}
          >
            <img
              src={`https://robohash.org/${post.id}?set=set2&size=180x180`}
              alt={post.name}
              style={{ height: 180, width: 180 }}
            />
            <h3>{post.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}