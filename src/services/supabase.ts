import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gkmpdxpjngmaljxohhqp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrbXBkeHBqbmdtYWxqeG9oaHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NTQxMjgsImV4cCI6MjAwMTAzMDEyOH0.bsYyVmGYJHBT18w81oG9VHsAZI5BAwQhI51FIPe5mCI"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;