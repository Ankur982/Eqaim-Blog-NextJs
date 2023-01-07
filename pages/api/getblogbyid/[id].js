import Blog from "../../../models/Blog";
import dbConnect from "../../../middleware/dbConnect";



const handler = async (req, res) => {
    try {
        let blog = await Blog.findById(req.query.id)
        res.status(200).json(blog)
    } catch (error) {
        res.status(200).json(error)
    }
}


export default dbConnect(handler);

