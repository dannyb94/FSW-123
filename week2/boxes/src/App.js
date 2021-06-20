import './App.css';
import Box from './boxes';

function App() {
  return (
    <div class = 'leBoxes'>
      <span style = {{backgroundColor: '#ff0001'}}>
      <Box 
        title = 'Title 1'
        subtitle = 'Subtitle 1'
        description = 'Hello World 1!'
        bkgrdColor = '#ff0001'
      /></span>
      <span style = {{backgroundColor: '#ffa500'}}>
      <Box
        title = 'Title 2'
        subtitle = 'Subtitle 2'
        description = 'Hello World 2!'
        bkgrdColor = '#ffa500'
      /></span>
      <span style = {{backgroundColor: '#fffe01'}}>
      <Box
        title = 'Title 3'
        subtitle = 'Subtitle 3'
        description = 'Hello World 3!'
        bkgrdColor = '#fffe01'
      /></span>
      <span style = {{backgroundColor: '#008000'}}>
      <Box
        title = 'Title 4'
        subtitle = 'Subtitle 4'
        description = 'Hello World 4!'
        bkgrdColor = '#008000'
      /></span>
    </div>
  );
}

export default App;