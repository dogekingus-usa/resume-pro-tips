// Cloudflare Pages Function ‚Äù Domain Redirect Middleware
// Redirects pages.dev and www subdomains ‚Ü‚Ä‚Ñ¢ primary custom domain

const PRIMARY_DOMAIN = 'resumeprotips.com';
const ALIAS_DOMAINS = ['www.resumeprotips.com', 'resume-pro-tips.pages.dev'];

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const host = url.hostname;
  if (host === PRIMARY_DOMAIN) return await next();
  const dest = 'https://' + PRIMARY_DOMAIN + url.pathname + url.search;
  return Response.redirect(dest, 301);
}
