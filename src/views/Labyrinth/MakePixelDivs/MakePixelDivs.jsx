const MakePixelDivs = ({ pixels }) => {
  for (let x = 0; x < pixels.size; x++) {
    for (let y = 0; y < pixels.size; y++) {
      console.log(pixels[`${x}x${y}`]);
    }
  }
};

export default MakePixelDivs;
