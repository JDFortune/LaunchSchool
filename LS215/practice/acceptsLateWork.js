/*
Oh no! Your classmate slept in this morning and totally forgot to write an essay for his homework! He sent you a text asking if the class accepted late work, but he was in such a rush, he only sent the teacher's name.

It's your job to create a function that will search multiple objects to find the class your friend was talking about, and if they accept late work.

With the limited amount of classes your friend is taking, you might find it easier to just create a switch statement for every teacher, or search each object (class) individually. But not only does that take the fun out of the challenge, but your friend is also counting on you to find out this information fast; those overcomplicated methods just won't do. Try to search all class objects at one time to maximize speed!
Example
*/

// english class object
const english = {
  advanced: { // advanced curriculum
    teacher: 'Ms. Abrimian',
	  acceptsLateWork: false,
	},
	standard: { // standard curriculum
	  teacher: 'Mr. Sheehan',
		acceptsLateWork: true,
	},
}

// math class object
const math = {
	advanced: {
    teacher: 'Mr. Citrano',
	  acceptsLateWork: false,
	},
	standard: {
		teacher: 'Ms. Marinelli',
		acceptsLateWork: false,
	},
}

function acceptsLateWork(teacher) {
	return Object.values(english)
               .concat(Object.values(math))
               .find(info => info["teacher"] === teacher)
               ["acceptsLateWork"];
}

console.log(acceptsLateWork("Mr. Citrano"));// false
