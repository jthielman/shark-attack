const students = [
  {
    id: 'student1',
    firstName: 'Alesha',
    lastName: 'Reed',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    isDead: false,
  },
  {
    id: 'student3',
    firstName: 'Charity',
    lastName: 'Bunyon',
    isDead: false,
  },
  {
    id: 'student4',
    firstName: 'Connor',
    lastName: 'Sullivan',
    isDead: false,
  },
  {
    id: 'student5',
    firstName: 'Crystal',
    lastName: 'Broach',
    isDead: false,
  },
  {
    id: 'student6',
    firstName: 'Denise',
    lastName: 'Baker',
    isDead: false,
  },
  {
    id: 'student7',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    isDead: false,
  },
  {
    id: 'student8',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    isDead: false,
  },
  {
    id: 'student9',
    firstName: 'Gabriel',
    lastName: 'Seals',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Ivan',
    lastName: 'Phelps',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Jamie',
    lastName: 'Phillips',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'Jasmine',
    lastName: 'Williams',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'John',
    lastName: 'Key',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'John',
    lastName: 'Thielman',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'John',
    lastName: 'Johnson',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'Kelsey',
    lastName: 'Creel',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Laura',
    lastName: 'Collins',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Maggie',
    lastName: 'Greene',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Maria',
    lastName: 'Brock',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    isDead: false,
  },
  {
    id: 'student22',
    firstName: 'Randy',
    lastName: 'Tate',
    isDead: false,
  },
  {
    id: 'student23',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    isDead: false,
  },
];

const livingStudents = () => students.filter((student) => student.isDead === false);

export default { livingStudents };
