export const projects=[
  {id:1, title:"My Portfolio", tech:["React","Tailwindcss","Emailjs"], github:"https://github.com/Ashraf273/EmplyeeTasksDashboard", demo:"https://ashrafsportfolio.netlify.app/",description:["I used React to create a dynamic, component-based structure, making my portfolio easy to manage and update as I grow. It allows for a smooth and fast user experience."," I designed the entire portfolio to be fully responsive, ensuring it looks great on any device. Tailwind made it super easy to create a clean, customizable layout that adapts perfectly from mobile to desktop.","I added an interactive contact form with EmailJS, which lets visitors directly send me emails from the site."],logo:"images/poo.png",connector:true},
    {id:2, title:"Gradient color Picker", tech:["HTML","CSS","JAVASCRIPT"], github:"https://github.com/Ashraf273/Background_Gradient_Changer", demo:"https://ash-gradientcolor-picker.netlify.app/",description:["The Gradient color picker allows users to generate smooth color transition by selecting custom colors, making it useful for web design and UI development.","This project is built using Html,Css, and JavaScript for interactive user experience and User can easily copy the color palette by simply clicking.","Users can easily copy the generated css gradient code,simplifying the process of integrating the selected gradient into their websites."],logo:"images/colorgra.png",connector:true},
    {id:3, title:"Weather Application", tech:["HTML","CSS","JAVASCRIPT"], github:"https://github.com/Ashraf273/Weather_application", demo:"https://ash-weatherapplication.netlify.app/",description:["Using a weather API, I was able to pull live weather data and display it on my web application. I integrated the API with JavaScript to fetch up-to-date."," I designed a clean and intuitive UI with HTML and CSS to make the app user-friendly. The app features responsive design, so it looks great on both mobile and desktop devices."," I implemented the browser's geolocation feature to automatically detect the user's location and show weather updates specific to where they are."],logo:"images/weat.png",connector:true},
    {id:4, title:"Tic Tac Toe Game", tech:["HTML","CSS","JAVASCRIPT"], github:"https://github.com/Ashraf273/Tic_Tac_Toe_Game", demo:"https://ash-tictactoegame.netlify.app/",description:["I built a basic Tic Tac Toe game to practice my HTML, CSS, and JavaScript skills. It was a great way to get familiar with handling user interactions and game logic.","The logic of the game, including player turns, win conditions, and board resets, was implemented entirely with JavaScript."," I had fun experimenting with arrays and loops to check for win conditions and manage the state of the game board. It was a nice challenge that helped me improve my problem-solving skills with coding."],logo:"images/tictac.png",connector:true},
    {id:5, title:"Rock Paper Scissors Game", tech:["HTML","CSS","JAVASCRIPT"], github:"https://github.com/Ashraf273/Rock_Paper_Scissors_Game", demo:"https://ash-rockpaperscissors-game.netlify.app/",description:["I developed a Rock, Paper, Scissors game where the user plays against the system. Using JavaScript, I made the computer randomly choose between rock, paper, and scissors, ensuring a fair and unpredictable experience. The game compares the player’s choice to the computer's and determines the winner."," I implemented a feature that keeps track of the score throughout the game session. JavaScript updates the score every time a round is played, showing how many times the player or system has won."],logo:"images/rock.png",connector:true},
    {id:6, title:"Admin-employee dashboard", tech:["React","Tailwindcss","Node.js","MongoDB"], github:"https://github.com/Ashraf273/EmplyeeTasksDashboard", demo:"https://ash-admin-employee-dashboard.netlify.app/",description:["For this project, I built an admin and employee task dashboard using React to showcase different user roles and task management. The dashboard allows admins to oversee employee tasks and assignments, while employees can track and manage their own tasks.","If you want to use this test the site then the admin username is:admin@me, and password is: 123, and employees usernames will be e1@e.com,e2@e.com,and so on and password is 123 for everyone."],logo:"images/dashboard.jpg",connector:true},
    
];

export const education=[
    {id:1, degree:"Bachelor of Technology (B.TECH)", university:"ST.ANN'S COLLEGE OF ENGINEERING AND TECHNOLOGY", year:"2021-2025", Stream:"Computer Science Engineering", score:"75.4%"},
    {id:2, degree:"Intermediate (12th Grade)", university:"Sri Chaitanya Junior College", year:"2019-2021", Stream:"Science(PCM)",  score:"92.4%"},
    {id:3, degree:"High School (10th Grade)", university:"Little Angels High School", year:"2018-2019", Stream:"General Subjects(ssc)",  score:"100%"},
];

