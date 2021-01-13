import React, { useState } from 'react';
import './StepsPage.scss';
import Switch from "../../components/Switch/Switch";
import { steps } from "../../constants/routes";

const StepsPage = () => {
  const [activeTab, setActiveTab] = useState(steps.origin);
  const [originLocation, setOriginLocation] = useState();

  const handleTabSwitch = (tab: string) => {
	setActiveTab(tab);
  }

  const handleOriginSubmit = () => {

  }

  const handleOriginLocation = (e: any) => {
	setOriginLocation(e.target.value);
  }

  return <main className='page-steps'>
	<Switch setSwitch={handleTabSwitch} activeStep={activeTab}/>
	<div className="steps-form">
	  <div id="origin" className={`${activeTab === steps.origin && 'is-active'} step-content`}>
		<h2>set destination</h2>
		<form className='form' onSubmit={handleOriginSubmit}>
		  <input value={originLocation} onChange={handleOriginLocation} type="text" placeholder='Set initial location'/>
		  <button disabled={!originLocation}>
			NEXT
		  </button>
		</form>
	  </div>
	  <div id="location" className={`${activeTab === steps.location && 'is-active'} step-content`}>
		location info
	  </div>
	</div>
	<div className="label">
	  On next steps you could extend your search by setting intermediate locations and path preferances
	</div>

  </main>
};

export default StepsPage;