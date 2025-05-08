const url = require('url');

module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;
  const routeMap = {
    '/people/daily': '人民日报要闻',
    '/zhihu/hotlist': '知乎热榜',
    '/weibo/search/hot': '微博热搜',
    '/douban/movie/weekly': '豆瓣电影周榜',
    '/cctv/xwlb': '新闻联播',
    '/sspai/index': '少数派精选',
    '/infzm/8': '南方周末人间',
  };

  const title = routeMap[pathname] || 'RSSHub Lite';
  res.setHeader('Content-Type', 'application/xml');
  res.end(`<rss><channel><title>${title}</title><item><title>示例标题</title><link>https://example.com</link></item></channel></rss>`);
};