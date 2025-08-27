import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Job = {
  id: string
  title: string
  slug: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  start_date?: string
  duration?: string
  salary_range?: string
  apply_by?: string
  posted_days_ago?: number
  openings: number
  description: string
  short_description?: string
  responsibilities?: string[]
  skills_required?: string[]
  requirements?: string[]
  who_can_apply?: string[]
  perks?: string[]
  additional_info?: string
  tags?: string[]
  is_active: boolean
  created_at: string
  updated_at: string
}

export type JobApplication = {
  id?: string
  job_slug: string
  job_title: string
  applicant_name: string
  applicant_email: string
  resume_path?: string
  cover_letter?: string
  phone_number?: string
  linkedin_profile?: string
  portfolio_url?: string
  years_of_experience?: number
  current_location?: string
  expected_salary?: string
  notice_period?: string
  skills?: string[]
  status?: string
  created_at?: string
  updated_at?: string
}

export async function submitJobApplication(application: Omit<JobApplication, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('job_applications')
    .insert([application])
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data[0]
}

export async function getJobApplications(jobSlug?: string) {
  let query = supabase
    .from('job_applications')
    .select('*')
    .order('created_at', { ascending: false })

  if (jobSlug) {
    query = query.eq('job_slug', jobSlug)
  }

  const { data, error } = await query

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function getJobApplicationsWithResumeUrls(jobSlug?: string) {
  const applications = await getJobApplications(jobSlug)
  
  return applications.map(app => ({
    ...app,
    resume_url: app.resume_path ? getResumeUrl(app.resume_path) : undefined
  }))
}

export async function updateApplicationStatus(id: string, status: string) {
  const { data, error } = await supabase
    .from('job_applications')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data[0]
}

export async function uploadResumeFile(file: File, applicantName: string): Promise<string> {
  // Generate a unique filename
  const fileExtension = file.name.split('.').pop()
  const timestamp = new Date().getTime()
  const sanitizedName = applicantName.toLowerCase().replace(/[^a-z0-9]/g, '-')
  const fileName = `${sanitizedName}-${timestamp}.${fileExtension}`
  
  const { data, error } = await supabase.storage
    .from('resumes')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    })

  if (error) {
    throw new Error(`Failed to upload resume: ${error.message}`)
  }

  return data.path
}

export function getResumeUrl(filePath: string): string {
  const { data } = supabase.storage
    .from('resumes')
    .getPublicUrl(filePath)
  
  return data.publicUrl
}

export async function deleteResumeFile(filePath: string): Promise<void> {
  const { error } = await supabase.storage
    .from('resumes')
    .remove([filePath])
  
  if (error) {
    throw new Error(`Failed to delete resume: ${error.message}`)
  }
}

// Job Management Functions
export async function getAllJobs(): Promise<Job[]> {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Failed to fetch jobs: ${error.message}`)
  }

  return data || []
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      // No rows found
      return null
    }
    throw new Error(`Failed to fetch job: ${error.message}`)
  }

  return data
}

export async function getJobsByType(type: Job['type']): Promise<Job[]> {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('type', type)
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Failed to fetch jobs by type: ${error.message}`)
  }

  return data || []
}

export async function createJob(job: Omit<Job, 'id' | 'created_at' | 'updated_at'>): Promise<Job> {
  const { data, error } = await supabase
    .from('jobs')
    .insert([job])
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to create job: ${error.message}`)
  }

  return data
}

export async function updateJob(id: string, updates: Partial<Omit<Job, 'id' | 'created_at' | 'updated_at'>>): Promise<Job> {
  const { data, error } = await supabase
    .from('jobs')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to update job: ${error.message}`)
  }

  return data
}

export async function deleteJob(id: string): Promise<void> {
  const { error } = await supabase
    .from('jobs')
    .update({ is_active: false })
    .eq('id', id)

  if (error) {
    throw new Error(`Failed to delete job: ${error.message}`)
  }
}
