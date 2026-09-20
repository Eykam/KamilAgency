export type BusinessIndustry = {
  slug: string
  shortName: string
  title: string
  seoTitle?: string
  description: string
  introduction: string
  highlights: readonly { title: string; description: string }[]
  idealFor: readonly string[]
}

export const businessIndustries: readonly BusinessIndustry[] = [
  {
    slug: "contractors",
    shortName: "Contractors",
    title: "Contractor Insurance in Washington, DC",
    description:
      "Explore general liability, tools and equipment, commercial auto, workers’ compensation, and other coverage for contractors in Washington, DC.",
    introduction:
      "Every job site creates a different mix of property, liability, vehicle, and employee risks. Kamil Agency helps contractors organize those exposures and compare available insurance options with clear, local guidance.",
    highlights: [
      {
        title: "Job-site liability",
        description:
          "Review protection for third-party injuries and property damage connected with your work.",
      },
      {
        title: "Tools and vehicles",
        description:
          "Consider coverage for mobile equipment, tools, trailers, and vehicles used in the business.",
      },
      {
        title: "Certificates and contracts",
        description:
          "Identify common certificate, additional-insured, and contract requirements before work begins.",
      },
      {
        title: "Growing crews",
        description:
          "Coordinate workers’ compensation and other coverage as employees and subcontractor relationships change.",
      },
    ],
    idealFor: [
      "General contractors",
      "Electricians and plumbers",
      "HVAC and remodeling firms",
      "Landscapers and specialty trades",
    ],
  },
  {
    slug: "restaurants",
    shortName: "Restaurants",
    title: "Restaurant Insurance in Washington, DC",
    description:
      "Compare insurance options for restaurants, cafés, caterers, and food-service businesses in Washington, DC.",
    introduction:
      "Food-service businesses combine customer traffic, employees, equipment, inventory, and sometimes delivery or alcohol exposures. We help owners review the coverage pieces that may fit together.",
    highlights: [
      {
        title: "Property and equipment",
        description:
          "Protect eligible contents, kitchen equipment, improvements, and business property.",
      },
      {
        title: "Liability protection",
        description:
          "Review general, product, liquor, and employment-related liability needs where applicable.",
      },
      {
        title: "Income interruptions",
        description:
          "Discuss business-income and extra-expense options after a covered loss.",
      },
      {
        title: "Employees and delivery",
        description:
          "Consider workers’ compensation and owned or non-owned vehicle exposures.",
      },
    ],
    idealFor: [
      "Restaurants and cafés",
      "Caterers and food trucks",
      "Bakeries and specialty food shops",
      "Bars and hospitality businesses",
    ],
  },
  {
    slug: "professional-services",
    shortName: "Professional services",
    title: "Professional Services Insurance in Washington, DC",
    seoTitle: "Professional Services Insurance in DC",
    description:
      "Insurance guidance for consultants, accountants, agencies, and other professional-service firms in Washington, DC.",
    introduction:
      "Professional firms often need protection for both everyday office risks and claims involving their advice or work. Kamil Agency can help assemble a practical coverage strategy around the services you provide.",
    highlights: [
      {
        title: "Professional liability",
        description:
          "Review errors-and-omissions protection for allegations involving advice, services, or missed obligations.",
      },
      {
        title: "Cyber risks",
        description:
          "Consider coverage for data incidents, privacy claims, cybercrime, and restoration expenses.",
      },
      {
        title: "Office operations",
        description:
          "Combine property, general liability, and business-income protection where appropriate.",
      },
      {
        title: "Contract requirements",
        description:
          "Match limits and coverage documents to client and landlord requirements.",
      },
    ],
    idealFor: [
      "Consultants and agencies",
      "Accountants and bookkeepers",
      "Architects and designers",
      "Other office-based professionals",
    ],
  },
  {
    slug: "nonprofits",
    shortName: "Nonprofits",
    title: "Nonprofit Insurance in Washington, DC",
    description:
      "Coverage guidance for associations, charities, community organizations, and other nonprofits serving Washington, DC.",
    introduction:
      "Nonprofits answer to staff, volunteers, participants, donors, and boards. We help organizations review these relationships and identify insurance options that support their mission.",
    highlights: [
      {
        title: "Directors and officers",
        description:
          "Consider protection for management decisions, employment practices, and governance allegations.",
      },
      {
        title: "Volunteers and events",
        description:
          "Review liability needs for volunteers, programs, fundraising events, and community activities.",
      },
      {
        title: "Property and income",
        description:
          "Protect eligible offices, equipment, donated property, and income after a covered interruption.",
      },
      {
        title: "Cyber and privacy",
        description:
          "Address exposures involving donor, member, employee, or participant information.",
      },
    ],
    idealFor: [
      "Charitable organizations",
      "Trade and professional associations",
      "Community groups",
      "Foundations and advocacy organizations",
    ],
  },
  {
    slug: "property-managers",
    shortName: "Property managers",
    title: "Property Management Insurance in Washington, DC",
    seoTitle: "Property Management Insurance in DC",
    description:
      "Insurance options for property managers, leasing operations, and real-estate service firms in Washington, DC.",
    introduction:
      "Property managers balance responsibilities to owners, tenants, vendors, and employees. Kamil Agency helps review the liability, property, vehicle, and professional exposures created by those relationships.",
    highlights: [
      {
        title: "Professional services",
        description:
          "Consider errors-and-omissions protection for leasing, inspections, vendor coordination, and management decisions.",
      },
      {
        title: "Premises and operations",
        description:
          "Review general liability for office operations and work performed at managed properties.",
      },
      {
        title: "Vehicles and employees",
        description:
          "Address driving, workers’ compensation, and employment-related exposures.",
      },
      {
        title: "Crime and cyber",
        description:
          "Consider protection involving funds, social engineering, tenant data, and computer systems.",
      },
    ],
    idealFor: [
      "Residential property managers",
      "Commercial property managers",
      "Leasing and real-estate service firms",
      "Condo and community association managers",
    ],
  },
  {
    slug: "retail-businesses",
    shortName: "Retail businesses",
    title: "Retail Business Insurance in Washington, DC",
    description:
      "Compare insurance options for stores, boutiques, markets, and other retail businesses in Washington, DC.",
    introduction:
      "Retail businesses bring customers, inventory, employees, and payment systems together in one operation. We help owners review common exposures and compare coverage options for their specific storefront or model.",
    highlights: [
      {
        title: "Inventory and property",
        description:
          "Protect eligible stock, fixtures, equipment, signs, and tenant improvements.",
      },
      {
        title: "Customer injuries",
        description:
          "Review general and product liability protection for incidents involving customers or products.",
      },
      {
        title: "Business interruption",
        description:
          "Consider income and extra-expense coverage after a covered property loss.",
      },
      {
        title: "Cyber and crime",
        description:
          "Address point-of-sale, payment, employee-theft, and social-engineering exposures.",
      },
    ],
    idealFor: [
      "Boutiques and specialty shops",
      "Markets and convenience stores",
      "Furniture and home-goods retailers",
      "Online sellers with physical inventory",
    ],
  },
  {
    slug: "delivery-companies",
    shortName: "Delivery companies",
    title: "Delivery Business Insurance in Washington, DC",
    description:
      "Commercial auto, liability, cargo, workers’ compensation, and related options for delivery businesses in Washington, DC.",
    introduction:
      "Delivery operations depend on drivers, vehicles, routes, cargo, and careful scheduling. Kamil Agency helps businesses organize those exposures before approaching available insurance markets.",
    highlights: [
      {
        title: "Commercial vehicles",
        description:
          "Review liability and physical-damage options for eligible owned, leased, or hired vehicles.",
      },
      {
        title: "Cargo and property",
        description:
          "Consider protection for goods in transit, mobile equipment, and business property.",
      },
      {
        title: "Drivers and employees",
        description:
          "Discuss driver qualification, workers’ compensation, and employee-related requirements.",
      },
      {
        title: "Contracts and limits",
        description:
          "Align coverage documents and limits with customer, platform, or vendor agreements.",
      },
    ],
    idealFor: [
      "Local couriers",
      "Last-mile delivery businesses",
      "Food and grocery delivery fleets",
      "Specialty and scheduled delivery services",
    ],
  },
  {
    slug: "technology-firms",
    shortName: "Technology firms",
    title: "Technology Company Insurance in Washington, DC",
    seoTitle: "Technology Company Insurance in DC",
    description:
      "Insurance guidance for software companies, IT consultants, startups, and other technology firms in Washington, DC.",
    introduction:
      "Technology companies face contract, privacy, security, professional, and employment risks that can overlap. We help firms review those exposures and compare available coverage structures.",
    highlights: [
      {
        title: "Technology E&O",
        description:
          "Consider protection for allegations involving software, systems, implementation, or professional services.",
      },
      {
        title: "Cyber liability",
        description:
          "Review first- and third-party protection for privacy, security, interruption, and response expenses.",
      },
      {
        title: "Management liability",
        description:
          "Discuss directors-and-officers and employment-practices coverage as the company grows.",
      },
      {
        title: "Contracts and clients",
        description:
          "Identify insurance requirements in enterprise contracts, leases, and financing arrangements.",
      },
    ],
    idealFor: [
      "Software and SaaS companies",
      "IT consultants and managed-service providers",
      "Technology startups",
      "Digital agencies and data businesses",
    ],
  },
]
