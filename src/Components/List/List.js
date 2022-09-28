import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
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

	const handleActivityCompleted = () => {
		toast('🎉🎉 Activity Completed!', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		Swal.fire('Congratulations 🎉🎉🎊🎊', 'You are done for the Day 💪💪', 'success');
	};

	let seletedTime = 0;
	for (const info of list) {
		seletedTime += info.time;
	}

	return (
		<div>
			{/* Persona details */}
			<div className="flex gap-4">
				<div className="avatar">
					<div className="w-12 rounded-full ring ring-green-700 ring-offset-base-100 ring-offset-2">
						<img
							src="https://scontent-ccu1-1.xx.fbcdn.net/v/t39.30808-1/293183277_3836516853239197_503555443141820798_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lcLeyggH6CwAX9uOzkv&_nc_ht=scontent-ccu1-1.xx&oh=00_AT_ECJk65XW3IdA5SW-EaQVv45c-7c_Tjwtl4I9MeStiTw&oe=6339C119"
							alt="avatar"
						/>
					</div>
				</div>

				<div>
					<h3 className="font-bold text-xl">Sajid Abdullah</h3>
					<div className="flex items-center gap-2">
						<FontAwesomeIcon icon={faMapLocationDot}></FontAwesomeIcon>
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
					<button
						onClick={() => handleBreakTime(20)}
						className="btn btn-circle btn-outline focus:bg-purple-700 focus:text-white">
						<p className="lowercase">20s</p>
					</button>
					<button
						onClick={() => handleBreakTime(30)}
						className="btn btn-circle btn-outline focus:bg-purple-700 focus:text-white">
						<p className="lowercase">30s</p>
					</button>
					<button
						onClick={() => handleBreakTime(40)}
						className="btn btn-circle btn-outline focus:bg-purple-700 focus:text-white">
						<p className="lowercase">40s</p>
					</button>
					<button
						onClick={() => handleBreakTime(50)}
						className="btn btn-circle btn-outline duration-300 focus:bg-purple-700 focus:text-white">
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
					<h2 className="text-xl font-semibold">Exercise Time</h2>
					<p>
						<span className="text-green-700 font-extrabold text-lg">{seletedTime}</span> seconds
					</p>
				</div>

				<div className="flex justify-between p-4 bg-slate-100 mt-3 rounded-lg">
					<h2 className="text-xl font-semibold">Break Time</h2>
					<p>
						<span className="text-green-700 font-extrabold text-lg"> {addbreak} </span> seconds
					</p>
				</div>
			</div>

			{/* Activity completed btn */}

			<div className="mt-10">
				<button
					onClick={handleActivityCompleted}
					className="btn btn-wide btn-primary focus:bg-red-600 block mx-auto">
					Activity Completed
				</button>
			</div>
		</div>
	);
};

export default List;
