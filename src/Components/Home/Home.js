import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import List from '../List/List';

const Home = () => {
	const [exercises, setExercises] = useState([]);

	useEffect(() => {
		fetch('data.json')
			.then((res) => res.json())
			.then((data) => setExercises(data));
	}, []);

	return (
		<div className=" grid grid-cols-12">
			{/* cards container */}
			<div className="col-span-9 px-[80px] py-[70px]">
				<div className="text-4xl text-purple-700 flex gap-5 ">
					<FontAwesomeIcon className="font-extrabold" icon={faDumbbell}></FontAwesomeIcon>
					<h1 className="font-bold">My FitnessPal</h1>
				</div>

				<div>
					<h1 className="text-2xl mt-10 font-semibold">Start Today's Exercise</h1>
				</div>

				<div className='grid grid-cols-3 gap-5 mt-5'>
					{exercises.map((exercise) => (
						<Card key={exercise.id} exercise={exercise}></Card>
					))}
				</div>
			</div>

			{/* list container */}

			<div className="col-span-3 bg-white py-10 px-5">
				<List></List>
			</div>
		</div>
	);
};

export default Home;
