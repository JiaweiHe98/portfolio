import { Box } from '@mui/material';
import FirstView from './pages/FirstView';
import { Sider } from './components/Sider';
import './App.css';
import Education from './pages/Education';
import Projects from './pages/Projects';

const sideBarWidth = 200;

function App() {
  return (
    <Box
      className="main-box"
      sx={{
        display: 'flex',
        width: '100vw',
      }}
    >
      <Box sx={{ width: sideBarWidth }}>
        <Sider />
      </Box>
      <Box
        sx={{
          width: `calc(100vw - ${sideBarWidth}px)`,
          minWidth: 1000,
          overflow: 'scroll',
          scrollSnapType: 'y mandatory',
          height: '100vh',
        }}
      >
        <Box
          id="section1"
          sx={{
            height: '100vh',
            bgcolor: 'grey',
            scrollSnapAlign: 'center',
          }}
        >
          <FirstView />
        </Box>
        <Box id="section2" sx={{ height: '100vh', scrollSnapAlign: 'center' }}>
          <Education />
        </Box>
        <Box
          id="section3"
          sx={{
            minHeight: '100vh',
            scrollSnapAlign: 'start',
          }}
        >
          <Projects />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
