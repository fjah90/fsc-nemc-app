import ThemeProvider from 'react-bootstrap/ThemeProvider'
import './App.css';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <div className="App">
        <header className="App-header"></header>
      </div>
    </ThemeProvider>
  );
}

export default App;
