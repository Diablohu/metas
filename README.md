# Metas
Generate meta tags for HTML page

## Install

```sh
npm install metas
```

## Usage

```js
import metas from 'metas';

// get as HTML
metas({
    title: "PAGE TITLE"
})
/* ->
<meta charset="utf-8"/>
<meta itemprop="name" content="PAGE TITLE"/>
<meta name="twitter:title" content="PAGE TITLE"/>
<meta name="og:title" content="PAGE TITLE"/>
*/

// get as Array
metas({
    title: "PAGE TITLE"
}, true)
/* ->
[{
    charset: 'utf-8'
}, {
    itemprop: 'name',
    content: 'TITLE'
}, {
    name: 'twitter:title',
    content: 'TITLE'
}, {
    name: 'og:title',
    content: 'TITLE'
}]
*/
```

## Options

```js
metas( options = {}, returnArray = false );
```

* Page infos
  * `options.title`
    <br>Page title
  * `options.description`
    <br>Page description
  * `options.image`
    <br>Preview image
  * `options.video`
    <br>Media (Audio/Video) source url
  * `options.url`
    <br>URL for the page
  * `options.charset`
    <br>charset for the page
  * `options.locale`
    <br>Locale name (eg. en_US)
  * `options.type`
    <br>Page type (eg. website, article...)
* Site infos
  * `options.siteName`
    <br>Site name
* For Twitter
  * `options.twitter.card`
    <br>Twitter card type (eg. summary, player)
  * `options.twitter.siteCreator`
    <br>Username of the site creator/administrator on Twitter
  * `options.twitter.author`
    <br>Username of the author for this page on Twitter
* For Facebook
  * `options.facebook.adminsId`
    <br>User ID(s) of the site creator/administrator on Facebook
  * `options.facebook.appId`
    <br>Facebook App ID