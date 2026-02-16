import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Linking
} from "react-native";
import { useState } from "react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  images?: any[]; // 🔥 optional image
};
export default function Chat() {

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! Welcome to PKR 👋", sender: "bot" }
  ]);

  const [input, setInput] = useState("");

  // 🔹 Intent word lists
 const greetings = ["hi", "hello", "hey", "hai", "vanakkam"];
 const thanksWords = ["thanks", "thank you", "thanku", "tnx", "thx"];
 const appreciationWords = ["nice", "super", "good", "great", "awesome", "wow", "excellent", "amazing"];

  /* 🔥 BOT DATA */
    const botData = {
      
      botname: "I’m Noah❤️!",
      
      aboutbot: `I am Noah 🤖, designed to help students and parents with information about P.K.R. Arts College for Women. 
I can provide details about courses, departments, faculty, placements, sports, hostel, library, and more.`,

      
      address: `🏫 PKR Arts College for Women
📍 Address:
P.B. No. 21, 127, Pariyur Road,
Gobichettipalayam - 638 476,
Erode District, Tamil Nadu.

📞 Contact:
04285-224458
04285-222128

📧 Email:
pkroffice@gmail.com

🗺️ Tap below to open in Google Maps`,


 collegedetails: `🏫 COLLEGE DETAILS

Name : P.K.R. Arts College for Women
Established : 1994
Managed By : Dhandapani Rural Charitable Trust
Visionary : Late Thiru P.R. Natarajan
Named After : Late Thiru P.K. Ramasamy
Location : Gobichettipalayam, Erode, Tamil Nadu
Affiliation : Bharathiar University
Autonomous : 2017
NAAC Grade : A`,

  aboutcollege: `🏫 ABOUT
  
Welcome to P.K.R. Arts College for Women!
P.K.R. Arts College for Women, affiliated to Bharathiar University is an unaided Autonomous Arts and Science college. It had been founded with a vision to empower rural women and has been managed by Dhandapani Rural Charitable Trust since 1994.
The college is located in a beautiful locale, surrounded by hillocks and green fields providing a serene and pleasant atmosphere for learning.
The college is dedicated to the everlasting memory of late Thiru. Kalimudhaliar, who had the noble vision of educating the masses.
Unfortunately, he was not able to realise his dream during his lifetime and the responsibility passed on to his grandson, late Thiru P.R. Natarajan, founder Correspondent of this college.
Inspired by his grandfather’s ideals, he dedicated his life to enlighten rural women by starting a women’s college in the name of his father Late Thiru P.K. Ramasamy.
Thus this college was born from a consistent effort to realise the vision of Late Thiru Kalimudhaliar and was christened as P.K.R. Arts College for Women.`,
  
collegeinfo: `🏫 COLLEGE DETAILS

Name : P.K.R. Arts College for Women
Established : 1994
Managed By : Dhandapani Rural Charitable Trust
Visionary : Late Thiru P.R. Natarajan
Named After : Late Thiru P.K. Ramasamy
Location : Gobichettipalayam, Erode, Tamil Nadu
Affiliation : Bharathiar University
Autonomous : 2017
NAAC Grade : A`,

vision: `🌟 PKR College Vision

To make a centre for excellence in higher education by imparting value-based quality education to rural women, to empower and make them economically independent, and socially committed to the task of building a strong nation.`,

  mission: `🎯 PKR College Mission

Empowering rural women by inculcating the core values of truth and righteousness and by ensuring quality in the teaching-learning process along with co-curricular and extra-curricular activities for their economic independence, social commitment and national development.`,


  departments: `🏫 PKR College Departments

📚 Department of Tamil
📚 Department of English
📚 Department of Mathematics
📚 Department of Physics
📚 Department of Computer Science
📚 Department of Commerce
📚 Department of Management`,

   tamildepartment:`📚 Department of Tamil

ABOUT THE DEPARTMENT

To bring to broad daylight the rich culture and heritage of Tamil language and literature that is very much needed in the present scenario.

PG course in Tamil Literature was incepted in 2014.
Post Graduation in Tamil Literature was introduced in 2017.
Research Programme (Ph.D.) was incepted in 2014.

Workshops and conferences are regularly organized to enrich the knowledge of students and to explore the profound background of Tamil language.
Eminent scholars and stalwarts of Tamil literature have presided over and delegated various academic functions.

Festivals that propagate the valour and culture of Tamilians are celebrated in a grand manner.
To expose the talents of students, the department publishes:
• “Narumugai” – Newsletter  
• “Nilamutram” – Magazine  

“Kavin Kalai Vizha” has been organized since 2017, providing an excellent platform for learning and literary exposure.

Students actively participate in oration, poetry, and essay writing competitions both on-campus and off-campus.
Our students have secured first rank in Bharathiar University along with six other university ranks.

Yoga classes are conducted to strengthen students mentally and physically.
The department functions as a platform to identify and nurture the most deserving students.

VISION
Developing competent, ethical, moral, and socially responsible women through Tamil literature.

MISSION
To enhance the linguistic and professional competence of learners not only through teaching but also through practical exposure.`,

englishdepartment:`📘 Department of English

ABOUT THE DEPARTMENT

The Department of English was established in the year 1994.

B.A. English Literature with Computer Applications was started in 2003 and later converted into B.A. English Literature in 2012.
M.A. English Literature was introduced in the year 2006.
M.Phil in English (Full Time / Part Time) was introduced in the year 2013 and is in progress from 2013 onwards.
Ph.D in English (Part Time) was introduced in the year 2018 and is in progress from 2018 onwards.

VISION
To empower rural women through English competency so that they will be able to contribute their best, on par with men, in various domains of social endeavour, rural or urban.

MISSION
To enable rural women to be on par with their urban counterparts by imparting communicative and literary skills in English and helping them to function as effective bilinguals in society.`,

 mathsdepartment: `📐 Department of Mathematics

ABOUT THE DEPARTMENT

Initially, the department was functioning as an allied department.

B.Sc. Mathematics was introduced in 1995.
B.Sc. Mathematics with Computer Applications was started in 2002.
M.Sc. Mathematics was introduced in 2003.
Research Programme (M.Phil) was introduced in 2006.

The department has an excellent academic record, and many students have obtained University Ranks.
The faculty and students of Mathematics actively engage in curricular, co-curricular, and extra-curricular activities for the overall development of both students and teachers.

VISION
Creating a congenial environment to learn mathematical designs and to use mathematical knowledge for effective problem solving.

MISSION
To motivate students to upgrade their interest in contemporary mathematical techniques and to enable them to acquire the required knowledge to strengthen their analytical skills.`,

  physicsdepartment: `🔬 Department of Physics

ABOUT THE DEPARTMENT

The Department of Physics was established in the year 1995 and currently has 10 faculty members.
It has been recognized as a research department since 2005.

The department offers:
• B.Sc. Physics – Intake: 60 students  
• M.Sc. Physics – Intake: 40 students  

The course provides a strong foundation in the principles of Physics with specialization in Electronics.

Elective courses offered include:
• Elements of Nanoscience and Nanotechnology  
• Physics of Non-conventional Energy Resources  
• Astronomy and Astrophysics  
• Experimental Techniques  
• Biomedical Instrumentation  
• Radiation Physics  

In the year 2005, the department was upgraded as a Research Department with the introduction of M.Phil and Ph.D. programmes.

Areas of research include:
• Thin Film Technology  
• Nanotechnology  
• Crystal Growth  

VISION
To become a centre of excellence in Physics by providing learning through experiments, workshops, and seminars, and by encouraging students and scholars to engage in basic and applied research.

MISSION
To impart quality science-based education to rural women and empower them to become good scientists and committed individuals contributing to nation building.`,

  computersciencedepartment:`💻 Department of Computer Science

ABOUT THE DEPARTMENT

The Department of Computer Science was established in the year 1994. The department serves as a cyber house of innovation and continuously explores unexplored areas in Information Technology.

It offers a wealth of ideas that quenches the thirst of learners to understand ever-developing technologies. With a team of committed and experienced faculty members, the department provides a strong academic environment and quality education to students.

The department follows a structured and strategic approach to bring out the best in students and transform them into competent professionals. It provides both theoretical and practical skills based on the requirements, talent, and demand of the IT sector, helping students stay updated with the latest developments.

The Computer Science Department occupies a prominent place in the academic history of the college since its inception. The faculty members possess vast experience in academia and training.

In addition to regular academic activities, the department conducts various training programmes and offers diploma courses such as:
• Advanced C / C++  
• Java  
• Multimedia (Photoshop and Flash)  

The department adopts a non-traditional teaching methodology that encourages individualistic thinking, innovation, and effective problem-solving skills.

Various seminars and workshops are organized for both students and faculty members. The department is equipped with state-of-the-art computer laboratories and spacious classrooms, ensuring a healthy teaching-learning environment. The alumni of the department are well placed in reputed organizations.

VISION
To create a genre of IT professionals equipped with a high degree of technical skills driven by strong moral values.

MISSION
To impart knowledge, skills, and ethics to the younger generation in a dynamic environment, enabling them to meet global challenges and enhance their competency.`,

  commercedepartment: `📊 Department of Commerce

ABOUT THE DEPARTMENT

B.Com. was established in 1994 with an intake of 40 students and 2 faculty members.
An additional section for B.Com. was started in 1997.

B.Com. (Computer Application) was introduced in 2001 and an additional section was started in 2007.
M.Com. (Computer Application) was introduced in 2002 and later converted into M.Com. in the year 2014.
M.Phil. in Commerce (Full Time / Part Time) was introduced in 2005.

The Department of Commerce was promoted as a Research Department leading to Ph.D. in Commerce in 2013.

CPT coaching for the Chartered Accountant programme was started in 2014, and 4 students cleared CPT in 2016.

Faculty strength:
• Full-time faculty – 23  
• Visiting faculty – 3  
• Ph.D. qualified faculty – 10  
• NET / SET qualified faculty – 6  

The department has completed 5 minor research projects funded by UGC and currently has 2 ongoing minor research projects.
A total of 4 funded seminars (ICSSR & NABARD) have been successfully organized.

VISION
To equip students with sound theoretical knowledge and application skills to excel in their careers, inculcate societal values, shape overall personality, and prepare them to meet the challenges of the emerging knowledge society.

MISSION
To impart globally competent knowledge to Commerce graduates along with:
• Effective communication skills through reading, writing, speaking, and listening  
• Creative and innovative ability for problem-solving and decision-making  
• Computational skills compatible with job demands  
• Ability to work in groups and lead teams when required  
• Professional ethics, social responsibility, good habits, and a positive attitude`,

  managementdepartment: `📈 Department of Management

ABOUT THE DEPARTMENT

BACHELOR OF BUSINESS ADMINISTRATION (BBA)
The Department of Business Administration began its journey in 1995 with the objective of imparting wholesome management education.

To motivate and inspire budding managers, the department follows student-centric curriculum design and industry-based learning methodologies.
The pedagogy of the BBA programme includes:
• Lectures  
• Research projects  
• Seminars  
• Workshops  
• Student-centric activities  

To provide practical exposure and update industry knowledge, the department regularly organizes industrial visits.

MASTER OF BUSINESS ADMINISTRATION (MBA)
The Post-Graduate Management Programme was started in 1997.
The programme is recognized by AICTE and the Government of Tamil Nadu and is affiliated to Bharathiar University, Coimbatore.

The primary objective of the MBA programme is to develop professional and corporate-ready skills among students.
A conducive academic environment is consistently maintained on campus to support this objective.

Innovative and pragmatic teaching methodologies include:
• Live project exposure  
• Analytical techniques for problem solving  
• Team coordination through group seminars  
• Industry and technology domain training  

Industry experts from various domains are invited as guest speakers to conduct seminars and training sessions.
These initiatives help students stay updated with global trends and prepare them to be industry-ready upon course completion.

VISION
Shaping entrepreneurs to build quality enterprises.

MISSION
To impart practical knowledge that imbibes managerial skills and confidence among students.`,

  faculty: `👩‍🏫 PKR College Teaching Faculty

📚 Department of Tamil
1. Dr. G. Umamaheswari – Assistant Professor & Head
2. Dr. K. Mohana – Assistant Professor
3. Dr. N. Amirthakodi – Assistant Professor
4. Dr. A. Senthamizhselvi – Assistant Professor
5. Dr. S. Ariyanacheyammal – Assistant Professor
6. Ms. S. Vasutha – Assistant Professor
7. Ms. K. Nivetha – Assistant Professor
8. Ms. G. Malarvizhi – Assistant Professor
9. Ms. Sujitha – Assistant Professor
10. Ms. Sivavarthini – Assistant Professor

📚 Department of English
1. Ms. P.N. Pushpalatha – Assistant Professor & Head
2. Ms. S. Abinaya – Assistant Professor
3. Ms. S.G. Nandhini – Assistant Professor
4. Ms. T. Ramya – Assistant Professor
5. Ms. A. Abiraami – Assistant Professor
6. Ms. G. Kanagasuganya – Assistant Professor
7. Ms. D. Jeevachristina – Assistant Professor
8. Ms. B. Jancy – Assistant Professor
9. Ms. S. Lavanya – Assistant Professor
10. Ms. S. Shameera Thasneem – Assistant Professor
11. Ms. V. Previsha – Assistant Professor

📚 Department of Mathematics
1. Ms. S.A. Dhanalakshmi – Controller
2. Ms. R. Jayalakshmi – Asst. Prof & Head
3. Dr. M. Kasthuri – Associate Professor
4. Ms. L. Priya – Assistant Professor
5. Ms. A. Poornima – Assistant Professor
6. Ms. S. Mayuri – Assistant Professor
7. Ms. S. Deepika – Assistant Professor
8. Ms. P. Yamunarani – Assistant Professor
9. Ms. S. Amshalekha – Assistant Professor
10. Ms. E. Deepika – Assistant Professor
11. Dr. S. Gomathi – Assistant Professor
12. Ms. P. Vidhya – Assistant Professor
13. Ms. T. Nanthini – Assistant Professor

📚 Department of Physics
1. Dr. C. Aruljothi – Asst. Prof & Head
2. Ms. K. Euchristmary – Assistant Professor
3. Ms. P. Priyanka – Assistant Professor
4. Ms. M. Christi Libiya – Assistant Professor

📚 Department of Computer Science
1. Dr. P.M. Gomathi – Dean
2. Dr. S. Sampath – Head (AI & ML)
3. Dr. O.P. Uma Maheswari – Head (CS & IT)
4. Dr. M. Indira – Associate Professor
5. Dr. V.S. Lavanya – Associate Professor
6. Dr. M. Prema – Assistant Professor
7. Dr. S. Kiruthika – Assistant Professor
8. Dr. P. Vijayalakshmi – Assistant Professor
9. Dr. T.B. Saranyapreetha – Assistant Professor
10. Ms. C. Thangamani – Associate Professor
11. Dr. R. Anushiya – Assistant Professor
12. Dr. M. Saranya – Associate Professor
13. Ms. V. Malarvizhi – Assistant Professor
14. Ms. J. Divyabharathi – Assistant Professor
15. Ms. K. Jayavarthini – Assistant Professor
16. Ms. V. Srikalpana – Assistant Professor

📚 Department of Commerce
1. Dr. P. Natesan – Dean
2. Dr. N. Nancy Fernandez – Head
3. Ms. S. Kirubharani – Head (Commerce CA)
4. Ms. V. Abirami – Assistant Professor
5. Dr. N. Ramya – Assistant Professor
6. Dr. S. Lingeswari – Assistant Professor
7. Dr. T. Kokilapriya – Head (Commerce PA)
8. Dr. N. Surega – Assistant Professor
9. Dr. B.S. Kiruthika – Assistant Professor
10. Ms. K. Chitra – Assistant Professor
11. Ms. G.S. Gayathri – Assistant Professor
12. Ms. S. Varshini – Assistant Professor
13. Ms. S. Sowmiya – Assistant Professor
14. Ms. R. Sureka – Assistant Professor
15. Ms. S. Bharathi – Assistant Professor
16. Dr. A. Rahamath Nisha – Assistant Professor
17. Ms. T. Santhiya – Assistant Professor
18. Ms. T. Revathi – Assistant Professor

📚 Department of Management
1. Dr. V. Kavitha – Associate Professor & Head
2. Dr. K. Radhamani – Assistant Professor
3. Ms. S. Subathara Devi – Assistant Professor
4. Ms. R. Gomathi – Assistant Professor
5. Dr. G.K. Pooranee – Assistant Professor
6. Ms. A. Arulmirthadevi – Assistant Professor
7. Ms. A.C. Sowmiya – Assistant Professor
8. Ms. R. Rajeswari – Assistant Professor
9. Ms. P.M. Shiyana – Assistant Professor
10. Ms. S. Kalpana – Assistant Professor

📚 Library
Ms. P.M. Esther Delsy – Librarian

📚 Placement Cell
1. Mr. R. Dhilipkumar – Placement Officer
2. Ms. N. Banupriya – Soft Skill Trainer
3. Ms. R. Janapriya – Soft Skill Trainer
4. Ms. K. Nathiya – Aptitude Trainer

📚 Physical Director
Ms. S. Sivaranjani – Physical Director`,

  courses: `🎓 PKR Arts College – Courses Offered
  🔹 UG PROGRAMMES
  • B.A Tamil Literature
  • B.A English Literature
  • B.Sc Computer Science
  • B.Sc Information Technology
  • B.Sc Artificial Intelligence & Machine Learning
  • B.Sc Cyber Security
  • BCA
  • B.Com
  • B.Com (CA)
  • B.Com (PA)
  • B.Com IT
  • B.Sc Physics
  • B.Sc Mathematics
  • BBA
  
  🔹 PG PROGRAMMES
  • M.A Tamil Literature
  • M.A English Language & Literature
  • MCA
  • M.Com
  • M.Sc Physics
  • M.Sc Mathematics
  • MBA
  
  
  🔹 PGDCA
  🔹 RESEARCH PROGRAMMES
  M.Phil (Full Time / Part Time)
  • Computer Science
  • Management
  • Commerce
  • Physics
  • Mathematics
  • English
  • Tamil
  Ph.D (Full Time / Part Time)
  • Physics
  • Commerce
  • Management
  • Tamil
  • Computer Science
  • English`,

  TamilLiterature:`📗B.A Tamil Literature
    B.A Tamil Literature focuses on Tamil language, literature, grammar, classical and modern works. It helps students build careers in teaching, writing, journalism, and research.`,

  EnglishLiterature:`📕B.A English Literature
    B.A English Literature deals with English poetry, drama, prose, and linguistics. It improves communication skills and prepares students for careers in teaching, media, and content writing.`,

  ComputerScience:`🖥️B.Sc Computer Science
    B.Sc Computer Science covers programming, data structures, databases, and software development. It prepares students for IT jobs and higher studies in computer-related fields.`,

  InformationTechnology:`💻B.Sc Information Technology
    B.Sc Information Technology focuses on networking, web development, databases, and system administration. It is suitable for careers in IT support and software services.`,
    
  AIML:`🤖B.Sc Artificial Intelligence & Machine Learning
   B.Sc Artificial Intelligence & Machine Learning course focuses on AI concepts, machine learning algorithms, data science, and automation. It prepares students for careers in AI, data analytics, and intelligent systems.`,

  CyberSecurity:`🔐B.Sc Cyber Security
    B.Sc Cyber Security focuses on network security, ethical hacking, digital forensics, and cyber laws. It prepares students to protect systems and data from cyber threats.`,

  BCA:`🖱️BCA
    BCA focuses on computer applications, programming languages, and software development. It is ideal for students aiming for IT and software careers.`,

  BCom:`💼B.Com
    B.Com provides knowledge in accounting, finance, economics, and business law. It prepares students for careers in commerce and business sectors.`,

  BComCA:`🧮Bachelor of Commerce (Computer Applications)
    B.Com CA integrates commerce with computer applications. It is suitable for careers in accounting, finance, and IT-related business roles.`,

  BComPA:`🧮Bachelor of Commerce (Professional Accounting)
    "B.Com PA focuses on professional accounting, taxation, and auditing. It prepares students for accounting and finance careers.`,

  BComIT:`🌐Bachelor of Commerce (Information Technology)
    B.Com IT combines commerce subjects with information technology. It is useful for roles in IT-enabled business services.`,

  BScPhysics:`🔬B.Sc Physics
    B.Sc Physics focuses on classical and modern physics concepts, experiments, and analytical skills. It prepares students for research and technical careers.`,

  BScMathematics:`📐B.Sc Mathematics
    B.Sc Mathematics deals with algebra, calculus, statistics, and applied mathematics. It builds strong analytical and problem-solving skills.`,

  BBA:`📑Bachelor of Business Administration
    BBA focuses on management principles, marketing, finance, and human resources. It prepares students for business and management careers.`,

  MATamil:`📚M.A Tamil Literature
    M.A Tamil Literature provides advanced study of Tamil literature, criticism, and research. It is suitable for teaching and academic research careers.`,

  MAEnglish:`📚M.A English Language & Literature
    This course offers advanced knowledge in English literature, linguistics, and critical studies. It prepares students for teaching, research, and writing careers.`,

  MCA:`👨‍💻Master of Computer Applications
    MCA focuses on advanced computer applications, software development, and system design. It prepares students for high-level IT roles.`,

  MCom:`📊M.Com
    M.Com provides advanced knowledge in commerce, accounting, finance, and research. It prepares students for academic and professional careers.`,

  MScPhysics:`🔮M.Sc Physics
    M.Sc Physics focuses on advanced theoretical and experimental physics. It prepares students for research and technical professions.`,

  MScMathematics:`📐M.Sc Mathematics
    M.Sc Mathematics offers advanced mathematical concepts and research-oriented studies. It prepares students for teaching and research roles.`,

  MBA:`🏦Master of Business Administration
    MBA focuses on business management, leadership, finance, marketing, and strategy. It prepares students for managerial and corporate careers.`,

  PGDCA:`👩‍🎓PGDCA
    PGDCA is a diploma course focusing on computer applications, programming, and IT basics. It is ideal for quick entry into IT-related jobs.`,

  MPhil:`🎓Master of Philosophy
    M.Phil in Computer Science focuses on research methodologies and advanced computing concepts.`,

  Phd:`📜Doctor of Philosophy
      Ph.D (Full Time / Part Time) is the highest level research programme offered in Physics, Commerce, Management, Tamil, Computer Science, and English, focusing on original research and academic excellence.`,


  fees: {
      "ba tamil": "BA Tamil Fees → ₹15,000",
      "ba english": "BA English Fees → ₹12,000",
      "bba": "BBA Fees → ₹15,000",
      "bcom": "B.Com Fees → ₹18,000",
      "bcom pa": "B.Com PA Fees → ₹18,000",
      "bcom ca": "B.Com CA Fees → ₹20,000",
      "bcom it": "B.Com IT Fees → ₹20,000",

      "bsc cs": "B.Sc CS Fees → ₹23,000",
      "bsc it": "B.Sc IT Fees → ₹23,000",
      "bsc ai ml": "B.Sc AI & ML Fees → ₹23,000",
      "bca": "BCA Fees → ₹20,000",
      "bsc maths": "B.Sc Maths Fees → ₹12,000",
      "bsc physics": "B.Sc Physics Fees → ₹12,000",
      "bsc cs cyber security": "B.Sc CS (Cyber Security) Fees → ₹20,000",

      "ma tamil": "MA Tamil Fees → ₹12,000",
      "ma english": "MA English Fees → ₹12,000",
      "msc maths": "M.Sc Maths Fees → ₹12,500",
      "msc physics": "M.Sc Physics Fees → ₹13,500",
      "mca": "MCA Fees → ₹20,000",
      "mcom": "M.Com Fees → ₹12,000",
      "mba": "MBA Fees → ₹28,000",
      
      otherFees:`🔹 OTHER FEES
      Other Fees → ₹14,000 – ₹30,000 (Course based)
      🔹 UNIVERSITY FEES
      UG & PG → ₹3,000`,
    },
    sports:`🎖️ SPORTS DETAILS

    🔹outdoor games:
    Kabaddi
    Volleyball
    Hockey
    Handball
    Football
    Powerlifting
    Weightlifting
    
    🔹indoor games:
    Carrom
    Table Tennis
    Chess
    Shuttle
    Badminton`,

    kabaddi:`🤼KABADDI
    
    PKR Arts College for Women has a very strong sports tradition, especially in kabaddi. The college has secured first place in kabaddi for more than 20–25 consecutive years in university-level competitions, showing its consistent performance and dominance in the sport. 

    The kabaddi team actively participates in district, state, and national level tournaments and has won several prizes and cash awards. The college also provides special support such as coaching, sports scholarships, free accommodation, food, sports kits, and medical facilities for talented sports students. 

    PKR College has proper sports infrastructure, including playfields and floodlight facilities for kabaddi practice, which helps students train regularly and improve their physical fitness, teamwork, and leadership skills.`,
    
    Volleyball:`🤾VOLLEY BALL
    
    PKR Arts College for Women encourages students to participate in volleyball and supports them through regular training and practice sessions.

    The college volleyball team takes part in inter-college, university, and state level tournaments and has won several prizes.

    Volleyball helps students improve physical fitness, coordination, teamwork, and leadership skills.
`,

   Hockey:`🏑HOCKEY
   
   PKR Arts College for Women encourages students to participate in hockey and provides regular coaching and practice facilities.
   
   The college hockey team participates in inter-college and university level competitions and performs well in tournaments.
   
   Hockey helps students develop teamwork, discipline, physical strength, and leadership qualities.
`,

   Handball:`🤾‍♀️HAND BALL
   
   PKR Arts College for Women encourages students to participate in handball and provides proper training facilities.
   
   The college handball team takes part in inter-college and university level tournaments and has achieved good results.
   
   Handball helps students improve coordination, teamwork, physical fitness, and confidence.`,

   Football:`⛹️‍♀️FOOT BALL
   
   PKR Arts College for Women encourages students to participate in football and provides a playground and sports facilities for practice. The college campus has a football ground and supports outdoor sports activities for students.
   
   The college gives importance to football as one of the outdoor games that helps students improve physical and mental fitness. Regular sports activities also help students develop teamwork and sportsmanship.`,

   Powerlifting:`🏋️‍♀️POWER LIFTING
   
   PKR Arts College for Women encourages students to participate in powerlifting and provides training facilities to develop strength and endurance.
   
   The college powerlifting team participates in inter-college, university, and state level competitions and has won several achievements.
   
   Powerlifting helps students improve physical strength, confidence, discipline, and mental determination.
`,

   Weightlifting:`🏋️‍♀️WEIGHT LIFTING
   
   PKR Arts College for Women encourages students to participate in weightlifting and provides proper gym and training facilities.
   
   The college weightlifting team takes part in inter-college, university, and state level competitions and has achieved good results.
   
   Weightlifting helps students develop physical strength, concentration, confidence, and discipline.
`,
   
   Badminton:`🏸BADMINTON
  PKR Arts College for Women encourages students to participate in badminton and provides indoor court facilities for regular practice.
  
  The college badminton team participates in inter-college and university level tournaments and has won several prizes.
  
  Badminton helps students improve reflexes, concentration, physical fitness, and teamwork skills.`,

  Chess:`♟️CHESS
  
  PKR Arts College for Women encourages students to participate in chess and supports indoor sports activities.

  The college chess team takes part in inter-college and university level competitions and has achieved good results.
  
  Chess helps students improve concentration, strategic thinking, patience, and decision-making skills.`,

  Carrom:`🎱CARROM
  
  PKR Arts College for Women encourages students to participate in carrom as part of indoor sports activities.

  The college carrom team takes part in inter-college and university level competitions and has won several achievements.

  Carrom helps students improve concentration, accuracy, patience, and strategic thinking skills.`,

  Tennis:`🏸TENNIS
  
  PKR Arts College for Women encourages students to participate in table tennis and provides indoor facilities for regular practice.
  
  The college table tennis team participates in inter-college and university level competitions and has won several prizes.

  Table tennis helps students improve reflexes, concentration, coordination, and quick decision-making skills.`,

  Shuttle:`🏸SHUTTLE
  
  PKR Arts College for Women encourages students to participate in shuttle badminton and provides indoor court facilities for training.

  The college shuttle team participates in inter-college and university level tournaments and has won several achievements.

  Shuttle badminton helps students improve agility, concentration, coordination, and physical fitness.
`,

  scholarship: `🎓 SCHOLARSHIP DETAILS (1st Semester Only)

🔹 DRCT Scholarship
Result 7–10 days → 15%
Result 11–20 days → 10%`,

hostel: `🏠 ABOUT HOSTEL

PKR Arts College for Women provides comfortable hostel facilities for students coming from far-off places.
The hostel mess offers both vegetarian and non-vegetarian food, prepared hygienically using steam cooking methods.
Audio-video recreational facilities and solar water heater systems are available for students’ convenience.
The hostel ensures a 24-hour uninterrupted power supply through solar energy.
Students are expected to maintain discipline, avoid wastage of food and water, and follow hostel rules strictly.`,

hostelfacilities:` HOSTEL FACILITIES 

🔹Comfortable Accommodation – Well-furnished rooms with beds, study tables, chairs, and storage facilities.
🔹24/7 Security – CCTV surveillance and security guards to ensure student safety.
🔹Wi-Fi Connectivity – High-speed internet access for academic and personal use.
🔹Nutritious Food – Hygienic and balanced meals provided in the hostel mess.
🔹Clean Drinking Water – Availability of purified and safe drinking water.
🔹Laundry Facilities – Washing machines or laundry services for students.
🔹Power Backup – Uninterrupted power supply with generator or inverter support.
🔹Recreation Area – Common rooms with TV, indoor games, and relaxation spaces.
🔹Medical Support – First-aid facilities and access to nearby hospitals.
🔹Study Environment – Quiet and disciplined atmosphere suitable for focused learning.,

hostelrules:
    "Hostel is run by the Management of P.K.R. Arts College for Women.",
    "A caution deposit of Rs.3000 must be paid at the time of admission.",
    "No reduction in fees will be given for absence, late joining, or leaving early during a term.",
    "Mess fees will be announced before the 5th of every month and must be paid before the 15th.",
    "All hostel students must be present on reopening day after holidays.",
    "Students must attend meals on time and maintain cleanliness in the dining hall.",
    "Hostel meeting will be conducted once in a month. Emergency meetings may be conducted anytime.",
    "If students are sick, they must report to the warden immediately and stay in the sick room.",
    "Strict silence must be maintained during study hours.",
    "Students should not keep money or valuable items in rooms. Management is not responsible for loss.",
    "Students must keep rooms and hostel premises clean. Surprise inspections may be conducted.",
    "Only parents and local guardians are allowed to visit students with visitor card.",
    "Students cannot leave hostel without permission letter from parents or guardian.",
    "Students are not allowed to visit places other than the permitted location.",
    "Students must bring bedding, blankets, locks, buckets, steel plates and tumblers with name.",
    "Personal electrical appliances like radios, iPad etc. are not allowed. Mobile phones only for learning.",
    "Student name may be removed from hostel for non-payment of fees or misconduct.",
    "Serious misconduct may lead to suspension or dismissal from hostel.",
    "Principal has right to refuse admission based on medical or other reasons."],

  informationForParents: [
    "Parents should meet the Principal only after getting permission from the receptionist.",
    "Parents should pay fees before or after lunch break.",
    "Parents and guardians must cooperate with college for smooth functioning.",
    "Parents should monitor student's academic progress and behaviour inside and outside the college."
  ]`,


hostelfees: `💰 HOSTEL FEE DETAILS

🔹 Admission Fee → ₹50 / year  
🔹 Caution Deposit → ₹2000 (Refundable)

🔹 Establishment Charges  
UG → ₹5000 / year  
PG → ₹6000 / year  `,

 MessFees :` MESS FEES DETAILS
₹2300 – ₹2800 / month.`,

library: `📚 PKR College Library Details

🔹 ABOUT LIBRARY
Library provides an intellectual environment for students learning & knowledge gaining.  
PKR Library is well furnished with reference books, periodicals, textbooks and back volumes.  
Library is centrally air-conditioned with CCTV surveillance.  

Digital Library contains 40 computers with internet facility.  
Provides DELNET and N-LIST under UGC-INFONET for accessing E-resources free of cost.  
Printing and photocopy facilities are available.  
Library is upgraded regularly for students and faculty.`,

  libraryhours: `📚 PKR College Library Hours

🔹 WORKING HOURS
Monday – Saturday : 8:30 AM to 6:00 PM`,

  bookdetails: `📚 PKR College Library Book Details
  
  🔹 BOOK DETAILS
Number of Volumes : 35633  
Number of Titles : 20540  

🔹 JOURNALS & MAGAZINES
National : 73  
International : 33  
Dailies : 10  
Online Journals (IEEE) : 03

🔹 BOOK ISSUE DETAILS
UG & Non Teaching Staff → 2 Books  
PG → 4 Books  
M.Phil → 5 Books  
Ph.D → 7 Books  
Teaching Staff → 15 Books  

🔹 DAYS ALLOWED
Students & Non Teaching Staff → 14 Days  
Faculty → One Semester

🔹 PENALTY
Delayed Return → ₹1 per day  
Loss of Book → 3 Times Book Cost`,
  

  libraryRules: `📖 Library Rules

1. Library open on working days 8:30 AM – 6:00 PM
2. Personal books & files must be kept at entrance rack
3. ID card scanning compulsory at entry
4. Silence must be maintained
5. Books issued only with bar coded ID card
6. Membership cards are not transferable
7. Marking or damaging books is strictly prohibited
8. Books taken from racks must be left on tables
9. Library follows Open Access System
10. Book return → 8:45 AM – 1:30 PM  
    Book issue → 12:30 PM – 1:30 PM & 3:30 PM – 5:30 PM
11. Book holding period can be extended if no demand
12. Only one renewal allowed
13. Absence is not accepted as delay reason
14. Students must check book condition before leaving counter
15. Lost or damaged books must be replaced
16. Reference Only Books:
   • Dictionaries / Encyclopedias / Year Books
   • Single Copy Text Books
   • Books above ₹1000
   • Journals / Magazines / Project Reports
17. Photocopy of required articles allowed
18. Full book photocopy not allowed
19. Librarian can recall issued books anytime
20. Furniture arrangement should not be disturbed
21. E-resource usage must be recorded
22. Unnecessary internet browsing prohibited
23. Rule violation leads to suspension
24. Mobile phone usage inside library prohibited`,

  publications: `📰 PKR College Publications

🔹 Department Magazines
Tamil → நிலமுற்றம்  
English → OYSTER  
Physics → GRIZELLE  
Mathematics → GEMS  
Computer Science → SPAIS TIMES  
Commerce → CASCADE  
Management → ACME  
College → NEWS LETTER  

🔹 Souvenir
Published during National & International Seminars and Conferences.

🔹 College Magazine
Published annually including articles, poems, travelogues, drawings and student contributions.`,

  placement: `💼 PKR College Placement Cell

🔹 About Placement Cell
The Placement Cell plays a key role in guiding students toward successful careers. 
It acts as a bridge between students and companies by organizing recruitment drives, 
training sessions, and career guidance programs.

The Placement Cell is dedicated to providing career opportunities for students by 
conducting campus recruitment drives and skill development programs.`,

  training: `💼 PKR College Placement skill development
  • Soft Skills Training  
  • Aptitude Training  
  • Technical Training  
  • Resume Building Workshops  
  • Mock Interviews  
  • Group Discussion Practice  
  • Personality Development Sessions.`,

  CompaniesVisited:`💼 PKR College Placement Companies Visited
• TCS  
• Infosys  
• Wipro  
• HCL  
• Cognizant  
• Zoho  
• PPTS
• KGISL 
• 
• Other Reputed Companies`,

  timings: `🕒 PKR College Timings

📚 Class Hours
Morning → 09:30 AM – 12:30 PM  
Afternoon → 01:15 PM – 04:00 PM  

🍱 Lunch Break  
12:30 PM – 01:15 PM  

📖 Library Hours  
08:30 AM – 06:30 PM  

🎓 Value Education / Mentoring Hour  
01:15 AM – 02:15 PM (VI Day Order)

🎯 Club Activity  
02:15 PM – 04:00 PM (I Day Order)`
 };

  const sendMessage = () => {

    if(input.trim() === "") return;

    const userText =input.toLowerCase();

    const userMsg: Message = {
  id: Date.now(),
  text: input,
  sender: "user"
};

setMessages(prev => [...prev, userMsg]);
    const openMap= () => {
  Linking.openURL(
    "https://www.google.com/maps/search/?api=1&query=PKR+Arts+College+for+Women+Gobichettipalayam"
  );
};

    setTimeout(() => {
      
      let userText = input
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "");
      let botReply = "Sorry 😔 I didn't understand.";

      // 👋 Greetings
      if (greetings.some(word => userText.includes(word))) {
        botReply = "Hi 👋😊 How can I help you today?";
      }

      // 🙏 Thanks
      else if (thanksWords.some(word => userText.includes(word))) {
        botReply = "You're most welcome 🤗✨";
      }

      // 🌟 Appreciation
      else if (appreciationWords.some(word => userText.includes(word))) {
        botReply = "Thank you so much 🥰🌸 Happy to help!";
      }

      // User asks bot name
else if (
  userText.includes("your name") ||
  userText.includes("Your name")||
   userText.includes("Name")
) {
  botReply = botData.botname;
}
  
      else if(userText.includes("college details")||
              userText.includes("College Details")||
              userText.includes("College details")||
              userText.includes("Collegedetails")||
              userText.includes("collegedetails")
){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.collegedetails,
      sender: "bot",
      images:[
        require("../assets/images/building2.png")
      ]
    }
  ]);
  return; // 🔥 IMPORTANT
  }              
                                
      else if(userText.includes("collegeinfo")||
              userText.includes("College info")||
              userText.includes("college info")||
              userText.includes("College Info")||
              userText.includes("Collegeinfo")
){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.collegeinfo,
      sender: "bot",
      images:[
         require("../assets/images/building1.png"),
         require("../assets/images/info2.png")
      ]
    }
  ]);
  return; // 🔥 IMPORTANT
  }
    
      else if(
  userText.includes("about college")||
  userText.includes("about pkr")||
  userText.includes("your college")||
  userText.includes("Your college")
){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.aboutcollege,
      sender: "bot",
      images:[
       require("../assets/images/entrance.png")
      ]
    }
  ]);
  return; // 🔥 IMPORTANT
  }
    /* Vision */
       else if(userText.includes("vision")){
        botReply = botData.vision;
      }

    /* Mission */
       else if(userText.includes("mission")){
        botReply = botData.mission;
      }

      /* ================= COURSES ================= */

      else if(userText.includes("batamil")||
              userText.includes("ba tamil")
      ){
        botReply = botData.TamilLiterature;
      }

      else if(userText.includes("baenglish")||
              userText.includes("ba english")
      ){
        botReply = botData.EnglishLiterature;
      }

      else if(userText.includes("bsc cs")||
              userText.includes("bsccs")
      ){
        botReply = botData.ComputerScience;
      }

      else if(userText.includes("bsc it")||
              userText.includes("bscit")
      ){
        botReply = botData.InformationTechnology;
      }

      else if(userText.includes("ai ml")||
              userText.includes("bsc ai ml")||
              userText.includes("bsc aiml")||
              userText.includes("ai&ml")||
              userText.includes("bsc ai&ml")||
              userText.includes("Bsc aiml")
      ){
        botReply = botData.AIML;
      }

      else if(userText.includes("bsc cyber security")||
              userText.includes("bsccybersecurity")||
              userText.includes("cyber security")||
              userText.includes("cybersecurity")
      ){
        botReply = botData.CyberSecurity;
      }

      else if(userText.includes("bca")||
              userText.includes("bachelor of computer application")||
              userText.includes("BCA")
      ){
        botReply = botData.BCA;
      }

      else if(userText.includes("bcom ca")||
              userText.includes("b com ca")||
              userText.includes("bachelor of commerce (computer application)")
      ){
        botReply = botData.BComCA;
      }

      else if (
  userText.includes("bcom pa") ||
  userText.includes("b com pa") ||
  userText.includes("professional accounting")
) {
  botReply = botData.BComPA;
}

