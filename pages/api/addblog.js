import Blog from "../../models/Blog";
import dbConnect from "../../middleware/dbConnect";


const handler = async (req, res) => {

    if (req.method == 'POST') {
        let newBlog = new Blog({
            title: req.body.title,
            summary: req.body.summary,
            image: req.body.image
        })

        await newBlog.save()
        res.status(200).json("Blog Added..!")
    }
    else {
        res.status(400).json("This Method is not allowed")
    }

}


export default dbConnect(handler);