
export const userConfig = {
    // Personal Information
    name: 'Haruka Kanemari (rumi)',
    role: 'Network Engineer - University Student (1st year)',
    location: 'Hanoi, Viet Nam',
    email: 'rumi@msft.harumi.io.vn',
    website: 'harumi.io.vn',
    roleFocus: 'Design and maintaining network system, also can work on discord bot and managing computer system',
    age: 23,    

    // Social Links
    social: {
        github: 'https://github.com/RumiDaNeko',
        facebook: 'https://www.facebook.com/rumianthan/', // Add your LinkedIn URL
    },

    // Contact Information
    contact: {
        email: 'rumi@msft.harumi.io.vn',
        phone: '+84898651899', // Add your phone number
        discord: 'nekoofthecloud', // Add your Calendly URL
    },

    spotify: {
        playlistId: 'adsdasdwqwd', // Your Spotify playlist ID
        playlistName: 'None',
    },
    
     resume: {

     },

    // Education Background
    education: [
        {
            degree: "Bachelor of Computer Science",
            major: "Network Enginnering",
            institution: "Electric Power University",
            location: "Hanoi, Viet Nam",
            year: "2025-20xx (ongoing)",
            description: "1st year Student of the university",
            images: [
                {
                    url: "https://media.licdn.com/dms/image/v2/C511BAQFyZ2KYGtwniQ/company-background_1536_768/company-background_1536_768/0/1584301319628?e=2147483647&v=beta&t=a1GQ1GbwR_w41jAMnaQDu1i03F3E7SxNwMTpz9AqlQM",
                    alt: "Electric Power University",
                    description: "Electric Power University Campus"
                }
            ]
        },
          {
            degree: "High School",
            major: "None",
            institution: "Hoang Long High School",
            location: "Hanoi, Viet Nam",
            year: "2022-2025",
            description: "Survived highschool",
            images: [
                {
                    url: "https://cdn3.olm.vn/upload/img_post/img_post_2024-04-29_662f4d7b897a5.jpg?v=2",
                    alt: "Hoang Long High School",
                    description: "Hoang Long High School Campus"
                }
            ]
        }
    ],

    skills: [
        "C#",
        "ASP.NET Core",
        "Entity Framework",
        "SQL Server",
        "C++",
        "Python",
        "Java",
        "Spring Boot",
        "Hibernate",
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "MongoDB",
        "SQL Server",
        "MySQL",
        "PostgreSQL",
        "Docker",
    ],

    // Professional Experience
    experience: [
        {
            title: "CEO",
            company: "Cloudcode",
            location: "Global",
            period: "July 2023 - October 2025",
            description: "Running an hosting that enable everyone to run bot for free or with a small price (if they decide to)",
            technologies: ["Docker", "Php", "SQL Server", "Go", "Brain 🧠"],
            images: [
                {
                    url: "https://panel.cloudcodehosting.shop/storage/PfPNySWvbS4gIhibtGrYWTgdPOZYcY7xE2ZPGVEq.png",
                    alt: "Cloudcode",
                    // description: "Luftborn Logo"
                }
            ]
        },
        {
            title: "Shop Owner",
            company: "Rumi's Store",
            location: "Vietnam",
            period: "2024",
            description: "Opened a store for discord goods",
            technologies: ["Brain 🧠"]
        },
    ],

    courses: [
       
    ],

    extraCurricularRoles: [

    ],

     extraCurricularActivities: [

    ],

    competitions: [

    ],

    // SEO Configuration
    seo: {
        title: 'Haruka Kanemari - An University Student',
        description: 'An Univertisty student familarizing with tech',
        keywords: ['University Student', 'student', 'Node.js', 'tech', 'Vietnam'],
    },

    // Theme Configuration
    theme: {
        primaryColor: '#1ED760', // Spotify green
        secondaryColor: '#1d1d1f',
        accentColor: '#007AFF',
    },

    // Projects Configuration
    projects: [
        
        // Add more projects here
    ]
} as const; 
