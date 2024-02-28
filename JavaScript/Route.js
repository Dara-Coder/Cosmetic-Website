class Router
{
    constructor(routes)
    {
        this.routes = routes;
        this._loadInitialRoute();
    }

    _loadInitialRoute()
    {
        const pathName = window.location.hash.slice(1) || "home";
        this.loadRoute(pathName);
    }

    loadRoute(pathName)
    {
        const matchedRoute = this.routes.find((route) => route.path === pathName);

        if(!matchedRoute)
        {
            window.location.hash = "";
        }
        else
        {
            matchedRoute.callback();
        }
    }
}