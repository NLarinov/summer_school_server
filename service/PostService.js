const {Post} = require("../db");
const {Op} = require("sequelize");


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

    async getAllPosts(searchString = '') {
        console.log(searchString)
        return await Post.findAll({
            where: {
                [Op.or]: [
                    {
                        title: {
                            [Op.substring]: searchString
                        }
                    },
                    {
                        text: {
                            [Op.substring]: searchString
                        }
                    },
                ]
            }
        });
    }

}

module.exports = new PostService();