else if (
  userText.includes("bcom it") ||
  userText.includes("b com it") ||
  userText.includes("commerce it")
) {
  botReply = botData.BComIT;
}

else if(userText.includes("bcom")||
              userText.includes("b com")||
              userText.includes("bachelor of commerce")
      ){
        botReply = botData.BCom;
      }

else if (
  userText.includes("bscphysics")||
  userText.includes("bsc physics") ||
  userText.includes("b.sc physics")
) {
  botReply = botData.BScPhysics;
}

else if (
  userText.includes("bsc mathematics") ||
  userText.includes("bsc maths") ||
  userText.includes("b.sc maths")||
  userText.includes("bscmaths")
) {
  botReply = botData.BScMathematics;
}

else if (
  userText.includes("bba") ||
  userText.includes("bachelor of business administration")
) {
  botReply = botData.BBA;
}

else if (
  userText.includes("ma tamil") ||
  userText.includes("master of tamil")
) {
  botReply = botData.MATamil;
}

else if (
  userText.includes("ma english") ||
  userText.includes("master of english")
) {
  botReply = botData.MAEnglish;
}

else if (
  userText.includes("mca") ||
  userText.includes("master of computer applications")
) {
  botReply = botData.MCA;
}

else if (
  userText.includes("mcom") ||
  userText.includes("m com") ||
  userText.includes("master of commerce")
) {
  botReply = botData.MCom;
}

