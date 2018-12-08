var ourCoursesName = "Mate Academy";
var ourCoursesNameList = ["java", "front end", "full stack"];
var ourGroupName = "fe_oct18";
var ourGroupStudentsNameList = ["Anton", "Yura", "Alina"];

var sumMoney = prompt("Скільки у вас є грошей?", 0);
var areYouConfirm;
if (sumMoney >= 100) {
  areYouConfirm = confirm("Ви можете купити БігМакМеню. Бажаєте?")
    ? alert("Ви замовили БігМакМеню")
    : alert("Ви нічого не замовили");
} else if (sumMoney >= 50 && sumMoney < 100) {
  areYouConfirm = confirm("Ви можете купити Чізбургер і картоплю. Бажаєте?")
    ? alert("Ви замовили Чізбургер і картоплю")
    : alert("Ви нічого не замовили");
} else if (sumMoney < 50 && sumMoney >= 20) {
  areYouConfirm = confirm("Ви можете купити колу. Бажаєте?")
    ? alert("Ви замовили колу")
    : alert("Ви нічого не замовили");
} else {
  areYouConfirm = alert("Пробачте, в нашому закладі немає страв для вас :(");
}

if (sumMoney >= 100) {
  areYouConfirm = confirm("Ви можете купити БігМакМеню. Бажаєте?")
    ? console.log("Ви замовили БігМакМеню")
    : console.log("Ви нічого не замовили");
} else if (sumMoney >= 50 && sumMoney < 100) {
  areYouConfirm = confirm("Ви можете купити Чізбургер і картоплю. Бажаєте?")
    ? console.log("Ви замовили Чізбургер і картоплю")
    : console.log("Ви нічого не замовили");
} else if (sumMoney < 50 && sumMoney >= 20) {
  areYouConfirm = confirm("Ви можете купити колу. Бажаєте?")
    ? console.log("Ви замовили колу")
    : console.log("Ви нічого не замовили");
} else {
  areYouConfirm = console.log(
    "Пробачте, в нашому закладі немає страв для вас :("
  );
}

var stepan = confirm("Чи прийшов(ла) Степан");
var anna = confirm("Чи прийшов(ла) Анжела");
var nik = confirm("Чи прийшов(ла) Микола");

if (stepan && nik && anna) {
  console.log("Маша була засмучена");
} else if ((anna && nik) || (anna && stepan)) {
  console.log("Маша була рада");
} else if (nik && stepan) {
  console.log("Маша була рада");
} else if (anna) {
  console.log("Маша була рада");
} else {
  console.log("Маша була засмучена");
}

var discountTimeStart = Number(prompt("Введіть час початку дії знишки", 9));
var discountTimeEnd = Number(prompt("Введіть час закінчення дії знишки", 9));
var presentTime = Number(prompt("Введіть теперішній час", 9));
var messageDiscountsApply;
if (
  presentTime <= 24 &&
  presentTime >= 0 &&
  (discountTimeEnd <= 24 && discountTimeEnd >= 0) &&
  (discountTimeStart <= 24 && discountTimeStart >= 0)
) {
  if (discountTimeStart <= discountTimeEnd) {
    messageDiscountsApply =
      presentTime <= discountTimeEnd && presentTime >= discountTimeStart
        ? "Зараз діє знижка"
        : "Зараз знижка не діє ";
  } else {
    messageDiscountsApply =
      presentTime >= discountTimeEnd && presentTime <= discountTimeStart
        ? "Зараз знижка не діє"
        : "Зараз діє знижка";
  }
} else {
  messageDiscountsApply = "ви ввели невалідний формат даних";
}
console.log(messageDiscountsApply);
