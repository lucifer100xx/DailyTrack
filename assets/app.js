// ══════════════════════════════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════════════════════════════
const DAYS=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const CC={DSA:'#ff4d6d',CLASS:'#845ef7',STUDY:'#22d3ee',FREE:'#fbbf24',BREAK:'#34d399',HEALTH:'#10b981',SLEEP:'#6b7280',MORNING:'#fb923c'};
const COURSES=['CSE355 · Image Processing','CSE441 · Theory of Computing','CSE443 · Computer Graphics & Animation','CSE444 · Computer Graphics & Animation Lab','CSE477 · Cloud Computing','CSE460 · Final Year Design Project I','Other'];
const QUOTES=[
  {t:"Consistency beats intensity. Show up every day, even when it's small.",a:"— James Clear"},
  {t:"The first 100 problems are the hardest. After that, your brain shifts.",a:"— NeetCode"},
  {t:"Passion grows with competence. Do the reps first.",a:"— Cal Newport"},
  {t:"You don't rise to the level of your goals. You fall to the level of your systems.",a:"— James Clear"},
  {t:"Hard work beats talent when talent doesn't work hard.",a:"— Tim Notke"},
  {t:"The pain of discipline is lighter than the pain of regret.",a:"— Jim Rohn"},
  {t:"One problem a day keeps the self-doubt away.",a:"— Pranto's Rule"},
  {t:"Study like you mean it. Rest like you earned it.",a:"— Unknown"},
  {t:"Every expert was once a beginner who refused to quit.",a:"— Unknown"},
];

