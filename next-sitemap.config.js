/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://duringel.com',
    generateRobotsTxt: true,
    sitemapSize: 7000, // opcional, previene errores en sitios grandes
    changefreq: 'weekly', // le dice a Google que revise semanalmente
    priority: 0.7, // valor por defecto de prioridad de páginas
    outDir: './out',
};
