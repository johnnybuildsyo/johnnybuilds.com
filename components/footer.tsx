const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:flex-row justify-center gap-2 sm:gap-8 text-center text-base py-8 border-t bg-background relateive z-10">
      <div className="hidden sm:block">footer ‘cuz you need a footer</div>
      <div>made with 🥃</div>
      <div>
        source code for this deal is{" "}
        <a className="border-b border-dashed border-foreground/60 hover:border-foreground/70" href="https://github.com/johnnybuildsyo/johnnybuilds.com">
          on github
        </a>
      </div>
    </footer>
  )
}

export default Footer
