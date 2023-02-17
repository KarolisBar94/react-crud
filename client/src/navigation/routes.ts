const WheelPagePath = '/wheel-page/' as const;
const WheelUpdatePagePath = '/wheel-update-page/' as const;
const routes = {
  HomePage: '/',
  WheelPage: {
    routePath: `${WheelPagePath}:id`,
    createLink: (id: string | number) => `${WheelPagePath}${id}`,
  },
  WheelUpdatePage: {
    routePath: `${WheelUpdatePagePath}:id`,
    createLink: (id: string | number) => `${WheelUpdatePagePath}${id}`,
  },
  WheelCreatePage: '/wheel-create-page',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
