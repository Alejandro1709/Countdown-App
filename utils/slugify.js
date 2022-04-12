const slugifyText = (text) => {
  return text.toLowerCase().replaceAll(' ', '-').replaceAll('ñ', 'ni');
};

export { slugifyText };
