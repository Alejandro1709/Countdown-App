const getDaysDifference = (date) => {
  let currentDate = new Date();
  let targetDate = new Date(date);

  // To calculate the time difference of two dates
  let differenceInTime = targetDate.getTime() - currentDate.getTime();

  // To calculate the no. of days between two dates
  let differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return Math.floor(differenceInDays);
};

const convertDateFormat = (date) => {};

export { getDaysDifference };
