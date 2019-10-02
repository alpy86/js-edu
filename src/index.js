/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = { family: 4 }
) {
  var basic = 500;
  var advanced = 800;
  var totalHours;
  if (knowsProgramming == false) {
    totalHours = basic + advanced;
  } else {
    totalHours = advanced;
  }
  return Math.ceil(totalHours / config[focus]);
};
