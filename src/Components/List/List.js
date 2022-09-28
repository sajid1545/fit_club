import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredTime } from '../../Utilities/localStorage';

const List = ({ list }) => {
	const [addbreak, setBreak] = useState(0);

	useEffect(() => {
		const storedTime = getStoredTime();
		setBreak(storedTime);
	}, []);

	const handleBreakTime = (value) => {
		setBreak(value);
		addToDb(value);
	};

	let seletedTime = 0;
	for (const time of list) {
		seletedTime += time.time;
	}

	return (
		<div>
			{/* Persona details */}
			<div className="flex gap-4">
				<div className="avatar">
					<div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuBfEFCjbdnfEYIE_BVX33Y07b5xhOoldDg&usqp=CAU"
							alt="avatar"
						/>
					</div>
				</div>

				<div>
					<h3 className="font-bold text-xl">Sajid Abdullah</h3>
					<div className="flex items-center gap-2">
						<FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
						<h3>Bangladesh, Chattogram</h3>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-3 mt-10 text-center bg-slate-100 rounded-lg p-5 gap-7">
				<div>
					<h1 className="text-2xl font-bold">75kg</h1>
					<h4 className="text-lg text-gray-700 font-semibold">Weight</h4>
				</div>
				<div>
					<h1 className="text-2xl font-bold">5.8</h1>
					<h4 className="text-lg text-gray-700 font-semibold">Height</h4>
				</div>
				<div>
					<h1 className="text-2xl font-bold">22yrs</h1>
					<h4 className="text-lg text-gray-700 font-semibold">Age</h4>
				</div>
			</div>

			{/* Add a break */}

			<div className="mt-10 space-y-5">
				<div>
					<h2 className="text-2xl font-semibold">Add a Break</h2>
				</div>

				<div className="text-center space-x-5 rounded-lg bg-slate-100 p-4 ">
					<button onClick={() => handleBreakTime(20)} className="btn btn-circle btn-outline focus:bg-purple-700 focus:text-white">
						<p className="lowercase">20s</p>
					</button>
					<button onClick={() => handleBreakTime(30)} className="btn btn-circle btn-outline focus:bg-purple-700 focus:text-white">
						<p className="lowercase">30s</p>
					</button>
					<button onClick={() => handleBreakTime(40)} className="btn btn-circle btn-outline focus:bg-purple-700 focus:text-white">
						<p className="lowercase">40s</p>
					</button>
					<button onClick={() => handleBreakTime(50)} className="btn btn-circle btn-outline focus:bg-purple-700 focus:text-white">
						<p className="lowercase">50s</p>
					</button>
				</div>
			</div>

			{/* Exercise Details */}

			<div className="mt-10">
				<div>
					<h2 className="text-2xl font-semibold">Exercise Details</h2>
				</div>

				<div className="flex justify-between p-4 bg-slate-100 mt-3 rounded-lg">
					<h2 className='text-xl font-semibold'>Exercise Time</h2>
					<p> <span className='text-green-700 font-extrabold text-lg'>{seletedTime}</span>  seconds</p>
				</div>

				<div className="flex justify-between p-4 bg-slate-100 mt-3 rounded-lg">
					<h2 className='text-xl font-semibold'>Break Time</h2>
					<p> <span className='text-green-700 font-extrabold text-lg'> {addbreak} </span> seconds</p>
				</div>
			</div>


			{/* Activity completed btn */}
			

		</div>
	);
};

export default List;
