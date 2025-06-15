import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://izldzglpbosscewzkinu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6bGR6Z2xwYm9zc2Nld3praW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTg4MzgsImV4cCI6MjA2NTU5NDgzOH0.Fx4aVgmJItS2IU7NrEfamHo8h74DW5-y8pr0F7H5APU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
