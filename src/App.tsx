import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { HOME_PAGE, INFO_PAGE} from "./constants/routes";

import Header from "./components/Header/Header";
import StepsPage from "./pages/StepsPage/StepsPage";
import InfoPage from "./pages/InfoPage/InfoPage";

function App() {
  return (
	<div className="page">
	  <Header/>
	  <div className="page-content">
		<Switch>
		  <Route exact path={HOME_PAGE} component={StepsPage}/>
		  <Route exact path={INFO_PAGE} component={InfoPage}/>
		</Switch>
	  </div>
	</div>
  );
}

export default App;
