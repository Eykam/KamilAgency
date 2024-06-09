import TeamMemberPage from "@/components/team-member"
import { team } from "@/config/team"

export default function EmployeePage() {
  return team
    .filter((member) => member.name === "Eyad Kamil")
    .map((member) => <TeamMemberPage {...member} />)
}
