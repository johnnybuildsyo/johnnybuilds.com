import { Section } from "./ui/section"
import { FollowerCountWidget } from "./follower-count-widget"

export function StatsSection() {
  return (
    <Section title="Stats">
      <div className="space-y-8">
        <FollowerCountWidget />
      </div>
    </Section>
  )
}