const SCH=[
  {day:0,name:'Sunday',sub:'Theory of Computing · Java + DSA + FYP',tasks:[
    {time:'6:00 AM – 6:15 AM',cat:'MORNING',title:'Wake up · Water · Freshen up',note:'Open the curtains, drink water, wash up, and avoid scrolling first thing.'},
    {time:'6:15 AM – 6:35 AM',cat:'HEALTH',title:'Gentle walk + mobility',note:'Easy walk or light stretching. Keep it comfortable.'},
    {time:'6:35 AM – 7:05 AM',cat:'BREAK',title:'Breakfast',note:'Egg or dal/chola + roti/oats/bread + banana or another seasonal fruit.'},
    {time:'7:05 AM – 8:35 AM',cat:'STUDY',title:'DevPath Phase 1 · Java fundamentals',note:'Focused learning: one Java concept, short notes, then write a small example.'},
    {time:'8:35 AM – 8:50 AM',cat:'BREAK',title:'Screen-free break',note:'Stand up, stretch, rest your eyes, and refill water.'},
    {time:'8:50 AM – 9:50 AM',cat:'DSA',title:'DSA practice · 1–2 problems',note:'Rotate Arrays, Strings, HashMap, Two Pointers, and Binary Search. Understand before moving on.'},
    {time:'9:50 AM – 10:10 AM',cat:'BREAK',title:'Fruit / light snack',note:'Seasonal fruit, yogurt, or a small handful of nuts if suitable.'},
    {time:'10:10 AM – 11:10 AM',cat:'STUDY',title:'CSE441 · Theory of Computing preparation',note:'Review the next topic, definitions, and examples before class.'},
    {time:'11:10 AM – 12:00 PM',cat:'STUDY',title:'CSE460.1 · Final Year Design Project I',note:'Flexible project block. The portal screenshot does not list a fixed class time for this course.'},
    {time:'12:00 PM – 12:40 PM',cat:'BREAK',title:'Lunch',note:'Rice or roti + fish/egg/chicken/dal + vegetables. Eat away from the study desk.'},
    {time:'12:40 PM – 1:30 PM',cat:'BREAK',title:'Travel to campus + settle in',note:'Estimated commute buffer; adjust this block to your real travel time.'},
    {time:'1:30 PM – 2:50 PM',cat:'CLASS',title:'CSE441.13 · Theory of Computing',note:'SUN 13:30–14:50 · SEU509'},
    {time:'2:50 PM – 3:35 PM',cat:'BREAK',title:'Travel home + decompress',note:'Take a proper break after class.'},
    {time:'3:35 PM – 4:00 PM',cat:'BREAK',title:'Afternoon snack',note:'Banana/guava, yogurt, chola, or a simple homemade sandwich.'},
    {time:'4:00 PM – 4:45 PM',cat:'STUDY',title:'CSE441 · Same-day class recap',note:'Write 3 key takeaways and list anything you did not understand.'},
    {time:'4:45 PM – 5:30 PM',cat:'HEALTH',title:'Outdoor time / easy movement',note:'Walk, stretch, or do a relaxed activity. This is not a workout target.'},
    {time:'5:30 PM – 6:15 PM',cat:'FREE',title:'Personal time + small chores',note:'Keep this block flexible.'},
    {time:'6:15 PM – 7:00 PM',cat:'BREAK',title:'Dinner',note:'Rice/roti + protein such as fish, egg, chicken, or dal + vegetables.'},
    {time:'7:00 PM – 8:00 PM',cat:'FREE',title:'Entertainment · games / show / friends',note:'Protected leisure time. Enjoy it without guilt.'},
    {time:'8:00 PM – 8:45 PM',cat:'STUDY',title:'Light review + tomorrow check',note:'Only revise key notes or prepare your Monday materials. No heavy session.'},
    {time:'8:45 PM – 9:00 PM',cat:'FREE',title:'Relax / reading / family time',note:'Choose a calm activity.'},
    {time:'9:00 PM – 9:30 PM',cat:'SLEEP',title:'Wind down · screens away',note:'Prepare clothes and bag, brush teeth, dim the lights, and settle for sleep.'},
    {time:'9:30 PM – 6:00 AM',cat:'SLEEP',title:'Sleep · 8.5 hours',note:'Protect this block. A consistent 8–10 hour sleep window is a good target for teenagers.'},
  ]},
  {day:1,name:'Monday',sub:'Image Processing · Java + DSA',tasks:[
    {time:'6:00 AM – 6:15 AM',cat:'MORNING',title:'Wake up · Water · Freshen up',note:'Start calmly and get ready for your morning class.'},
    {time:'6:15 AM – 6:35 AM',cat:'HEALTH',title:'Gentle stretching / short walk',note:'Light movement only.'},
    {time:'6:35 AM – 7:05 AM',cat:'BREAK',title:'Breakfast',note:'Egg/dal/chola + roti or bread + fruit or milk/yogurt.'},
    {time:'7:05 AM – 7:40 AM',cat:'MORNING',title:'Get ready · Pack water + snack',note:'Check your class materials and leave a little buffer.'},
    {time:'7:40 AM – 8:30 AM',cat:'BREAK',title:'Travel to campus',note:'Estimated travel buffer; adjust to your actual commute.'},
    {time:'8:30 AM – 9:50 AM',cat:'CLASS',title:'CSE355.3 · Image Processing',note:'MON 08:30–09:50 · SEU527'},
    {time:'9:50 AM – 10:40 AM',cat:'BREAK',title:'Travel home + reset',note:'Take a breather after class.'},
    {time:'10:40 AM – 11:00 AM',cat:'BREAK',title:'Fruit / light snack',note:'Fruit, yogurt, chola, or a simple sandwich.'},
    {time:'11:00 AM – 12:00 PM',cat:'STUDY',title:'CSE355 · Class recap',note:'Organise lecture notes and identify one topic to practise.'},
    {time:'12:00 PM – 12:45 PM',cat:'BREAK',title:'Lunch',note:'Rice/roti + fish/egg/chicken/dal + vegetables.'},
    {time:'12:45 PM – 1:15 PM',cat:'FREE',title:'Rest / short nap if needed',note:'Keep any nap brief so night sleep stays on track.'},
    {time:'1:15 PM – 2:45 PM',cat:'STUDY',title:'DevPath Phase 1 · Java concept + coding',note:'Java fundamentals and OOP. Code a small example instead of only watching videos.'},
    {time:'2:45 PM – 3:05 PM',cat:'BREAK',title:'Study break',note:'Walk away from the screen and drink water.'},
    {time:'3:05 PM – 4:05 PM',cat:'DSA',title:'DSA practice · 1 focused problem',note:'Try independently, then review the solution and complexity.'},
    {time:'4:05 PM – 4:30 PM',cat:'HEALTH',title:'Walk / stretch',note:'Move gently after sitting for study.'},
    {time:'4:30 PM – 5:15 PM',cat:'STUDY',title:'CSE460.1 · Project progress',note:'Flexible design-project work: research, scope, documentation, or supervisor preparation.'},
    {time:'5:15 PM – 6:15 PM',cat:'FREE',title:'Personal time + chores',note:'Keep this block flexible.'},
    {time:'6:15 PM – 7:00 PM',cat:'BREAK',title:'Dinner',note:'Include a protein source and vegetables with rice or roti.'},
    {time:'7:00 PM – 7:45 PM',cat:'STUDY',title:'Light university revision',note:'Review Image Processing or finish one small pending item.'},
    {time:'7:45 PM – 8:45 PM',cat:'FREE',title:'Entertainment · gaming / series',note:'A real break is part of a sustainable routine.'},
    {time:'8:45 PM – 9:00 PM',cat:'MORNING',title:'Prepare Tuesday materials',note:'Pack your bag and choose tomorrow’s study topic.'},
    {time:'9:00 PM – 9:30 PM',cat:'SLEEP',title:'Wind down · screens away',note:'Keep the last part of the evening calm.'},
    {time:'9:30 PM – 6:00 AM',cat:'SLEEP',title:'Sleep · 8.5 hours',note:'Protect your sleep window.'},
  ]},
  {day:2,name:'Tuesday',sub:'Theory of Computing · Java + DSA',tasks:[
    {time:'6:00 AM – 6:15 AM',cat:'MORNING',title:'Wake up · Water · Freshen up',note:'Start without rushing.'},
    {time:'6:15 AM – 6:35 AM',cat:'HEALTH',title:'Gentle walk + mobility',note:'Comfortable movement to wake up.'},
    {time:'6:35 AM – 7:05 AM',cat:'BREAK',title:'Breakfast',note:'Egg/dal/chola + roti/oats/bread + fruit.'},
    {time:'7:05 AM – 8:35 AM',cat:'STUDY',title:'DevPath Phase 1 · Java learning',note:'Continue the current roadmap topic: OOP, collections, exceptions, or core Java.'},
    {time:'8:35 AM – 8:50 AM',cat:'BREAK',title:'Screen-free break',note:'Rest your eyes and move around.'},
    {time:'8:50 AM – 9:50 AM',cat:'DSA',title:'DSA practice · 1–2 problems',note:'Focus on one topic and explain your approach in notes.'},
    {time:'9:50 AM – 10:10 AM',cat:'BREAK',title:'Fruit / snack + water',note:'Choose a simple snack; avoid replacing meals with tea or coffee.'},
    {time:'10:10 AM – 11:10 AM',cat:'STUDY',title:'CSE441 · Theory of Computing pre-read',note:'Review definitions, proofs, and worked examples for the lecture.'},
    {time:'11:10 AM – 11:50 AM',cat:'STUDY',title:'CSE460.1 · Project planning',note:'Flexible project block; no fixed lecture time is shown in the portal screenshot.'},
    {time:'11:50 AM – 12:30 PM',cat:'BREAK',title:'Lunch',note:'Rice/roti + dal/fish/egg/chicken + vegetables.'},
    {time:'12:30 PM – 1:30 PM',cat:'BREAK',title:'Travel to campus + settle in',note:'Estimated commute buffer; adjust to your real travel time.'},
    {time:'1:30 PM – 2:50 PM',cat:'CLASS',title:'CSE441.13 · Theory of Computing',note:'TUE 13:30–14:50 · SEU509'},
    {time:'2:50 PM – 3:35 PM',cat:'BREAK',title:'Travel home + decompress',note:'Take time to reset.'},
    {time:'3:35 PM – 4:00 PM',cat:'BREAK',title:'Afternoon snack',note:'Fruit, yogurt, roasted chola, or a homemade snack.'},
    {time:'4:00 PM – 4:45 PM',cat:'STUDY',title:'CSE441 · Class recap',note:'Summarise the lecture and note questions for the next class.'},
    {time:'4:45 PM – 5:30 PM',cat:'HEALTH',title:'Walk / outdoor break',note:'A relaxed walk or light movement.'},
    {time:'5:30 PM – 6:15 PM',cat:'FREE',title:'Personal time',note:'Take a proper break.'},
    {time:'6:15 PM – 7:00 PM',cat:'BREAK',title:'Dinner',note:'Balanced meal with rice/roti, protein, and vegetables.'},
    {time:'7:00 PM – 8:00 PM',cat:'FREE',title:'Entertainment · games / show',note:'Protected leisure time.'},
    {time:'8:00 PM – 8:45 PM',cat:'STUDY',title:'Light revision',note:'Only revisit key Java or Theory of Computing notes.'},
    {time:'8:45 PM – 9:00 PM',cat:'MORNING',title:'Prepare Wednesday class materials',note:'Pack your bag and set a realistic first task.'},
    {time:'9:00 PM – 9:30 PM',cat:'SLEEP',title:'Wind down · screens away',note:'Relax and get ready for sleep.'},
    {time:'9:30 PM – 6:00 AM',cat:'SLEEP',title:'Sleep · 8.5 hours',note:'Keep this protected.'},
  ]},
  {day:3,name:'Wednesday',sub:'Image Processing · Java practice + project',tasks:[
    {time:'6:00 AM – 6:15 AM',cat:'MORNING',title:'Wake up · Water · Freshen up',note:'Start calmly.'},
    {time:'6:15 AM – 6:35 AM',cat:'HEALTH',title:'Gentle stretching',note:'Easy movement; no intense workout required.'},
    {time:'6:35 AM – 7:05 AM',cat:'BREAK',title:'Breakfast',note:'Egg/dal/chola + roti/bread + fruit or yogurt.'},
    {time:'7:05 AM – 7:40 AM',cat:'MORNING',title:'Get ready · Pack water + snack',note:'Check notes and leave on time.'},
    {time:'7:40 AM – 8:30 AM',cat:'BREAK',title:'Travel to campus',note:'Estimated commute buffer; adjust to your actual commute.'},
    {time:'8:30 AM – 9:50 AM',cat:'CLASS',title:'CSE355.3 · Image Processing',note:'WED 08:30–09:50 · SEU527'},
    {time:'9:50 AM – 10:40 AM',cat:'BREAK',title:'Travel home + reset',note:'Take a breather.'},
    {time:'10:40 AM – 11:00 AM',cat:'BREAK',title:'Fruit / snack',note:'Fruit, yogurt, chola, or a small sandwich.'},
    {time:'11:00 AM – 12:00 PM',cat:'STUDY',title:'CSE355 · Lecture recap + practice',note:'Rewrite key points and try one small example or question.'},
    {time:'12:00 PM – 12:45 PM',cat:'BREAK',title:'Lunch',note:'Rice/roti + protein + vegetables.'},
    {time:'12:45 PM – 1:15 PM',cat:'FREE',title:'Rest / quiet break',note:'Step away from your desk.'},
    {time:'1:15 PM – 2:15 PM',cat:'STUDY',title:'DevPath Phase 1 · Java coding practice',note:'Implement a small exercise using the Java topic you are learning.'},
    {time:'2:15 PM – 2:30 PM',cat:'BREAK',title:'Short break',note:'Stretch and rest your eyes.'},
    {time:'2:30 PM – 3:30 PM',cat:'DSA',title:'DSA practice · 1 problem + review',note:'Prefer quality over problem count. Write down the key idea.'},
    {time:'3:30 PM – 4:00 PM',cat:'HEALTH',title:'Walk / refresh',note:'Take a break from sitting.'},
    {time:'4:00 PM – 5:00 PM',cat:'STUDY',title:'CSE460.1 · Design project work',note:'Flexible block for research, requirement notes, diagrams, or documentation.'},
    {time:'5:00 PM – 6:15 PM',cat:'FREE',title:'Personal time + chores',note:'Keep this time open.'},
    {time:'6:15 PM – 7:00 PM',cat:'BREAK',title:'Dinner',note:'Rice/roti + fish/egg/chicken/dal + vegetables.'},
    {time:'7:00 PM – 7:45 PM',cat:'STUDY',title:'Light course revision',note:'Review Image Processing or prepare questions for your next lecture.'},
    {time:'7:45 PM – 8:45 PM',cat:'FREE',title:'Entertainment · music / gaming / show',note:'Relax without turning this into another study block.'},
    {time:'8:45 PM – 9:00 PM',cat:'MORNING',title:'Prepare Thursday materials',note:'Check Cloud Computing and Graphics notes.'},
    {time:'9:00 PM – 9:30 PM',cat:'SLEEP',title:'Wind down · screens away',note:'Quiet routine before bed.'},
    {time:'9:30 PM – 6:00 AM',cat:'SLEEP',title:'Sleep · 8.5 hours',note:'Protect your sleep window.'},
  ]},
  {day:4,name:'Thursday',sub:'Cloud Computing + Computer Graphics & Animation',tasks:[
    {time:'6:00 AM – 6:15 AM',cat:'MORNING',title:'Wake up · Water · Freshen up',note:'Get ready for a two-class campus day.'},
    {time:'6:15 AM – 6:35 AM',cat:'HEALTH',title:'Gentle walk + mobility',note:'Easy movement.'},
    {time:'6:35 AM – 7:05 AM',cat:'BREAK',title:'Breakfast',note:'Egg/dal/chola + roti/oats/bread + fruit.'},
    {time:'7:05 AM – 8:35 AM',cat:'STUDY',title:'DevPath Phase 1 · Java deep focus',note:'One roadmap topic plus a short coding exercise.'},
    {time:'8:35 AM – 8:50 AM',cat:'BREAK',title:'Screen-free break',note:'Move around and rest your eyes.'},
    {time:'8:50 AM – 9:35 AM',cat:'DSA',title:'DSA light practice',note:'One short problem or revision; keep the class day manageable.'},
    {time:'9:35 AM – 10:20 AM',cat:'MORNING',title:'Pack · Prepare · Early snack',note:'Pack water and a simple campus snack.'},
    {time:'10:20 AM – 11:30 AM',cat:'BREAK',title:'Travel to campus + settle in',note:'Estimated commute and arrival buffer; adjust to your actual travel time.'},
    {time:'11:30 AM – 12:50 PM',cat:'CLASS',title:'CSE477.3 · Cloud Computing',note:'THU 11:30–12:50 · SEU330'},
    {time:'12:50 PM – 1:40 PM',cat:'BREAK',title:'Lunch on campus',note:'Bring or buy a balanced meal. Include protein and vegetables where available.'},
    {time:'1:40 PM – 2:40 PM',cat:'STUDY',title:'CSE443 · Pre-read / quiet campus study',note:'Review the Graphics topic or take a proper quiet break if tired.'},
    {time:'2:40 PM – 3:00 PM',cat:'BREAK',title:'Move to classroom + settle',note:'Prepare for the next lecture.'},
    {time:'3:00 PM – 4:20 PM',cat:'CLASS',title:'CSE443.8 · Computer Graphics & Animation',note:'THU 15:00–16:20 · SEU320'},
    {time:'4:20 PM – 5:10 PM',cat:'BREAK',title:'Travel home',note:'Commute buffer; adjust if your route takes longer or less time.'},
    {time:'5:10 PM – 5:30 PM',cat:'BREAK',title:'Snack + rest',note:'Fruit, yogurt, chola, or a homemade snack.'},
    {time:'5:30 PM – 6:00 PM',cat:'HEALTH',title:'Walk / stretch',note:'Gentle movement after the campus day.'},
    {time:'6:00 PM – 6:45 PM',cat:'BREAK',title:'Dinner',note:'Rice/roti + protein + vegetables.'},
    {time:'6:45 PM – 7:30 PM',cat:'STUDY',title:'Cloud + Graphics class recap',note:'Capture the most important points while they are still fresh.'},
    {time:'7:30 PM – 8:30 PM',cat:'FREE',title:'Entertainment · relax',note:'Protected leisure time.'},
    {time:'8:30 PM – 8:45 PM',cat:'FREE',title:'Personal time / prepare Friday',note:'No need to force another study session.'},
    {time:'8:45 PM – 9:00 PM',cat:'FREE',title:'Quiet reset before bed',note:'Put devices aside and slow down.'},
    {time:'9:00 PM – 9:30 PM',cat:'SLEEP',title:'Wind down · screens away',note:'Get ready for sleep.'},
    {time:'9:30 PM – 6:00 AM',cat:'SLEEP',title:'Sleep · 8.5 hours',note:'Keep sleep consistent.'},
  ]},
  {day:5,name:'Friday',sub:'No scheduled classes · Recovery + FYP + weekly review',tasks:[
    {time:'6:00 AM – 6:15 AM',cat:'MORNING',title:'Wake up · Water · Freshen up',note:'Keep the same wake time to support a steady routine.'},
    {time:'6:15 AM – 6:45 AM',cat:'HEALTH',title:'Walk / outdoor time',note:'Comfortable movement and fresh air.'},
    {time:'6:45 AM – 7:15 AM',cat:'BREAK',title:'Breakfast',note:'Egg/dal/chola + roti/oats/bread + seasonal fruit.'},
    {time:'7:15 AM – 8:45 AM',cat:'STUDY',title:'DevPath Phase 1 · Java weekly practice',note:'Build a small console exercise or revise the week’s Java concepts.'},
    {time:'8:45 AM – 9:00 AM',cat:'BREAK',title:'Study break',note:'Rest your eyes and move around.'},
    {time:'9:00 AM – 10:00 AM',cat:'DSA',title:'DSA weekly practice',note:'Re-solve one earlier problem without looking at the solution.'},
    {time:'10:00 AM – 10:30 AM',cat:'BREAK',title:'Fruit / snack',note:'Have a snack and hydrate.'},
    {time:'10:30 AM – 11:30 AM',cat:'STUDY',title:'CSE460.1 · Final Year Design Project I',note:'Main flexible project block: research, scope, design notes, or documentation.'},
    {time:'11:30 AM – 12:30 PM',cat:'FREE',title:'Personal time / chores',note:'Keep the day balanced.'},
    {time:'12:30 PM – 1:15 PM',cat:'BREAK',title:'Lunch',note:'Rice/roti + dal/fish/egg/chicken + vegetables.'},
    {time:'1:15 PM – 2:15 PM',cat:'FREE',title:'Entertainment / hobby time',note:'Gaming, reading, music, or friends.'},
    {time:'2:15 PM – 3:00 PM',cat:'HEALTH',title:'Outdoor activity / easy walk',note:'Relaxed movement; no strict exercise target.'},
    {time:'3:00 PM – 4:00 PM',cat:'STUDY',title:'University coursework catch-up',note:'Choose the most urgent item from CSE355, CSE441, CSE443, or CSE477.'},
    {time:'4:00 PM – 4:30 PM',cat:'BREAK',title:'Afternoon snack + rest',note:'Fruit, yogurt, chola, or a homemade snack.'},
    {time:'4:30 PM – 5:30 PM',cat:'STUDY',title:'FYP / assignment buffer',note:'Use only for a real pending task; otherwise take the time off.'},
    {time:'5:30 PM – 7:00 PM',cat:'FREE',title:'Protected free time',note:'Social time, hobby, or complete rest.'},
    {time:'7:00 PM – 7:45 PM',cat:'BREAK',title:'Dinner',note:'Balanced dinner with rice/roti, protein, and vegetables.'},
    {time:'7:45 PM – 8:30 PM',cat:'STUDY',title:'Weekly review · DevPath roadmap',note:'Check Phase 1 progress: Java fundamentals and DSA. Pick next week’s topics.'},
    {time:'8:30 PM – 8:45 PM',cat:'FREE',title:'Entertainment / family time',note:'Enjoy the lighter evening.'},
    {time:'8:45 PM – 9:00 PM',cat:'FREE',title:'Quiet reset before bed',note:'Put devices aside and slow down.'},
    {time:'9:00 PM – 9:30 PM',cat:'SLEEP',title:'Wind down · screens away',note:'Prepare for Saturday campus classes.'},
    {time:'9:30 PM – 6:00 AM',cat:'SLEEP',title:'Sleep · 8.5 hours',note:'Protect your sleep window.'},
  ]},
  {day:6,name:'Saturday',sub:'Cloud Computing + Graphics + Graphics Lab',tasks:[
    {time:'6:00 AM – 6:15 AM',cat:'MORNING',title:'Wake up · Water · Freshen up',note:'Prepare for the longer campus day.'},
    {time:'6:15 AM – 6:35 AM',cat:'HEALTH',title:'Gentle mobility',note:'Light stretching or a short walk.'},
    {time:'6:35 AM – 7:05 AM',cat:'BREAK',title:'Breakfast',note:'Egg/dal/chola + roti/bread + fruit or milk/yogurt.'},
    {time:'7:05 AM – 8:00 AM',cat:'STUDY',title:'CSE477 · Cloud Computing pre-read',note:'Review the lecture topic and prepare questions.'},
    {time:'8:00 AM – 8:15 AM',cat:'BREAK',title:'Short break',note:'Rest your eyes.'},
    {time:'8:15 AM – 9:00 AM',cat:'DSA',title:'Light DSA revision',note:'One easy problem or revise a pattern. Keep the day manageable.'},
    {time:'9:00 AM – 9:30 AM',cat:'STUDY',title:'CSE443 / CSE444 · Graphics preparation',note:'Review the lecture or lab instructions.'},
    {time:'9:30 AM – 10:00 AM',cat:'MORNING',title:'Pack bag · Prepare campus snack',note:'Take water and a convenient snack or lunch.'},
    {time:'10:00 AM – 11:15 AM',cat:'BREAK',title:'Travel to campus + arrival buffer',note:'Estimated commute buffer; adjust to your real route.'},
    {time:'11:15 AM – 11:30 AM',cat:'BREAK',title:'Settle in before class',note:'Use the time to get ready, not to cram.'},
    {time:'11:30 AM – 12:50 PM',cat:'CLASS',title:'CSE477.3 · Cloud Computing',note:'SAT 11:30–12:50 · SEU330'},
    {time:'12:50 PM – 2:20 PM',cat:'BREAK',title:'Lunch + rest on campus',note:'Eat a proper lunch and take a break before the next class.'},
    {time:'2:20 PM – 2:50 PM',cat:'STUDY',title:'CSE443 · Quick topic review',note:'Light preparation only; save energy for the afternoon.'},
    {time:'2:50 PM – 3:00 PM',cat:'BREAK',title:'Move to classroom',note:'Get settled for class.'},
    {time:'3:00 PM – 4:20 PM',cat:'CLASS',title:'CSE443.8 · Computer Graphics & Animation',note:'SAT 15:00–16:20 · SEU320'},
    {time:'4:20 PM – 4:30 PM',cat:'BREAK',title:'Between-class transition',note:'Move to the lab and take a moment to reset.'},
    {time:'4:30 PM – 6:30 PM',cat:'CLASS',title:'CSE444.11 · Computer Graphics & Animation Lab',note:'SAT 16:30–18:30 · SEU609'},
    {time:'6:30 PM – 7:20 PM',cat:'BREAK',title:'Travel home + decompress',note:'No extra study task after the long campus block.'},
    {time:'7:20 PM – 8:00 PM',cat:'BREAK',title:'Dinner',note:'Have a proper meal after class. Include protein and vegetables.'},
    {time:'8:00 PM – 8:45 PM',cat:'FREE',title:'Entertainment / complete rest',note:'Protected recovery time.'},
    {time:'8:45 PM – 9:00 PM',cat:'STUDY',title:'Organise class notes',note:'Only sort notes and record pending lab work; do not start a long session.'},
    {time:'9:00 PM – 9:30 PM',cat:'SLEEP',title:'Wind down · screens away',note:'Prepare for Sunday and get ready for sleep.'},
    {time:'9:30 PM – 6:00 AM',cat:'SLEEP',title:'Sleep · 8.5 hours',note:'Keep your sleep window consistent.'},
  ]},
];

