import { faDumbbell, faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import List from '../List/List';

const Home = () => {
	return (
		<div className=" grid grid-cols-12">
			{/* cards container */}
			<div className='col-span-9 px-[80px] py-[70px]'>
				<div className="text-5xl text-purple-700 flex gap-5 ">
					<FontAwesomeIcon className="font-extrabold" icon={faDumbbell}></FontAwesomeIcon>
					<h1 className="font-bold">My FitnessPal</h1>
				</div>

				<div>
					<h1 className="text-3xl mt-10 font-semibold">Start Today's Exercise</h1>
				</div>
			</div>

			{/* list container */}

			<div className='col-span-3 bg-slate-50 p-10'>
				<List></List>
			</div>
		</div>
	);
};

export default Home;
