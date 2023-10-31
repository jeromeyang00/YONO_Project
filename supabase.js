const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://fuspwxqgdoamnfwlrgvf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1c3B3eHFnZG9hbW5md2xyZ3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3Mzg4MzgsImV4cCI6MjAxNDMxNDgzOH0.orcPkdnxMvVn2hbezta0Chwr3UBtuVrJD4jkeG6crZI";
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
