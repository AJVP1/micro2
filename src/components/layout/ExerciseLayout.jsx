import { MathJax } from "better-react-mathjax";

function ExerciseLayout({ number, title, children }) {
  return (
    <MathJax>
      <section className="bg-[#fafafa] mx-auto p-6">
        <h2 className="text-4xl text-center text-[#1d2554] mt-6">
          {title || `Ejercicio ${number}`}
        </h2>
        {children}
      </section>
    </MathJax>
  );
}

export default ExerciseLayout;
