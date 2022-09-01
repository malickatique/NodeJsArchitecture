const express = require('express');

/**
 * Router Middleware
 * @param {*} router
 */
const routerWrapper = (router) => {
    const _route = router.route.bind(router);
    const methodsToWrap = ['get', 'post', 'patch', 'put', 'delete'];
    router.route = function (path) {
        const route = _route(path);
        for (const method of methodsToWrap) {
            if (route[method]) {
                route[method] = routeContainer(route[method]);
            }
        }
        return route;
    };
};

const routeContainer = (originRouterMethod) => {
    return function () {
        const originMiddlewares = [...arguments];
        const wrappedMiddlewares = originMiddlewares.map((fn) => {
            if (typeof fn !== `function`) return fn;
            return async function (req, res, next) {
                try {
                    req.args = {
                        ...req.args,
                        body: req.body,
                        headers: req.headers,
                        params: req.params,
                        query: req.query,
                    };
                    await fn.apply(null, arguments);
                } catch (err) {
                    next(err);
                }
            };
        });
        originRouterMethod.call(this, wrappedMiddlewares);
    };
};

const router = express.Router();
routerWrapper(router);

module.exports = { router };
