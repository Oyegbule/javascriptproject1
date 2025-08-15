const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".menu-btn");

const toggleScreen = () => {
    wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);

const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackdrop = document.querySelector(".black-backdrop")


const toggleAddTaskForm = () => {
    addTaskForm.classList.toggle("active");
    blackBackdrop.classList.toggle("active");
    addTaskBtn.classList.toggle("active");
};

addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);


//lets add categories and tasks with js 

let categories = [
    {
        title: "Personal",
        img: "man.png",
    },
    {
        title: "Work",
        img: "suitcase.png",
    },
    {
        title: "Shopping",
        img: "shopping-cart.png",
    },
    {
        title: "Coding",
        img: "coding.png",
    },
    {
        title: "Health",
        img: "health.png",
    },
    {
        title: "Fitness",
        img: "fitness.png",
    },
    {
        title: "Education",
        img: "education.png",
    },
    {
        title: "Finance",
        img: "financial.png",
    },
];

let tasks = [
    {
        id: 1,
        task: "Go to Market",
        category: "Shopping",
        completed: false,
    },
    {
        id: 2,
        task: "Read a chapter of a book",
        category: "Personal",
        completed: false,
    },
    {
        id: 3,
        task: "Prepare presentation for meeting",
        category: "Work",
        completed: false,
    },
    {
        id: 4,
        task: "Complete coding challenge",
        category: "Coding",
        completed: false,
    },
    {
        id: 5,
        task: "Take a 30 minutes walk",
        category: "Health",
        completed: false,
    },
    {
        id: 6,
        task: "Do a 20 minutes HIIT workout",
        category: "Fitness",
        completed: false,
    },
    {
        id: 7,
        task: "Watch an educational video online",
        category: "Education",
        completed: false,
    },
    {
        id: 8,
        task: "Review monthly budget",
        category: "Finance",
        completed: false,
    },
    {
        id: 9,
        task: "Buy groceries for the week",
        category: "Shopping",
        completed: false,
    },
    {
        id: 10,
        task: "Write in a journal",
        category: "Personal",
        completed: false,
    },
    {
        id: 11,
        task: "Send follow-up emails",
        category: "Work",
        completed: false,
    },
    {
        id: 12,
        task: "Work on a coding side project",
        category: "Coding",
        completed: false,
    },
    {
        id: 13,
        task: "Try a new healthy recipe",
        category: "Health",
        completed: false,
    },
    {
        id: 14,
        task: "Attend a yoga class",
        category: "Fitness",
        completed: false,
    },
    {
        id: 15,
        task: "Read an article about a new topic",
        category: "Education",
        completed: false,
    },
    {
        id: 16,
        task: "Set automatic bills payment",
        category: "Finance",
        completed: false,
    },
    //Additional task for each category
    {
        id: 17,
        task: "Buy new clothes",
        category: "Shopping",
        completed: false,
    },
    {
        id: 18,
        task: "Meditate for 10 minutes",
        category: "Personal",
        completed: false,
    },
    {
        id: 19,
        task: "Prepare agenda for team meeting",
        category: "Work",
        completed: false,
    },
    {
        id: 20,
        task: "Debug a software issue",
        category: "Coding",
        completed: false,
    },
    {
        id: 21,
        task: "Try a new recipe for lunch",
        category: "Health",
        completed: false,
    },
    {
        id: 22,
        task: "Go for a run",
        category: "Fitness",
        completed: false,
    },
    {
        id: 23,
        task: "Learn a new language online",
        category: "Education",
        completed: false,
    },
    {
        id: 24,
        task: "Read about history",
        category: "Education",
        completed: false,
    },
    {
        id: 25,
        task: "Review investment portfolio",
        category: "Finance",
        completed: false,
    },
    //Add more task for each category as desired
];

let selectedCategory = categories[0];

const categoriesContainer = document.querySelector(".categories");
const categoryTitle = document.querySelector(".category-title");
const totalCategoryTasks = document.querySelector(".category-tasks");
const categoryImg = document.querySelector("#category-img");
const totalTasks = document.querySelector(".totalTasks");



