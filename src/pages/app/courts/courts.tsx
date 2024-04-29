import { Helmet } from 'react-helmet-async'

export function Courts() {
  return (
    <>
      <Helmet title="Quadras" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Quadras</h1>

        <div className="space-y-2.5">
          <span className="text-sm font-semibold">
            Seja bem-vindo ao sistema de gerenciamento de Quadras.
          </span>
        </div>
        <div>teste</div>
      </div>
    </>
  )
}
