import Auth from "pages/Auth";
import Home from "pages/Home";

import LoadSpash from "pages/LoadSpash/LoadSpash";

const publicRoutes = [
  { path: `/*`, component: LoadSpash, layout: null },
  { path: `/:uuid`, component: Auth, layout: null },
];
const privateRoutes = [{ path: `/home`, component: Home, layout: null }];
export { publicRoutes, privateRoutes };
