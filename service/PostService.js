const {Post} = require("../db");


class PostService {

    async createNewPost(title, text, userId) {
        return await Post.create({
            title, text, userId
        });
    }

    async getUsersPosts(userId) {
        return await Post.findAll({
            where: {
                userId
            }
        })
    }

    async getAllPosts() {
        return await Post.findAll();
    }

}

module.exports = new PostService();