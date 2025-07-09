
const About:React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-center mt-16">
        <h1 className="text-xl font-semibold">About</h1>
        <p className="text-gray-600 mt-4">
          This is a simple forum application built with React and TypeScript.
          It allows users to view a list of questions and their answers.
          The application uses React Router for navigation and Context API for state management.
        </p>
        <p className="text-gray-600 mt-2">
          Feel free to explore the questions and answers!
        </p>
        <p className="text-gray-600 mt-2">
          Created by Joe, a React enthusiast.
        </p>
    </div>
  )
}

export default About
