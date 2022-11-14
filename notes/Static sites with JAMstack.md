## How do work Static site generators?
Static site generators work by pre-creating all the web pages in a site. It means no need to pull stuff from database and then go back to show it on a page. Instead what is does, it pre-creates an HTML page with all needed content from a database.
- Pros
	- Uses much less server resources
	- They are secure
## There are some content management systems
- sanity.io
- socket.io
- contentful.com

## Cloud server services
- DigitalOcean
- linode.com

## Domain providers
- [Namecheap](https://www.namecheap.com/)

# JAMstack - Javascript, APIs and Markup 
![[web-server-vs-jamstack.png]]
- This is modern web development architecture based on Javascript, APIs and Markup (JAM)
	- Markup stands for markup languages as Markdown, ascidoc and etc.
- There are some JAMstack static site generators as Jekyll, Hugo and Gatsby.

# How to choose static site generator
### Recommended generators
- **Jekyll** - oldest based on Ruby. Kinda *default* static site generator.
- **Hugo** - based on Go language. Incredibly fast.
	- Go's advantage is multi-threading
- **[Gatsby](Gatsby.md)** - based on React. The most popular. Have massive plugin library. 
	- Gatsby nicely wraps up React and React Router with a nice folder structure, webkit, ES6, Sass support and – importantly – GraphQL.
	- It sticks to **Google’s PRPL** (Push, Render, Pre-cache, Lazy-load)
	- Buildiing on Gatsby is FASTER.
	- Recommended tutorial [GatsbyJS Tutorials - Scott Tolinski’s](https://www.youtube.com/watch?v=b2H7fWhQcdE&list=PLLnpHn493BHHfoINKLELxDch3uJlSapxg)
### Open source tools
- **Next.js** - it's on React: *can be used for both server rendered and JAMstack apps*
- **11ty** - pure Javascript, simplicity is a key here.
- **Nuxt.js** - Vue.js based. *Both server rendered and JAMstack apps*
- **Gridsome** - Vue.js based. JAMstack app
- **Zola** - this is basically Hugo, but written in Rust
	- No dependencies
### For more experienced developers
They are relatively new to the stage. [[2022-10-15]]
- **Redwood.js** (does use React) - more rail 
- **Bridgetown** - Ruby powered
- **Scully** - Angular tool
### Static site CMS with GUI (Graphic User Interface)
- **Publii** - based on Vue and [Electron](https://www.electronjs.org). (Visual Code Studio, MS Teams made on Electron)
[Source video: How to choose your static site generator](https://youtu.be/c9g4UkHkzLs)
