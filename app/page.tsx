export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <header className="hero">
        <h1>Kensho Munakata</h1>
        <p className="tagline">Recent UH Manoa graduate, BA in Econ</p>
      </header>

      <main>
        <section aria-labelledby="semester-heading">
          <h2 id="semester-heading">This semester</h2>
          <ul>
            <li>Hi</li>
            <li>Bitch</li>
            <li>Fuck you</li>
          </ul>
        </section>

        <section aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>
            I recently graduated from the University of Hawaiʻi at Mānoa with a
            bachelor&apos;s degree in economics. I&apos;m interested in how
            economic ideas show up in everyday decisions, and I&apos;m figuring
            out where to put what I&apos;ve learned to work next.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {year} Kensho Munakata
        </p>
        <p>Built with Claude Code</p>
      </footer>
    </div>
  );
}
