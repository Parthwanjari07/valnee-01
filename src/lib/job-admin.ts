// Admin utilities for job management
// This file contains utility functions for managing jobs from an admin perspective

import { createJob, updateJob, deleteJob, getAllJobs, type Job } from './supabase';

export interface CreateJobInput {
  title: string;
  slug: string;
  location: string;
  type: Job['type'];
  start_date?: string;
  duration?: string;
  salary_range?: string;
  apply_by?: string;
  posted_days_ago?: number;
  openings: number;
  description: string;
  short_description?: string;
  responsibilities?: string[];
  skills_required?: string[];
  requirements?: string[];
  who_can_apply?: string[];
  perks?: string[];
  additional_info?: string;
  tags?: string[];
}

/**
 * Create a new job posting
 */
export async function createJobPosting(jobData: CreateJobInput): Promise<Job> {
  const jobToCreate: Omit<Job, 'id' | 'created_at' | 'updated_at'> = {
    ...jobData,
    is_active: true,
  };
  
  return await createJob(jobToCreate);
}

/**
 * Update an existing job posting
 */
export async function updateJobPosting(
  id: string, 
  updates: Partial<CreateJobInput>
): Promise<Job> {
  return await updateJob(id, updates);
}

/**
 * Deactivate a job posting (soft delete)
 */
export async function deactivateJob(id: string): Promise<void> {
  return await deleteJob(id);
}

/**
 * Reactivate a job posting
 */
export async function reactivateJob(id: string): Promise<Job> {
  return await updateJob(id, { is_active: true });
}

/**
 * Get all jobs (including inactive ones) - admin only
 */
export async function getAllJobsAdmin(): Promise<Job[]> {
  // This would need a separate function in supabase.ts that doesn't filter by is_active
  // For now, we'll use the existing function
  return await getAllJobs();
}

/**
 * Generate a slug from a job title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Validate job data before creation/update
 */
export function validateJobData(jobData: Partial<CreateJobInput>): string[] {
  const errors: string[] = [];
  
  if (!jobData.title?.trim()) {
    errors.push('Title is required');
  }
  
  if (!jobData.slug?.trim()) {
    errors.push('Slug is required');
  }
  
  if (!jobData.location?.trim()) {
    errors.push('Location is required');
  }
  
  if (!jobData.type) {
    errors.push('Job type is required');
  }
  
  if (!jobData.description?.trim()) {
    errors.push('Description is required');
  }
  
  if (!jobData.openings || jobData.openings < 1) {
    errors.push('Number of openings must be at least 1');
  }
  
  // Validate slug format
  if (jobData.slug && !/^[a-z0-9-]+$/.test(jobData.slug)) {
    errors.push('Slug must contain only lowercase letters, numbers, and hyphens');
  }
  
  return errors;
}

/**
 * Example usage functions for common job management tasks
 */
export const JobAdminExamples = {
  async createSampleJob() {
    const sampleJob: CreateJobInput = {
      title: "Full Stack Developer",
      slug: "full-stack-developer",
      location: "Remote",
      type: "Full-time",
      salary_range: "₹70,000 - ₹1,00,000",
      openings: 2,
      description: "Join our team to build amazing full-stack applications using modern technologies.",
      short_description: "Build amazing full-stack applications with modern tech stack.",
      skills_required: ["JavaScript", "React", "Node.js", "PostgreSQL"],
      requirements: ["3+ years of full-stack development experience", "Strong problem-solving skills"],
      who_can_apply: ["Experienced developers", "Remote workers"],
      perks: ["Competitive salary", "Remote work", "Learning budget"],
      tags: ["JavaScript", "React", "Node.js", "Remote"]
    };
    
    return await createJobPosting(sampleJob);
  }
};
