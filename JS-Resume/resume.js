


////////////////////////////////////////////////// JS CODE STARTS HERE---------------------------------------------------------------->

var resume = {
  name: "Arbaz Chougle",
  location: "Mumbai",
  contactNumber: 7028898562,
  email: "arbazchougle01@gmail.com",
  summary:
    "Seeking a role as a front-end developer so I can use my thorough knowledge of programming frameworks and development software",

  skills: ["HTML", "CSS", "JavaScript"],

  education: [
    {
      college: "D.B.J COLLEGE",
      degree: "BSC IT",
      year: "2020",
      marks: "8.4 CGPA",
    },
    {
      college: "D.B.J College",
      degree: "H..S.C",
      year: "2017",
      marks: "48%",
    },
  ],
  experience: "I am a Fresher",

  certifications: ["ASP.Net", "Linux System Administration", "DBMS."],

  languagesKnown: ["English", "Hindi", "Marathi", "Urdu"],

  declaration:
    "I hereby declare that the details mentioned in my C.V are true and best of my knowledge.",
};
////////////////////////////////////////////////// JS CODE ENDS HERE---------------------------------------------------------------->




////////////////////////////////////////////////// Consoling starts HERE---------------------------------------------------------------->

console.log(resume);

console.log(
  "Hi i am  " +
    resume["name"] +
    ", I am passionate about making my career in I.T, "
);

console.log("I Stay in " + resume["location"]);

console.log("My contact number is " + resume["contactNumber"]);
console.log("My email address is " + resume["email"]);

console.log("The summary to my resume is " + resume["summary"]);

console.log("My skills are " + resume["skills"]);

console.log("My education is " + resume["education"][0]["degree"]);

console.log(
  "I have completed my degree in " + resume["education"][0]["degree"],
  "from " + resume["education"][0]["college"],
  " in the year " + resume["education"][0]["year"],
  "With a marks of " + resume["education"][0]["marks"]
);

console.log(
  "I have completed my degree in " + resume["education"][1]["degree"],
  "from " + resume["education"][1]["college"],
  " in the year " + resume["education"][1]["year"],
  "With a marks of " + resume["education"][1]["marks"]
);

console.log("My experience is " + resume["experience"]);

console.log("My certifications are " + resume["certifications"]);

console.log("Languages known  to me are " + resume["languagesKnown"]);

console.log("declaration :- " + resume["declaration"]);

////////////////////////////////////////////////// Consoling ends HERE---------------------------------------------------------------->
