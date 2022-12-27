const join = require('../repository/join.repository')

exports.postJoin = async(userData) => {
    const result = await join.findOne(userData)
    return result
}

exports.getLogin = async({user_id, user_pw}) => {
    const where = {user_id, user_pw};
    const user = await join.findLogin({ where });
    return user;
}