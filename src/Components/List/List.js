import React from 'react';
import {  faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const List = () => {
	return (
		<div>
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
		</div>
	);
};

export default List;
