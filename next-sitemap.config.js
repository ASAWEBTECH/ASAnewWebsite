/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://asangola.com/", // troque pelo seu domínio
  generateRobotsTxt: true, // gera também robots.txt
  sitemapSize: 7000, // divide o sitemap se passar desse limite
  changefreq: "daily", // frequência que seu site é atualizado
  priority: 0.7, // prioridade padrão das páginas
};
