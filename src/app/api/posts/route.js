import posts from "@/utils/posts"

export async function GET(request) {
    const data = posts

    // throw new Error("Hey error is here")
    return new Response(JSON.stringify(data))
}