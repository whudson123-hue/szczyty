import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vaxwxffxnpagnubcufyy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZheHd4ZmZ4bnBhZ251YmN1Znl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1MzEzMDMsImV4cCI6MjEwMjEwNzMwM30.BY_ltOOitfwLdOcE-aFedO1xSYA6mfDGTrAmt6iXCSQ'

export const supabase = createClient( supabaseUrl, supabaseKey )