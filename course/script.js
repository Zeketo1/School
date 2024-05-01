const currentDate = new Date();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const year = currentDate.getFullYear();
const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo totam minus iure voluptatum magnam odio sapiente quo quae, odit in amet accusantium nobis veritatis cum blanditiis fugiat eum suscipit!";
let remainder;
let currentDay;
const mainHeader = document.querySelector(".date");
const checkInContainer = document.querySelector(".check-in-container");

const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

const dayName = dayFormatter.format(currentDate);

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const currentMonth = monthNames[month];

console.log(currentMonth);

mainHeader.innerHTML = `${dayName}, ${day} ${currentMonth} ${year}`;
const elementaryContent = document.querySelector(
    ".first-elementary-content-child"
);

elementaryContent.innerHTML = `
    <div class="course-options">
                                    <div class="course-options-header">
                                        Course Description:
                                    </div>
                                    <div class="course-option-content">
                                        ${lorem}
                                    </div>
                                </div>
                                <div class="course-options">
                                    <div class="course-options-header">
                                        Course Facultors:
                                    </div>
                                    <div class="course-option-content">
                                        ${lorem}
                                    </div>
                                </div>
                                <div class="course-options">
                                    <div class="course-options-header">
                                        Course Extention:
                                    </div>
                                    <div class="course-option-content">
                                        ${lorem}
                                    </div>
                                </div>
                                <div class="course-options">
                                    <div class="course-options-header">
                                        Course Facultors:
                                    </div>
                                    <div class="course-option-content">
                                        ${lorem}
                                    </div>
                                </div>
                                <div class="course-options">
                                    <div class="course-options-header">
                                        Course Facultors:
                                    </div>
                                    <div class="course-option-content">
                                        ${lorem}
                                    </div>
                                </div>
`;

checkInContainer.innerHTML = `
    <div class="check-in-date">${dayName}, ${day} ${currentMonth} ${year}</div>
    <div class="check-in">
        Check in
        <input
            type="checkbox"
            name="check"
            id="check"
        />
    </div>
`;

const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri"],
    datasets: [
        {
            label: "Hours",
            data: [5, 7, 4, 10, 7],
            // backgroundColor: "rgba(75, 192, 192, 0.2)",
            backgroundColor: [
                "#023611",
                "#023611",
                "#023611",
                "green",
                "#023611",
            ],
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            borderRadius: 20,
            barThickness: 7,
        },
    ],
};
1;
const ctx = document.getElementById("myBarChart").getContext("2d");
const myBarChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
