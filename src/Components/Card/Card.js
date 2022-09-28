import React from 'react';
import Swal from 'sweetalert2';

const Card = ({ exercise, handleAddToList }) => {
	const { title, picture, time, age, about } = exercise;

	const handleReadMore = ()=>{
		Swal.fire({
			
			text: about,
			
		  })
	}

	return (
		<div>
			<div className="card card-compact  bg-base-100 shadow-xl hover:scale-105 duration-700 hover:shadow-stone-800">
				<figure className="p-4">
					<img className="rounded-xl " src={picture} alt="pic" />
				</figure>
				<div className="card-body">
					<h2 className="card-title text-2xl">{title}</h2>
					<p className="text-gray-500">
						{about.length > 100 ? about.slice(0, 85) + '... '  : about}
						<span className='cursor-pointer text-blue-700 font-bold hover:text-red-600'  onClick={handleReadMore}>Read More</span>
					</p>
					<h2 className="text-lg font-medium">For Age : {age}</h2>
					<h2 className="text-lg font-medium">Time Required : {time}s</h2>
					<div className="card-actions">
						<button
							onClick={() => handleAddToList(exercise)}
							className="btn btn-primary w-full focus:bg-green-600">
							Add To List
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
