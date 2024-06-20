import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mbxmsimfzupucyqgawzv.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ieG1zaW1menVwdWN5cWdhd3p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NzUyNjEsImV4cCI6MjAyMTE1MTI2MX0.8NgnQyJBszbnRuCA3pWCiKAVHBJT8TaU4TC9uxqoEag";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;