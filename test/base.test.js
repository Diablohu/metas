let metas


describe('Base functions/utilities', () => {

    describe('Importing...', function () {
        it(`should be success without error`, () => {
            metas = require('../index.js')
        });
    });

    describe('Get result as arrays...', function () {
        it(`test #1`, function () {
            expect(metas({}, true)).toEqual(
                [{
                    charset: 'utf-8'
                }]
            );
        });
        it(`test #2`, function () {
            expect(metas({ returnArray: true })).toEqual(
                [{
                    charset: 'utf-8'
                }]
            );
        });
        it(`test #1`, function () {
            expect(metas({
                title: "TITLE"
            }, true)).toEqual(
                [{
                    charset: 'utf-8'
                }, {
                    itemprop: 'name',
                    content: 'TITLE'
                }, {
                    name: 'twitter:title',
                    content: 'TITLE'
                }, {
                    property: 'og:title',
                    content: 'TITLE'
                }]
                );
        });
    });

    describe('Get result as HTML...', function () {
        it(`test #1`, function () {
            expect(metas({})).toBe(
                `<meta charset="utf-8"/>`
            );
        });
        it(`test #2`, function () {
            expect(metas({
                title: "TITLE"
            })).toBe(
                '<meta charset="utf-8"/>'
                + '<meta itemprop="name" content="TITLE"/>'
                + '<meta name="twitter:title" content="TITLE"/>'
                + '<meta property="og:title" content="TITLE"/>'
                );
        });
    });
})
