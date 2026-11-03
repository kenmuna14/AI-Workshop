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
          <h2 id="semester-heading">I like</h2>
          <ul>
            <li>Tits</li>
            <li>Ass</li>
            <li>Even bigger titties</li>
          </ul>
        </section>

        <section aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>hehe</p>
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