export const experiences=[
    {id:1, company:"Madblocks", Role:"Intern", work:"Mern Stack Developer", duration:"Mar-2023 to Jun-2023", points:["Helped in Building optimized web application using MERN stack(Mongodb,Express.js,React.js,Node.js).","Learned how to design and implement RESTful APIs for communication between Frontend and backend.","Gained knowledge on how the mongodb is used to design data models and queries.","Experienced with git,github and deploying applications on cloud platforms."]},
    {id:1, company:"Datavalley", Role:"Intern", work:"Java Full Stack Developer", duration:"Mar-2024 t0 AUg-2024",points:["Built and maintained RESTful APIs using java,spring and designed UI components using React.","Learned PostgreSQL for structured data storage.","Explored microservices architecture and modular development practices."]},
    {id:1, company:"Madblocks", Role:"Intern", work:"Deep Learning", duration:"Jan-2024 to Present",points:["developing a deep Learning model to track Objects in real time using YOLOv5 and RNN.","Working with Large datasets,preprocessing images and training models.","Gaining experience in implementing deep learning models and PyTorch,OpenCV,TensorFlow,YOLOv5,RNN."]}
];

 export const skills = {
    'Frontend': [
      { name: 'React', logo: 'logos/react.png'},
      { name: 'HTML5', logo: 'logos/html.png'},
      { name: 'CSS3', logo: 'logos/css.png'},
      { name: 'JavaScript', logo: 'logos/js.png'},
      { name: 'Tailwindcss', logo: 'logos/tailwind.png'}
    ],
    'Backend': [
      { name: 'Node.js', logo: 'logos/node.png'},
      { name: 'ExpressJS', logo: 'logos/express.png'},
    ],
    'Database': [
      { name: 'MongoDB', logo: 'logos/mongodb.png'},
      { name: 'MySQL', logo: 'logos/mysql.png'}
    ],
    'programming Languages':[
        {name:"c++", logo:'logos/cpp.png'},
        { name: 'Python', logo: 'logos/python.png'},
        { name: 'Java', logo: 'logos/java.png'},
        {name:"c", logo:'logos/c.png'}
    ],
    'core':[
          {name:'Operating Systems',logo:'logos/linux.png'},
          {name:'computer Networks',logo:'logos/aws.png'},
          {name:'Block Chain Technologies',logo:'logos/solidity.png'},
          {name:'Machine Learning',logo:'logos/tensorflow.png'}
    ],
    'tools':[
          {name:'vs code',logo:'logos/vscode.png'},
          { name: 'Jupyter', logo: 'logos/jupyter.png'},
          {name:'git',logo:'logos/git.png'},
          {name:'github',logo:'logos/github.png'},
          {name:'postman',logo:'logos/postman.png'},
          {name:'emailjs',logo:'logos/emailjs.png'}
    ]
  };

export const certificates=[
  {
    title: "java Full Stack",
    issuer: "wipro",
    date: "2024",
    image: "images/wipro.png",
    link: "https://drive.google.com/file/d/19Bh9pGUnLPgwK3ZFAqBpKZg7_AI_fF50/view?usp=drivesdk"
  }, 
  {
    title: "Mern Full Stack",
    issuer: "Madblocks",
    date: "2023",
    image: "images/Madblocksinternshipcertificate.jpg",
    link: "https://drive.google.com/file/d/19FaKd4RzKCrFabxyolO$aym3KtbCjcdX/view?usp=drivesdk"
  }, 
  {
    title: "NPTEL IOT",
    issuer: "IIT Kharagpur",
    date: "2024",
    image: "images/npteliot.png",
    link: "https://drive.google.com/file/d/19OarGI6LYmjOgmodtPMYii-fjmYD4GTE/view?usp=drivesdk"
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
    image: "images/ibm.png",
    link: "https://drive.google.com/file/d/19FaKd4RzKCrFabxyolO$aym3KtbCjcdX/view?usp=drivesdk"
      }
    ]