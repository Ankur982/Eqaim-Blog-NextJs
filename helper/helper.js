export const postBlog = async(body) => {
    await fetch("https://eqaim-blog-next-js.vercel.app/api/addblog", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    alert("block added..!")
}






export const getBlogId = async(id) => {
    const res = await fetch(`https://eqaim-blog-next-js.vercel.app/api/getblogbyid/${id}`).then((x) => x.json())
    return res
}