import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mgtwlnyrnixlfwketokc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ndHdsbnlybml4bGZ3a2V0b2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5OTQxNDksImV4cCI6MTk5MjU3MDE0OX0.fpdielhrZ6XEJeqRDX_PT3AO6t5Pem6iL0SaLChGCJ8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
