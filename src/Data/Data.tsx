// In data.tsx
const companies = [
  { name: "Google", url: "https://www.google.com" },
  { name: "Amazon", url: "https://www.amazon.com" },
  { name: "Figma", url: "https://www.figma.com" },
  { name: "Netflix", url: "https://www.netflix.com" },
  { name: "Meta", url: "https://www.meta.com" },
  { name: "Microsoft", url: "https://www.microsoft.com" },
  { name: "Pinterest", url: "https://www.pinterest.com" },
  { name: "Slack", url: "https://www.slack.com" },
  { name: "Spotify", url: "https://www.spotify.com" },
  { name: "Oracle", url: "https://www.oracle.com" },
  { name: "Walmart", url: "https://www.walmart.com" },
];


const jobCategory = [
    {
        "name": "Digital Marketing",
        "desc": "Promote brands online with marketing strategies",
        "jobs": "1k"
    },
    {
        "name": "Web Developer",
        "desc": "Build and maintain websites for clients",
        "jobs": "2k"
    },
    {
        "name": "Arts & Design",
        "desc": "Create visual content for branding and media",
        "jobs": "500"
    },
    {
        "name": "UI-UX Designer",
        "desc": "Design user interfaces and enhance user experience",
        "jobs": "800"
    },
    {
        "name": "Content Writing",
        "desc": "Write and edit content for various platforms",
        "jobs": "1.5k"
    },
    {
        "name": "Data Entry",
        "desc": "Input data into systems accurately and efficiently",
        "jobs": "1k"
    },
    {
        "name": "Customer Support",
        "desc": "Assist customers with inquiries and issues",
        "jobs": "1.2k"
    },
    {
        "name": "Sales",
        "desc": "Sell products and services to customers",
        "jobs": "900"
    },
    {
        "name": "Finance",
        "desc": "Manage financial records and transactions",
        "jobs": "700"
    },
    {
        "name": "Human Resource",
        "desc": "Recruit, manage, and support company employees",
        "jobs": "600"
    }
]

const work = [
    {
        "name": "Build Your Resume",
        "desc": "Create a standout resume with your skills."
    },
    {
        "name": "Apply for Job",
        "desc": "Find and apply for jobs that match your skills."
    },
    {
        "name": "Get Hired",
        "desc": "Connect with employers and start your new job."
    }
]


const testimonials = [
    {
        "name": "Shivam Patel",
        "testimonial": "This job portal made job search easy and quick. Recommended to all job seekers!",
        "rating": 5
    },
    {
        "name": "Abhishek Kullu",
        "testimonial": "Found my dream job within a week! The application process was smooth.",
        "rating": 5
    },
    {
        "name": "Swapnil Pandey",
        "testimonial": "I secured a job offer within days of applying. Exceptional user experience and support.",
        "rating": 4
    },
    {
        "name": "Pavan Barnana",
        "testimonial": "Highly efficient job portal with excellent resources. Helped me land a great position.",
        "rating": 4
    }
]
const footerLinks = [
    { title: "Product", links: ["Find Job", "Find Company", "Find Employee"] },
    { title: "Company", links: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"] },
    { title: "Support", links: ["Help & Support", "Feedback", "FAQs"] }

]
export { companies, jobCategory, work, testimonials, footerLinks };