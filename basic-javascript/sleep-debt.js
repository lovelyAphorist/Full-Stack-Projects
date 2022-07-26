const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 8;
  } else if (day === "wednesday") {
    return 8;
  } else if (day === "thursday") {
    return 8;
  } else if (day === "friday") {
    return 8;
  } else if (day === "saturday") {
    return 8;
  } else if (day === "sunday") {
    return 8;
  }
};

const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

const getidealSleepHours = () => {
  const idealHours = 9.5;
  return idealHours * 7;
};

const caculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getidealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("Perfect");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You slept to much");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("you need more sleep");
  }
};

caculateSleepDebt();
