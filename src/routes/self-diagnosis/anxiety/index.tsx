import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/self-diagnosis/anxiety/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/self-diagnosis/anxiety/"!</div>
}
