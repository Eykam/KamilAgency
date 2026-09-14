import { Metadata } from "next"

import TeamMemberPage from "@/components/team-member"
import { team } from "@/config/team"

const teamMember = team.find((member) => member.name === "Jesa Esquillo")!

export function generateMetadata(): Metadata {
  return teamMember.metadata
}

export default function EmployeePage() {
  return <TeamMemberPage {...teamMember} />
}
