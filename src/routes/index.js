import Auth from "pages/Auth";
import GameBomb from "pages/GameBomb";
import Ingame from "pages/GameBomb/Ingame";
import IngameChallenge  from "pages/GameChallenge/IngameChallenge";

import GameChallenge from "pages/GameChallenge";
import Home from "pages/Home";

import LoadSpash from "pages/LoadSpash/LoadSpash";
import SelectGame from "pages/SelectGame";
import Splash from "pages/Splash";

const publicRoutes = [
  {
    path: '/:uuid',
    component: Splash,
    layout: null
},
  { path: `/auth`, component: Auth, layout: null },
  { path: `/*`, component: LoadSpash, layout: null },

];
const privateRoutes = [
  { path: `/home`, component: Home, layout: null },
  { path: `/select-game`, component: SelectGame, layout: null },
  { path: `/game-bomb`, component: GameBomb, layout: null },
  { path: `/game-challenge`, component: GameChallenge, layout: null },
  { path: `/ingame-bomb`, component: Ingame, layout: null },
  { path: `/ingame-challenge`, component: IngameChallenge, layout: null },


];
export { publicRoutes, privateRoutes };
