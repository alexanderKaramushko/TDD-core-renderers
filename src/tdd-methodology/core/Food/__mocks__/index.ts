const Food = jest.fn().mockImplementation(() => ({
  getCoords: () => [0, 50],
  getSize: () => [10, 10],
}));

export default Food;
