const join_service = require('../services/join.service')

exports.getJoin = (req,res) => {
    res.render("join/join.html")
};

exports.postJoin = async(req,res) => {
    console.log(req.body)
    const userData = req.body
    await join_service.postJoin(userData)
    res.redirect("/join/welcome.html")
}

exports.getLogin = (req,res,next) => {
    res.render("join/login.html")
};

exports.postLogin = async (req,res,next) => {
    const { user_id, user_pw } = req.body;
    const user = await join_service.getLogin({ user_id, user_pw});

    if (user === undefined)
    return next(new Error("아이디와 패스워드가 일치하지 않습니다"))
    res.setHeader("Set-Cookie", 
    `token="${user.user_id};
    path=/"`);
    res.redirect("/")
}

// exports.postLogin = async(req,res,next) => {
//     const {user_id, user_pw} = req.body;
//     const user = await join_service.getLogin({user_id,user_pw})

//     if(user === undefined){
//         return next (new Error("아이디와 패스워드가 일치하지 않습니다."))
//     }res.setHeader("Set-Cookie", `token=${user.user_id}; path=/;`)
//     res.redirect("/")
// }

// exports.logout = async(req,res,next) => {
//     res.setHeader("Set-Cookie", `token=; path=/;`)
//     res.redirect("/")
// }

// exports.welcome = (req,res) => {
//     res.redirect(`/join/welcome?index=${user_name}`)
// };
