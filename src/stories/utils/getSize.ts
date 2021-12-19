const getSize = (size: 'small' | 'medium' | 'large') => {
  if (size === 'small') return '48px';
  if (size === 'medium') return '72px';
  return '128px';
}

export default getSize;
