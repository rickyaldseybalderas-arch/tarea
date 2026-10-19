import Header from './components/Header'
import FilterBar from './components/FilterBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="mx-auto min-h-svh w-full max-w-[960px] bg-white px-5 py-6 sm:px-8 sm:py-8 md:px-14 dark:bg-[#16171d]">
      <Header />

      <main className="pt-5 sm:pt-7">
        <h2 className="mb-4 border-b-2 border-dashed border-[#e5e4e7] pb-2 text-xl font-medium text-[#08060d] sm:text-2xl dark:border-[#2e303a] dark:text-[#f3f4f6]">
          Mis tareas
        </h2>
        <FilterBar />
      </main>

      <Footer />
    </div>
  )
}

export default App
