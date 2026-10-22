export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <header className="hero">
        <h1>Kensho Munakata</h1>
        <p className="tagline">Recent UH Manoa graduate, BA in Econ</p>
      </header>

      <main>
        <section aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>
            I recently graduated from the University of Hawaiʻi at Mānoa with a
            bachelor&apos;s degree in economics. I&apos;m interested in how
            economic ideas show up in everyday decisions, and I&apos;m figuring
            out where to put what I&apos;ve learned to work next.
          </p>
        </section>

        <section aria-labelledby="semester-heading">
          <h2 id="semester-heading">This semester</h2>
          <ul>
            <li>
              Sharpening my data analysis skills by working through public
              economic datasets in Excel and Python.
            </li>
            <li>
              Reading up on behavioral economics to build on what I studied in
              my coursework.
            </li>
            <li>
              Exploring entry-level roles in economic research, finance, and
              policy analysis.
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {year} Kensho Munakata
        </p>
      </footer>
    </div>
  );
}
