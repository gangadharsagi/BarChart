import { formattedDataHelper } from '../formattedDataHelper';

describe('formattedDataHelper', () => {
  it('should return updated data', () => {
    const mockData = [
      {
        'score': 9964,
        'date': 1538410833
      },
      {
        'score': 4583,
        'date': 1538410833
      },
    ];
    const expected = formattedDataHelper(mockData);
    const result = [
      {
        percentage: "100",
        score: 9964,
      },
      {
        percentage: "46",
        score: 4583
      }
      ];
    expect(expected).toEqual(result);
  });

  it('should return default data', () => {
    const mockData = [];
    const expected = formattedDataHelper(mockData);
    const result = [];
    expect(expected).toEqual(result);
  });
});
