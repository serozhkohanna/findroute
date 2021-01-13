import React, { FC } from 'react';
import './Switch.scss';
import { steps } from "../../constants/routes";

interface Props {
  activeStep: string;
  setSwitch: Function;
}

const Switch: FC<Props> = ({activeStep, setSwitch}) => {
  const handleTabSwitch = (step: string) => {
	setSwitch(step);
  }

  return <nav className='switch'>
	<a className={`${activeStep === steps.origin && 'is-active'} tab-item`} href='#origin'
	   onClick={() => handleTabSwitch(steps.origin)}>Origin</a>
	<a className={`${activeStep === steps.location && 'is-active'} tab-item`} href='#location'
	   onClick={() => handleTabSwitch(steps.location)}>Destination</a>
  </nav>
}

export default Switch;