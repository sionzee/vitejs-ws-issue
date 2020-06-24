module.exports = { 
  hostname: "localhost",
  port: 9000 ,
  configureServer: [
    ({
      root, // project root directory, absolute path
      app, // Koa app instance
      server, // raw http server instance
      watcher // chokidar file watcher instance
    }) => {
      app.use(async (ctx, next) => {
        ctx.res.setHeader("Access-Control-Allow-Origin", "*")
        await next()
      })
    }
  ],
}
