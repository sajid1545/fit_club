import React from 'react';

const Card = ({ exercise }) => {
	const { title, picture, time, age } = exercise;

	return (
		<div className=''>
			<div className="card card-compact  bg-base-100 shadow-xl">
				<figure>
					<img src={picture} alt="pic" />
				</figure>
				<div className="card-body">
                    <h2 className="card-title">{ title }</h2>
                    <h2>For Age : { age }</h2>
                    <h2>Time Required : { time}s</h2>
					<div className="card-actions">
						<button className="btn btn-primary w-full">Add To List</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