// ══════════════════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════════════════
function t2m(t){const m=t.match(/(\d+):(\d+)\s*(AM|PM)/i);if(!m)return 0;let h=+m[1],mn=+m[2],p=m[3].toUpperCase();if(p==='AM'&&h===12)h=0;if(p==='PM'&&h!==12)h+=12;return h*60+mn}
function dur(r){const[a,b]=r.split('–').map(s=>s.trim());let s=t2m(a),e=t2m(b);if(e<=s)e+=1440;return e-s}
function fmt(m){const h=Math.floor(m/60),mn=m%60;return mn?`${h}h ${mn}m`:`${h}h`}
function pad2(n){return String(n).padStart(2,'0')}
function getCSSVar(v){return getComputedStyle(document.documentElement).getPropertyValue(v).trim()}

// ══════════════════════════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════════════════════════
let S={progress:{},notes:{},taskNotes:{},journals:{},moods:{},studyLog:{},deadlines:[],exams:[],wellness:{}};
let AD=new Date().getDay(),AF='all',activeTab='schedule',lightMode=true;
let confettiFired={};

function save(){try{localStorage.setItem('tracker_v7',JSON.stringify(S));localStorage.setItem('tracker_confetti',JSON.stringify(confettiFired))}catch(e){}}
function load(){try{let r=localStorage.getItem('tracker_v7');if(!r){const old=localStorage.getItem('tracker_v6');if(old){const p=JSON.parse(old);S={...S,...p};S.progress={};S.taskNotes={};S.wellness={};r=JSON.stringify(S);localStorage.setItem('tracker_v7',r)}}if(r){const p=JSON.parse(r);S={...S,...p};if(!S.studyLog)S.studyLog={};if(!S.deadlines)S.deadlines=[];if(!S.exams)S.exams=[];if(!S.wellness)S.wellness={}}const c=localStorage.getItem('tracker_confetti');if(c)confettiFired=JSON.parse(c);const th=localStorage.getItem('tracker_theme');lightMode=th?th==='light':true}catch(e){lightMode=true}}

// ══════════════════════════════════════════════════════════════════════════
// STUDY HOURS — daily log, points, streak
// ══════════════════════════════════════════════════════════════════════════
function dateKey(d){d=d||new Date();return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate())}
function last14Keys(){const arr=[];for(let i=13;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);arr.push(dateKey(d))}return arr}
function setStudyHours(h){S.studyLog[dateKey()]=h;save();renderStudyTracker();showToast(h===0?'Marked as not studied':`Logged ${h}h of study ✓`)}

// ══════════════════════════════════════════════════════════════════════════
// WELLNESS — simple meal, hydration, movement and sleep check-ins
// ══════════════════════════════════════════════════════════════════════════
function wellnessToday(){
  if(!S.wellness)S.wellness={};
  const k=dateKey();
  if(!S.wellness[k])S.wellness[k]={water:0,sleep:'',habits:{}};
  if(!S.wellness[k].habits)S.wellness[k].habits={};
  return S.wellness[k];
}
function adjustWater(delta){
  const w=wellnessToday();w.water=Math.max(0,Math.min(30,(+w.water||0)+delta));
  save();renderWellness();
}
function toggleWellnessHabit(key){
  const w=wellnessToday();w.habits[key]=!w.habits[key];save();renderWellness();
}
function saveSleepHours(value){
  const w=wellnessToday();
  const n=value===''?'':Math.max(0,Math.min(16,+value||0));
  w.sleep=n;save();
  const msg=document.getElementById('sleepFeedback');
  if(msg)msg.textContent=n===''?'Add last night’s sleep when convenient':(n>=8&&n<=10?'Within the 8–10 hour sleep range.':'Sleep recorded — try to keep a regular, sufficient sleep window.');
}
function renderWellness(){
  const el=document.getElementById('wellnessPanel');if(!el)return;
  const w=wellnessToday();
  const habits=[
    ['breakfast','Had breakfast'],
    ['lunch','Had lunch'],
    ['dinner','Had dinner'],
    ['produce','Included fruit or vegetables'],
    ['movement','Took a walk / movement break'],
    ['screens','Started a calm screen-free wind-down'],
  ];
  const checked=habits.filter(([k])=>w.habits[k]).length;
  const meal=(time,name,desc)=>`<div class="meal-card"><div class="meal-time">${time}</div><div class="meal-name">${name}</div><div class="meal-desc">${desc}</div></div>`;
  el.innerHTML=`
    <div class="sec-card well-intro">
      <div class="sec-lbl">Food · hydration · recovery</div>
      <h2>A simple routine that supports your study day</h2>
      <p>Eat at regular times, include a mix of carbohydrates, protein, fruit and vegetables, drink water through the day, and take breaks away from the screen. This is a flexible everyday guide, not a strict diet.</p>
    </div>
    <div class="well-grid">
      <div class="sec-card">
        <div class="sec-head"><div class="sec-lbl">Today’s check-ins</div><span class="t-badge cat-health">${checked}/${habits.length} habits</span></div>
        <div class="water-panel">
          <div><div class="meal-time">Water check-ins</div><div class="water-count">${w.water||0} <small style="font-size:.55rem;color:var(--mt)">glasses</small></div></div>
          <div class="well-copy">Log a glass when you drink. Needs vary with heat, activity, and the foods you eat; do not force excessive water.</div>
          <div class="water-controls"><button class="well-btn" onclick="adjustWater(-1)" aria-label="Remove one glass">−</button><button class="well-btn" onclick="adjustWater(1)" aria-label="Add one glass">+ Glass</button></div>
        </div>
        <div class="well-habits">${habits.map(([k,label])=>`<button type="button" class="well-habit ${w.habits[k]?'done':''}" onclick="toggleWellnessHabit('${k}')" aria-pressed="${!!w.habits[k]}"><span class="wh-check">✓</span><span>${label}</span></button>`).join('')}</div>
        <div class="sleep-entry"><label for="sleepHours">Last night’s sleep</label><input id="sleepHours" type="number" min="0" max="16" step="0.5" value="${w.sleep??''}" placeholder="e.g. 8" onchange="saveSleepHours(this.value)"><span class="well-copy">hours · Aim for 8–10 hours if you are a teenager.</span></div>
        <div class="well-note" id="sleepFeedback">${w.sleep===''?'Record your sleep when convenient.':'Sleep recorded: '+w.sleep+' hours.'}</div>
      </div>
      <div class="sec-card">
        <div class="sec-head"><div class="sec-lbl">Easy meal rhythm</div><span class="t-badge cat-break">Flexible ideas</span></div>
        <div class="meal-grid">
          ${meal('6:35–7:05 AM','Breakfast','Egg, dal or chola with roti, oats or bread, plus banana or another seasonal fruit. Add milk or yogurt if you like.')}
          ${meal('9:50–10:20 AM','Study snack','Seasonal fruit, yogurt, roasted chola, or a small handful of nuts if suitable. Keep it light if you are not hungry.')}
          ${meal('12:00–1:00 PM','Lunch','Rice or roti with fish, egg, chicken or dal, plus vegetables or salad. On campus, choose the closest balanced option available.')}
          ${meal('3:30–5:30 PM','Afternoon snack','Fruit, yogurt, chola, milk, or a homemade sandwich. Useful between classes and study blocks.')}
          ${meal('6:15–8:00 PM','Dinner','A normal balanced meal: rice/roti, a protein source such as fish/egg/dal/chicken, and vegetables.')}
          ${meal('When needed','Optional evening snack','Only if hungry: milk, yogurt, fruit, or a small homemade snack. Avoid relying on energy drinks or lots of late caffeine.')}
        </div>
      </div>
    </div>
    <div class="sec-card">
      <div class="sec-head"><div class="sec-lbl">Small rules that make the plan sustainable</div></div>
      <div class="well-grid">
        <div class="well-copy"><b>During study:</b> stand up between sessions, rest your eyes, keep water nearby, and do not skip meals to finish a task.</div>
        <div class="well-copy"><b>Campus days:</b> pack a water bottle and an easy snack such as a banana, guava, chola, or sandwich. Keep a proper lunch break.</div>
        <div class="well-copy"><b>Food variety:</b> rotate eggs, fish, chicken, dal, beans, milk/yogurt, rice, roti, oats, and seasonal produce according to availability and preference.</div>
        <div class="well-copy"><b>Recovery:</b> protect the 9:30 PM–6:00 AM sleep block in the routine. If you feel unwell or have specific dietary needs, follow advice from a qualified health professional.</div>
      </div>
      <div class="well-note">No calorie counting or restrictive rules are needed here. Eat enough, keep meals regular, and adapt the options to your family meals, budget, appetite, allergies, and any medical advice.</div>
    </div>`;
}

function studyStreak(){
  let streak=0,d=new Date();
  while(true){
    const v=S.studyLog[dateKey(d)];
    if(v===undefined||v===0)break;
    streak++;d.setDate(d.getDate()-1);
  }
  return streak;
}
function studyPoints(){
  const days=Object.values(S.studyLog).filter(v=>v>=1).length;
  const streak=studyStreak();
  const bonus=Math.floor(streak/7)*5;
  return{days,streak,bonus,total:days+bonus};
}

// ══════════════════════════════════════════════════════════════════════════
// DEADLINES — assignments + lab reports
// ══════════════════════════════════════════════════════════════════════════
function addDeadline(){
  const t=document.getElementById('dlTitle'),c=document.getElementById('dlCourse'),ty=document.getElementById('dlType'),dt=document.getElementById('dlDate');
  if(!t.value.trim()||!dt.value){showToast('Add a title and due date');return}
  S.deadlines.push({id:Date.now(),title:t.value.trim(),course:c.value,type:ty.value,due:dt.value,done:false});
  save();t.value='';dt.value='';renderDeadlines();renderTodayIntegration();showToast('Deadline added ✓');
}
function toggleDeadline(id){const d=S.deadlines.find(x=>x.id===id);if(d){d.done=!d.done;save();renderDeadlines();renderTodayIntegration()}}
function removeDeadline(id){S.deadlines=S.deadlines.filter(x=>x.id!==id);save();renderDeadlines();renderTodayIntegration()}

// ══════════════════════════════════════════════════════════════════════════
// EXAMS
// ══════════════════════════════════════════════════════════════════════════
function addExam(){
  const t=document.getElementById('exTitle'),c=document.getElementById('exCourse'),dt=document.getElementById('exDate'),tm=document.getElementById('exTime'),rm=document.getElementById('exRoom');
  if(!t.value.trim()||!dt.value){showToast('Add a title and exam date');return}
  S.exams.push({id:Date.now(),title:t.value.trim(),course:c.value,date:dt.value,time:tm.value,room:rm.value,done:false});
  save();t.value='';dt.value='';tm.value='';rm.value='';renderExams();renderTodayIntegration();showToast('Exam added ✓');
}
function toggleExam(id){const e=S.exams.find(x=>x.id===id);if(e){e.done=!e.done;save();renderExams();renderTodayIntegration()}}
function removeExam(id){S.exams=S.exams.filter(x=>x.id!==id);save();renderExams();renderTodayIntegration()}

