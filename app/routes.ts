import { type RouteConfig } from "@react-router/dev/routes";
import { coreRoutes } from "./modules/core/routes";

export default [...coreRoutes] satisfies RouteConfig;
