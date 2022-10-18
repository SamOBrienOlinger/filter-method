  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

getEm = people.filter(person => person.age >= 21); 
console.log(getEm);


getPaul = people.filter(person => person.name === 'Paul'); 
console.log(getPaul);

//my wrong attempt
/*getAnother = people.filter(p => p.name === ([0], [2])); 
console.log(getAnother);*/ 


// Complex Filtering
/*const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];*/



/*const experience = skill => skill.yrsExperience >= 5

const hasSkilzos =  s => {
  let skillzos = s.skills.filter(experience)
  
  return skillzos.length > 0;
    
  };

const candidate = students.filter(hasSkilzos);

console.log(candidate);*/



/*const experience = skill => skill.yrsExperience >= 5

const hasSkilzos =  s => s.skills.filter(experience).length > 0;
  
const candidate = students.filter(hasSkilzos);

console.log(candidate);*/

let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 84, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 67, english: 87, art: 95},
  }
];

const topMaths = students.filter(student => {

  let goodGrades = student.results.filter(result => result.maths <= 90);
  
  return goodGrades.lenght > 0; 

});

console.log(topMaths);
