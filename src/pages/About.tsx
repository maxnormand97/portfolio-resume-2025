import React from 'react';
import PageWrapper from '../components/PageWrapper';
import NavBar from '../components/NavBar';
import { Paper, Typography, Box } from '@mui/material';
import ExperienceStepper from '../components/ExperienceStepper';
import CodeRevealer from '../components/CodeRevealer';

const About: React.FC = () => {
  const [navValue, setNavValue] = React.useState(0);

  const handleNavChange = (event: React.SyntheticEvent, newValue: number) => {
    setNavValue(newValue);
  };

  // TODO / IDEA: make every section a game, each game if you win you unlock a prize.
  // Have a component with boxes or something that https://types.kitlangton.com/ at the top
  // each time a game is one we unlock one of those boxes. We can use redux or something to manage this

  // Use this for deployments its free and also provides a free DNS with subdomain
  // https://vercel.com/

  // https://hype4.academy/tools/glassmorphism-generator
  // https://heropatterns.com/
  // https://www.shapedivider.app/
  // https://colorhunt.co/palette/000957344cb7577bc1ffeb00
  // https://www.happyhues.co/palettes/6
  // https://mycolor.space/gradient

  // Animations
  // https://react.dev/reference/react/ViewTransition#animating-an-element-on-enter

  // REF for coding exp
  // https://infinitecraftnew.com/

  // Example of wave...
  // const ShapeDivider = () => {
  //   return (
  //     <div
  //       style={{
  //         position: 'absolute',
  //         top: 0,
  //         left: 0,
  //         width: '100%',
  //         overflow: 'hidden',
  //         lineHeight: 0
  //       }}
  //     >
  //       <svg
  //         data-name="Layer 1"
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 1200 120"
  //         preserveAspectRatio="none"
  //         style={{
  //           position: 'relative',
  //           display: 'block',
  //           width: 'calc(111% + 1.3px)',
  //           height: '118px',
  //         }}
  //       >
  //         <path
  //           d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
  //           style={{
  //             fill: '#FF3FF6',
  //           }}
  //         ></path>
  //       </svg>
  //     </div>
  //   );
  // };

  return (
    <>
    {/* TODO: more of a component than a wrapper need to fix this... */}
      <PageWrapper>
        <h1>A bit about a Bloke</h1>
        <Paper elevation={3} sx={{ padding: 3, margin: 2 }}>
          <Box>
            {/* TODO: DO NOT USE THIS not really showing off personality here make it better show that you are a Human */}
            <Typography variant="body1" paragraph>
              Hi there! I'm a passionate developer with experience in Ruby on Rails, where I focus on building scalable and maintainable applications. 
              While I specialize in full-stack development, I’m always excited to explore new programming languages and tech stacks to expand my horizons.
              As a Certified Scrum Master, I enjoy fostering collaboration and leading agile teams to success.
              Currently, I’m diving into the world of cybersecurity and working toward my CompTIA Security+ certification—because staying ahead in tech is a never-ending adventure!
              Beyond coding, I’m also a 3D artist and designer, blending creativity with technology to craft unique digital experiences. 
              Let’s build something amazing together!
              {/* Basic About me */}
                {/* Rails */}
                {/* But also full stack */}
                {/* But also interested in other langs */}
                {/* Scrum Master */}
                {/* Interesting in Cyber sec pursuing my CompTia Security + */}
                {/* Also a 3D Artist / Designer */}
                {/* TODO: in both this and your resume focus on your highest / proudest achievements */}
                {/* built features that won awards and earned big bucks */}
                {/* developed cutting edge AI / MCP tool features that increased long flows of a complex application and brought in more customers and revenue*/}
                {/* successfully Scrum Mastered a team of 9 engineers */}
                {/* improved the performance of critical pages and flow resulting in not loosing customers and keeping many happy */}
                {/* helped lead projects to improve CI and development pipelines resulting in faster delivering */}
                {/* gave lectures and taught junior devs on code coding and testing practices. */}
                {/* Completely self taught riding through on pure grit, enthusiasm and interest (I do love it and I never stop learning) */}
                {/* Successfully taught and mentored team mates with little to know programming and web knowledge on full stack development and programming */}
            </Typography>
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ padding: 3, margin: 2 }}>
          <h1>Thats had a big Journey</h1>
          {/* TODO: this is better off being a vertical stepper, it will be more visually appealing */}
          <ExperienceStepper />
          {/* TODO: reward the user when they finish, thanks have a cookie! */}
          {/* Experience */}
            {/* My Journey so far = */}
            {/* TODO: can make this like a little interactive timeline journey thing the user can slick on */}
            {/* Startups */}
            {/* Agencies */}
            {/* Big Tech */}
            {/* Scary Legacy apps */}
            {/* stuff I've done / career highlights / spontaneous decisions */}
              {/* Successfully (cause they were happy and delivering value each sprint Scrum Mastered a team of 9 devs */}
              {/* Led project to increase test speeds and CI performance */}
              {/* Getting deep in the BE to improve performance of long running actions and slow pages */}
              {/* Built MCP tools (hottest thing RN in AI) that gave us awards */}
              {/* quit cushy big tech job moved to EU got another job started a new life  */}
              {/* Mentored one of our awesome colleagues in support on how to code / web development */}
              {/* Tech designed and built apps from the ground app (some are now VC backed) */}
              {/* Built a complex license verification system  */}
              {/* Kept learning along the way, picking up new skills and languages (I want to be more than just a Rails Dev) */}
              {/* Successfully put a syntax error in nginx redirect log and shut down production for 2 hours (I'm not perfect, I did apologize and was very embarrsed) */}
              {/* Plus many more mistakes, life lessons and cool things ... lets talk about it over a beer */}
        </Paper>

        <Paper elevation={3} sx={{ padding: 3, margin: 2 }}>
          <h1>Who Learnt a bunch of stuff</h1>
          <CodeRevealer />
          {/* Skills */}
            {/* TODO: could make these clickable for the user, so they find what I really think about them */}
            {/* CORE */}
              {/* Ruby ... you never forget your first */}
              {/* JS / TS ... that crazy family member that keeps coming back in your life that you learn to love later */}
              {/* SCSS / CSS */}
              {/* Rails */}
              {/* React */}
              {/* SQL */}
              {/* Linux / Bash */}
              {/* TDD / BDD (no really though) */}
            {/* Learning */}
              {/* C */}
              {/* Go */}
              {/* Red Teaming (Hacking) */}
          {/* Certs */}
            {/* SM I help get the best out of the team */}
            {/* Coming soon... Comptia + */}
        </Paper>

        {/* Dealt with a bunch of bugs */}
        {/* TODO: here do a mini minesweeper game */}
        {/* TODO: also add a color palette theme changer thingy, that hovers on the right hand side */}

        {/* And had some fun along the way... */}

        {/* Interests / Loves */}
          {/* Surfing / nature (nowadays AKA trying not to drown) */}
          {/* Sci Fi, Philosophy, History (I love reading, Aliens and reminding myself that life is not permanent) */}
          {/* Cinema, Film, Games Entertainment (I studied 3D Animation originally in another life) */}
          {/* Learning anything really */}
          {/* talking to humans when I'm not in a fugue state from a bug */}
          {/* My Family, Friends and partner. Doing it all for them <3 */}


        {/* Something fun / interactive! */}
        {/* Build some kind of game that the user can play for fun, maybe minesweeper or something! Call it bug finder
          some joke about I've written 1000s of lines of code and subsequently created / fixed 1000s of bugs. Can you find
          them all?
        */}
        {/* Theme changer - press a button pretty things happen (not just light / dark that boring) */}
      </PageWrapper>
      <NavBar value={navValue} onChange={handleNavChange} />
    </>
  );
};

export default About;