else if (
  userText.includes("msc physics") ||
  userText.includes("m sc physics")
) {
  botReply = botData.MScPhysics;
}

else if (
  userText.includes("msc mathematics") ||
  userText.includes("msc maths") ||
  userText.includes("m sc mathematics")
) {
  botReply = botData.MScMathematics;
}

else if (
  userText.includes("mba") ||
  userText.includes("master of business administration")
) {
  botReply = botData.MBA;
}

else if (
  userText.includes("pgdca")
) {
  botReply = botData.PGDCA;
}

else if (
  userText.includes("mphil") ||
  userText.includes("m.phil")
) {
  botReply = botData.MPhil;
}

else if (
  userText.includes("phd") ||
  userText.includes("ph.d") ||
  userText.includes("doctor of philosophy")
) {
  botReply = botData.Phd;
}


      /* ================= DEPARTMENTS ================= */

// Tamil
else if (
  userText.includes("tamil department")||
  userText.includes("tamildepartment")||
  userText.includes("department of tamil")
) {
  botReply = botData.tamildepartment;
}

// English
else if (
  userText.includes("english department")||
  userText.includes("englishdepartment")||
  userText.includes("department of english")||
  userText.includes("eng department")
) {
  botReply = botData.englishdepartment;
}

// Mathematics
else if (
  userText.includes("maths department")||
  userText.includes("mathsdepartment")||
  userText.includes("department of maths")||
  userText.includes("mathematics department")||
  userText.includes("mathematicsdepartment")||
  userText.includes("department of mathematics")
) {
  botReply = botData.mathsdepartment;
}

