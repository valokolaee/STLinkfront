import { useState } from 'react'
// import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import Vector from './hudframeart-10.png'

const questions = [
  {
    title: 'What does STLink give you?',
    content:
      'sncsncnksnknkmakkskakksklaklsklaklakskakkslkalklakslaksklakslka',
  },
  {
    title: 'How to use STLink?',
    content:
      'sncsncnksnknkmakkskakksklaklsklaklakskakkslkalklakslaksklakslka',
  },
  {
    title: 'What do we perform you?',
    content:
      'sncsncnksnknkmakkskakksklaklsklaklakskakkslkalklakslaksklakslka',
  },
  {
    title: 'Does it safe?',
    content:
      'sncsncnksnknkmakkskakksklaklsklaklakskakkslkalklakslaksklakslka',
  },
]

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const activeColor = 'rgb(17,88,255)'
  const defaultColor = 'rgb(109,108,128)'

  return (
    <div style={{ direction: "ltr" }} className="border-b border-gray-300 py-4 text-left">
      <button onClick={onClick} className="w-full flex items-center justify-between text-lg">
        <span className="transition-colors duration-300" style={{ color: isOpen ? activeColor : defaultColor }}>
          {title}
        </span>
        <span className="transition-transform duration-300 " style={{ color: isOpen ? activeColor : defaultColor }}>
          {/* {isOpen ? <FaChevronDown /> : <FaChevronRight />} */}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 leading-relaxed pr-2" style={{ color: defaultColor }}>
          {content}
        </div>
      )}
    </div>
  )
}

const CommonQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div style={{ direction: 'ltr' }} className="w-full bg-[#060044] relative pl-150 py-16 px-4">
      <div className="hidden md:block">
        <img src={Vector} className="w-150 h-auto object-contain absolute left-3 -top-4" />

      </div>
      <div className="max-w-[800px] mx-auto text-left mb-6 md:pr-40">
        <h2 className="text-2xl font-bold text-[#a0a0a0] leading-tight"> What's STLink? </h2>
      </div>

      {/* Description*/}
      <div className="max-w-[800px] mx-auto text-base leading-relaxed mb-10 text-left md:pr-40" style={{ color: 'rgba(109,108,128,1)' }}>
        exampleexampleexampleexampleexampleexample<br />
      </div>

      {/* accordion*/}
      <div className="md:max-w-[800px] md:mx-auto max-w-[500px] bg-[#060044] rounded-lg  p-6 md:pr-40">
        {questions.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default CommonQuestions
