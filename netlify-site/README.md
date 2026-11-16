# Netlify frontend

This frontend is isolated from the CMS-enabled app in the repository root.
It does not include the CMS admin/API, and the contact page uses a mailto link
instead of storing submissions.

Configure the Netlify site with:

- Base directory: `netlify-site`
- Package directory: unset
- Build command: `npm run build`
- Publish directory: `.next` (relative to the base directory)
- Functions directory: unset

Netlify's Next.js adapter handles the build output and routing. Both the
repository-root configuration and the configuration in this frontend explicitly
select the build command, `.next` output, and Next.js adapter, so deployments
started from either directory use the built app rather than publishing source
files. When deploying directly from this directory, leave the base directory
unset.
