import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import List from '../List/List';

const Home = () => {
	const [exercises, setExercises] = useState([]);
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch('data.json')
			.then((res) => res.json())
			.then((data) => setExercises(data));
	}, []);

	const handleAddToList = (selectedExercise) => {
		const newList = [...list, selectedExercise];
		setList(newList);
	};

	return (
		<div className=" grid grid-cols-12">
			{/* cards container */}
			<div className=" col-span-12 lg:col-span-9 p-10 sm:px-[80px] sm:py-[70px]">
				<div className="text-4xl text-purple-700 flex gap-5 flex-col text-center sm:text-left sm:flex-row ">
					<FontAwesomeIcon className="font-extrabold" icon={faDumbbell}></FontAwesomeIcon>
					<h1 className="font-bold">My FitnessPal</h1>
				</div>

				<div>
					<h1 className="text-2xl mt-10 font-semibold text-center sm:text-left">
						Start Today's Exercise
					</h1>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
					{exercises.map((exercise) => (
						<Card key={exercise.id} exercise={exercise} handleAddToList={handleAddToList}></Card>
					))}
				</div>
			</div>

			{/* list container */}

			<div className="  col-span-12 md:text-center md:mx-auto md:block  lg:col-span-3 bg-white py-10 px-5 ">
				<List list={list}></List>
			</div>
		</div>
	);
};

export default Home;
