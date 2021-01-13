import React, { useState } from 'react';
import './StepsPage.scss';
import Switch from "../../components/Switch/Switch";
import { steps } from "../../constants/routes";

const StepsPage = () => {
  const [isActiveTab, setActiveTab] = useState(steps.origin);

  const handleTabSwitch = (tab: string) => {
	setActiveTab(tab);
  }

  const renderTabContent = () => {
	return <div>

	</div>
  }

  return <main className='page-steps'>
	{/*<Switch/>*/}
	<nav className="modal-tabs-names">
	  <a className={`${isActiveTab === steps.origin && 'is-active'} tab-item`} href='#origin'
		 onClick={() => handleTabSwitch(steps.origin)}>All content</a>
	  <a className={`${isActiveTab === steps.location && 'is-active'} tab-item`} href='#location'
		 onClick={() => handleTabSwitch(steps.location)}>Books</a>
	</nav>

	<div className="steps-form">
	  <div id="origin" className={`${isActiveTab === steps.origin && 'is-active'} form-content`}>
		first
	  </div>
	  <div id="location" className={`${isActiveTab === steps.location && 'is-active'} form-content`}>
		second
	  </div>
	</div>

  </main>
};

export default StepsPage;