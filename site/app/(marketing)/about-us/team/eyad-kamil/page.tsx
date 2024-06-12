import TeamMemberPage from "@/components/team-member"
import { team } from "@/config/team"
import { Metadata } from "next"

const TeamMember = team.filter((member) => member.name === "Eyad Kamil")[0]

export function generateMetadata(): Metadata {
  return TeamMember.metadata
}

export default function EmployeePage() {
  return <TeamMemberPage {...TeamMember} />
}
