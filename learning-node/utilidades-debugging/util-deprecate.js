const util = require('util')

const helloPluto = util.deprecate(() => {
    console.log('hello pluto')
}, 'pluto is drepecated. It is not a planet anymore')

helloPluto()