export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="mx-auto max-w-4xl p-4">
        <section className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold">Hello! I'm [Your Name]</h1>
          <p className="text-lg">
            Every great design begins with an even better story.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">What I Do</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded bg-gray-800 p-4">
              <h3 className="text-xl font-semibold">Design</h3>
              <p>Create digital products with unique ideas.</p>
              <p>[Number of Projects] Projects</p>
            </div>
            <div className="rounded bg-gray-800 p-4">
              <h3 className="text-xl font-semibold">Front-End</h3>
              <p>Develop front-end with cutting-edge tech.</p>
              <p>[Number of Projects] Projects</p>
            </div>
            <div className="rounded bg-gray-800 p-4">
              <h3 className="text-xl font-semibold">SEO</h3>
              <p>Boost your business with SEO optimizations.</p>
              <p>[Number of Projects] Projects</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Technologies I Use</h2>
          <ul className="list-disc pl-6">
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            What I Do in My Free Time
          </h2>
          <p>In my free time, I enjoy:</p>
          <ul className="list-disc pl-6">
            <li>
              Reading: I love diving into books about technology and design.
            </li>
            <li>
              Traveling: Exploring new places gives me fresh perspectives.
            </li>
            <li>
              Coding Projects: Always tinkering with new ideas and side
              projects.
            </li>
            <li>Photography: Capturing moments and scenes that inspire me.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Contact Me</h2>
          <p className="text-lg">
            Feel free to reach out if you have any questions or if you'd like to
            collaborate on a project.
          </p>
        </section>
      </main>
    </div>
  );
}
