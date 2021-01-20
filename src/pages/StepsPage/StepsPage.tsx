import React, { useState } from 'react';
import './StepsPage.scss';
import { useHistory } from 'react-router'

import Switch from "../../components/Switch/Switch";
import { steps, INFO_PAGE } from "../../constants/routes";

const StepsPage = () => {
  const [activeTab, setActiveTab] = useState(steps.origin);
  const [originLocation, setOriginLocation] = useState();
  const [destinationLocation, setDestinationLocation] = useState();
  const [filledStep, setFilledStep] = useState(0);

  const history = useHistory();

  const handleTabSwitch = (tab: string) => {
	setActiveTab(tab);
  }

  const handleOriginSubmit = (e: any) => {
    e.preventDefault();
	setFilledStep(1);
  }

  const handleDestinationSubmit = (e: any) => {
	e.preventDefault();
	history.push(INFO_PAGE);
  }

  const handleOriginLocation = (e: any) => {
	setOriginLocation(e.target.value);
  }

  const handleDestinationLocation = (e: any) => {
	setDestinationLocation(e.target.value);
  }

  return <main className='page-steps'>
	<Switch setSwitch={handleTabSwitch} activeStep={activeTab} filledStep={filledStep}/>
	<div className="steps-form">
	  <div id="origin" className={`${activeTab === steps.origin && 'is-active'} step-content`}>
		<h2>set origin</h2>
		<form className='form' onSubmit={handleOriginSubmit}>
		  <input value={originLocation} onChange={handleOriginLocation} type="text" placeholder='Set initial location'/>
		  <button disabled={!originLocation} onClick={() => handleTabSwitch(steps.location)}>
			next
		  </button>
		</form>
	  </div>
	  <div id="location" className={`${activeTab === steps.location && 'is-active'} step-content`}>
		<h2>set destination</h2>
		<form onSubmit={handleDestinationSubmit}>
		  <input value={destinationLocation} onChange={handleDestinationLocation} type="text" placeholder='Set initial location'/>
		  <button disabled={!destinationLocation} onClick={() => handleTabSwitch(steps.location)}>
			next
		  </button>
		</form>
	  </div>
	</div>
	<div className="label">
	  On next steps you could extend your search by setting intermediate locations and path preferances
	</div>

  </main>
};

export default StepsPage;