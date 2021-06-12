const availableColors = [
   'blue',
'purple',
   'indigo',
  'pink',
   'red',
   'orange',
   'yellow',
   'green',
   'teal',
  'cyan',
   'white',
   'gray',
'gray-dark',
   'primary',
   'secondary',
   'success',
   'warning',
   'dark',
 ];

export const getColor = (availableColors = 'primary') => {
    if (typeof window === 'undefined') {
      return null;
    }
  
    const color = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`--${availableColors}`);
  
    return color;
  };
  
  export const getThemeColors = () => [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
  ];