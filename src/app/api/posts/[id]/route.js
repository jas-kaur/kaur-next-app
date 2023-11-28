import posts from "@/utils/posts"

export async function GET(request, {params}) {
    console.log(params)
    const data = posts.find(post => post.id == params.id)
    console.log(data)
    return new Response(JSON.stringify(data))
}