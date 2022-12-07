import { Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";

import Home from "./pages/Home";
import Settings from "./pages/Settings";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id="main">
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/page/settings" exact={true}>
          <Settings />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
