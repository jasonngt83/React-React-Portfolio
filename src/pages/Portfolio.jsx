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
  <section class="page-section">
    <h2>My Projects</h2>
    <div className="project-grid">
      {projects.map((p, i) => <Project key={i} {...p} />)}
    </div>

    {/* <div class="flex-container">

      <a href="#" class="flex-item surf-report">
        <div>
        <h3>Surf Report</h3>
        <span>MERN Stack</span>
        </div>
      </a>

<a href='#' className='flex-item led-wall'>
  <div>
    <h3>LED Wall</h3>
    <span>Node/IoT</span>
  </div>
</a>
<a href="#" class="flex-item react-calc">
  <div>
    <h3>Calculator</h3>
    <span>React/JavaScript/CSS</span>
  </div>
</a>

<a href="#" class="flex-item pastel-puzzles">
  <div>
    <h3>Pastel Puzzels</h3>
    <span>MERN Stack</span>
  </div>
</a>


<a href="#" class="flex-item run-buddy">
  <div>
    <h3>Run Buddy</h3>
    <span>HTML/CSS</span>
  </div>
</a>

</div> */}
  </section>
);

export default Portfolio;
