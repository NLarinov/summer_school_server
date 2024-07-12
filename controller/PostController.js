const postService = require("../service/PostService")
const {validationResult} = require("express-validator");
const ApiError = require("../Errors");

class PostController {

    async createNewPost(req, res, next) {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()) return next(ApiError.badRequest(JSON.stringify(errors.mapped())));

            const {title, text, nick, tags, grade, localUserData} = req.body;

            const post = await postService.createNewPost(title, text, nick, tags, grade, localUserData.id);

            return res.json(post);
        }
        catch (e) {
            next(e)
        }
    }

    async getUsersPost(req, res, next) {
        try{
            const {userId} = req.params;

            const posts = await postService.getUsersPosts(userId);

            return res.json(posts);
        }
        catch (e) {
            next(e)
        }
    }

    async getPostFeed(req, res, next) {
        try{
            const { searchString } = req.query
            console.log(searchString)
            const post = await postService.getAllPosts(searchString);

            return res.json(post);
        }
        catch (e) {
            next(e)
        }
    }

}

module.exports = new PostController();