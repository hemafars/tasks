export default function Container()
{
    const tasksList = [
        {title: 'شراء مستلزمات المنزل', id: 1},
        {title: "كلم خالك في البلد", id: 2},
        {title: 'اتصل بمديرك خد اجازة', id: 3}

    ]
    const tasks = tasksList.map( task =>
        <li>
            <span>
                <label><input type="checkbox" />
                    {task.title}
                </label>
            </span>
            <button>حذف</button></li>
    )
    return (
        <section className="tasks-section">
            <header >
                <h2>قائمة المهام</h2>
            </header>
            <div className="task-list">
                <ul>
                    {tasks}
                </ul>
            </div>
        </section>

    )
}