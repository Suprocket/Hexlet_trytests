const capitalize = (text) => {
    const [firstSymbol = '', ...restSymbols] = text;
    return `${firstSymbol.toLowerCase()}${restSymbols.join('')}`;
  };

export default capitalize;
  