// Physics
else if (
  userText.includes("physics department")||
  userText.includes("physicsdepartment")||
  userText.includes("department of physics")
) {
  botReply = botData.physicsdepartment;
}

// Computer Science
else if (
  userText.includes("computer science department")||
  userText.includes("computerscience department")||
  userText.includes("department of computer science")||
  userText.includes("department of computerscience")||
  userText.includes("cs department")||
  userText.includes("csdepartment")||
  userText.includes("department of cs")
) {
  botReply = botData.computersciencedepartment;
}

// Commerce
else if (
  userText.includes("department of commerce")||
  userText.includes("commerce department")||
  userText.includes("commercedepartment")
) {
  botReply = botData.commercedepartment;
}

// Management
else if (
  userText.includes("department of management")||
  userText.includes("management department")||
  userText.includes("managementdepartment")
) {
  botReply = botData.managementdepartment;
}

else if(
        userText.includes("department")||
        userText.includes("departments")
      ){
        botReply = botData.departments;
      }

      else if(
        userText.includes("faculty details") ||
        userText.includes("Faculty details") ||
        userText.includes("faculty") ||
        userText.includes("staff") ||
        userText.includes("teachers") ||
        userText.includes("department staff")
      ){
        botReply = botData.faculty;
      }

      else if(userText.includes("course")){
        botReply = botData.courses;
      }

      else if(userText.includes("course")){
        botReply = botData.courses;
      }

      else if(userText.includes("scholarship")){
        botReply = botData.scholarship;
      }
      
      else if(userText.includes("publication") ||
              userText.includes("magazine")) {
              botReply = botData.publications;
            }

    /* LIBRARY HOURS */
      else if(
        userText.includes("library hour") ||
        userText.includes("library time") ||
        userText.includes("library timing")||
        userText.includes("working hour")
      ){
        botReply = botData.libraryhours;
      }

    /* BOOK DETAILS */
    else if(
      userText.includes("book detail") ||
      userText.includes("number of books") ||
      userText.includes("volumes") ||
      userText.includes("journals") ||
      userText.includes("issue details") ||
      userText.includes("penalty")
    ){
      botReply = botData.bookdetails;
    }
  /* LIBRARY RULES */
    else if(
      userText.includes("library rule") ||
      userText.includes("library rules")||
      userText.includes("rules") ||
      userText.includes("Libraryrules") ||
      userText.includes("library regulation")
    ){
      botReply = botData.libraryRules;
    }

  /* LIBRARY*/
    else if(
        userText.includes("library")||
        userText.includes("college library") ||
        userText.includes("about library")||
        userText.includes("pkr library")||
        userText.includes("your library")
){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.library,
      sender: "bot",
      images:[
         require("../assets/images/library2.png"),
         require("../assets/images/library1.png")
      ]
    }
  ]);
  return;
}
      
  /* PUBLICATIONS */
    else if(
      userText.includes("publication") ||
      userText.includes("magazine") ||
      userText.includes("souvenir") ||
      userText.includes("newsletter")
    ){
      botReply = botData.publications;
    }

    else if(
      userText.includes("placement") ||
      userText.includes("placement cell")||
      userText.includes("about placement")
    ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.placement,
      sender: "bot",
      images:[
         require("../assets/images/placement1.png"),
         require("../assets/images/placement2.png")
      ]
    }
  ]);
  return;
}
    else if (
        userText.includes("address")||
        userText.includes("location")||
        userText.includes("where")||
        userText.includes("place")||
        userText.includes("college address")||
        userText.includes("college location")||
        userText.includes("enga")||
        userText.includes("edam")){
        botReply = botData.address;
      }

    else if(
      userText.includes("training")||
      userText.includes("placement training")||
      userText.includes("soft skill training")||
      userText.includes("aptitude training")
    ){
      botReply = botData.training;
    }

    else if(
      userText.includes("companies")||
      userText.includes("companies visited")||
      userText.includes("company")||
      userText.includes("placement companies")
    ){
      botReply = botData.CompaniesVisited;
    }

    else if(
      userText.includes("kabadi")||
      userText.includes("kabaddi")||
      userText.includes("Kabadi")||
      userText.includes("Kabaddi")
   ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.kabaddi,
      sender: "bot",
      images:[
         require("../assets/images/kabadi.png")
      ]
    }
  ]);
  return;
}

    else if(
      userText.includes("volley ball")||
      userText.includes("Volley ball")||
      userText.includes("volleyball")||
      userText.includes("Volleyball")
    ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.Volleyball,
      sender: "bot",
      images:[
         require("../assets/images/volleybal.png")
      ]
    }
  ]);
  return;
}

    else if(
      userText.includes("hockey")||
      userText.includes("Hockey")
    ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.Hockey,
      sender: "bot",
      images:[
         require("../assets/images/hockey.png")
      ]
    }
  ]);
  return;
}

   else if(
  userText.includes("handball") ||
  userText.includes("hand ball")
){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.Handball,
      sender: "bot",
      images:[
        require("../assets/images/handbal.png")
      ]
    }
  ]);
  return;
}


    else if(
      userText.includes("football")||
      userText.includes("foot ball")||
      userText.includes("Foot ball")||
      userText.includes("Football")
    ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.Football,
      sender: "bot",
      images:[
         require("../assets/images/footbal.png")
      ]
    }
  ]);
  return;
}
    else if(
      userText.includes("Powerlifting")||
      userText.includes("power lifting")||
      userText.includes("Power lifting")||
      userText.includes("powerlifting")
     ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.Powerlifting,
      sender: "bot",
      images:[
         require("../assets/images/powerlift.png")
      ]
    }
  ]);
  return;
}

    else if(
      userText.includes("weightlifting")||
      userText.includes("Wight lifting")||
      userText.includes("weight lifting")||
      userText.includes("Weightlifting")
     ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.Weightlifting,
      sender: "bot",
      images:[
         require("../assets/images/weightlift.png")
      ]
    }
  ]);
  return;
}
    else if(
      userText.includes("badminton")||
      userText.includes("Bad minton")||
      userText.includes("bad minton")||
      userText.includes("Badminton")
     ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.Badminton,
      sender: "bot",
      images:[
         require("../assets/images/badminton.png")
      ]
    }
  ]);
  return;
}

    else if(
      userText.includes("Shuttle")||
      userText.includes("shuttle")
    ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.Shuttle,
      sender: "bot",
      images:[
         require("../assets/images/shuttle.png")
      ]
    }
  ]);
  return;
}

    else if(
      userText.includes("Chess")||
      userText.includes("chess")
     ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.Chess,
      sender: "bot",
      images:[
         require("../assets/images/chess.png")
      ]
    }
  ]);
  return;
}

    else if(
      userText.includes("Carrom")||
      userText.includes("carrom")
    ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.Carrom,
      sender: "bot",
      images:[
         require("../assets/images/carrom.png")
      ]
    }
  ]);
  return;
}

    else if(
      userText.includes("Table tennis")||
      userText.includes("tabletennis")||
      userText.includes("Tabletennis")||
      userText.includes("table tennis")||
      userText.includes("Tennis")||
      userText.includes("tennis")
    ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.Tennis,
      sender: "bot",
      images:[
         require("../assets/images/tennis.png")
      ]
    }
  ]);
  return;
}

    else if(
      userText.includes("hostel facilities") ||
      userText.includes("hostel rules") ||
      userText.includes("hostel instructions") ||
      userText.includes("hostel facility ") 
    ){
      botReply = botData.hostelfacilities;
    }

    else if(
      userText.includes("hostel fees") ||
       userText.includes("hostel fees structure") ||
      userText.includes("hostel fee ") 
    ){
      botReply = botData.hostelfees;
    }

     else if(
      userText.includes("hostel mess") ||
      userText.includes("hostel mess fees") ||
      userText.includes("mess fee")
    ){
      botReply = botData.MessFees;
    }

    else if(
  userText.includes("hostel") ||
  userText.includes("your hostel")||
  userText.includes("Your hostel")||
  userText.includes("yourhostel")||
  userText.includes("Yourhostel")||
  userText.includes("about hostel ") 
){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.hostel,
      sender: "bot",
      images:[
         require("../assets/images/hostel1.png"),
         require("../assets/images/hostel2.png")
      ]
    }
  ]);
  return;
}
    else if(
        userText.includes("timing") ||
        userText.includes("time") ||
        userText.includes("college time") ||
        userText.includes("working hours")
      ){
          botReply = botData.timings;
      }

     else if(
  userText.includes("outdoor")||
  userText.includes("outdoor games")||
  userText.includes("outdoor sports")||
  userText.includes("Outdoor sports")||
  userText.includes("Outdoor games")||
  userText.includes("Outdoorsports")||
  userText.includes("Outdoorgames")
){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: `🔹 Outdoor Games:
Kabaddi
Volleyball
Hockey
Handball
Football
Powerlifting
Weightlifting`,
      sender: "bot",
      images: [
        require("../assets/images/outdoor.png"),
      ]
    }
  ]);
  return;
}

     else if(
  userText.includes("indoor")||
  userText.includes("indoor games")||
  userText.includes("indoor sports")||
  userText.includes("Indoor sports")||
  userText.includes("Indoor Games")||
  userText.includes("Indoorsports")||
 userText.includes("Indoorgames")
){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: `🔹 Indoor Games:
Carrom
Chess
Table tennis
Shuttle
Badminton`,
      sender: "bot",
      images: [
        require("../assets/images/indoor.png"),
      ]
    }
  ]);
  return;
}

     else if(userText.includes("sports")||
              userText.includes("games")
              ){
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: botData.sports,
      sender: "bot",
      images:[
         require("../assets/images/sports1.png"),
         require("../assets/images/sports2.png")
      ]
    }
  ]);
  return;
}

