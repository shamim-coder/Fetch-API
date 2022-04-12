fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => getData(data));

const getData = (data) => {
    const listGroup = document.querySelector(".list-group");

    data.map((list) => {
        console.log(list);
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerHTML = `
            <div class="todo-indicator ${list.completed ? "bg-success" : "bg-danger"}"></div>
            <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-2">
                        <div class="custom-checkbox">
                        <span class="pl-2 pr-2">${list.id}</span>
                        </div>
                    </div>
                    <div class="widget-content-left flex2">
                        <div class="widget-heading">
                            ${list.title}
                            <div class="badge ${list.completed ? "badge-success" : "badge-danger"} ml-2">${list.completed ? "Complete" : "Incomplete"}</div>
                            <!-- Complete Incomplete Color -->
                        </div>
                    </div>
                    <div class="widget-content-right">
                        <button class="border-0 btn-transition btn btn-outline-success"><i class="fa fa-check"></i></button>
                        <button class="border-0 btn-transition btn btn-outline-danger"><i class="fa fa-trash"></i></button>
                    </div>
                </div>
            </div>`;
        listGroup.appendChild(listItem);
    });
};