const calculateTotal = () => {
    const categoryTasks = tasks.filter((task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase());
    totalCategoryTasks.innerHTML = `${categoryTasks.length} Tasks`;
    totalTasks.innerHTML = tasks.length;
};



const renderCategories = () => {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
        //get all the tasks of corrent category
        const categoryTasks = tasks.filter((task) => task.category.toLowerCase() === category.title.toLowerCase());

        //create a div to render category
        const div = document.createElement("div");
        div.classList.add("category");
        div.addEventListener("click", ()=>{
            wrapper.classList.add("show-category");
            selectedCategory = category;
            categoryTitle.innerHTML = category.title;
            categoryImg.src = `images/${category.img}`;
            calculateTotal();

            //rerender task when category change
            renderTasks();


        })
        div.innerHTML = `
            <div class="left">
                <img src="images/${category.img}" alt="${category.title}" />
                <div class="content">
                    <h1>${category.title}</h1>
                    <p> ${categoryTasks.length} Tasks</p>
                </div>
            </div>
            <div class="options">
                <div class="toggle-btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                    </svg>
                </div>
            </div>
        `;

        categoriesContainer.appendChild(div);
    });
};

const tasksContainer = document.querySelector(".tasks");

const renderTasks = () => {
tasksContainer.innerHTML = "";
const categoryTasks = tasks.filter((task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase());

//if no task for selected category
if (categoryTasks.length === 0) {
    tasksContainer.innerHTML = `
    <p class="no-task">No tasks for this category</p>
    `;
} else {
    //if there are tasks for the selected category render then
     categoryTasks.forEach((task) => {
        const div = document.createElement("div");
        div.classList.add("task-wrapper");
        const label = document.createElement("label");
        label.classList.add("task");
        label.setAttribute("for", task.id);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = task.id;
        checkbox.checked = task.completed;

        //add cpmpletion functionality on click checkbox
        checkbox.addEventListener("change", () => {
            const index = tasks.findIndex((t) => t.id === task.id);
            //change the true to false or vice versa
            tasks[index].completed = !tasks[index];
            // save in local
            saveLocal();
        });
        div.innerHTML = `
        <div class="delete">
                     <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
>
    <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 6h18l-2 14H5L3 6z6h6V9h-6z"
    />
</svg>
                </div>
        `;

label.innerHTML = `
<span class="checkmark">
                        <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
>
    <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
    />
</svg>
                    </span>
                    <p>${task.task}</p>
`;

label.prepend(checkbox);
div.prepend(label);
tasksContainer.appendChild(div);

// delete functionality
const deleteBtn = div.querySelector(".delete");
deleteBtn.addEventListener("click", () => {
const index = tasks.findIndex((t) => t.id === task.id);

// remove the clicked task
tasks.splice(index, 1);
saveLocal();
renderTasks();

});

     });

renderCategories();
calculateTotal();

}

};

//save and get tasks from local storage
const saveLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getLocal = () => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"))

    //if tasks found
    if (localTasks) {
        tasks = localTasks;
    }
};

//lets add functionality to sdd new tasks

//render all the categories in select
const categorySelect = document.querySelector("#category-select");
const cancelBtn = document.querySelector(".cancel-btn");
const addBtn = document.querySelector(".add-btn");

const taskInput = document.querySelector("#task-input");

cancelBtn.addEventListener("click", toggleAddTaskForm);

addBtn.addEventListener("click", () => {
    const task = taskInput.value;
    const category = categorySelect.value;

    if ((task === "")) {
        alert("please enter a task");
    } else {
        const newTask = {
            id: tasks.length + 1,
            task,
            category,
            completed: false,
        };
        tasks.push(newTask);
        taskInput.value = "";
        saveLocal();
        toggleAddTaskForm();
        renderTasks();
    }
});

categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect.appendChild(option);
})

//these all are already stored tasks

getLocal();
calculateTotal();
renderTasks();