function daysUntil(dateStr){
  const now=new Date();now.setHours(0,0,0,0);
  const target=new Date(dateStr+'T00:00:00');
  return Math.round((target-now)/86400000);
}
function dueBadge(n){
  if(n<0)return{txt:'Overdue',col:'#ff4d6d'};
  if(n===0)return{txt:'Due today',col:'#ff4d6d'};
  if(n===1)return{txt:'Tomorrow',col:'#fb923c'};
  if(n<=5)return{txt:`${n} days left`,col:'#fbbf24'};
  return{txt:`${n} days left`,col:'#4ade80'};
}
function done(d,t){return!!(S.progress[d]&&S.progress[d][t])}
function getTNote(d,t){return(S.taskNotes[d]&&S.taskNotes[d][t])||''}
function setTNote(d,t,v){if(!S.taskNotes[d])S.taskNotes[d]={};S.taskNotes[d][t]=v;save()}
function pct(idx){const d=SCH[idx];if(!d)return 0;return Math.round(d.tasks.filter((_,i)=>done(idx,i)).length/d.tasks.length*100)}

function toggle(di,ti){
  if(!S.progress[di])S.progress[di]={};
  const wasCompleted=!S.progress[di][ti];
  S.progress[di][ti]=wasCompleted;
  save();
  if(wasCompleted){playClick();showToast('✓ Task completed!');spawnParticles(di,ti)}
  else{showToast('Task unmarked')}
  const p=pct(di);
  if(p===100&&wasCompleted&&!confettiFired[di]){confettiFired[di]=true;save();setTimeout(()=>launchConfetti(),200);playSuccess();showToast('🎉 Day Complete!')}
  render();
}

