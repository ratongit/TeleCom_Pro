import './App.css';
// import { Container } from 'reactstrap';
import { ThemeContext, themes } from './contexts/ThemeContext';
import React from 'react';
import ToggleDark from './components/toggleDark';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App">
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>

    </div>
  );
}

export default App;
