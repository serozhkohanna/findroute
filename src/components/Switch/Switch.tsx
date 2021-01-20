import React, { FC } from 'react';
import './Switch.scss';
import { steps } from "../../constants/routes";

interface Props {
  activeStep: string;
  setSwitch: Function;
  filledStep: number;
}

const Switch: FC<Props> = ({activeStep, setSwitch, filledStep}) => {
  const handleTabSwitch = (step: string) => {
	setSwitch(step);
  }

  return <nav className='switch'>
	<button className={`${activeStep === steps.origin && 'is-active'} tab-item`}
			onClick={() => handleTabSwitch(steps.origin)}>
	  <a href='#origin'>Origin</a>
	</button>
	<button disabled={filledStep < 1} className={`${activeStep === steps.location && 'is-active'} tab-item`}
			onClick={() => handleTabSwitch(steps.location)}>
	  <a href='#location'>Destination</a>
	</button>
  </nav>
}

export default Switch;