// ══════════════════════════════════════════════════════════════════════════
// AUDIO
// ══════════════════════════════════════════════════════════════════════════
let ax;
function ac(){if(!ax)ax=new(window.AudioContext||window.webkitAudioContext)();return ax}
function playClick(){try{const c=ac(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=880;g.gain.setValueAtTime(.03,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.07);o.start();o.stop(c.currentTime+.07)}catch(e){}}
function playSuccess(){try{const c=ac();[523,659,784,1047].forEach((f,i)=>{const o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.type='sine';o.frequency.value=f;const t=c.currentTime+i*.1;g.gain.setValueAtTime(.038,t);g.gain.exponentialRampToValueAtTime(.001,t+.22);o.start(t);o.stop(t+.22)})}catch(e){}}
function playPomoEnd(){try{const c=ac();[440,550,660].forEach((f,i)=>{const o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.type='sine';o.frequency.value=f;const t=c.currentTime+i*.15;g.gain.setValueAtTime(.05,t);g.gain.exponentialRampToValueAtTime(.001,t+.3);o.start(t);o.stop(t+.3)})}catch(e){}}

// ══════════════════════════════════════════════════════════════════════════
// PARTICLE BURST ON COMPLETE
// ══════════════════════════════════════════════════════════════════════════
function spawnParticles(dayIdx,taskIdx){
  const list=document.getElementById('taskList');if(!list)return;
  const items=list.querySelectorAll('.task-item');
  const item=items[taskIdx];if(!item)return;
  const rect=item.getBoundingClientRect();
  const colors=['#4ade80','#22d3ee','#845ef7','#fbbf24'];
  for(let i=0;i<12;i++){
    const p=document.createElement('div');
    p.className='burst-particle';
    p.style.left=(rect.left+rect.width/2)+'px';
    p.style.top=(rect.top+rect.height/2)+'px';
    p.style.background=colors[Math.floor(Math.random()*colors.length)];
    const angle=(Math.PI*2*i)/12;
    const dist=30+Math.random()*40;
    p.style.setProperty('--tx',Math.cos(angle)*dist+'px');
    p.style.setProperty('--ty',Math.sin(angle)*dist+'px');
    p.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${Math.cos(angle)*dist}px,${Math.sin(angle)*dist}px) scale(0)`,opacity:0}],{duration:600,easing:'cubic-bezier(.4,0,.2,1)'});
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),600);
  }
}

// ══════════════════════════════════════════════════════════════════════════
// PARTICLE BACKGROUND
// ══════════════════════════════════════════════════════════════════════════
(function initParticles(){
  const cv=document.getElementById('particleCanvas');
  if(!cv)return;
  const ctx=cv.getContext('2d');
  let W,H,particles=[];
  function resize(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight}
  resize();window.addEventListener('resize',resize);
  for(let i=0;i<55;i++)particles.push({x:Math.random()*1920,y:Math.random()*1080,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:Math.random()*1.5+.5});
  const colors=['#845ef7','#22d3ee','#ff4d6d'];
  function draw(){
    ctx.clearRect(0,0,W,H);
    particles.forEach((p,i)=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=colors[i%3];ctx.globalAlpha=.55;ctx.fill();
      for(let j=i+1;j<particles.length;j++){
        const dx=p.x-particles[j].x,dy=p.y-particles[j].y,dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<110){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle=colors[i%3];ctx.globalAlpha=(1-dist/110)*.12;ctx.lineWidth=.6;ctx.stroke()}
      }ctx.globalAlpha=1;
    });requestAnimationFrame(draw);
  }draw();
})();

// ══════════════════════════════════════════════════════════════════════════
// CONFETTI
// ══════════════════════════════════════════════════════════════════════════
function launchConfetti(){
  const cv=document.getElementById('confettiCanvas');if(!cv)return;
  cv.style.display='block';
  cv.width=window.innerWidth;cv.height=window.innerHeight;
  const ctx=cv.getContext('2d');
  const cols=['#ff4d6d','#845ef7','#22d3ee','#fbbf24','#4ade80','#fb923c'];
  const pieces=Array.from({length:120},()=>({
    x:Math.random()*cv.width,y:-10,w:Math.random()*8+4,h:Math.random()*14+6,
    color:cols[Math.floor(Math.random()*cols.length)],
    vx:(Math.random()-.5)*4,vy:Math.random()*4+2,
    rot:Math.random()*360,vr:(Math.random()-.5)*8,alpha:1
  }));
  let frame=0;
  function draw(){
    ctx.clearRect(0,0,cv.width,cv.height);
    pieces.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr;p.alpha=Math.max(0,1-frame/90);
      ctx.save();ctx.globalAlpha=p.alpha;ctx.translate(p.x,p.y);
      ctx.rotate(p.rot*Math.PI/180);ctx.fillStyle=p.color;
      ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();
    });
    frame++;if(frame<100)requestAnimationFrame(draw);
    else{cv.style.display='none';ctx.clearRect(0,0,cv.width,cv.height)}
  }draw();
}

// ══════════════════════════════════════════════════════════════════════════
// CLOCK — digital + analog
// ══════════════════════════════════════════════════════════════════════════
function tickClock(){
  const n=new Date();
  const dc=document.getElementById('digClock'),ld=document.getElementById('liveDate');
  if(dc)dc.textContent=`${pad2(n.getHours())}:${pad2(n.getMinutes())}:${pad2(n.getSeconds())}`;
  if(ld)ld.textContent=n.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'}).toUpperCase();
  drawAnalogClock(n);
}

function drawAnalogClock(now){
  const cv=document.getElementById('analogClock');if(!cv)return;
  const ctx=cv.getContext('2d'),sz=cv.width,cx=sz/2,cy=sz/2,r=sz/2-3;
  ctx.clearRect(0,0,sz,sz);
  const isDark=!lightMode;
  ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);
  ctx.strokeStyle=isDark?'rgba(255,255,255,.12)':'rgba(0,0,0,.1)';ctx.lineWidth=1.5;ctx.stroke();
  for(let i=0;i<12;i++){
    const a=i*Math.PI/6,x1=cx+Math.cos(a)*(r-5),y1=cy+Math.sin(a)*(r-5),x2=cx+Math.cos(a)*(r-2),y2=cy+Math.sin(a)*(r-2);
    ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.strokeStyle=isDark?'rgba(255,255,255,.3)':'rgba(0,0,0,.25)';ctx.lineWidth=1;ctx.stroke();
  }
  const h=now.getHours()%12,m=now.getMinutes(),s=now.getSeconds();
  const hand=(angle,len,w,col)=>{ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(angle-Math.PI/2)*len,cy+Math.sin(angle-Math.PI/2)*len);ctx.strokeStyle=col;ctx.lineWidth=w;ctx.lineCap='round';ctx.stroke()};
  hand((h+m/60)*Math.PI/6,r*.52,2,isDark?'#fff':'#333');
  hand((m+s/60)*Math.PI/30,r*.7,1.5,isDark?'rgba(255,255,255,.8)':'rgba(0,0,0,.6)');
  hand(s*Math.PI/30,r*.78,1,'#ff4d6d');
  ctx.beginPath();ctx.arc(cx,cy,2.5,0,Math.PI*2);ctx.fillStyle='#ff4d6d';ctx.fill();
}

setInterval(tickClock,1000);tickClock();

// ══════════════════════════════════════════════════════════════════════════
// GREETING
// ══════════════════════════════════════════════════════════════════════════
function renderGreeting(){
  const h=new Date().getHours(),el=document.getElementById('greeting');if(!el)return;
  el.textContent=`${h<12?'Good morning':h<17?'Good afternoon':'Good evening'}, Pranto 👋`;
}

// ══════════════════════════════════════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════════════════════════════════════
let tt;
function showToast(msg){const el=document.getElementById('toast');if(!el)return;el.textContent=msg;el.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>el.classList.remove('show'),2200)}

// ══════════════════════════════════════════════════════════════════════════
// THEME
// ══════════════════════════════════════════════════════════════════════════
function toggleTheme(){lightMode=!lightMode;document.body.classList.toggle('light',lightMode);try{localStorage.setItem('tracker_theme',lightMode?'light':'dark')}catch(e){}const btn=document.getElementById('themeBtn');if(btn)btn.textContent=lightMode?'☀️':'🌙';showToast(lightMode?'Light mode on':'Dark mode on');drawAnalogClock(new Date());drawHeroRing(pct(AD));drawDonut();drawTrend();drawSparkline();drawPomoRing()}
document.getElementById('themeBtn').addEventListener('click',toggleTheme);

// ══════════════════════════════════════════════════════════════════════════
// CATEGORY COLOR THEME
// ══════════════════════════════════════════════════════════════════════════
function updateAccentFromCurrentTask(){
  const todayIdx=new Date().getDay();
  const d=SCH[todayIdx];if(!d)return;
  const now=new Date(),nm=now.getHours()*60+now.getMinutes();
  let curCat=null;
  d.tasks.forEach(t=>{
    const[a,b]=t.time.split('–').map(s=>s.trim());
    let st=t2m(a),en=t2m(b);if(en<=st)en+=1440;
    if((nm>=st&&nm<en)||(en>1440&&nm<en-1440))curCat=t.cat;
  });
  if(!curCat)return;
  const root=document.documentElement;
  const map={DSA:['#ff4d6d','#ff6b8a'],STUDY:['#22d3ee','#67e8f9'],CLASS:['#845ef7','#a78bfa'],FREE:['#fbbf24','#fcd34d'],BREAK:['#34d399','#6ee7b7'],HEALTH:['#10b981','#6ee7b7'],SLEEP:['#6b7280','#9ca3af'],MORNING:['#fb923c','#fdba74']};
  const [a1,a2]=map[curCat]||['#845ef7','#22d3ee'];
  root.style.setProperty('--accent',a1);
  root.style.setProperty('--accent2',a2);
}

// ══════════════════════════════════════════════════════════════════════════
// POMODORO
// ══════════════════════════════════════════════════════════════════════════
const POMO_WORK=25*60,POMO_BREAK=5*60;
let pomoState={running:false,mode:'work',remaining:POMO_WORK,session:1,interval:null};

function pomodoroTick(){
  pomoState.remaining--;
  if(pomoState.remaining<=0){
    playPomoEnd();
    if(pomoState.mode==='work'){pomoState.mode='break';pomoState.remaining=POMO_BREAK;showToast('🍵 Break time! 5 minutes.')}
    else{pomoState.mode='work';pomoState.session++;pomoState.remaining=POMO_WORK;showToast('💪 Back to work! Session '+pomoState.session)}
  }
  drawPomoRing();
  const m=Math.floor(pomoState.remaining/60),s=pomoState.remaining%60;
  const ts=`${pad2(m)}:${pad2(s)}`;
  const pt=document.getElementById('pomoTime'),pi=document.getElementById('pomoInner'),pm=document.getElementById('pomoMode'),ps=document.getElementById('pomoSub');
  if(pt)pt.textContent=ts;if(pi)pi.textContent=ts;
  if(pm)pm.textContent=pomoState.mode==='work'?'WORK':'BREAK';
  if(ps)ps.textContent=`Session ${pomoState.session}`;
}

function drawPomoRing(){
  const cv=document.getElementById('pomoCanvas');if(!cv)return;
  const ctx=cv.getContext('2d'),sz=cv.width,cx=sz/2,cy=sz/2,r=sz/2-5;
  ctx.clearRect(0,0,sz,sz);
  const total=pomoState.mode==='work'?POMO_WORK:POMO_BREAK;
  const prog=1-(pomoState.remaining/total);
  ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(255,255,255,.07)';ctx.lineWidth=4;ctx.stroke();
  ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+prog*Math.PI*2);
  ctx.strokeStyle=pomoState.mode==='work'?'#ff4d6d':'#34d399';ctx.lineWidth=4;ctx.lineCap='round';ctx.stroke();
}

function pomodoroToggle(){
  pomoState.running=!pomoState.running;
  const btn=document.getElementById('pomoStartBtn');
  if(pomoState.running){pomoState.interval=setInterval(pomodoroTick,1000);if(btn){btn.textContent='⏸ Pause';btn.className='pbtn start'}}
  else{clearInterval(pomoState.interval);if(btn){btn.textContent='▶ Resume';btn.className='pbtn start'}}
}

function pomodoroReset(){
  clearInterval(pomoState.interval);pomoState={running:false,mode:'work',remaining:POMO_WORK,session:1,interval:null};
  const pt=document.getElementById('pomoTime'),pi=document.getElementById('pomoInner'),pm=document.getElementById('pomoMode'),ps=document.getElementById('pomoSub'),btn=document.getElementById('pomoStartBtn');
  if(pt)pt.textContent='25:00';if(pi)pi.textContent='25:00';if(pm)pm.textContent='WORK';if(ps)ps.textContent='Session 1';if(btn){btn.textContent='▶ Start';btn.className='pbtn start'}
  drawPomoRing();
}

function pomodoroSkip(){pomodoroReset();if(pomoState.mode==='work'){pomoState.mode='break';pomoState.remaining=POMO_BREAK}else{pomoState.mode='work';pomoState.remaining=POMO_WORK;pomoState.session++}drawPomoRing()}

// ══════════════════════════════════════════════════════════════════════════
// MOOD
// ══════════════════════════════════════════════════════════════════════════
const MOOD_NOTES={1:'Low energy — go easy',2:'Okay — steady pace',3:'Good — solid work',4:'Charged — push hard',5:'On fire — max effort!'};
function setMood(m){S.moods[AD]=m;save();renderMood();renderHeatmap();showToast('Energy logged ✓')}
function renderMood(){
  const btns=document.querySelectorAll('.mood-btn'),note=document.getElementById('moodNote');
  const cur=S.moods[AD]||0;
  btns.forEach(b=>{b.classList.toggle('sel',+b.dataset.mood===cur)});
  if(note)note.textContent=cur?MOOD_NOTES[cur]:"How's your energy today?";
}

// ══════════════════════════════════════════════════════════════════════════
// SVG RING (for day buttons)
// ══════════════════════════════════════════════════════════════════════════
function ringHTML(p,sz,col){
  const r=sz/2-3,c=2*Math.PI*r,dash=c*(p/100),gap=c-dash;
  return`<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" style="transform:rotate(-90deg)">
    <circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="2.5"/>
    <circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${col}" stroke-width="2.5"
      stroke-dasharray="${dash} ${gap}" stroke-linecap="round"
      style="transition:stroke-dasharray .5s cubic-bezier(.4,0,.2,1)"/>
  </svg>`;
}

// ══════════════════════════════════════════════════════════════════════════
// HERO RING (canvas)
// ══════════════════════════════════════════════════════════════════════════
function drawHeroRing(p){
  const cv=document.getElementById('heroRingCanvas');if(!cv)return;
  const ctx=cv.getContext('2d'),sz=cv.width,cx=sz/2,cy=sz/2,r=sz/2-6;
  ctx.clearRect(0,0,sz,sz);
  ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=5;ctx.stroke();
  if(p>0){
    const grad=ctx.createLinearGradient(0,0,sz,sz);grad.addColorStop(0,getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()||'#845ef7');grad.addColorStop(1,getComputedStyle(document.documentElement).getPropertyValue('--accent2').trim()||'#22d3ee');
    ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+(p/100)*Math.PI*2);
    ctx.strokeStyle=grad;ctx.lineWidth=5;ctx.lineCap='round';ctx.stroke();
  }
  if(p===100){ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='#4ade80';ctx.lineWidth=5;ctx.stroke()}
}

// ══════════════════════════════════════════════════════════════════════════
// DONUT CHART (right panel)
// ══════════════════════════════════════════════════════════════════════════
function drawDonut(){
  const cv=document.getElementById('donutCanvas');if(!cv)return;
  const ctx=cv.getContext('2d'),sz=cv.width,cx=sz/2,cy=sz/2,r=sz/2-4,ir=r-11;
  ctx.clearRect(0,0,sz,sz);
  const d=SCH[AD];if(!d)return;
  const tots={DSA:0,STUDY:0,CLASS:0,FREE:0};
  d.tasks.forEach(t=>{if(tots[t.cat]!==undefined)tots[t.cat]+=dur(t.time)});
  const items=[{k:'DSA',c:'#ff4d6d'},{k:'STUDY',c:'#22d3ee'},{k:'CLASS',c:'#845ef7'},{k:'FREE',c:'#fbbf24'}];
  const total=items.reduce((s,it)=>s+tots[it.k],0);
  let startAngle=-Math.PI/2;
  items.forEach(it=>{
    if(tots[it.k]===0)return;
    const slice=(tots[it.k]/total)*Math.PI*2;
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r,startAngle,startAngle+slice);ctx.closePath();
    ctx.fillStyle=it.c;ctx.globalAlpha=.85;ctx.fill();ctx.globalAlpha=1;
    startAngle+=slice;
  });
  ctx.beginPath();ctx.arc(cx,cy,ir,0,Math.PI*2);ctx.fillStyle=lightMode?'#fff':'#0d1120';ctx.fill();
  const leg=document.getElementById('donutLegend');if(!leg)return;
  leg.innerHTML=items.map(it=>`
    <div class="dl-item">
      <div class="dl-dot" style="background:${it.c}"></div>
      <span>${it.k}</span>
      <span class="dl-val">${fmt(tots[it.k])}</span>
    </div>`).join('');
}

// ══════════════════════════════════════════════════════════════════════════
// SPARKLINE (streak)
// ══════════════════════════════════════════════════════════════════════════
function drawSparkline(){
  const cv=document.getElementById('sparkCanvas');if(!cv)return;
  const ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);
  const vals=DAYS.map((_,i)=>pct(i));
  const max=Math.max(...vals,1);
  const pts=vals.map((v,i)=>({x:(i/(vals.length-1))*(W-4)+2,y:H-4-(v/max)*(H-8)}));
  const grad=ctx.createLinearGradient(0,0,W,0);grad.addColorStop(0,'#845ef7');grad.addColorStop(1,'#22d3ee');
  ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);
  pts.slice(1).forEach(p=>ctx.lineTo(p.x,p.y));
  ctx.strokeStyle=grad;ctx.lineWidth=1.5;ctx.lineJoin='round';ctx.stroke();
  pts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,2,0,Math.PI*2);ctx.fillStyle=grad;ctx.fill()});
}

// ══════════════════════════════════════════════════════════════════════════
// TREND LINE (right panel)
// ══════════════════════════════════════════════════════════════════════════
function drawTrend(){
  const cv=document.getElementById('trendCanvas');if(!cv)return;
  const ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);
  const vals=DAYS.map((_,i)=>pct(i));
  const max=Math.max(...vals,1);
  const pts=vals.map((v,i)=>({x:(i/(vals.length-1))*(W-8)+4,y:H-6-(v/max)*(H-12)}));
  ctx.beginPath();ctx.moveTo(pts[0].x,H);pts.forEach(p=>ctx.lineTo(p.x,p.y));ctx.lineTo(pts[pts.length-1].x,H);ctx.closePath();
  const fill=ctx.createLinearGradient(0,0,0,H);fill.addColorStop(0,'rgba(132,94,247,.18)');fill.addColorStop(1,'rgba(132,94,247,0)');
  ctx.fillStyle=fill;ctx.fill();
  ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);pts.slice(1).forEach(p=>ctx.lineTo(p.x,p.y));
  ctx.strokeStyle='#845ef7';ctx.lineWidth=1.8;ctx.lineJoin='round';ctx.stroke();
  pts.forEach((p,i)=>{
    ctx.beginPath();ctx.arc(p.x,p.y,2.5,0,Math.PI*2);
    ctx.fillStyle=i===AD?'#22d3ee':'#845ef7';ctx.fill();
  });
  ctx.font='500 9px Space Mono,monospace';ctx.textAlign='center';
  DAYS.forEach((d,i)=>{ctx.fillStyle=i===AD?'#22d3ee':'rgba(90,100,128,.7)';ctx.fillText(d,pts[i].x,H)});
}

// ══════════════════════════════════════════════════════════════════════════
// BEST HOUR INSIGHT
// ══════════════════════════════════════════════════════════════════════════
function computeBestHour(){
  const blockStats={};
  SCH.forEach(d=>{
    d.tasks.forEach((t,i)=>{
      if(!['DSA','STUDY','CLASS'].includes(t.cat))return;
      const key=t.time;
      if(!blockStats[key])blockStats[key]={done:0,total:0,cat:t.cat};
      blockStats[key].total++;
      if(done(d.day,i))blockStats[key].done++;
    });
  });
  let best=null,bestRate=-1;
  Object.entries(blockStats).forEach(([key,stat])=>{
    const rate=stat.done/stat.total;
    if(rate>bestRate&&stat.total>=2){bestRate=rate;best={key,...stat}};
  });
  const card=document.getElementById('bestHourCard');
  const txt=document.getElementById('bestHourText');
  const sub=document.getElementById('bestHourSub');
  if(best&&bestRate>0){
    if(card)card.style.display='block';
    if(txt)txt.textContent=`Your strongest block: ${best.key} (${best.cat})`;
    if(sub)sub.textContent=`${Math.round(bestRate*100)}% completion rate across ${best.total} sessions`;
  }else if(card){card.style.display='none'}
}

// ══════════════════════════════════════════════════════════════════════════
// RENDER FUNCTIONS
// ══════════════════════════════════════════════════════════════════════════
function renderDayGrid(){
  const g=document.getElementById('dayGrid');if(!g)return;g.innerHTML='';
  SCH.forEach(d=>{
    const p=pct(d.day),col=p===100?'#4ade80':p>0?'#845ef7':'rgba(255,255,255,.1)';
    const btn=document.createElement('div');
    btn.className='day-btn'+(d.day===AD?' active':'')+(p===100?' day-ok':'');
    btn.innerHTML=`<div class="ring-wrap">${ringHTML(p,40,col)}<div class="ring-lbl">${DAYS[d.day]}</div></div>
      <div><div class="dbi-name">${d.name.slice(0,3)}</div><div class="dbi-sub">${p}%</div></div>`;
    btn.addEventListener('click',()=>switchDay(d.day));
    g.appendChild(btn);
  });
}

function renderUpcoming(){
  const el=document.getElementById('upcomingList');if(!el)return;
  const d=SCH[new Date().getDay()];if(!d){el.innerHTML='<div style="font-size:.7rem;color:var(--dm)">No tasks</div>';return}
  const now=new Date(),nm=now.getHours()*60+now.getMinutes();
  const upcoming=d.tasks.filter((t,i)=>{
    const s=t2m(t.time.split('–')[0].trim());
    return s>nm&&!done(d.day,i);
  }).slice(0,3);
  if(!upcoming.length){el.innerHTML='<div style="font-size:.7rem;color:var(--dm);padding:4px 2px">All clear for now!</div>';return}
  el.innerHTML=upcoming.map(t=>`
    <div class="up-item">
      <div class="up-dot" style="background:${CC[t.cat]||'#888'}"></div>
      <div class="up-title">${t.title}</div>
      <div class="up-time">${t.time.split('–')[0].trim()}</div>
    </div>`).join('');
}

function renderQuote(){
  const doy=Math.floor((new Date()-new Date(new Date().getFullYear(),0,0))/86400000);
  const q=QUOTES[doy%QUOTES.length];
  const t=document.getElementById('qtext'),a=document.getElementById('qauthor');
  if(t)t.textContent=q.t;if(a)a.textContent=q.a;
}

function renderStreak(){
  let s=0;const td=new Date().getDay();
  for(let i=1;i<=7;i++){const idx=(td-i+7)%7;if(pct(idx)===100)s++;else break}
  const el=document.getElementById('streakNum');if(el)el.textContent=s;
  drawSparkline();
}

function renderSpotlight(){
  const el=document.getElementById('spotlightWrap');if(!el)return;
  const d=SCH[new Date().getDay()];
  if(!d||AD!==new Date().getDay()){el.innerHTML='';return}
  const now=new Date(),nm=now.getHours()*60+now.getMinutes();
  const curIdx=getCurTaskIdx(d.tasks);
  if(curIdx===-1){el.innerHTML='';return}
  const task=d.tasks[curIdx];
  const[a,b]=task.time.split('–').map(s=>s.trim());
  let st=t2m(a),en=t2m(b);if(en<=st)en+=1440;
  const nowM=(en>1440&&nm<st)?nm+1440:nm;
  const elapsed=nowM-st,total=en-st,remain=en-nowM;
  const pctDone=Math.round(elapsed/total*100);
  const catIcons={DSA:'⚡',STUDY:'📘',CLASS:'🏛',BREAK:'☕',FREE:'🌿',HEALTH:'🌱',SLEEP:'🌙',MORNING:'🌅'};
  el.innerHTML=`
    <div class="spotlight">
      <div class="spot-icon">${catIcons[task.cat]||'📍'}</div>
      <div class="spot-body">
        <div class="spot-label">Right now · ${task.cat}</div>
        <div class="spot-title">${task.title}</div>
        <div class="spot-bar-wrap"><div class="spot-bar-fill" style="width:${pctDone}%"></div></div>
      </div>
      <div class="spot-right">
        <div class="spot-elapsed">${elapsed}m in</div>
        <div class="spot-remain">${remain}m left</div>
      </div>
    </div>`;
}

function renderHero(){
  const d=SCH[AD];if(!d)return;
  const p=pct(AD),dn=d.tasks.filter((_,i)=>done(AD,i)).length;
  const n=document.getElementById('heroName'),s=document.getElementById('heroSub');
  const bp=document.getElementById('bigPct'),tc=document.getElementById('taskCtr');
  if(n)n.textContent=d.name;if(s)s.textContent=d.sub;
  if(bp)bp.textContent=p+'%';if(tc)tc.textContent=`${dn}/${d.tasks.length}`;
  drawHeroRing(p);
}

function renderStatRow(){
  const d=SCH[AD];if(!d)return;
  const c=document.getElementById('statRow');if(!c)return;
  const tot={DSA:0,STUDY:0,CLASS:0,FREE:0};
  const dayTot=d.tasks.reduce((s,t)=>s+dur(t.time),0);
  d.tasks.forEach(t=>{if(tot[t.cat]!==undefined)tot[t.cat]+=dur(t.time)});
  const items=[
    {icon:'⚡',lbl:'DSA',val:fmt(tot.DSA),color:'var(--dsa)',glow:'rgba(255,77,109,.14)',pct:tot.DSA/dayTot*100},
    {icon:'📘',lbl:'Study',val:fmt(tot.STUDY),color:'var(--std)',glow:'rgba(34,211,238,.1)',pct:tot.STUDY/dayTot*100},
    {icon:'🏛',lbl:'Class',val:fmt(tot.CLASS),color:'var(--cls)',glow:'rgba(132,94,247,.13)',pct:tot.CLASS/dayTot*100},
    {icon:'☀',lbl:'Free',val:fmt(tot.FREE),color:'var(--fre)',glow:'rgba(251,191,36,.1)',pct:tot.FREE/dayTot*100},
  ];
  c.innerHTML=items.map(it=>`
    <div class="stat-tile" style="--glow:${it.glow}">
      <span class="st-icon">${it.icon}</span>
      <div class="st-val" style="color:${it.color}">${it.val}</div>
      <div class="st-lbl">${it.lbl}</div>
      <div class="st-bar"><div class="st-fill" style="width:${it.pct.toFixed(1)}%;background:${it.color}"></div></div>
    </div>`).join('');
}

function renderTimeline(){
  const d=SCH[AD];if(!d)return;
  const bar=document.getElementById('tlBar'),leg=document.getElementById('tlLeg');if(!bar||!leg)return;
  const total=d.tasks.reduce((s,t)=>s+dur(t.time),0);
  bar.innerHTML=d.tasks.map((t,i)=>{
    const p=(dur(t.time)/total*100).toFixed(2),col=CC[t.cat]||'#444';
    return`<div class="tl-seg" style="width:${p}%;background:${col};opacity:${done(AD,i)?.4:1}" title="${t.time}: ${t.title}"></div>`;
  }).join('');
  const cats=[...new Set(d.tasks.map(t=>t.cat))];
  leg.innerHTML=cats.map(c=>`<div class="leg-item"><div class="leg-dot" style="background:${CC[c]}"></div>${c}</div>`).join('');
}

function renderWeekChart(){
  const c=document.getElementById('wchartBars');if(!c)return;
  const maxP=Math.max(...SCH.map(d=>pct(d.day)),1);
  c.innerHTML=SCH.map(d=>{
    const p=pct(d.day),h=Math.max((p/maxP)*100,3);
    const col=p===100?'#4ade80':p>60?'#845ef7':p>30?'#22d3ee':'rgba(255,255,255,.12)';
    const isAD=d.day===AD;
    return`<div class="wbar-col" onclick="switchDay(${d.day})" style="cursor:pointer">
      <div class="wbar-pct" style="color:${isAD?'#22d3ee':'var(--dm)'}">${p>0?p+'%':''}</div>
      <div style="flex:1;display:flex;align-items:flex-end;width:100%">
        <div class="wbar" style="height:${h}%;background:${col};${isAD?'box-shadow:0 0 12px rgba(34,211,238,.3)':''}"></div>
      </div>
      <div class="wbar-lbl" style="color:${isAD?'#22d3ee':'var(--dm)'}">${DAYS[d.day]}</div>
    </div>`;
  }).join('');
}

function renderPills(){
  const c=document.getElementById('pills');if(!c)return;
  const d=SCH[AD];if(!d)return;
  const cats=['all',...new Set(d.tasks.map(t=>t.cat))];
  c.innerHTML=cats.map(cat=>`
    <div class="pill${AF===cat?' on':''}" data-c="${cat}"
      onclick="AF='${cat}';renderPills();renderTasks()">
      ${cat==='all'?'All':cat}
    </div>`).join('');
}

function getCurTaskIdx(tasks){
  const nm=new Date().getHours()*60+new Date().getMinutes();
  for(let i=0;i<tasks.length;i++){
    const[a,b]=tasks[i].time.split('–').map(s=>s.trim());
    let st=t2m(a),en=t2m(b);if(en<=st)en+=1440;
    if((nm>=st&&nm<en)||(en>1440&&nm<en-1440))return i;
  }return -1;
}

function renderTasks(){
  const d=SCH[AD];if(!d)return;
  const c=document.getElementById('taskList');if(!c)return;c.innerHTML='';
  const todayIdx=new Date().getDay(),ct=AD===todayIdx?getCurTaskIdx(d.tasks):-1;
  const nm=new Date().getHours()*60+new Date().getMinutes();

  d.tasks.forEach((task,i)=>{
    const dn=done(AD,i),cat=task.cat.toLowerCase(),col=CC[task.cat]||'#888',n=getTNote(AD,i);
    const isCur=i===ct,hidden=AF!=='all'&&task.cat!==AF;
    let durPct=0;
    if(isCur){
      const[a,b]=task.time.split('–').map(s=>s.trim());
      let st=t2m(a),en=t2m(b);if(en<=st)en+=1440;
      const nowM=(en>1440&&nm<st)?nm+1440:nm;
      durPct=Math.max(0,Math.min(100,Math.round((nowM-st)/(en-st)*100)));
    }
    const catIcons={DSA:'⚡',STUDY:'📘',CLASS:'🏛',BREAK:'☕',FREE:'🌿',HEALTH:'🌱',SLEEP:'🌙',MORNING:'🌅'};
    const el=document.createElement('div');
    el.className='task-item'+(dn?' done':'')+(isCur?' current':'')+(hidden?' hidden':'');
    el.style.setProperty('--cc',col);
    el.style.animationDelay=(i*.025)+'s';
    el.innerHTML=`
      <div class="tcb">${dn?'✓':isCur?'▶':''}</div>
      <div class="t-body">
        <div class="t-meta">
          <span class="t-time">${task.time}</span>
          <span class="t-badge cat-${cat}">${catIcons[task.cat]||''} ${task.cat}</span>
          ${isCur?'<span class="t-now">NOW</span>':''}
        </div>
        <div class="t-title">${task.title}</div>
        ${task.note?`<div class="t-hint">${task.note}</div>`:''}
        <textarea class="t-note" placeholder="Add a note after completing…" rows="2">${n}</textarea>
      </div>
      ${isCur?`<div class="task-dur-bar"><div class="task-dur-fill" style="width:${durPct}%"></div></div>`:''}`;
    el.addEventListener('click',e=>{if(e.target.tagName==='TEXTAREA')return;toggle(AD,i)});
    const ta=el.querySelector('.t-note');
    if(ta){ta.addEventListener('input',()=>setTNote(AD,i,ta.value));ta.addEventListener('click',e=>e.stopPropagation())}
    c.appendChild(el);
  });
}

function renderWeekStats(){
  const c=document.getElementById('weekStats');if(!c)return;
  let td=0,fm=0,tt2=0;
  SCH.forEach(d=>d.tasks.forEach((t,i)=>{tt2++;if(done(d.day,i)){td++;if(['DSA','STUDY','CLASS'].includes(t.cat))fm+=dur(t.time)}}));
  const wp=Math.round(td/tt2*100);
  c.innerHTML=[
    {n:'Tasks Done',v:`${td}/${tt2}`,p:wp,col:'var(--ok)'},
    {n:'Focus Hours',v:fmt(fm),p:Math.min(fm/3600*100,100),col:'var(--std)'},
    {n:'Week Progress',v:wp+'%',p:wp,col:'var(--cls)'},
  ].map(it=>`
    <div class="wsl-item">
      <div class="wsl-top"><div class="wsl-name">${it.n}</div><div class="wsl-val">${it.v}</div></div>
      <div class="wsl-bar"><div class="wsl-fill" style="width:${it.p}%;background:${it.col}"></div></div>
    </div>`).join('');
}

function renderDeadlines(){
  const list=document.getElementById('deadlineList');if(!list)return;
  const items=[...S.deadlines].sort((a,b)=>a.due.localeCompare(b.due));
  if(!items.length){list.innerHTML='<div class="empty-note">No deadlines yet — add an assignment or lab report below.</div>';return}
  list.innerHTML=items.map(it=>{
    const n=daysUntil(it.due),b=dueBadge(n),typeIcon=it.type==='lab'?'🧪':'📝';
    return`<div class="dl-row${it.done?' done':''}">
      <div class="tcb dl-check" onclick="toggleDeadline(${it.id})">${it.done?'✓':''}</div>
      <div class="dl-body">
        <div class="dl-title-row">
          <span class="dl-title-txt">${typeIcon} ${it.title}</span>
          <span class="dl-due-badge" style="color:${b.col};border-color:${b.col}44;background:${b.col}18">${b.txt}</span>
        </div>
        <div class="dl-meta">${it.course} · Due ${it.due}</div>
      </div>
      <button class="dl-del" onclick="removeDeadline(${it.id})" title="Remove">✕</button>
    </div>`;
  }).join('');
}

function renderExams(){
  const list=document.getElementById('examList');if(!list)return;
  const items=[...S.exams].sort((a,b)=>a.date.localeCompare(b.date));
  if(!items.length){list.innerHTML='<div class="empty-note">No exams added yet — add one below to start the countdown.</div>';return}
  list.innerHTML=items.map(it=>{
    const n=daysUntil(it.date),b=dueBadge(n);
    return`<div class="dl-row${it.done?' done':''}">
      <div class="tcb dl-check" onclick="toggleExam(${it.id})">${it.done?'✓':''}</div>
      <div class="dl-body">
        <div class="dl-title-row">
          <span class="dl-title-txt">🎓 ${it.title}</span>
          <span class="dl-due-badge" style="color:${b.col};border-color:${b.col}44;background:${b.col}18">${b.txt}</span>
        </div>
        <div class="dl-meta">${it.course} · ${it.date}${it.time?' · '+it.time:''}${it.room?' · '+it.room:''}</div>
      </div>
      <button class="dl-del" onclick="removeExam(${it.id})" title="Remove">✕</button>
    </div>`;
  }).join('');
}

function renderStudyTracker(){
  const today=dateKey(),cur=S.studyLog[today];
  document.querySelectorAll('.sh-btn').forEach(b=>{
    const v=+b.dataset.val;
    b.classList.toggle('sel',cur!==undefined&&v===cur);
  });
  const pts=studyPoints();
  const ptsEl=document.getElementById('shPoints'),streakEl=document.getElementById('shStreak'),todayEl=document.getElementById('shToday');
  if(ptsEl)ptsEl.textContent=pts.total;
  if(streakEl)streakEl.textContent=pts.streak+(pts.bonus?` (+${pts.bonus} bonus)`:'');
  if(todayEl)todayEl.textContent=cur===undefined?'Not logged':cur===0?'Not studied':cur+'h';
  drawStudyChart();
}

function drawStudyChart(){
  const cv=document.getElementById('studyChartCanvas');if(!cv)return;
  const ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);
  const keys=last14Keys();
  const n=keys.length,gap=4,bw=(W-gap*(n-1))/n;
  keys.forEach((k,i)=>{
    const v=S.studyLog[k];
    const h=v?Math.max((v/7)*(H-16),3):(v===0?3:0);
    const x=i*(bw+gap);
    const col=v===undefined?'rgba(255,255,255,.06)':v===0?'#ff4d6d':v>=5?'#4ade80':v>=3?'#22d3ee':'#845ef7';
    ctx.fillStyle=col;
    ctx.beginPath();
    const y=H-h-12;
    if(ctx.roundRect)ctx.roundRect(x,y,bw,h,2);else ctx.rect(x,y,bw,h);
    ctx.fill();
    ctx.font='500 8px Space Mono,monospace';ctx.textAlign='center';ctx.fillStyle='rgba(90,100,128,.8)';
    const d=new Date(k+'T00:00:00');
    ctx.fillText(d.getDate(),x+bw/2,H-2);
  });
}

function renderTodayIntegration(){
  const el=document.getElementById('todayIntegration');if(!el)return;
  if(!S.deadlines.length&&!S.exams.length){el.innerHTML='';return}
  const todayKeyStr=dateKey();
  const rows=[];
  S.exams.filter(x=>!x.done).forEach(x=>{
    const n=daysUntil(x.date);
    if(x.date===todayKeyStr)rows.push({p:0,html:`<div class="ta-item exam"><span class="ta-icon">🎓</span><div class="ta-txt"><b>Exam today — ${x.title}</b><div class="ta-sub">${x.course}${x.time?' · '+x.time:''}${x.room?' · '+x.room:''}</div></div></div>`});
  });
  S.deadlines.filter(x=>!x.done).forEach(x=>{
    const n=daysUntil(x.due);
    if(n<0)rows.push({p:1,html:`<div class="ta-item overdue"><span class="ta-icon">⚠️</span><div class="ta-txt"><b>Overdue — ${x.title}</b><div class="ta-sub">${x.course} · was due ${x.due}</div></div></div>`});
    else if(n===0)rows.push({p:2,html:`<div class="ta-item due"><span class="ta-icon">📌</span><div class="ta-txt"><b>Due today — ${x.title}</b><div class="ta-sub">${x.course}</div></div></div>`});
  });
  if(!rows.length){
    // nothing urgent today — surface the single nearest upcoming item for awareness
    const upcoming=[
      ...S.deadlines.filter(x=>!x.done).map(x=>({title:x.title,course:x.course,n:daysUntil(x.due),kind:'Due'})),
      ...S.exams.filter(x=>!x.done).map(x=>({title:x.title,course:x.course,n:daysUntil(x.date),kind:'Exam'})),
    ].filter(x=>x.n>0).sort((a,b)=>a.n-b.n)[0];
    if(upcoming)rows.push({p:3,html:`<div class="ta-item upcoming"><span class="ta-icon">🗓️</span><div class="ta-txt">${upcoming.kind==='Exam'?'Next exam':'Next deadline'}: <b>${upcoming.title}</b> in ${upcoming.n} day${upcoming.n===1?'':'s'}<div class="ta-sub">${upcoming.course}</div></div></div>`});
  }
  rows.sort((a,b)=>a.p-b.p);
  el.innerHTML=rows.length?`<div class="today-alert">${rows.map(r=>r.html).join('')}</div>`:'';
}

function renderHeatmap(){
  const c=document.getElementById('heatGrid');if(!c)return;
  c.innerHTML=SCH.map(d=>{
    const p=pct(d.day),cls=p===0?'he':p>=80?'hg':p>=50?'hy':'hr';
    const mood=S.moods[d.day]||0;
    return`<div class="heat-cell ${cls}${mood?' mood-'+mood:''}" onclick="switchDay(${d.day})">
      <span class="h-day">${DAYS[d.day]}</span>
      <span class="h-pct">${p>0?p+'%':'—'}</span>
    </div>`;
  }).join('');
}

function renderDayBars(){
  const c=document.getElementById('dayBars');if(!c)return;
  c.innerHTML=SCH.map(d=>{
    const p=pct(d.day),col=p===100?'var(--ok)':p>0?'var(--cls)':'var(--dm)';
    return`<div class="day-bar-row" onclick="switchDay(${d.day})">
      <div class="dbr-name">${DAYS[d.day]}</div>
      <div class="dbr-bar"><div class="day-bar-fill" style="width:${p}%;background:${col}"></div></div>
      <div class="dbr-pct" style="color:${col}">${p}%</div>
    </div>`;
  }).join('');
  drawTrend();
}

function renderJournal(){
  const d=SCH[AD];if(!d)return;
  const ta=document.getElementById('dayJournal'),dn=document.getElementById('journalDayName');
  if(dn)dn.textContent=d.name;
  if(ta){
    ta.value=(S.journals&&S.journals[AD])||'';
    ta.oninput=()=>{if(!S.journals)S.journals={};S.journals[AD]=ta.value;save();const m=document.getElementById('journalMeta');if(m)m.textContent='Saved '+new Date().toLocaleTimeString()}
  }
}

// ══════════════════════════════════════════════════════════════════════════
// PRINT WEEK
// ══════════════════════════════════════════════════════════════════════════
function printWeek(){
  window.print();
}

// ══════════════════════════════════════════════════════════════════════════
// TAB + DAY SWITCHING
// ══════════════════════════════════════════════════════════════════════════
function switchTab(tab){
  activeTab=tab;
  document.getElementById('schedulePanel').classList.toggle('off',tab!=='schedule');
  document.getElementById('notesPanel').classList.toggle('on',tab==='notes');
  document.getElementById('wellnessPanel').classList.toggle('on',tab==='wellness');
  document.getElementById('tabSchedule').classList.toggle('on',tab==='schedule');
  document.getElementById('tabNotes').classList.toggle('on',tab==='notes');
  document.getElementById('tabWellness').classList.toggle('on',tab==='wellness');
  if(tab==='notes')renderJournal();
  if(tab==='wellness')renderWellness();
}

function switchDay(day){
  const mc=document.getElementById('mainContent');
  if(mc){
    mc.classList.add('fading');
    setTimeout(()=>{
      AD=day;render();
      mc.classList.remove('fading');
      mc.classList.add('entering');
      requestAnimationFrame(()=>{
        requestAnimationFrame(()=>mc.classList.remove('entering'));
      });
    },180);
  }else{AD=day;render()}
}

// ══════════════════════════════════════════════════════════════════════════
// MODAL
// ══════════════════════════════════════════════════════════════════════════
function openModal(id){document.getElementById(id).classList.add('open')}
function closeModal(id){document.getElementById(id).classList.remove('open')}
function confirmReset(){S.progress={};S.notes={};S.taskNotes={};S.journals={};S.moods={};S.wellness={};confettiFired={};save();closeModal('resetModal');render();showToast('Weekly progress reset ✓')}
document.querySelectorAll('.overlay').forEach(o=>o.addEventListener('click',function(e){if(e.target===this)this.classList.remove('open')}));

// ══════════════════════════════════════════════════════════════════════════
// EXPORT / IMPORT
// ══════════════════════════════════════════════════════════════════════════
function exportData(){
  const out={exportedAt:new Date().toISOString(),...S,
    summary:SCH.map(d=>({day:d.name,completion:pct(d.day)+'%',done:d.tasks.filter((_,i)=>done(d.day,i)).map(t=>t.title)}))};
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([JSON.stringify(out,null,2)],{type:'application/json'}));
  a.download=`tracker-${new Date().toISOString().slice(0,10)}.json`;
  a.click();showToast('Exported ✓');
}

function importData(e){
  const f=e.target.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=ev=>{try{
    const d=JSON.parse(ev.target.result);
    if(d.progress)S.progress=d.progress;
    if(d.taskNotes)S.taskNotes=d.taskNotes;
    if(d.journals)S.journals=d.journals;
    if(d.moods)S.moods=d.moods;
    if(d.wellness)S.wellness=d.wellness;
    if(d.studyLog)S.studyLog=d.studyLog;
    if(d.deadlines)S.deadlines=d.deadlines;
    if(d.exams)S.exams=d.exams;
    if(d.confettiFired)confettiFired=d.confettiFired;
    save();render();showToast('Imported ✓');
  }catch(err){showToast('Import failed — invalid file')}};
  r.readAsText(f);
  e.target.value='';
}

// ══════════════════════════════════════════════════════════════════════════
// KEYBOARD SHORTCUTS
// ══════════════════════════════════════════════════════════════════════════
document.addEventListener('keydown',e=>{
  if(e.target.tagName==='TEXTAREA'||e.target.tagName==='INPUT')return;
  if(e.key==='ArrowLeft'){e.preventDefault();switchDay((AD+6)%7)}
  else if(e.key==='ArrowRight'){e.preventDefault();switchDay((AD+1)%7)}
  else if(e.key>='1'&&e.key<='7'){e.preventDefault();switchDay(+e.key-1)}
  else if(e.key==='r'||e.key==='R'){AF='all';renderPills();renderTasks();showToast('Filter reset')}
  else if(e.key==='n'||e.key==='N'){switchTab('notes')}
  else if(e.key==='s'||e.key==='S'){switchTab('schedule')}
  else if(e.key==='w'||e.key==='W'){switchTab('wellness')}
  else if(e.key==='p'||e.key==='P'){pomodoroToggle()}
  else if(e.key==='t'||e.key==='T'){toggleTheme()}
  else if(e.key==='?'){openModal('shortcutsModal')}
});

// ══════════════════════════════════════════════════════════════════════════
// MASTER RENDER
// ══════════════════════════════════════════════════════════════════════════
function render(){
  renderGreeting();
  renderDayGrid();
  renderUpcoming();
  renderQuote();
  renderStreak();
  renderSpotlight();
  renderMood();
  renderHero();
  renderStatRow();
  renderTimeline();
  renderWeekChart();
  renderPills();
  renderTasks();
  renderWeekStats();
  renderHeatmap();
  renderDayBars();
  renderStudyTracker();
  renderWellness();
  renderDeadlines();
  renderExams();
  renderTodayIntegration();
  drawDonut();
  drawPomoRing();
  computeBestHour();
  updateAccentFromCurrentTask();
  if(activeTab==='notes')renderJournal();
}

// ══════════════════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════════════════
function populateCourseSelects(){
  const opts=COURSES.map(c=>`<option value="${c}">${c}</option>`).join('');
  const a=document.getElementById('dlCourse'),b=document.getElementById('exCourse');
  if(a)a.innerHTML=opts;if(b)b.innerHTML=opts;
}

document.addEventListener('DOMContentLoaded',()=>{
  load();
  document.body.classList.toggle('light',lightMode);
  const themeBtn=document.getElementById('themeBtn');if(themeBtn)themeBtn.textContent=lightMode?'☀️':'🌙';
  AD=new Date().getDay();
  populateCourseSelects();
  render();
  setInterval(()=>{renderSpotlight();renderUpcoming();if(AD===new Date().getDay())renderTasks();updateAccentFromCurrentTask()},60000);
  window.addEventListener('resize',()=>{drawHeroRing(pct(AD));drawDonut();drawTrend();drawSparkline();drawStudyChart()});
});

/* ── Mobile controls, safe local-first cloud sync and PWA registration ── */
(()=>{
  const $id=id=>document.getElementById(id);
  const CONFIG_KEY='dailytrack_supabase_config_v1';
  const BASE_KEY='dailytrack_cloud_base_v1';
  const VIEW_KEY='dailytrack_mobile_view_v1';
  const TABLE='dailytrack_sync';
  let sb=null,user=null,syncBusy=false,syncAgain=false,syncTimer=null,lastSyncLabel='Not synced yet';
  let viewMode=localStorage.getItem(VIEW_KEY)||'auto';
  const safeParse=v=>{try{return JSON.parse(v)}catch{return null}};
  const clone=v=>v===undefined?undefined:JSON.parse(JSON.stringify(v));
  const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
  const isObj=v=>v&&typeof v==='object'&&!Array.isArray(v);
  const missing=Symbol('missing');
  function getBundle(){return {state:clone(S),confettiFired:clone(confettiFired||{})}}
  function storeBundleLocal(bundle){
    if(bundle&&bundle.state)S=clone(bundle.state);
    if(bundle&&bundle.confettiFired)confettiFired=clone(bundle.confettiFired);
    try{localStorage.setItem('tracker_v7',JSON.stringify(S));localStorage.setItem('tracker_confetti',JSON.stringify(confettiFired));}
    catch(e){setSyncStatus('Local storage is full. Export a backup before continuing.','error')}
  }
  function mergePreferRemote(local,remote){
    if(remote===undefined)return clone(local);
    if(local===undefined)return clone(remote);
    if(Array.isArray(local)&&Array.isArray(remote)){
      const byId=new Map();
      [...local,...remote].forEach(v=>{const k=v&&v.id!==undefined?String(v.id):JSON.stringify(v);byId.set(k,clone(v))});
      return [...byId.values()];
    }
    if(isObj(local)&&isObj(remote)){
      const out={};for(const k of new Set([...Object.keys(local),...Object.keys(remote)])){
        if(k in remote)out[k]=k in local?mergePreferRemote(local[k],remote[k]):clone(remote[k]);
        else out[k]=clone(local[k]);
      }return out;
    }
    return clone(remote);
  }
  function mergeThree(base,local,remote){
    const b=base===undefined?missing:base,l=local===undefined?missing:local,r=remote===undefined?missing:remote;
    const eq=(x,y)=>x===missing?y===missing:y!==missing&&same(x,y);
    const lc=!eq(l,b),rc=!eq(r,b);
    if(!lc)return r===missing?missing:clone(r);
    if(!rc)return l===missing?missing:clone(l);
    if(l===missing&&r===missing)return missing;
    if(l===missing)return clone(r);
    if(r===missing)return clone(l);
    if(isObj(l)&&isObj(r)&& (b===missing||isObj(b))){
      const out={},keys=new Set([...Object.keys(b===missing?{}:b),...Object.keys(l),...Object.keys(r)]);
      for(const k of keys){const v=mergeThree(b===missing?undefined:b[k],l[k],r[k]);if(v!==missing)out[k]=v;}
      return out;
    }
    if(Array.isArray(l)&&Array.isArray(r)&&(b===missing||Array.isArray(b))){
      const map=a=>new Map((a||[]).map((v,i)=>[v&&v.id!==undefined?String(v.id):'__index_'+i,v]));
      const bm=map(b===missing?[]:b),lm=map(l),rm=map(r),keys=new Set([...bm.keys(),...lm.keys(),...rm.keys()]),out=[];
      for(const k of [...rm.keys(),...lm.keys(),...bm.keys()]){if(!keys.has(k))continue;keys.delete(k);const v=mergeThree(bm.get(k),lm.get(k),rm.get(k));if(v!==missing)out.push(v)}
      return out;
    }
    return clone(l); // Same-field simultaneous edits: keep the latest local action.
  }
  function setSyncStatus(message,type='info'){
    lastSyncLabel=message;const box=$id('syncStatusBox');if(box){box.textContent=message;box.style.borderColor=type==='error'?'rgba(255,69,58,.45)':type==='ok'?'rgba(48,209,88,.4)':'var(--bd2)'}
    const top=document.querySelector('.mobile-icon-btn[aria-label="Cloud sync"]');if(top){top.title=message;top.textContent=type==='ok'?'☁✓':'☁'}
    const desk=document.querySelector('.desktop-sync-btn');if(desk){desk.title=message;desk.textContent=type==='ok'?'☁ Synced':'☁ Cloud Sync'}
  }
  function setAccountInfo(text){const el=$id('syncAccountInfo');if(el)el.textContent=text}
  function updateSyncUI(){
    const info=$id('syncAccountInfo');if(info)info.textContent=user?`Signed in as ${user.email||'your account'}. This account can be used on your phone and computer.`:'Use the same email account on both devices. Account passwords are handled by Supabase Auth.';
    const url=$id('sbProjectUrl'),key=$id('sbPublishableKey');const cfg=safeParse(localStorage.getItem(CONFIG_KEY));
    if(cfg){if(url&&!url.value)url.value=cfg.url||'';if(key&&!key.value)key.value=cfg.key||''}
    if(user)setSyncStatus(`Signed in · ${user.email||'Account connected'} · ${lastSyncLabel}`,'ok');
  }
  function getStoredConfig(){return safeParse(localStorage.getItem(CONFIG_KEY))}
  async function configureClient(){
    const cfg=getStoredConfig();
    if(!cfg||!cfg.url||!cfg.key){sb=null;user=null;setSyncStatus('Cloud sync is not configured. Your progress is still saved on this device.');return false}
    if(!window.supabase||!window.supabase.createClient){setSyncStatus('Supabase library could not load. Check your internet connection and reload.','error');return false}
    try{
      if(!sb||sb.__dailytrackUrl!==cfg.url||sb.__dailytrackKey!==cfg.key){
        sb=window.supabase.createClient(cfg.url,cfg.key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
        sb.__dailytrackUrl=cfg.url;sb.__dailytrackKey=cfg.key;
        sb.auth.onAuthStateChange((event,session)=>{
          user=session?.user||null;updateSyncUI();
          if(user&&(event==='SIGNED_IN'||event==='TOKEN_REFRESHED'))setTimeout(()=>syncCloud(),0);
          if(event==='SIGNED_OUT'){user=null;setSyncStatus('Signed out. Changes will remain on this device until you sign in again.')}
        });
      }
      const {data,error}=await sb.auth.getSession();if(error)throw error;
      user=data.session?.user||null;updateSyncUI();
      if(user)await syncCloud();else setSyncStatus('Cloud connection saved. Sign in to sync between devices.');
      return true;
    }catch(err){setSyncStatus('Connection error: '+(err.message||'Check the project URL and publishable key.'),'error');return false}
  }
  window.saveSupabaseConfig=async function(){
    const url=($id('sbProjectUrl')?.value||'').trim().replace(/\/$/,''),key=($id('sbPublishableKey')?.value||'').trim();
    try{const u=new URL(url);if(u.protocol!=='https:'||!u.hostname.endsWith('.supabase.co'))throw new Error('Enter your Supabase project URL, for example https://abc123.supabase.co.');}
    catch(e){setSyncStatus(e.message||'Enter a valid HTTPS Supabase project URL.','error');return}
    if(!key){setSyncStatus('Paste your Supabase publishable key (or legacy anon key).','error');return}
    localStorage.setItem(CONFIG_KEY,JSON.stringify({url,key}));sb=null;user=null;
    const ok=await configureClient();if(ok)showToast('Supabase connection saved');
  };
  window.openSyncModal=function(){openModal('syncModal');updateSyncUI();if(!getStoredConfig())setSyncStatus('Paste your Supabase URL and publishable key, then save the connection.')}
  window.supabaseSignUp=async function(){
    if(!sb){setSyncStatus('Save your Supabase connection settings first.','error');return}
    const email=($id('sbEmail')?.value||'').trim(),password=$id('sbPassword')?.value||'';
    if(!email||password.length<8){setSyncStatus('Enter a valid email and a password with at least 8 characters.','error');return}
    setSyncStatus('Creating your account…');
    const {data,error}=await sb.auth.signUp({email,password,options:{emailRedirectTo:location.origin+location.pathname}});
    if(error){setSyncStatus(error.message,'error');return}
    user=data.user||null;
    if(data.session){user=data.session.user;setSyncStatus('Account created. Connecting cloud data…');await syncCloud()}
    else setSyncStatus('Account created. Check your email for the confirmation link, then return here and sign in.','ok');
    updateSyncUI();
  };
  window.supabaseSignIn=async function(){
    if(!sb){setSyncStatus('Save your Supabase connection settings first.','error');return}
    const email=($id('sbEmail')?.value||'').trim(),password=$id('sbPassword')?.value||'';
    if(!email||!password){setSyncStatus('Enter your email and password.','error');return}
    setSyncStatus('Signing in…');const {data,error}=await sb.auth.signInWithPassword({email,password});
    if(error){setSyncStatus(error.message,'error');return}
    user=data.user;updateSyncUI();await syncCloud();
  };
  window.supabaseSignOut=async function(){if(!sb){setSyncStatus('No cloud account is connected.');return}const {error}=await sb.auth.signOut();if(error){setSyncStatus(error.message,'error');return}user=null;setSyncStatus('Signed out. Your local data is preserved.');updateSyncUI()};
  async function pushOnce(){
    if(!sb||!user)return;
    const {data:row,error:readErr}=await sb.from(TABLE).select('payload,updated_at').eq('user_id',user.id).maybeSingle();
    if(readErr)throw readErr;
    let local=getBundle(),remote=row?.payload||null,base=safeParse(localStorage.getItem(BASE_KEY));
    let merged=remote?(base?mergeThree(base,local,remote):mergePreferRemote(local,remote)):local;
    if(!merged||!merged.state)merged=local;
    storeBundleLocal(merged);
    const payload=getBundle();
    if(!remote||!same(payload,remote)){
      const {error}=await sb.from(TABLE).upsert({user_id:user.id,payload,updated_at:new Date().toISOString()},{onConflict:'user_id'});
      if(error)throw error;
    }
    localStorage.setItem(BASE_KEY,JSON.stringify(payload));
    const when=new Date();lastSyncLabel='Synced '+when.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
    setSyncStatus(`Synced ✓ ${when.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}`,'ok');
    if(typeof render==='function')render();
  }
  async function syncCloud(){
    if(!sb||!user)return;
    if(syncBusy){syncAgain=true;return}
    syncBusy=true;setSyncStatus('Syncing your progress…');
    try{
      do{syncAgain=false;await pushOnce()}while(syncAgain&&sb&&user);
    }catch(err){
      const msg=err?.message||'Could not sync. Check your connection and the SQL setup.';
      setSyncStatus('Sync issue: '+msg+' Local changes are safe on this device.','error');
    }finally{syncBusy=false}
  }
  window.syncNow=async function(){if(!user){setSyncStatus('Sign in first to sync your progress.','error');return}await syncCloud()};
  function scheduleSync(){if(!sb||!user)return;clearTimeout(syncTimer);setSyncStatus('Changes saved locally · cloud sync pending…');syncTimer=setTimeout(()=>syncCloud(),1100)}
  const originalSave=window.save;
  if(typeof originalSave==='function'){window.save=function(){originalSave();scheduleSync()}}
  function updateMobileDays(){
    const root=$id('mobileDayGrid');if(!root||!Array.isArray(SCH))return;root.innerHTML='';
    const now=new Date();const currentDay=now.getDay();
    SCH.forEach(d=>{const p=pct(d.day),btn=document.createElement('button');btn.type='button';btn.className='mobile-day'+(d.day===AD?' active':'')+(p===100?' complete':'');
      const label=d.name.slice(0,3),selectedDate=d.day===currentDay?'Today':label;
      btn.innerHTML=`<span class="md-name">${selectedDate}</span><span class="md-date">${p}%</span><span class="md-pct">${d.tasks.filter((_,i)=>done(d.day,i)).length}/${d.tasks.length}</span>`;
      btn.setAttribute('aria-label',`${d.name}, ${p}% complete`);btn.addEventListener('click',()=>switchDay(d.day));root.appendChild(btn);
    });
  }
  function updateMobileStudy(){
    const value=$id('mobileStudyValue'),buttons=document.querySelectorAll('[data-mobile-hours]');if(!value)return;
    const v=S.studyLog?.[dateKey()];value.textContent=v===undefined?'Not logged':`${v} hour${v===1?'':'s'} logged`;
    buttons.forEach(b=>b.classList.toggle('sel',v!==undefined&&+b.dataset.mobileHours===v));
  }
  function updateMobileHeader(){
    const d=$id('mobileDateStamp');if(d)d.textContent=new Date().toLocaleDateString('en-BD',{weekday:'short',day:'numeric',month:'short'});
    const b=$id('mobileViewButton');if(b)b.textContent='Aa · '+(viewMode==='auto'?'Auto':viewMode==='compact'?'Compact':'Comfort');
    document.body.classList.toggle('view-compact',viewMode==='compact');document.body.classList.toggle('view-comfort',viewMode==='comfort');
    const theme=$id('mobileThemeButton');if(theme)theme.textContent=lightMode?'☀️':'🌙';
  }
  window.cycleMobileView=function(){viewMode=viewMode==='auto'?'compact':viewMode==='compact'?'comfort':'auto';localStorage.setItem(VIEW_KEY,viewMode);updateMobileHeader();showToast('Mobile view: '+viewMode)};
  function updateMobileDock(){document.querySelectorAll('#mobileDock [data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===activeTab))}
  const oldRender=window.render;
  if(typeof oldRender==='function'){window.render=function(){oldRender();updateMobileDays();updateMobileStudy();updateMobileHeader();updateMobileDock()}}
  const oldTab=window.switchTab;
  if(typeof oldTab==='function'){window.switchTab=function(t){oldTab(t);updateMobileDock()}}
  const oldStudy=window.renderStudyTracker;
  if(typeof oldStudy==='function'){window.renderStudyTracker=function(){oldStudy();updateMobileStudy()}}
  const oldTheme=window.toggleTheme;
  if(typeof oldTheme==='function'){window.toggleTheme=function(){oldTheme();updateMobileHeader()}}
  const oldDayGrid=window.renderDayGrid;
  if(typeof oldDayGrid==='function'){window.renderDayGrid=function(){oldDayGrid();updateMobileDays()}}
  // Save mobile layout preferences and keep the local-first app usable without cloud access.
  document.addEventListener('DOMContentLoaded',async()=>{
    updateMobileHeader();updateMobileDays();updateMobileStudy();updateMobileDock();
    await configureClient();
    setInterval(()=>{if(document.visibilityState==='visible'&&user)syncCloud()},45000);
    window.addEventListener('focus',()=>{if(user)syncCloud()});
    document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&user)syncCloud()});
    if('serviceWorker' in navigator && location.protocol.startsWith('http')){navigator.serviceWorker.register('./sw.js').catch(()=>{});}
  });
})();
