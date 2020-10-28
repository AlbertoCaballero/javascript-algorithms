let people = new Map();

people.set('Jessie', { phone: "000-000-000", addres: "Home sweet home!"});
people.set('Alberto', { phone: "111-111-111", addres: "Another home"});

for (let [key, value] of people) {
  console.log(key, value)
}

