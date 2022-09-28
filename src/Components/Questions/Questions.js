import React from 'react';

const Questions = () => {
	return (
		<div className="text-center bg-white p-10 mb-10">
			<h1 className="text-4xl font-bold">About React </h1>

			{/* First Question */}
			<div className="w-4/5 mx-auto border-4 border-purple-600 mt-5 rounded-xl shadow-lg hover:shadow-purple-400 duration-500">
				<div className="collapse">
					<input type="checkbox" />
					<div className="collapse-title text-xl font-semibold underline-offset-8 underline">
						How Does React Works ?
					</div>
					<div className="collapse-content">
						<p className="text-lg">
							React is a declarative, efficient, and flexible JavaScript library for building user
							interfaces. ReactJS is an open-source, component-based front end library responsible
							only for the view layer of the application. It is maintained by Facebook. React uses a
							declarative paradigm that makes it easier to reason about your application and aims to
							be both efficient and flexible. It designs simple views for each state in your
							application, and React will efficiently update and render just the right component
							when your data changes. The declarative view makes your code more predictable and
							easier to debug.ReactJS divides the UI into isolated reusable pieces of code known as
							components. React components work similarly to JavaScript functions as they accept
							arbitrary inputs called properties or props. It's possible to have as many components
							as necessary without cluttering your code.
						</p>
					</div>
				</div>
			</div>

			{/* Second Question */}
			<div className="w-4/5 mx-auto border-4 border-purple-600 mt-5 rounded-xl shadow-lg hover:shadow-purple-400 duration-500">
				<div className="collapse">
					<input type="checkbox" />
					<div className="collapse-title text-xl font-semibold underline-offset-8 underline">
						Difference Between Props & State
					</div>
					<div className="collapse-content">
						<p className="text-lg">
							Props (short for properties) are a Component's configuration. They are received from
							above and immutable as far as the Component receiving them is concerned. A Component
							cannot change its props, but it is responsible for putting together the props of its
							child Components. Props do not have to just be data -- callback functions may be
							passed in as props. The state is a data structure that starts with a default value
							when a Component mounts. It may be mutated across time, mostly as a result of user
							events. A Component manages its own state internally. Besides setting an initial
							state, it has no business fiddling with the state of its children. You might
							conceptualize state as private to that component.
						</p>
					</div>
				</div>
			</div>

			{/* Third Question */}
			<div className="w-4/5 mx-auto border-4 border-purple-600 mt-5 rounded-xl shadow-lg hover:shadow-purple-400 duration-500">
				<div className="collapse">
					<input type="checkbox" />
					<div className="collapse-title text-xl font-semibold underline-offset-8 underline">
						Uses of useEffect() hook other than fetching data from API
					</div>
					<div className="collapse-content">
						<p className="text-lg">
                            useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.
                            Some examples of side effects are:  directly updating the DOM, and timers(setTimeout,setInterval),Running on state change: validating input field,Running on state change: live filtering
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Questions;

