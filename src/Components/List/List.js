import React from 'react';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const List = ({list}) => {

	
    let seletedTime = 0
    for (const time of list) {
        seletedTime += time.time
    }


	return (
		<div>
			{/* Persona details */}
			<div className="flex gap-4">
				<div className="avatar">
					<div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img src="https://placeimg.com/192/192/people" alt="avatar" />
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
					<h4 className="text-lg text-gray-700 font-semibold">Heigth</h4>
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

				<div className="text-center space-x-5 rounded-lg bg-slate-100 p-4">
					<button className="btn btn-circle btn-outline">
						<p>20s</p>
					</button>
					<button className="btn btn-circle btn-outline">
						<p>30s</p>
					</button>
					<button className="btn btn-circle btn-outline">
						<p>40s</p>
					</button>
					<button className="btn btn-circle btn-outline">
						<p>50s</p>
					</button>
				</div>
			</div>

			{/* Exercise Details */}

			<div className='mt-10'>
				<div>
					<h2 className="text-2xl font-semibold">Exercise Details</h2>
                </div>
                
                <div className='flex justify-between p-4 bg-slate-200 mt-3'>
                    <h2>Exercise Time</h2>
					<p>{ seletedTime } seconds</p>
                </div>

                <div className='flex justify-between p-4 bg-slate-200 mt-3'>
                    <h2>Break Time</h2>
                    <p>seconds</p>
                </div>
			</div>
		</div>
	);
};

export default List;
