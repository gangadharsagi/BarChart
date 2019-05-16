import { TOTAL } from '../../constants/TOTAL';

/**
 * This helper is used to format the data and will return the updated data
 *
 * @param {Object} data - data as a param
 * @returns {Object} - updated Data
 */
export const formattedDataHelper = (data) => {
  if (!data) {
    return [];
  }

  return Object.values(data).map(item => ({
      percentage: ((item.score / TOTAL) * 100).toFixed(0),
      score: item.score
    })
  );
};
