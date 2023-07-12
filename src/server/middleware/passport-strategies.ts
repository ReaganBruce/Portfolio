import passport from 'passport'
import PassportJWT from 'passport-jwt'
import PassportLocal from 'passport-local'

import config from '../configs'
import { Application } from 'express'
import { Admin } from '../models/authMod'
import { compareHash } from '../utils/saltAndHash'
import { Payload } from '../types/types'



const configurePassport = (app: Application) => {

    passport.use(new PassportLocal.Strategy({ usernameField: "username", session: false}, async (username, password, done) => {
        try {
            const adminFound = await Admin.findOne({ "username": username });
            //check if admin and admin password both exist, then compare
            if (adminFound && adminFound.password && compareHash(password, adminFound.password)) {
                delete adminFound.password
                done(null, adminFound)
            } else {
                done(null, false)
            }

        } catch (err) {
            done(err)
        }
    }))

    passport.use(new PassportJWT.Strategy({
         jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(), 
         secretOrKey: config.jwt.token
        }, (payload: Payload, done) => {
            try {
                done(null, payload)
            } catch (err) {
                done(err)
            }
    }))


    app.use(passport.initialize())
}



export { configurePassport }