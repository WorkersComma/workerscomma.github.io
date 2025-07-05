import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/self-diagnosis/stress/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/self-diagnosis/stress/"!</div>
}
