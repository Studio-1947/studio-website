export interface TeamMember {
  id: string;
  name: string;
  role: string;
  slug: string;
  image: string;
  bio: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const generateMockEmployee = (id: number): TeamMember => ({
  id: `emp-${id}`,
  name: `Team Member ${id}`,
  role: id % 3 === 0 ? "Senior Designer" : id % 3 === 1 ? "Developer" : "Strategist",
  slug: `team-member-${id}`,
  image: `https://i.pravatar.cc/400?u=emp-${id}`, // Using pravatar for placeholders
  bio: "A passionate individual dedicated to bridging the gap between local wisdom and global practice. Bringing unique perspectives to complex challenges.",
});

export const teamData: TeamMember[] = Array.from({ length: 18 }, (_, i) => generateMockEmployee(i + 1));

// Override specific members if needed for realism
teamData[0] = {
  ...teamData[0],
  name: "Sarah Chen",
  role: "Creative Director",
  slug: "sarah-chen",
  bio: "Sarah leads the creative vision at Studio 1947, drawing from over 15 years of experience in digital storytelling and brand architecture."
};

teamData[1] = {
  ...teamData[1],
  name: "Marcus Rodriguez",
  role: "Lead Developer",
  slug: "marcus-rodriguez",
  bio: "Marcus is the technical backbone, ensuring that every pixel-perfect design is matched by robust, scalable code."
};
