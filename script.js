const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDate = new Date();

const renderCalendar = () => {
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysContainer = document.getElementById("days");
  const daysOfWeekContainer = document.getElementById("daysOfWeek");
  const currentMonth = document.getElementById("currentMonth");

  daysContainer.innerHTML = "";
  daysOfWeekContainer.innerHTML = "";

  // Set current month and year
  currentMonth.textContent = `${currentDate.toLocaleString("default", { month: "long" })} ${currentDate.getFullYear()}`;

  // Render days of the week
  daysOfWeek.forEach(day => {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    daysOfWeekContainer.appendChild(dayElement);
  });

  // Add blank days before first day of the month
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    const blankDay = document.createElement("div");
    daysContainer.appendChild(blankDay);
  }

  // Render days of current month
  for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;

    const currentDateString = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
    const todayString = new Date().toDateString();

    if (currentDateString === todayString) {
      dayElement.classList.add("today");
    }

    daysContainer.appendChild(dayElement);
  }
};

const changeMonth = (offset) => {
  currentDate.setMonth(currentDate.getMonth() + offset);
  renderCalendar();
};

document.getElementById("prevMonth").addEventListener("click", () => changeMonth(-1));
document.getElementById("nextMonth").addEventListener("click", () => changeMonth(1));

renderCalendar();
