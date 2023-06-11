import Auth from "pages/Auth";
import GameBomb from "pages/GameBomb";
import GameChallenge from "pages/GameChallenge";
import Home from "pages/Home";

import LoadSpash from "pages/LoadSpash/LoadSpash";
import SelectGame from "pages/SelectGame";

const publicRoutes = [
  { path: `/*`, component: LoadSpash, layout: null },
  { path: `/:uuid`, component: Auth, layout: null },
];
const privateRoutes = [
  { path: `/home`, component: Home, layout: null },
  { path: `/select-game`, component: SelectGame, layout: null },
  { path: `/game-bomb`, component: GameBomb, layout: null },
  { path: `/game-challenge`, component: GameChallenge, layout: null },
];
export { publicRoutes, privateRoutes };
