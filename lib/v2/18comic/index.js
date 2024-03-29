const { defaultDomain, getRootUrl, ProcessItems } = require('./utils');

module.exports = async (ctx) => {
    const category = ctx.params.category ?? 'all';
    const keyword = ctx.params.keyword ?? '';
    const time = ctx.params.time ?? 'a';
    const order = ctx.params.order ?? 'mr';
    const { domain = defaultDomain } = ctx.query;
    const rootUrl = getRootUrl(domain, ctx);

    const currentUrl = `${rootUrl}/albums${category === 'all' ? '' : `/${category}`}${keyword ? `?screen=${keyword}` : '?'}${time === 'a' ? '' : `&t=${time}`}${order === 'mr' ? '' : `&o=${order}`}`;

    ctx.state.data = await ProcessItems(ctx, currentUrl, rootUrl);
};
