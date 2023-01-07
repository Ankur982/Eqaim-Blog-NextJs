import Blog from "../../models/Blog";
import dbConnect from "../../middleware/dbConnect";


const handler = async (req, res) => {

    let blog = await Blog.findById(req.body.id)
    
    res.status(200).json(blog)
}


export default dbConnect(handler);