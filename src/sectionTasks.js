export default function Container()
{
    return (
        <section className="tasks-section">
            <header >
                <h2>قائمة المهام</h2>
            </header>
            <div className="task-list">
                <ul>
                    <li>
                        <span>
                            <label><input type="checkbox" />
                                شراء مستلزمات المنزل</label>
                        </span>
                        <button>حذف</button></li>
                    <li>
                        <span>
                            <label><input type="checkbox" />
                                كلم خالك في البلد</label>
                        </span>
                        <button>حذف</button></li>
                    <li>
                        <span>
                            <label><input type="checkbox" />
                                اتصل بمديرك خد اجازة</label>
                        </span>
                        <button>حذف</button></li>
                </ul>
            </div>
        </section>

    )
}