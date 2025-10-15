const AboutPage = () => {
  return (
    <div className='max-w-5xl mx-auto px-6 py-16 bg-gray-900'>
      <div className='flex flex-col md:flex-row md:items-start items-center gap-10 mb-12'>
        <img
          src='/images/profile.jpg'
          alt='profile'
          className='w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md'
        />
        <div>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Hey, I'm Rodrigo 👋
          </h1>
          <p className='text-gray-300 text-lg'>
            I have hands-on experience developing and optimizing web
            applications, and I excel at translating complex business
            requirements into seamless user experiences. My diverse background
            in marketing and sales at leading companies like Disney and Warner
            Bros, with skills in problem-solving and stakeholder communication,
            allowed me to build solutions that are both technically robust and
            commercially successful.
          </p>
        </div>
      </div>

      <div className='mb-12'>
        <h2 className='text-2xl font-semibold text-white mb-4'>My Mission</h2>
        <p className='text-gray-300 leading-relaxed'>
          As a results-driven Software Engineer, I bring a strong foundation in
          software development, with a focus on JavaScript, TypeScript, ReactJS,
          and NextJS.
        </p>
      </div>

      <h2 className='text-2xl font-semibold text-white mb-4'>🚀 Tech I Use</h2>
      <ul className='flex flex-wrap gap-4 text-sm text-gray-300'>
        {[
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "SASS",
          "Node.js",
        ].map((tech) => (
          <li key={tech} className='bg-gray-700 px-3 py-1 rounded-md'>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
