# Website images

Add image files for the website to this folder. Files here are served from
`/images/`, so `public/images/service.jpg` can be referenced as
`/images/service.jpg`.

Use descriptive filenames and provide suitable alternative text when displaying
images.

Image files must contain actual image data. A file starting with
`version https://git-lfs.github.com/spec/v1` is only a Git LFS pointer and cannot
be displayed by a browser. The six original images were restored from Git LFS
and verified against their recorded SHA-256 checksums. Keep the actual binary
files in the deployment workspace; when checking out LFS-tracked images, fetch
their objects before packaging the website.

The shared `SiteImage` component displays a labeled fallback when a local or
remote image fails to load, preserving the page layout without substituting
unrelated logos or portraits.
