// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Ces variables doivent être configurées dans Vercel (Environment Variables)
const supabaseUrl = process.https://nueyeojcitjrgfkraklq.supabase.co!;
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51ZXllb2pjaXRqcmdma3Jha2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzNzIyMjQsImV4cCI6MjA4MTk0ODIyNH0.zD8NsLyJovG12knoVKNq8Rf_NzIT3w-IUGEK5EwO66s!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
