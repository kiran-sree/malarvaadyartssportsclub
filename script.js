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
  {date: 'YEAR, 2012 - ', title:'1st Anpoli for MAHADEVIKULANGARA AMMA("Sorry, there are no photos available for this event at the moment.")'},
  {date: 'YEAR, 2013 - ', title:'2st Anpoli for MAHADEVIKULANGARA AMMA.'},
  {date: 'YEAR, 2014 - ', title:'3rd Anpoli For MAHADEVIKULANGARA AMMA, Kochu Aswathi valiyakulangara.'},
  {date: 'YEAR, 2015 - ', title:'19/01/2015 Morning 08.00am Malarvady Arts & Sports Club, Valiyakulangara Ammaye "Puthukundom" Karayilek Sweekarikkunnu, മലർവാടി ആർട്സ് & സ്പോർട്സ്  ക്ലബ്ബ് വലിയകുളങ്ങര അമ്മക്ക് മീന അശ്വതിക്ക് സമർപ്പിക്കുന്ന കുതിരയുടെ ഉളി കുത്തൽ ചടങ്ങ് ഇന്ന് രാവിലെ 07:50 നു നടന്നു, മലർവാടി കുതിരയുടെ കതിരുകാൽ നിവർത്തുന്നു, മലർവാടി കുതിരച്ചുവട്ടിൽ കഞ്ഞി സമർപ്പിക്കുന്നു, മലർവാടി കുതിര വലിയകുളങ്ങര അമ്മക്ക് സമർപ്പിക്കുന്നു.'},
  {date: 'YEAR, 2016 - ', title:'4th Anpoli For MAHADEVIKULANGARA AMMA, 101 താലപൊലികളുടെ പ്രഭയിൽ അമ്മ ആടി എഴുന്നള്ളുന്നു.' },
  {date: 'YEAR, 2017 - ', title:'പ്രവീൺ മെമ്മോറിയൽ കൗണ്ടി ക്രിക്കറ്റ് ടൂർണമെന്റ്' },
  {date: 'YEAR, 2018 - ', title:'' },
  {date: 'YEAR, 2019 - ', title:'വലിയകുളങ്ങര അമ്മ മലർവാടിയില്, 1st കൊച്ചു Kodugaloor Anpoli.'},
  {date: 'YEAR, 2020 - ', title:' മലർവാടി ഈ വർഷം വലിയകുളങ്ങര  അമ്മക്ക് നൽകിയ പറ, 2nd കൊച്ചു Kodugaloor Anpoli.' },
  {date: 'YEAR, 2023 - ', title:' Kochu Aswathi valiyakulangara.'}
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
  listItem.textContent = `${event.date} ${event.title}`;
  eventList.appendChild(listItem);
});
