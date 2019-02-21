import Mock from 'mockjs'

import config from '../src/utils/config'

const { apiPrefix } = config;
const adminUsers = Mock.mock([
  {
    username: 'admin',
    password: 'admin',
    roleId: 1,
  }, {
    username: 'guest',
    password: 'guest',
    roleId: 2,
  }, {
    username: 'yutiy',
    password: '123456',
    roleId: 3,
  },
])


module.exports = {
  //  用户登录
  [`POST /api/user/login`](req, res) {
    const { username, password } = req.body
    const user = adminUsers.filter(item => item.username === username)

    console.info(user);
    if (user.length > 0 && user[0].password === password) {
      const now = new Date()
      now.setDate(now.getDate() + 1)
      res.cookie('token', JSON.stringify({ id: user[0].roleId, deadline: now.getTime() }), {
        maxAge: 900000000,
        httpOnly: true,
      })
      res.json({
        success: true,
        message: '登录成功',
        ret_code: '000000',
        id: user[0].roleId,
        username: user[0].username,
        companyId: 1,
        companyName: 1,
        token: 1,
      })
    } else {
      res.status(400).end()
    }
  },

  // 退出登录
  [`GET ${apiPrefix}/user/logout`](req, res) {
    // res.clearCookie('token')
    res.status(200).end()
  },

  [`GET /api/users`](req, res) {
    res.status(200).json({
      id: '1111',
      success: true,
      ret_code: '000000',
    });
  },

  // 获取第三方机构的信息
  [`POST ${apiPrefix}/orgInfo`](req, res) {
    res.json({
      id: '1111',
      success: true,
      ret_code: '000000',
    })
  },
}
