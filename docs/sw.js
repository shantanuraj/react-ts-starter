importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/app-85d24303c6a8d30d2b5e.js",
    "revision": "d865553d0e43a594c613f0020cf2ceaf"
  },
  {
    "url": "/icons/launcher-dark.svg",
    "revision": "bb1e498b89994ba8e4e3b8f028465aff"
  },
  {
    "url": "/icons/launcher-light.svg",
    "revision": "420186bc19e5fe08d55205c5306a5292"
  },
  {
    "url": "/index.html",
    "revision": "ed4f842bd9160b7e3a8694c191da7c2c"
  },
  {
    "url": "/vendor-85d24303c6a8d30d2b5e.js",
    "revision": "3b7b72db73781686452d7d6f232f7ceb"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
