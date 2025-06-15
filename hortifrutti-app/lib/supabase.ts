import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lmrptxarttkcamxxzvnc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtcnB0eGFydHRrY2FteHh6dm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4OTg5NzgsImV4cCI6MjA2NTQ3NDk3OH0.7TB3MzhQOx4e-__uWY0-lmIB1LbIaGHb4r5GgUFzGXI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
