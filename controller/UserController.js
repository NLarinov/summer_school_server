const {validationResult} = require("express-validator");
const {ApiError} = require("../Errors");
const userService = require('../service/UserService')


class UserController {
    async signUp(req, res, next) {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()) return next(ApiError.badRequest(JSON.stringify(errors.mapped())));

            const {email, name, password, surname} = req.body
            const {user, refreshToken, accessToken} = await userService.signUp(email, name, surname, password);

            res.cookie('refreshToken', refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            })

            return res.status(201).json({
                user,
                accessToken
            })
        }
        catch (e) {
            next(e)
        }
    }

    async signIn(req, res, next) {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()) return next(ApiError.badRequest(JSON.stringify(errors.mapped())));

            const {email, password} = req.body;

            const {user, refreshToken, accessToken} = await userService.signIn(email, password, userDeviceId);

            res.cookie('refreshToken', refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });
            return res.json({
                user,
                accessToken
            });
        }
        catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try{
            res.clearCookie('refreshToken');
            return res.status(200).end();
        }
        catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try{
            const {refreshToken: oldRefreshToken} = req.cookies;

            const {user, refreshToken, accessToken} = await userService.refresh(oldRefreshToken);
            res.cookie('refreshToken', refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            })
            return res.json({
                user,
                accessToken
            })
        }
        catch (e) {
            res.clearCookie('refreshToken');
            res.clearCookie('deviceId');
            next(e)
        }
    }
}

module.exports = new UserController();