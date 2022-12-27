const pool = require('./db');

exports.findOne = async(userData) => {
    const {user_id, user_pw, user_name, user_nickname, user_birth, user_gender, user_mobile, user_email} = userData;
    const user = `insert into user (
        user_id, user_pw, user_name, user_nickname, user_birth, user_gender, user_mobile, user_email
    ) values (
        '${user_id}', '${user_pw}', '${user_name}', '${user_nickname}', '${user_birth}', '${user_gender}', '${user_mobile}', '${user_email}'
    );` 
    return (await pool.query(user))
};

// exports.findLogin = async ({ where }) => {
//     try {
//         const payload = Object.entries(where)
//         .map (([key,value]) => `'${key}' = "${value}"`)
//         .join(" and ");

//         const sql = `SELECT * FROM user WHERE ${payload}`;
//         const [[result]] = await pool.query(sql)
//         console.log(obj);
//         return result;
//     } catch (e) {
//         throw new Error(e)
//     }
// }

// this.findLogin(obj)


exports.findID = async (user_id) => {
  const userInfo = `SELECT * FROM user where user_id = "${user_id}";`
  const [result] = await pool.query(userInfo);
  return result;
}

// exports.findUser = async (userInfo) => {
//     const {id, password} = userInfo;
//   const userInfo = `SELECT * FROM user where user_id = "${user_id}" and user_pw ="${user_pw}"`;
//   const [result] = await pool.query(userInfo, [id, password]);
//   return result;
// };

// this.findUser('web77333').then(data=>console.log(data))

// exports.findLogin = async ({where}) => {
//     try {
//         const payload = Object.entries(where)
//         .map(([key, value]) => `${key} ='${value}'`)
//         .join(" and ")
//         const sql = `SELECT * FROM user WHERE ${payload}`
//         const [[result]] = await pool.query(sql);
//         return result;
//     } catch (e) {
//         console.error(e)
//     }
// }

// const obj = {
//     where : {
//         user_id : "web77222",
//         user_pw : "12341234",
//     }
// };

// this.findLogin(obj);


// this.findOne(1).then(data=>console.log(data))


// insert into user (
//     user_id, user_pw, user_name, user_nickname, user_birth, user_gender, user_mobile, user_email
// ) values (
//     'web77222', '12341234', 'testnick', 'testalt', '1979-01-12', 'male', '01012341236', 'test2@test.com'
// );