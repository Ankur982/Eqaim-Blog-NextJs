import Blog from "../../models/Blog";
import dbConnect from "../../middleware/dbConnect";


const handler = async (req, res) => {

    let blogs = await Blog.find()
    
    res.status(200).json(blogs)
}


export default dbConnect(handler);