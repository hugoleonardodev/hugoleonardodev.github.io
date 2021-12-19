const getShape = (shape: 'flat' | 'borders' | 'rounded') => {
  if (shape === 'flat') return '0';
  if (shape === 'borders') return '8px';
  return '100px';
}

export default getShape;
