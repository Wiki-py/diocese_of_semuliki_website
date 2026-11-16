# Netlify frontend

This frontend is isolated from the CMS-enabled app in the repository root.
It does not include the CMS admin/API, and the contact page uses a mailto link
instead of storing submissions.

Configure the Netlify site with:

- Base directory: `netlify-site`
- Package directory: unset
- Build command: `npm run build`
- Publish directory: unset
- Functions directory: unset

Netlify's Next.js adapter handles the build output and routing.
