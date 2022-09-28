import React from 'react';

const Card = ({ exercise,handleAddToList }) => {
	const { title, picture, time, age } = exercise;


	return (
		<div>
			<div className="card card-compact  bg-base-100 shadow-xl">
				<figure >
					<img className='w-full h-[80%] p-4' src={picture} alt="pic" />
				</figure>
				<div className="card-body">
                    <h2 className="card-title text-2xl">{ title }</h2>
                    <h2 className='text-lg font-medium'>For Age : { age }</h2>
                    <h2 className='text-lg font-medium'>Time Required : { time}s</h2>
					<div className="card-actions">
						<button  onClick={()=>handleAddToList(exercise)} className="btn btn-primary w-full focus:bg-red-600">Add To List</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
