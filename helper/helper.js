export const postBlog = async(body) => {
    await fetch("http://localhost:3000/api/addblog", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    alert("block added..!")
}