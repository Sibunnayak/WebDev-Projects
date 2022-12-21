// console.log(module);
module.exports = { getdate: getDate(), getday: getDay() };
function getDate() {
  let today = new Date();
  let option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", option);
  return day;
}
function getDay() {
  let today = new Date();
  let option = {
    weekday: "long",
  };
  let day = today.toLocaleDateString("en-US", option);
  return day;
}
console.log(module.exports.getDay);
