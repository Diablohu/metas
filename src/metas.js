module.exports = (options = {
    /*
    // page infos
        title
        description
        image
        video
        url
        charset
        locale
        type
    
    // site infos
        siteName
    
    // for Twitter
        twitter.card
        twitter.siteCreator
        twitter.author

    // for Facebook
        facebook.adminsId
        facebook.appId
    */
}, returnArray = false) => {
    let metas = []
    let o = Object.assign({
        charset: 'utf-8',
        twitter: {},
        facebook: {}
    }, options)

    if (typeof window !== 'undefined') {
        if (typeof o.title === 'undefined' && document.title)
            o.title = document.title
        if (typeof o.url === 'undefined' && typeof location !== 'undefined' && location.href.substr(0, 5) !== 'about')
            o.url = location.href
    }

    if (typeof o.charset !== 'undefined') {
        metas.push({
            charset: o.charset
        })
    }

    if (typeof o.title !== 'undefined') {
        metas.push({
            itemprop: 'name',
            content: o.title
        })
        metas.push({
            name: 'twitter:title',
            content: o.title
        })
        metas.push({
            name: 'og:title',
            content: o.title
        })
    }

    if (typeof o.description !== 'undefined') {
        metas.push({
            name: 'description',
            content: o.description
        })
        metas.push({
            itemprop: 'description',
            content: o.description
        })
        metas.push({
            itemprop: 'twitter:description',
            content: o.description
        })
        metas.push({
            itemprop: 'og:description',
            content: o.description
        })
    }

    if (typeof o.image !== 'undefined') {
        metas.push({
            name: 'image',
            content: o.image
        })
        metas.push({
            itemprop: 'image',
            content: o.image
        })
        metas.push({
            itemprop: 'twitter:image:src',
            content: o.image
        })
        metas.push({
            itemprop: 'og:image',
            content: o.image
        })
    }

    if (typeof o.video !== 'undefined') {
        metas.push({
            name: 'twitter:player',
            content: o.video
        })
        metas.push({
            itemprop: 'og:video',
            content: o.video
        })
    }

    if (typeof o.url !== 'undefined') {
        metas.push({
            name: 'og:url',
            content: o.url
        })
    }

    if (typeof o.siteName !== 'undefined') {
        metas.push({
            name: 'og:site_name',
            content: o.siteName
        })
    }

    if (typeof o.locale !== 'undefined') {
        metas.push({
            name: 'og:locale',
            content: o.locale
        })
    }

    if (typeof o.type !== 'undefined') {
        metas.push({
            name: 'og:type',
            content: o.type
        })
    }

    if (typeof o.twitter.card !== 'undefined') {
        metas.push({
            name: 'twitter:card',
            content: o.twitter.card
        })
    }

    if (typeof o.twitter.siteCreator !== 'undefined') {
        metas.push({
            name: 'twitter:site',
            content: getTwitterUserName(o.twitter.siteCreator)
        })
    }

    if (typeof o.twitter.author !== 'undefined') {
        metas.push({
            name: 'twitter:creator',
            content: getTwitterUserName(o.twitter.author)
        })
    }

    if (typeof o.facebook.adminsId !== 'undefined') {
        metas.push({
            name: 'fb:admins',
            content: getTwitterUserName(o.facebook.adminsId)
        })
    }

    if (typeof o.facebook.appId !== 'undefined') {
        metas.push({
            name: 'fb:app_id',
            content: getTwitterUserName(o.facebook.appId)
        })
    }

    if (typeof o.returnArray !== 'undefined')
        returnArray = o.returnArray

    if (returnArray) return metas
    return metas.map(meta => {
        let html = '<meta'
        for (let i in meta) {
            html += ` ${i}="${meta[i]}"`
        }
        html += '/>'
        return html
    }).join('')
}

const getTwitterUserName = input => {
    if (typeof input !== 'string') input = input + ''
    if (input.substr(0, 1) !== '@') input = '@' + input
    return input
}