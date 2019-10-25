require('colors')
const webpack = require('webpack')
const config = require('./webpack.config')
process.env.NODE_ENV = 'development'
Promise.all([start('error-reporter', config)]).catch((err) => {
    console.error(err)
})

function start(target, webpackConf) {
    return new Promise((resolve, reject) => {
        const compiler = webpack(
            Object.assign({}, webpackConf, {
                entry: { [target]: webpackConf.entry[target] }
            })
        )

        compiler.hooks.afterEmit.tapAsync('after-emit', (compilation, done) => {
            const date = new Date()
            console.log(
                `${target} is OK! ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                    .green
            )
            done()
        })

        compiler.watch({}, (err, stats) => {
            if (err) {
                console.log(err)
                return
            }

            stats.compilation.errors.forEach((item) => {
                console.log(item.message)
            })
            resolve()
        })
    })
}
