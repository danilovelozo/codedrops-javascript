let weeklySchedule = {
  monday: 7-12,
  tuesday: 7-11,
  wednesday: 7-14,
  thursday: 7-3,
  friday: 7-9
}

console.log(weeklySchedule)

//-------------------------------//

let workHours = {
  mon: 8-4,
  tues: 8-4,
  wed: 10-4,
  thurs: 8-4,
  fri: 8-4
}

workHours.wed = 12-4;

//-------------------------------//

let workhours = {
  mon: 8-4,
  tues: 8-4,
  wed: 10-4,
  thurs: 8-4,
  fri: 8-4
}

workHours[tues] = 12-8;

//-------------------------------//

let workHours = {
  mon: 8-4,
  tues:8-4,
  wed: 10-4,
  thurs:8-4,
  fri:8-4
  }
  'mon' in workHours // true
  'sat' in workHours // false

//-------------------------------//

let favoriteCarBrand = {
  make1: 'Ferrari',
  make2: 'Honda',
  make3: 'Nissan'
}

delete favoriteCarBrand.make1 // dot method
delete favoriteCarBrand['make1'] // bracked method

//-------------------------------//

let favoriteCarBrand = {
  make1: 'Ferrari',
  make2: 'Honda',
  make3: 'Nissan'
}

Object.keys(favoriteCarBrand) // object.keys method
for(let key in favoriteCarBrand) {
  console.log(key); // for in loop method
}

//-------------------------------//

let finalProjectGroups = {
  ['John', 'Alyssa', 'Robert']
  ['Isabella', 'Dylan', 'Alejandro']
  ['Jorge', 'Nicolas', 'Daniel']
}

let peopleInTennisLessons = {
  { firstname:'Alejandro', lastname;'Rodriguez' age: 24 }
  { firstname:'Alyssa', lastname;'Garcia' age: 21 }
  { firstname:'Alex', lastname;'Garcia' age: 15 }
  { firstname:'Darian', lastname;'Alexi' age: 18 }

//-------------------------------//

let virtualClassroom2 = {
  teacher: { firstname: 'Danilo', lastname: 'Velozo', age: 30 };
}

console.log(virtualClassroom2.teacher) // * this shows all values in "teacher" * /
console.log(virtualClassroom2.teacher.age) // * this is how you access values in an object inside of an object * /