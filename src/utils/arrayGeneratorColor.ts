const GeneratorColors = (length: number) => {
  if (typeof length !== 'number' || length <= 0) {
    throw new Error('The "length" parameter must be a positive number');
  }

  const colors = {
    '#95EAFF': '#FFDBD9',
    '#FFDBD9': '#4D42FF',
    '#4D42FF': '#FFE682',
    '#FFE682': '#95EAFF',
  };
  const newArray: string[] = ['#95EAFF'];

  for (let index = 0; index < length - 1; index++) {
    newArray.push(colors[newArray[index]]);
  }
  return newArray;
};

export default GeneratorColors;

export const GeneratorColorsImprove = (length: number) => {
  if (typeof length !== 'number' || length <= 0) {
    throw new Error('The "length" parameter must be a positive number');
  }
  const newArray: string[] = [];
  for (let i = 0; i < length; i++) {
    newArray.push(generateRandomColor());
  }
  return newArray;
};

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