else if (
  userText.includes("about you") ||
  userText.includes("who are you") ||
  userText.includes("your info") ||
  userText.includes("About you")||
  userText.includes("Who are you")||
  userText.includes("Your info")
) {
  botReply = botData.aboutbot;
}

else if(
        userText.includes("fees") ||
        userText.includes("fee") ||
        userText.includes("structure")
      ){
        let foundCourse = Object.keys(botData.fees).find(course =>
          userText.includes(course)
        );

  if(foundCourse){
    // Specific course fee
    botReply = botData.fees[foundCourse as keyof typeof botData.fees];
  }
  else{
    // Show ALL fees
    botReply = Object.entries(botData.fees)
      .filter(([key]) => key !== "otherFees")
      .map(([key, value]) => value)
      .join("\n\n");

    botReply += "\n\n" + botData.fees.otherFees;
  }
}
      const botMsg: Message = {
  id: Date.now() + 1,
  text: botReply,
  sender: "bot",
};

setMessages(prev => [...prev, botMsg]);

    }, 700);

    setInput("");
  };

  return (
    <KeyboardAvoidingView
      style={{flex:1}}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>

        <FlatList
  data={messages}
  keyExtractor={(item)=>item.id.toString()}
  contentContainerStyle={{padding:18}}
  renderItem={({item}) => (
    <View style={[
      styles.messageBubble,
      item.sender === "user"
        ? styles.userBubble
        : styles.botBubble
    ]}>

      <Text style={[
        styles.messageText,
        item.sender === "user" && {color:"white"}
      ]}>
        {item.text}
      </Text>
      {item.images?.map((img, index) => (
  <Image
    key={index}
    source={img}
    style={{
      width: 200,
      height: 130,
      marginTop: 10,
      borderRadius: 10
    }}
    resizeMode="cover"
  />
))}
     
      {/* 🔥 Google Map Link */}
      {item.text.includes("Tap below to open in Google Maps") && (
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.google.com/maps/search/?api=1&query=PKR+Arts+College+for+Women+Gobichettipalayam"
            )
          }
        >
          <Text style={{color:"blue", marginTop:8}}>
            📍 Open in Google Maps
          </Text>
        </TouchableOpacity>
      )}

    </View>
  )}
/>

        <View style={styles.inputContainer}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
            style={styles.input}
            placeholderTextColor="#888"
          />

          <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#F5F5F5"
  },

  messageBubble:{
    padding:18,
    borderRadius:22,
    marginVertical:8,
    maxWidth:"80%"
  },

  userBubble:{
    alignSelf:"flex-end",
    backgroundColor:"#7A3BFF"
  },

  botBubble:{
    alignSelf:"flex-start",
    backgroundColor:"white",
    elevation:3
  },

  messageText:{
    fontSize:20,
    fontWeight:"500"
  },

  inputContainer:{
    flexDirection:"row",
    padding:12,
    backgroundColor:"white",
    alignItems:"center"
  },

  input:{
    flex:1,
    backgroundColor:"#F0F0F0",
    borderRadius:28,
    paddingHorizontal:20,
    height:52,
    fontSize:18
  },

  sendBtn:{
    marginLeft:10,
    backgroundColor:"#9B5CFF",
    paddingHorizontal:24,
    paddingVertical:14,
    borderRadius:28
  },

  sendText:{
    color:"white",
    fontWeight:"bold",
    fontSize:17
  }
});