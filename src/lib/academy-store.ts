/**
 * Academy enrollments storage and management
 * Persists enrollment data to data/academy-enrollments.json
 */

import fs from "fs";
import path from "path";

export type AcademyEnrollment = {
  id: string;
  name: string;
  email: string;
  company: string;
  courseId: string;
  courseName: string;
  enrolledAt: string;
  
  // Email engagement tracking
  emailStats: {
    welcomeEmailSent: boolean;
    welcomeEmailSentAt?: string;
    courseEmailsSent: number;
    lastEmailSentAt?: string;
    unsubscribed: boolean;
    bounced: boolean;
  };
};

type AcademyData = {
  enrollments: AcademyEnrollment[];
  lastUpdated: string;
};

const ACADEMY_FILE = path.join(process.cwd(), "data", "academy-enrollments.json");

function generateEnrollmentId(): string {
  return `academy_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

function readAcademyFile(): AcademyData {
  try {
    const data = fs.readFileSync(ACADEMY_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return {
      enrollments: [],
      lastUpdated: new Date().toISOString()
    };
  }
}

function writeAcademyFile(data: AcademyData): void {
  data.lastUpdated = new Date().toISOString();
  
  const dataDir = path.dirname(ACADEMY_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  fs.writeFileSync(ACADEMY_FILE, JSON.stringify(data, null, 2), "utf-8");
}

/**
 * Add a new enrollment to the store
 */
export function addEnrollment(enrollmentData: {
  name: string;
  email: string;
  company: string;
  courseId: string;
  courseName: string;
}): AcademyEnrollment {
  const academyData = readAcademyFile();
  
  // Check if already enrolled in this course
  const existingEnrollment = academyData.enrollments.find(
    e => e.email === enrollmentData.email && e.courseId === enrollmentData.courseId
  );
  
  if (existingEnrollment) {
    // Update enrollment timestamp
    existingEnrollment.enrolledAt = new Date().toISOString();
    writeAcademyFile(academyData);
    return existingEnrollment;
  }
  
  // Create new enrollment
  const newEnrollment: AcademyEnrollment = {
    id: generateEnrollmentId(),
    name: enrollmentData.name,
    email: enrollmentData.email,
    company: enrollmentData.company,
    courseId: enrollmentData.courseId,
    courseName: enrollmentData.courseName,
    enrolledAt: new Date().toISOString(),
    emailStats: {
      welcomeEmailSent: false,
      courseEmailsSent: 0,
      unsubscribed: false,
      bounced: false
    }
  };
  
  academyData.enrollments.push(newEnrollment);
  writeAcademyFile(academyData);
  
  return newEnrollment;
}

/**
 * Update enrollment email stats
 */
export function updateEnrollmentEmailStats(
  enrollmentId: string,
  update: Partial<AcademyEnrollment["emailStats"]>
): AcademyEnrollment | null {
  const academyData = readAcademyFile();
  
  const enrollment = academyData.enrollments.find(e => e.id === enrollmentId);
  if (!enrollment) {
    return null;
  }
  
  enrollment.emailStats = {
    ...enrollment.emailStats,
    ...update,
    lastEmailSentAt: new Date().toISOString()
  };
  
  writeAcademyFile(academyData);
  return enrollment;
}

/**
 * Get all enrollments for a specific course
 */
export function getEnrollmentsByCourse(courseId: string): AcademyEnrollment[] {
  const academyData = readAcademyFile();
  return academyData.enrollments.filter(e => e.courseId === courseId);
}

/**
 * Get all enrollments
 */
export function getAllEnrollments(): AcademyEnrollment[] {
  const academyData = readAcademyFile();
  return academyData.enrollments;
}

/**
 * Get enrollment by ID
 */
export function getEnrollmentById(enrollmentId: string): AcademyEnrollment | null {
  const academyData = readAcademyFile();
  return academyData.enrollments.find(e => e.id === enrollmentId) || null;
}

/**
 * Get enrollment by email and course
 */
export function getEnrollmentByEmailAndCourse(
  email: string,
  courseId: string
): AcademyEnrollment | null {
  const academyData = readAcademyFile();
  return academyData.enrollments.find(
    e => e.email === email && e.courseId === courseId
  ) || null;
}
