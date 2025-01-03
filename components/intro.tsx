const Intro = () => {
  return (
    <p className="max-w-3xl mx-auto px-8 text-center mt-4 lg:text-lg" style={{ textWrap: "balance" }}>
      After years in web dev, I’m starting over, for fun, building in public sharing every step on the way. Follow me here and on{" "}
      <a className="border-b border-dashed border-foreground/40 hover:border-foreground/50 px-0.5" href="https://x.com/johnnybuilds_">
        X
      </a>
      ,{" "}
      <a className="border-b border-dashed border-foreground/40 hover:border-foreground/50" href="https://bsky.app/profile/johnnybuilds.bsky.social">
        Bluesky
      </a>{" "}
      or{" "}
      <a className="border-b border-dashed border-foreground/40 hover:border-foreground/50" href="https://x.com/johnnybuildz">
        Medium
      </a>
      .
    </p>
  )
}

export default Intro
