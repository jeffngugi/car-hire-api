import passport from 'passport'
import {ExtractJwt, Strategy as StrategyJwt} from 'passport-jwt'
import model from '../models'
const {Admin} = model

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(),
opts.secretOrKey = process.env.JWT_SECRET,


passport.use(
    new StrategyJwt(opts,
      function (jwtPayload, done) {
        return Admin.findOne({ where: { id: jwtPayload.id } })
          .then((user) => {
            return done(null, user);
          })
          .catch((err) => {
            return done(err);
          });
      }
    )
  );
  