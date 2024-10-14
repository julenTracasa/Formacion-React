interface Route {
  relativePath: string;
  absolutePath: string;
}

export const URLBase = import.meta.env.BASE_URL;

const Routes = {
  "/": {
    relativePath: "/",
    absolutePath: "/",
  },
  inicio: {
    relativePath: "inicio",
    absolutePath: "/inicio",
  },
} as const satisfies Record<string, Route>;

type RoutesType = typeof Routes;
type RouteKeys = keyof RoutesType;

export { Routes };
export type { RoutesType, RouteKeys, Route };
