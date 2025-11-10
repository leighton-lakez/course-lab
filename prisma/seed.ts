import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seed...");

  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@courselab.com" },
    update: {},
    create: {
      email: "admin@courselab.com",
      name: "Admin User",
      password: adminPassword,
      role: "admin",
    },
  });

  console.log("Created admin user:", admin.email);

  // Create student user
  const studentPassword = await bcrypt.hash("student123", 10);
  const student = await prisma.user.upsert({
    where: { email: "student@example.com" },
    update: {},
    create: {
      email: "student@example.com",
      name: "John Student",
      password: studentPassword,
      role: "student",
    },
  });

  console.log("Created student user:", student.email);

  // Create courses
  const courses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn the basics of HTML, CSS, and JavaScript",
      longDescription:
        "This comprehensive course covers all the fundamentals you need to start building modern websites. You'll learn HTML5, CSS3, JavaScript ES6+, responsive design, and best practices for web development.",
      price: 49.99,
      duration: "8 weeks",
      level: "beginner",
      featured: true,
      published: true,
    },
    {
      title: "Advanced React & Next.js",
      description: "Master modern React development with Next.js",
      longDescription:
        "Take your React skills to the next level with this advanced course covering React hooks, context API, Next.js, server-side rendering, and building production-ready applications.",
      price: 89.99,
      duration: "10 weeks",
      level: "advanced",
      featured: true,
      published: true,
    },
    {
      title: "Python for Data Science",
      description: "Learn Python programming and data analysis",
      longDescription:
        "Dive into the world of data science with Python. Learn pandas, numpy, matplotlib, and scikit-learn to analyze data and build machine learning models.",
      price: 79.99,
      duration: "12 weeks",
      level: "intermediate",
      featured: true,
      published: true,
    },
    {
      title: "UI/UX Design Masterclass",
      description: "Create beautiful and user-friendly interfaces",
      longDescription:
        "Master the principles of user interface and user experience design. Learn Figma, design systems, prototyping, and how to conduct user research.",
      price: 69.99,
      duration: "6 weeks",
      level: "beginner",
      featured: false,
      published: true,
    },
    {
      title: "Full-Stack JavaScript Development",
      description: "Build complete web applications from scratch",
      longDescription:
        "Learn to build full-stack applications using Node.js, Express, MongoDB, and React. This course covers everything from backend APIs to frontend interfaces.",
      price: 99.99,
      duration: "14 weeks",
      level: "intermediate",
      featured: false,
      published: true,
    },
    {
      title: "Mobile App Development with React Native",
      description: "Create iOS and Android apps with JavaScript",
      longDescription:
        "Build cross-platform mobile applications using React Native. Learn navigation, state management, API integration, and publishing to app stores.",
      price: 89.99,
      duration: "10 weeks",
      level: "intermediate",
      featured: false,
      published: true,
    },
  ];

  for (const courseData of courses) {
    const course = await prisma.course.upsert({
      where: { title: courseData.title },
      update: {},
      create: courseData,
    });
    console.log("Created course:", course.title);
  }

  // Create testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      content:
        "CourseLab helped me transition from frontend to full-stack development. The instructors are knowledgeable and the content is top-notch!",
      rating: 5,
      featured: true,
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      content:
        "The UI/UX course completely transformed how I approach design. I've already applied what I learned to client projects with great results.",
      rating: 5,
      featured: true,
    },
    {
      name: "Emily Rodriguez",
      role: "Data Analyst",
      content:
        "The Python for Data Science course was exactly what I needed. Clear explanations, practical examples, and excellent support from the community.",
      rating: 5,
      featured: true,
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      content:
        "I built my entire MVP using skills from the Full-Stack course. The project-based learning approach was incredibly valuable.",
      rating: 5,
      featured: true,
    },
    {
      name: "Jessica Williams",
      role: "Mobile Developer",
      content:
        "The React Native course gave me the confidence to build and publish my first mobile app. Great curriculum and supportive instructors!",
      rating: 5,
      featured: true,
    },
    {
      name: "Alex Thompson",
      role: "Junior Developer",
      content:
        "As a complete beginner, the Web Development Fundamentals course was perfect. I now have a job as a junior developer thanks to CourseLab!",
      rating: 5,
      featured: true,
    },
  ];

  for (const testimonialData of testimonials) {
    const testimonial = await prisma.testimonial.create({
      data: testimonialData,
    });
    console.log("Created testimonial from:", testimonial.name);
  }

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
