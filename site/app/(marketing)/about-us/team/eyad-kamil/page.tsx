import TeamMemberPage from "@/components/team-member"
import { team } from "@/config/team"
import { Metadata } from "next"

export function generateMetadata(): Metadata {
  return {}
}

export default function EmployeePage() {
  return team
    .filter((member) => member.name === "Eyad Kamil")
    .map((member) => <TeamMemberPage {...member} />)
}
