const todos = [
  { id: 1, title: "learn js", isDone: false },
  { id: 2, title: "go to gam", isDone: false },
  { id: 3, title: "learn", isDone: false },
];

const userChoice = +prompt(
  "لطفا یک گزینه را انتخاب کنید :\n1. اضافه کردن تودو \n2. حذف تودو \n3. انجام تودو "
);

if (userChoice === 1 || userChoice === 2 || userChoice === 3) {
  if (userChoice === 1) {
    //* Add Todo
    let newTodoTitle = prompt("لطفان اسم تودوی جدید را وارد نماید :");
    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      isDone: false,
    };
    todos.push(newTodo);

    console.log("Todos -> ", todos);
  } else if (userChoice === 2) {
    //* Remove Todo
    let todoTitle = prompt(
      "لطفا اسم تودوی مورد نظر را برای حذف را وارد نماید :"
    );
    const mainTodoIndex = todos.findIndex(function (todo) {
      return todo.title === todoTitle;
    });
    if (mainTodoIndex === -1) {
      alert("تودی با این اسم یافت نشد ");
    } else {
      todos.splice(mainTodoIndex, 1);
      alert("تودوی مورد نظر با موفقیت حذف شد");
    }
    console.log("Todos -> ", todos);
  } else {
    //* Done Todo
    let todoTitle = prompt("لطفا اسم تودوی تکمیل شده وارد کن :");
    // ? why 1
    // todos.forEach(function (todo) {
    //   if (todo.title === todoTitle) {
    //     todo.isDone = true;
    //   }
    // });

    // ? why 2
    todos.some(function (todo) {
      console.log(todo);
      if (todo.title === todoTitle) {
        todo.isDone = true;
        return true;
      }
    });

    console.log("Todos ->", todos);
  }
} else {
  alert("مقداره وارد شده نامعتبر است");
}
