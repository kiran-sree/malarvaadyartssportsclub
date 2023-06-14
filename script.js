// Member data
const members = [
    { name: 'Karthik', role: 'Chairperson', photo: 'karthik.jpg' },
    { name: 'Achu', role: 'Secretary', photo: 'achu.jpg' },
    { name: 'Gokul Das', role: 'Treasurer', photo: 'gokul.jpg' },
    { name: 'Anoop', role: 'Vice Chairperson', photo: 'anoop.jpg' },
    { name: 'kiran', role: 'Members', photo: 'vava.jpg' },
    { name: 'Balu', role: 'Members', photo: 'balu.jpg' },
    { name: 'Amalraj', role: 'Members', photo: 'amalraj.jpg' },
    { name: 'Rahul', role: 'Members', photo: 'rahul.jpg' },
    { name: 'Hareesh', role: 'Members', photo: 'hareesh.jpg' },
    { name: 'Kalesh', role: 'Members', photo: 'kalesh.jpg' },
    { name: 'Gopan', role: 'Members', photo: 'gopan.jpg' },
    { name: 'Monish', role: 'Members', photo: 'monish.jpg' },
    { name: 'Vishal', role: 'Members', photo: 'vishal.jpg' },
    { name: 'Kiran', role: 'Members', photo: 'kiran.jpg' },
    { name: 'Unni', role: 'Members', photo: 'unni.jpg' },
    { name: 'Vishnu', role: 'Members', photo: 'vishnu.jpg' },
    { name: 'Shyam', role: 'Members', photo: 'shyam.jpg' },
    { name: 'Suraj', role: 'Members', photo: 'suraj.jpg' },
    { name: 'Praveen', role: 'Members', photo: 'praveen.jpg' },
    { name: 'Avinash', role: 'Members', photo: 'avinash.jpg' },
    { name: 'Anandhu', role: 'Members', photo: 'pathan.jpg' },
];

// Event data
const events = [
  { title: 'Spo', date: 'June 15, 2023' },
  { title: 'Fit', date: 'July 2, 2023' },
  { title: 'Gro', date: 'August 10, 2023' },
];


// Populate member list with photos
const memberList = document.querySelector('.member-list');
members.forEach(member => {
  const listItem = document.createElement('li');
  listItem.className = 'member-item';
  
  const photoContainer = document.createElement('div');
  photoContainer.className = 'member-photo';
  const photo = document.createElement('img');
  photo.src = member.photo;
  photo.alt = member.name;
  photoContainer.appendChild(photo);
  listItem.appendChild(photoContainer);

  const name = document.createElement('div');
  name.className = 'member-name';
  name.textContent = member.name;
  listItem.appendChild(name);

  const role = document.createElement('div');
  role.className = 'member-role';
  role.textContent = member.role;
  listItem.appendChild(role);

  memberList.appendChild(listItem);
});

// Populate event list
const eventList = document.querySelector('.event-list');
events.forEach(event => {
  const listItem = document.createElement('li');
  listItem.textContent = `${event.title} (${event.date})`;
  eventList.appendChild(listItem);
});
