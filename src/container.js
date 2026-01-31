import Header from './header'
import SectionAddTask from './SectionAddTask'
import SectionTasks from './sectionTasks'
import Footer from './Footer'

export default function Container()
{
    return (
        <div className='container'>
            <main className='main-content' >
                <Header />
                <SectionAddTask />
                <SectionTasks />
                <Footer />
            </main>
        </div>


    )
}