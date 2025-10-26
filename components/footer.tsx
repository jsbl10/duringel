export function Footer() {
  return (
    <footer className="py-8 px-4 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold mb-1">Duringel</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Ingeniería Eléctrica</div>
            </div>

            <div className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} Duringel. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
