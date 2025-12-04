let section = document.querySelector("section");

for (let N = 99; N >= 0; N--) {
  let color;


  if (N >= 55) {
    color = "Green ";
  } else if (N >= 10) {
    color = "orange"; 
  } else {
    color = "red"; 
  }

  if (N > 0) {
    section.insertAdjacentHTML("beforeend", `
      <p style="color: ${color};">${N} 🐧s on 🧊s, ${N} 🐧s! </p>
      <p style="color: ${color};">${N - 1} 🐧s on 🧊s now!</p>
      <br>
    `);
  } else {
    section.insertAdjacentHTML("beforeend", `
      <p style="color: ${color};">No more 🐧s on 🧊s, no more 🐧s!</p>
      <p style="color: ${color};">All the penguins have slid away!</p>
    `);
    }}

