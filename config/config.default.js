module.exports = {
  keys: 'this my cookie',
  session: { key: 'session', maxAge: 86400000 },
  view: {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  },
  jsonp: {
    callback: 'callback', // 识别 query 中的 `callback` 参数
    limit: 100, // 函数名最长为 100 个字符,
    // csrf:true,
    // whiteList:'127.0.0.1'
  },
  security: {
    csrf: {
      enable: false,
    },
    // domainWhiteList: ['*'], //白名单
  },
  cookies: {
    httpOnly: true,
    sameSite: 'lax',
  },
  proxy: false,
  bodyParser: {
    jsonLimit: '1mb',
    formLimit: '1mb',
  },
  // 对上传文件的解析
  multipart: {
    mode: 'file',
    fileExtensions: ['.xmind'],
    // 覆盖整个白名单
    // whitelist:['.png']
  },
};
