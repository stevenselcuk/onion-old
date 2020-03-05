import React from 'react';
export const Context = React.createContext({
  theme: 'Dark',
  changeTheme: () => {}
});

export const Provider = ({ children }) => {
  const [theme, setTheme] = React.useState('Dark');

  const changeTheme = () => setTheme(theme === 'Dark' ? 'Light' : 'Dark');

  return (
    <Context.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};
