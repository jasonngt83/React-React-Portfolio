import Project from '../components/Project';

const projects = [
  {
    title: 'Weather App',
    description: 'A weather app that provides current weather data and forecasts.',
    link: 'https://github.com/jasonngt83/Servers-and-APIs-Weather-Dashboard'
  },
  {
    title: 'Finance Tracker',
    description: 'A finance tracker that helps users manage their expenses and income.',
    link: 'https://github.com/jasonngt83/Finance_Tracker'
  },
  {
    title: 'Pop Up Trivia Game',
    description: 'A trivia game with a pop-up feature.', 
    link: 'https://github.com/Schanze117/PopUpTrivia'
  },
  {
    title: 'README Generator',
    description: 'A command-line tool that generates a professional README file for your project.',
    link: 'https://github.com/jasonngt83/Professional-README-Generator'
  }
];

const Portfolio = () => (
  <div class="page-section background">
    <h2>My Projects</h2>
    {/* <div className="project-grid">
      {projects.map((p, i) => <Project key={i} {...p} />)}
    </div> */}

    <div class="flex-container">

      <a href="#" class="flex-item surf-report">
        <div>
        <h3>Finance Tracker</h3>
          <a href="https://github.com/jasonngt83/Finance_Tracker" target="_blank" rel="noopener noreferrer"  >GitHub</a>
        </div>
      </a>

<a href='#' className='flex-item led-wall'>
  <div>
    <h3>Popup Trivia Game</h3>
    <a href="https://github.com/Schanze117/PopUpTrivia" target="_blank" rel="noopener noreferrer" >GitHub</a>
  </div>
</a>
<a href="#" class="flex-item react-calc">
  <div>
    <h3>Employee Tracker</h3>
    <a href="https://github.com/jasonngt83/Module10Challenge" target="_blank" rel="noopener noreferrer" >GitHub</a>
  </div>
</a>

<a href="#" class="flex-item pastel-puzzles">
  <div>
    <h3>Full Stack React Kanban Board</h3>
    <a href="https://github.com/jasonngt83/Challenge14-Full-Stack-React-Kanban-Board" target="_blank" rel="noopener noreferrer" >GitHub</a>
  </div>
</a>


<a href="#" class="flex-item run-buddy">
  <div>
    <h3>Typescript Vehicle Builder</h3>
    <a href="https://github.com/jasonngt83/TypeScript-and-OOP-Vehicle-Builder" target="_blank" rel="noopener noreferrer" >GitHub</a>
  </div>
</a>

</div>
  </div>
);

export default Portfolio;
