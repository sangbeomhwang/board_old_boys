const join_service = require("../services/join.service");

exports.getJoin = (req, res) => {
  res.render("join/join.html");
};

exports.postJoin = async (req, res) => {
  console.log(req.body);
  const userData = req.body;
  await join_service.postJoin(userData);
  res.setHeader("Set-Cookie", `token="${user.user_id}"`, "path=/");
  res.redirect("/join/welcome");
};

exports.getLogin = (req, res) => {
  res.render("join/login.html");
};

exports.postLogin = async (req, res, next) => {
  const user = await join_service.postLogin(req.body);
  if (user === undefined){
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(`
    <html>
      <body>
        <script>
          alert("아이디와 패스워드가 일치하지 않습니다. 다시 확인해주세요")
          window.location.replace("/join/login")
        </script>
      </body>
    </html>
    `);
  }else {
  res.setHeader("Set-Cookie", `token="${user.user_id}"; path=/;`);
  res.redirect("/join/welcome");
  }
};

// exports.postLogin = async (req,res,next) => {
//     const { user_id, user_pw } = req.body;
//     const user = await join_service.getLogin({ user_id, user_pw});

//     if (user === undefined)
//     return next(new Error("아이디와 패스워드가 일치하지 않습니다"))
//     res.setHeader("Set-Cookie", `token="${user.user_id}"`, "path=/");
//     res.redirect("/")
// }

exports.getWelcome = async (req, res) => {
  res.render("join/welcome", { token: req.cookies.token });
};

exports.postWelcome = (req, res) => {
  res.redirect("/");
};

exports.getModify = async (req, res) => {
  res.render("join/modify.html");
};

exports.logout = async (req, res) => {
  res.setHeader("Set-Cookie", `token=; path=/;`);
  res.redirect("/");
};
// exports.postLogin = async(req,res,next) => {
//     const {user_id, user_pw} = req.body;
//     const user = await join_service.getLogin({user_id,user_pw})

//     if(user === undefined){
//         return next (new Error("아이디와 패스워드가 일치하지 않습니다."))
//     }res.setHeader("Set-Cookie", `token=${user.user_id}; path=/;`)
//     res.redirect("/")
// }

// exports.welcome = (req,res) => {
//     res.redirect(`/join/welcome?index=${user_name}`)
// };
